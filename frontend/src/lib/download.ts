export function downloadText(content: string, filename: string): void {
  const safeName = filename.replace(/[\\/:*?"<>|]/g, "-") || "download.txt";
  const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = safeName;
  anchor.click();
  URL.revokeObjectURL(url);
}
