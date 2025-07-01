import clsx from "clsx";
import React, { forwardRef } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-tomorrow.css";

export const SQLEditor = forwardRef(function SQLEditor(
  {
    className,
    resizable = false,
    ...props
  }: {
    className?: string;
    resizable?: boolean;
  } & Omit<React.ComponentPropsWithRef<typeof Editor>, "highlight">,
  ref: React.ForwardedRef<any>,
) {
  return (
    <span
      data-slot="control"
      className={clsx([
        className,
        // Basic layout
        "relative block w-full",
        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "dark:before:hidden",
        // Focus ring
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500",
        // Disabled state
        "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none",
      ])}
    >
      <Editor
        {...props}
        highlight={(code) => highlight(code, languages.sql, "sql")}
        ref={ref}
        padding={10}
        className={clsx([
          "font-zed",
          // Basic layout
          "relative block h-full w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
          // Typography
          "text-lg/7 text-zinc-950 placeholder:text-zinc-500  dark:text-white",
          // Border
          "border border-zinc-950/10 hover:border-zinc-950/20 dark:border-white/10 dark:hover:border-white/20",
          // Background color
          "bg-transparent dark:bg-white/5",
          // Hide default focus styles
          "focus:outline-hidden",
          // Invalid state
          "data-invalid:border-rose-500 data-invalid:hover:border-rose-500 dark:data-invalid:border-rose-600 dark:data-invalid:hover:border-rose-600",
          // Disabled state
          "disabled:border-zinc-950/20 dark:disabled:border-white/15 dark:disabled:bg-white/2.5 dark:hover:disabled:border-white/15",
          // Resizable
          resizable ? "resize-y" : "resize-none",
        ])}
      />
    </span>
  );
});
