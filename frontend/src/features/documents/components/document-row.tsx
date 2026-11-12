import type { DocumentItem } from "@/api/types";
import { StatusBadge } from "@/features/documents/status-badge";

export interface DocumentRowProps { document: DocumentItem; onDelete?: (id: string) => void }

function formatSize(bytes: number): string {
  return bytes < 1024 ? `${bytes} B` : `${(bytes / 1024).toFixed(1)} KB`;
}

export function DocumentRow({ document, onDelete }: DocumentRowProps) {
  return <li className="flex items-start justify-between gap-3 py-3"><div className="min-w-0"><div className="flex items-center gap-2"><p className="truncate text-sm font-medium">{document.filename}</p><StatusBadge status={document.status}/></div><p className="mt-1 text-xs text-slate-500">{formatSize(document.size_bytes)} · {document.chunk_count} chunks</p>{document.error ? <p className="mt-1 text-xs text-rose-400">{document.error}</p> : null}</div>{onDelete ? <button type="button" className="text-xs text-slate-400 underline hover:text-rose-300" onClick={() => onDelete(document.id)}>Delete</button> : null}</li>;
}
