import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface SidebarItem { label: string; href: string }
const WORKSPACE_NAVIGATION: SidebarItem[] = [{ label: "Workspace", href: "/" }];

export function Sidebar({ items = WORKSPACE_NAVIGATION, currentPath = "/" }: { items?: SidebarItem[]; currentPath?: string }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 1023px)").matches);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <aside className="border-b border-slate-800 p-3 lg:border-b-0 lg:border-r"><button type="button" className="mb-2 rounded-lg border border-slate-700 px-3 py-2 text-sm lg:hidden" aria-expanded={expanded} aria-controls="workspace-navigation" onClick={() => setExpanded((value) => !value)}>Menu</button><nav id="workspace-navigation" aria-label="Workspace navigation" hidden={isMobile && !expanded} className="lg:block"><ul className="flex gap-2 lg:block">{items.map((item) => <li key={item.href}><Link to={item.href} aria-current={currentPath === item.href ? "page" : undefined} className="block rounded-lg px-3 py-2 text-sm text-slate-300 aria-[current=page]:bg-slate-800 aria-[current=page]:text-sky-300">{item.label}</Link></li>)}</ul></nav></aside>;
}
