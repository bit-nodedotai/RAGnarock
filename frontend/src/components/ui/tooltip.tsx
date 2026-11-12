import { useId, useState } from "react";
import type { ReactNode } from "react";

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return <span className="relative inline-flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}><span aria-describedby={open ? id : undefined}>{children}</span>{open ? <span id={id} role="tooltip" className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-100">{label}</span> : null}</span>;
}
