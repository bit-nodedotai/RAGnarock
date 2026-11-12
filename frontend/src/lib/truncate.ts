export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  if (maxLength <= 0) return "";
  return `${text.slice(0, Math.max(0, maxLength - 1))}…`;
}
