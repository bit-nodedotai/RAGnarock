export function ProgressBar({ value, label = "Progress" }: { value: number; label?: string }) {
  const clamped = Math.min(100, Math.max(0, value));
  return <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={clamped} className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-sky-500" style={{ width: `${clamped}%` }}/></div>;
}
