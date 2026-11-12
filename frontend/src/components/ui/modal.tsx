import { useEffect } from "react";
import type { ReactNode } from "react";

export function Modal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section role="dialog" aria-modal="true" aria-label={title} className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold">{title}</h2><button type="button" aria-label="Close dialog" onClick={onClose}>×</button></div>{children}</section></div>;
}
