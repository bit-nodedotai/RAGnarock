import { useEffect } from "react";

export function useKeyPress(key: string, callback: () => void, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;
    const listener = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
      if (event.key === key) callback();
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [key, callback, enabled]);
}
