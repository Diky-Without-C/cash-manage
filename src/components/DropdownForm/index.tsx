import { ReactNode, useRef, useState } from "react";
import useUserStore from "@lib/zustand/stores/userStore";
import { setLocalStorage } from "@services/localStorage";

interface DropdownFormProps {
  children: ReactNode;
}

export default function DropdownForm({ children }: DropdownFormProps) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isCorrect, setIsCorrect] = useState(true);
  const { setIsLogin } = useUserStore();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleName = () => {
    if (usernameRef.current) {
      const username = usernameRef.current.value;
      setForm((prev) => ({ username, password: prev.password }));
    }
  };

  const handlePassword = () => {
    if (passwordRef.current) {
      const password = passwordRef.current.value;
      setForm((prev) => ({ username: prev.username, password }));
    }
  };

  const handleSubmit = () => {
    if (form.username == "" && form.password === "") return;

    if (
      form.username === import.meta.env.VITE_ADMIN_USERNAME &&
      form.password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      setIsCorrect(true);
      setForm({ username: "", password: "" });

      if (usernameRef.current && passwordRef.current) {
        usernameRef.current.value = "";
        passwordRef.current.value = "";
      }

      setIsLogin(true);
      setLocalStorage("isLogin", true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className="dropdown dropdown-bottom flex h-full w-full"
    >
      {children}
      <div
        tabIndex={0}
        className="menu dropdown-content z-[1] mt-1 rounded-box bg-white p-2 text-gray-900 shadow"
      >
        <div className="flex h-full w-full flex-col gap-1 p-2">
          <span className="mx-auto text-lg font-bold">LOGIN</span>
          <label htmlFor="username">
            {isCorrect ? "Username" : "Something wrong"}
          </label>
          <input
            ref={usernameRef}
            onChange={handleName}
            id="username"
            type="text"
            placeholder="username"
            autoComplete="off"
            className={`input input-bordered input-primary w-full`}
          />
          <label htmlFor="password">
            {isCorrect ? "Password" : "Something wrong"}
          </label>
          <input
            ref={passwordRef}
            onChange={handlePassword}
            id="password"
            type="password"
            placeholder="password"
            className="input input-bordered input-primary w-full"
          />
          <button
            onClick={handleSubmit}
            className="btn btn-primary btn-sm mt-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
