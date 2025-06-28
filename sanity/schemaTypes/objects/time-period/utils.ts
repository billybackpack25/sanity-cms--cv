
export const currentYear = new Date().getFullYear()
export const yearOptions = Array.from({ length: currentYear - 1910 + 1 }, (_, i) => 1910 + i).sort((a, b) => b - a)
