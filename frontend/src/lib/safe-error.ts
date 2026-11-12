export interface SafeError {
  message: string;
  code: string;
}

export function safeError(value: unknown): SafeError {
  if (typeof value === "string") return { message: value, code: "error" };
  if (value instanceof Error) {
    const candidate = value as Error & { code?: unknown };
    return {
      message: candidate.message || "Something went wrong.",
      code: typeof candidate.code === "string" ? candidate.code : "error",
    };
  }
  if (value && typeof value === "object") {
    const candidate = value as { message?: unknown; code?: unknown };
    return {
      message: typeof candidate.message === "string" ? candidate.message : "Something went wrong.",
      code: typeof candidate.code === "string" ? candidate.code : "error",
    };
  }
  return { message: "Something went wrong.", code: "error" };
}
