import type { ReactNode } from "react";

export function ErrorBanner({ message, onDismiss }: { message: ReactNode; onDismiss?: () => void }) {
  return <div role="alert" className="flex items-start justify-between gap-3 rounded-lg border border-rose-900/70 bg-rose-950/40 p-3 text-sm text-rose-200"><span>{message}</span>{onDismiss ? <button type="button" aria-label="Dismiss error" onClick={onDismiss}>×</button> : null}</div>;
}
