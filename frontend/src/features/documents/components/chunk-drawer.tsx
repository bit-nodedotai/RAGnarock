import { useEffect } from "react";

export interface DocumentChunk { id: string; index: number; content: string; token_count: number }

export function ChunkDrawer({ open, chunks, onClose }: { open: boolean; chunks: DocumentChunk[]; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open, onClose]);
  if (!open) return null;
  return <aside aria-label="Document chunks" className="fixed inset-y-0 right-0 z-40 w-full max-w-lg overflow-y-auto border-l border-slate-800 bg-slate-950 p-5 shadow-2xl"><div className="mb-4 flex justify-between"><h2 className="text-lg font-semibold">Source chunks</h2><button type="button" aria-label="Close chunks" onClick={onClose}>×</button></div>{chunks.length ? <ol className="space-y-3">{chunks.map((chunk) => <li key={chunk.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4"><p className="mb-2 text-xs text-slate-400">Chunk {chunk.index}</p><p className="whitespace-pre-wrap text-sm text-slate-200">{chunk.content}</p></li>)}</ol> : <p className="text-sm text-slate-500">No chunks are available.</p>}</aside>;
}
