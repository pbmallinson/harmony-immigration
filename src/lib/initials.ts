// "Cheryl Chiu" -> "CC". Skips titles like "Dr."; a single name gives one letter.
export const initials = (name: string) => {
  const parts = name.split(/\s+/).filter((p) => p && !p.endsWith('.'));
  const letters = [parts[0], parts.length > 1 ? parts[parts.length - 1] : undefined];
  return letters.map((p) => (p ? Array.from(p)[0] : '')).join('').toUpperCase();
};
