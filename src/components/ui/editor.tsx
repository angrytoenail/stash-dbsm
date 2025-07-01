import clsx from "clsx";
import React, { forwardRef } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "@/editor.css";
import "prismjs/components/prism-sql";

export const SQLEditor = forwardRef(function SQLEditor(
  {
    className,
    resizable = false,
    ...props
  }: {
    className?: string;
    resizable?: boolean;
  } & Omit<React.ComponentPropsWithRef<typeof Editor>, "highlight">,
  ref: React.Ref<React.ComponentRef<typeof Editor>>,
) {
  return (
    <span data-slot="control">
      <Editor
        {...props}
        highlight={(code) => highlight(code, languages.sql, "sql")}
        ref={ref}
        padding={{ top: 0, bottom: 0, left: 10, right: 10 }}
        className={clsx(className, "font-zed")}
      />
    </span>
  );
});
