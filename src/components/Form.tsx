import clsx from "clsx";
import React, { type PropsWithChildren } from "react";
import { SQLEditor } from "@/components/ui/editor";
import {
  PaperClipIcon,
  ClipboardDocumentIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";

const Toolbar = (item) => {
  const { title, icon, ...rest } = item;
  return (
    <button
      type="button"
      title={title}
      {...rest}
      className="inline-flex size-10 items-center justify-center rounded-md text-stash-300 hover:text-stash-200 hover:bg-stash-600/25"
    >
      <span className="sr-only">{title}</span>
      <item.icon aria-hidden="true" className="size-5" />
    </button>
  );
};

type FormProps = {
  query: SourceFile;
  valueSetter: Function;
  error?: Error;
  className?: string;
};
export const Form = ({
  query,
  valueSetter,
  error,
  className,
  children,
}: PropsWithChildren<FormProps>) => {
  const editRef = React.useRef<React.ComponentRef<typeof SQLEditor>>(null);
  const undoEdit = () => {
    if (!editRef.current?.session) {
      return;
    }
    const { stack, offset } = editRef.current?.session.history;
    const record = stack[offset - 1];
    if (record) {
      valueSetter({ ...query, content: record.value });
      editRef.current.session = {
        history: {
          stack,
          offset: Math.max(offset - 1, 0),
        },
      };
    }
  };

  const redoEdit = () => {
    if (!editRef.current?.session) {
      return;
    }
    const { stack, offset } = editRef.current.session.history;
    const record = stack[offset + 1];
    if (record) {
      valueSetter({ ...query, content: record.value });
      editRef.current.session = {
        history: { stack, offset: Math.min(offset + 1, stack.length - 1) },
      };
    }
  };
  const toolbar = [
    { title: "Undo", icon: ArrowUturnLeftIcon, onClick: undoEdit },
    { title: "Redo", icon: ArrowUturnRightIcon, onClick: redoEdit },
    { title: "Copy to clipboard", icon: ClipboardDocumentIcon },
  ];
  return (
    <form action="#" className={clsx("relative", className)}>
      <div
        className={clsx([
          "rounded-lg bg-stash-800 outline-1 -outline-offset-1 shadow-xl shadow-stash-800/50   focus-within:outline-2 focus-within:-outline-offset-2",
          !error && "outline-stash-400/50 focus-within:outline-stash-400",
          error && "outline-orange-700/50 focus-within:outline-orange-700",
        ])}
      >
        <div className="flex items-start px-3 pt-2">
          <label htmlFor="title" className="sr-only">
            Filename
          </label>
          <input
            id="filename"
            name="filename"
            type="text"
            onChange={(e) =>
              valueSetter({ ...query, fileName: e.target.value })
            }
            value={query?.fileName || undefined}
            placeholder="untitled.sql"
            className="block font-zed flex-1 text-md italic font-normal text-gray-500 placeholder:text-stash-600 focus:outline-none"
          />
          <div className="ml-auto flex items-center justify-end">
            {toolbar.map((item, idx) => (
              <Toolbar {...item} key={idx} />
            ))}
          </div>
        </div>
        <label htmlFor="query" className="sr-only">
          Query
        </label>
        <SQLEditor
          ref={editRef}
          textareaId="query"
          name="query"
          placeholder="SELECT * FROM ..."
          value={query.content}
          onValueChange={(val) => valueSetter({ ...query, content: val })}
          className="block min-h-48 w-full resize-none px-3 text-base text-gray-50  placeholder:text-gray-300 focus:outline-none sm:text-md/6"
        />
        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        <div className="flex items-center justify-between space-x-3 border-t border-stash-400/20 px-2 py-2 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
            >
              <PaperClipIcon
                aria-hidden="true"
                className="mr-2 -ml-1 size-5 group-hover:text-gray-500"
              />
              <span className="text-sm text-gray-500 italic group-hover:text-gray-600">
                Open file
              </span>
            </button>
          </div>
          <div className="shrink-0">{children}</div>
        </div>
      </div>
    </form>
  );
};
