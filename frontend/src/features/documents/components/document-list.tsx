import type { DocumentItem } from "@/api/types";
import { StatusBadge } from "@/features/documents/status-badge";

export interface DocumentListProps { documents?: DocumentItem[]; loading?: boolean; error?: string | null; onDelete?: (id: string) => void }

export function DocumentList({ documents = [], loading = false, error, onDelete }: DocumentListProps) {
  if (loading) return <p role="status" className="text-sm text-slate-400">Loading documents…</p>;
  if (error) return <p role="alert" className="text-sm text-rose-400">{error}</p>;
  if (documents.length === 0) return <p className="text-sm text-slate-500">No documents yet.</p>;
  return <ul className="divide-y divide-slate-800">{documents.map((document) => <li key={document.id} className="flex items-start justify-between gap-3 py-3"><div className="min-w-0"><div className="flex items-center gap-2"><p className="truncate text-sm font-medium">{document.filename}</p><StatusBadge status={document.status}/></div><p className="mt-1 text-xs text-slate-500">{document.size_bytes} bytes · {document.chunk_count} chunks</p>{document.error ? <p className="text-xs text-rose-400">{document.error}</p> : null}</div>{onDelete ? <button type="button" onClick={() => onDelete(document.id)}>Delete</button> : null}</li>)}</ul>;
}
