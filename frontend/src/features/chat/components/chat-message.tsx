import type { Citation } from "@/api/types";

export interface ChatMessageProps { role: "user" | "assistant"; content: string; citations?: Citation[] }

export function ChatMessage({ role, content, citations = [] }: ChatMessageProps) {
  const user = role === "user";
  return <article aria-label={user ? "Your message" : "Assistant answer"} className={`max-w-[90%] space-y-2 ${user ? "ml-auto" : "mr-auto"}`}><p className={`whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm ${user ? "bg-sky-500/15 text-sky-100" : "bg-slate-800/70 text-slate-100"}`}>{content}</p>{!user && citations.length ? <ul aria-label="Sources" className="space-y-2">{citations.map((citation) => <li key={citation.chunk_id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-400"><p className="font-medium text-slate-300">{citation.filename} · chunk {citation.chunk_index} · {citation.score.toFixed(3)}</p><p className="mt-1 line-clamp-3">{citation.snippet}</p></li>)}</ul> : null}</article>;
}
