import type { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { tone?: "neutral" | "success" | "warning" | "danger" }
const tones = { neutral: "bg-slate-800 text-slate-300", success: "bg-emerald-500/10 text-emerald-300", warning: "bg-amber-500/10 text-amber-300", danger: "bg-rose-500/10 text-rose-300" };

export function Badge({ tone = "neutral", className = "", ...props }: BadgeProps) {
  return <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${tones[tone]} ${className}`} {...props}/>;
}
