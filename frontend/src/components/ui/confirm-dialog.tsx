import { useEffect } from "react";

export function ConfirmDialog({ open, title, description, onConfirm, onCancel }: { open: boolean; title: string; description: string; onConfirm: () => void; onCancel: () => void }) {
  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") onCancel(); };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open, onCancel]);
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"><section role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6"><h2 id="confirm-title" className="font-semibold">{title}</h2><p className="mt-2 text-sm text-slate-300">{description}</p><div className="mt-5 flex justify-end gap-2"><button className="rounded-lg border border-slate-700 px-3 py-2 text-sm" type="button" onClick={onCancel}>Cancel</button><button className="rounded-lg bg-rose-500 px-3 py-2 text-sm font-medium text-slate-950" type="button" onClick={onConfirm}>Confirm</button></div></section></div>;
}
