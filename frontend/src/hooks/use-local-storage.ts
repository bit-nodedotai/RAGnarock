import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((current: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = window.localStorage.getItem(key);
      return saved === null ? initialValue : (JSON.parse(saved) as T);
    } catch {
      return initialValue;
    }
  });
  const update = useCallback((next: T | ((current: T) => T)) => {
    setValue((current) => typeof next === "function" ? (next as (value: T) => T)(current) : next);
  }, []);
  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage may be disabled */ }
  }, [key, value]);
  return [value, update];
}
