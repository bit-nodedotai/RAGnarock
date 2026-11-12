import { useState } from "react";
import type { ReactNode } from "react";

export interface TabItem { id: string; label: string; content: ReactNode }

export function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const selected = items.find((item) => item.id === active) ?? items[0];
  return <div><div role="tablist" className="flex gap-1 border-b border-slate-800">{items.map((item) => <button key={item.id} type="button" role="tab" aria-selected={active === item.id} onClick={() => setActive(item.id)} className="px-3 py-2 text-sm aria-selected:border-b-2 aria-selected:border-sky-400">{item.label}</button>)}</div>{selected ? <div role="tabpanel" className="py-4">{selected.content}</div> : null}</div>;
}
