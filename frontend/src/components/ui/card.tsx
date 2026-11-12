import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLElement> { title?: string; children: ReactNode }

export function Card({ title, children, className = "", ...props }: CardProps) {
  return <section className={`rounded-2xl border border-slate-800 bg-slate-900/70 p-5 ${className}`} {...props}>{title ? <h2 className="mb-3 text-lg font-semibold">{title}</h2> : null}{children}</section>;
}
