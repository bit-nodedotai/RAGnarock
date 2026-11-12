import type { ReactNode } from "react";

export function EmptyState({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return <div className="rounded-xl border border-dashed border-slate-700 p-6 text-center"><h2 className="font-medium text-slate-200">{title}</h2>{description ? <p className="mt-1 text-sm text-slate-400">{description}</p> : null}{action ? <div className="mt-4">{action}</div> : null}</div>;
}
