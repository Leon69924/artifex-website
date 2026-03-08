import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-all duration-200",
        variant === "primary" &&
          "bg-indigo-500 text-white shadow-sm hover:bg-indigo-600 hover:shadow-md",
        variant === "outline" &&
          "border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
