const PREFIX = "ragnarok:";

export function readSessionValue<T>(key: string, fallback: T): T {
  try {
    const raw = window.sessionStorage.getItem(`${PREFIX}${key}`);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

export function writeSessionValue<T>(key: string, value: T): void {
  window.sessionStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
}

export function removeSessionValue(key: string): void {
  window.sessionStorage.removeItem(`${PREFIX}${key}`);
}

export function clearSessionValues(): void {
  for (const key of Object.keys(window.sessionStorage)) {
    if (key.startsWith(PREFIX)) window.sessionStorage.removeItem(key);
  }
}
