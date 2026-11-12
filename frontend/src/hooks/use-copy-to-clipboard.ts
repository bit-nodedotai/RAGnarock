import { useCallback, useState } from "react";

export function useCopyToClipboard(): { copy: (text: string) => Promise<void>; copied: boolean } {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }, []);
  return { copy, copied };
}
