import { useId } from "react";
import type { ReactNode, TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { label: ReactNode }

export function Textarea({ label, id, className = "", ...props }: TextareaProps) {
  const generated = useId();
  const fieldId = id ?? generated;
  return <label className="block space-y-1 text-sm" htmlFor={fieldId}><span className="text-slate-300">{label}</span><textarea id={fieldId} className={`w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-sky-500 ${className}`} {...props}/></label>;
}
