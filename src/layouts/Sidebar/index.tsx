import { useEffect, useRef } from "react";
import Content from "./SidebarContent";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const SidebarRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (
      SidebarRef.current &&
      !SidebarRef.current.parentNode?.contains(event.target as Node) &&
      !SidebarRef.current.contains(event.target as Node)
    ) {
      {
        setIsOpen(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      ref={SidebarRef}
      className={`${!isOpen && "-translate-x-full"} absolute bottom-0 left-0 z-20 flex h-[calc(100vh-4rem)] w-full max-w-[18rem] translate-y-full flex-col border-t bg-neutral p-4 shadow-xl transition-all duration-200`}
    >
      <section className="flex w-full min-w-32 flex-col gap-1 p-1">
        <Content />
      </section>
    </aside>
  );
}
