import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return window.localStorage.getItem("ragnarok.theme") === "light" ? "light" : "dark"; } catch { return "dark"; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem("ragnarok.theme", theme); } catch { /* keep the in-memory theme */ }
  }, [theme]);
  return [theme, () => setTheme((current) => current === "dark" ? "light" : "dark")];
}
