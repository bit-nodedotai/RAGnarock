import { useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";

export function ChatComposer({ onSubmit, pending = false, placeholder = "Ask about your documents…" }: { onSubmit: (question: string) => void; pending?: boolean; placeholder?: string }) {
  const [question, setQuestion] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    const value = question.trim();
    if (!value || pending) return;
    onSubmit(value);
    setQuestion("");
  }
  function keyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); }
  }
  return <form onSubmit={submit} className="flex items-end gap-2"><label className="sr-only" htmlFor="chat-question">Question</label><textarea id="chat-question" rows={2} value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={keyDown} placeholder={placeholder} className="min-w-0 flex-1 resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"/><button type="submit" disabled={!question.trim() || pending} className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 disabled:opacity-50">{pending ? "Thinking…" : "Ask"}</button></form>;
}
