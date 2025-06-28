// Helper to generate a GROQ projection from an enum, with optional field overrides
export function groqProjectionFromEnum<T extends Record<string, string>>(
  fieldEnum: T,
  overrides: Partial<Record<T[keyof T], string>> = {},
): string {
  return Object.values(fieldEnum)
    .map((field) => overrides?.[field as T[keyof T]] ?? field)
    .join(',\n');
}

