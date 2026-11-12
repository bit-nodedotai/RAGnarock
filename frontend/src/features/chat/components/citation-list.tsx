import type { Citation } from "@/api/types";

export function CitationList({ citations }: { citations: Citation[] }) {
  if (!citations.length) return <p className="text-xs text-slate-500">No source citations.</p>;
  return <ul aria-label="Sources" className="space-y-2">{citations.map((citation) => <li key={citation.chunk_id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-400"><p className="font-medium text-slate-300">{citation.filename} · chunk {citation.chunk_index} · {citation.score.toFixed(3)}</p><p className="mt-1 line-clamp-3">{citation.snippet}</p></li>)}</ul>;
}
