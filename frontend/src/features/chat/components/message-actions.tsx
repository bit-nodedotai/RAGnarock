import { useState } from "react";

export function MessageActions({ answer, onRegenerate }: { answer: string; onRegenerate: () => void }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(answer);
    setCopied(true);
  }
  return <div className="flex items-center gap-3 text-xs text-slate-400"><button type="button" onClick={() => void copy()}>{copied ? "Copied" : "Copy answer"}</button><button type="button" onClick={onRegenerate}>Regenerate</button></div>;
}
