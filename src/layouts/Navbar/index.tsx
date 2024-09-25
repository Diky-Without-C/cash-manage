import { useState } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import useUserStore from "@lib/zustand/stores/userStore";
import Sidebar from "@layouts/Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogin } = useUserStore();

  return (
    <nav className="navbar relative justify-between bg-neutral">
      <Sidebar {...{ isOpen, setIsOpen }}></Sidebar>

      <div className="flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-circle btn-ghost hover:bg-slate-700"
        >
          <Bars3BottomLeftIcon className="size-8 text-white" />
        </button>

        <div className="flex items-center px-2">
          <span className="mx-1 text-xl font-semibold text-white">XII-4</span>
          {isLogin && (
            <span className="badge badge-primary mt-1 text-white">Admin</span>
          )}
        </div>
      </div>
    </nav>
  );
}
