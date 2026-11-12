import type { User } from "@/api/types";

export function Header({ user, onSignOut }: { user: User; onSignOut?: () => void }) {
  return <header className="flex items-center justify-between gap-4 border-b border-slate-800 px-5 py-4"><div><h1 className="text-xl font-semibold tracking-tight">RAGnarok</h1><p className="text-xs text-slate-500">Research with your documents</p></div><div className="flex items-center gap-3 text-sm"><span className="hidden text-slate-400 sm:inline">{user.email}</span>{onSignOut ? <button className="rounded-lg border border-slate-700 px-3 py-1.5 text-slate-300 hover:border-slate-500" type="button" onClick={onSignOut}>Sign out</button> : null}</div></header>;
}
