import React from "react";
import { DeveloperLayout } from "./Layout";

export function DeveloperThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // You can add theme context, CSS variables, or Tailwind classes here
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-green-400 min-h-screen font-mono">
      <DeveloperLayout>{children}</DeveloperLayout>
    </div>
  );
}
