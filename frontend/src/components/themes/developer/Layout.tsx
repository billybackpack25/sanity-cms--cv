import React from "react";

export function DeveloperLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <header className="mb-8 border-b border-green-700 pb-4">
        <h1 className="text-4xl font-bold tracking-tight">Developer CV</h1>
      </header>
      <section>{children}</section>
    </main>
  );
}
