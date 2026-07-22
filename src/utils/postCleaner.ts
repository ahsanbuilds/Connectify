export const cleanText = (text: string) => {
  if (!text) return "";

  // Remove weird characters + normalize
  return text
    .replace(/[^\x00-\x7F]/g, "") // remove non-english
    .replace(/\s+/g, " ")
    .trim();
};