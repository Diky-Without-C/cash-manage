import { ReactNode } from "react";
import Navbar from "@layouts/Navbar";

interface ShellProps {
  children: ReactNode;
}

export default function Shell({ children }: ShellProps) {
  return (
    <main className="h-screen w-full">
      <Navbar />
      <section className="flex h-[calc(100vh-4rem)] w-full flex-col overflow-auto">
        {children}
      </section>
    </main>
  );
}
