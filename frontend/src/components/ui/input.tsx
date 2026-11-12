import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label: ReactNode; error?: string }

export function Input({ label, error, id, className = "", ...props }: InputProps) {
  const generated = useId();
  const inputId = id ?? generated;
  return <label className="block space-y-1 text-sm" htmlFor={inputId}><span className="text-slate-300">{label}</span><input id={inputId} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : undefined} className={`w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-sky-500 ${className}`} {...props}/>{error ? <span id={`${inputId}-error`} className="text-xs text-rose-400">{error}</span> : null}</label>;
}
