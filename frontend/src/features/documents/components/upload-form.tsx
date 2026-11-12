import { useRef, useState } from "react";
import type { FormEvent } from "react";

export function UploadForm({ onUpload, pending = false, error }: { onUpload: (file: File) => void; pending?: boolean; error?: string | null }) {
  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  function submit(event: FormEvent) {
    event.preventDefault();
    if (file && !pending) { onUpload(file); setFile(null); if (ref.current) ref.current.value = ""; }
  }
  return <form className="flex flex-col gap-2 sm:flex-row" onSubmit={submit}><label className="sr-only" htmlFor="source-file">Choose a document</label><input ref={ref} id="source-file" type="file" accept=".txt,.md,text/plain,text/markdown" onChange={(event) => setFile(event.target.files?.[0] ?? null)} className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"/><button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 disabled:opacity-60" type="submit" disabled={!file || pending}>{pending ? "Uploading…" : "Upload"}</button>{error ? <p role="alert" className="text-sm text-rose-400">{error}</p> : null}</form>;
}
