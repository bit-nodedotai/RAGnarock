export function parseCitations(answer: string): number[] {
  const seen = new Set<number>();
  for (const match of answer.matchAll(/\[(\d+)\]/g)) {
    const value = Number(match[1]);
    if (value > 0) seen.add(value);
  }
  return [...seen];
}
