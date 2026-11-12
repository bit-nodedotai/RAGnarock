import { useEffect, useRef } from "react";

export function useFocusTrap(active = true): React.RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!active || !ref.current) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const root = ref.current;
    const focusable = () => [...root.querySelectorAll<HTMLElement>('button:not([disabled]),a[href],input:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
    focusable()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) { event.preventDefault(); root.focus(); return; }
      if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1)?.focus(); }
      else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0]?.focus(); }
    };
    root.addEventListener("keydown", onKeyDown);
    return () => { root.removeEventListener("keydown", onKeyDown); previous?.focus(); };
  }, [active]);
  return ref;
}
