export function validateEmail(value: string): string | null {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Enter a valid email address.";
}

export function validatePassword(value: string): string | null {
  return value.length >= 8 ? null : "Password must be at least 8 characters.";
}
