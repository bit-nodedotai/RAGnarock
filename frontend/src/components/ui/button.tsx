import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const variants = {
  primary: "bg-sky-500 text-slate-950 hover:bg-sky-400",
  secondary: "border border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500",
  ghost: "text-slate-300 hover:bg-slate-800",
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 disabled:opacity-50 ${variants[variant]} ${className}`} {...props} />;
}
