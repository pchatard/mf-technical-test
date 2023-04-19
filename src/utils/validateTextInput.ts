export function validateTextInput(s: string): boolean {
  if (!s.trim()) {
    return false;
  } else if (/\d/.test(s)) {
    return false;
  } else {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ-\s]+$/.test(s);
  }
}
