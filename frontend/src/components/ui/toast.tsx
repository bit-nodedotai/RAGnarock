import { useEffect } from "react";

export function Toast({ message, open, onDismiss, duration = 3000 }: { message: string; open: boolean; onDismiss: () => void; duration?: number }) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onDismiss, duration);
    return () => window.clearTimeout(timer);
  }, [open, duration, onDismiss]);
  return open ? <div role="status" className="fixed bottom-4 right-4 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm shadow-xl">{message}</div> : null;
}
