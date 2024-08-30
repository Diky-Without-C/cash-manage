import { create } from "zustand";
import { getLocalStorage } from "@services/localStorage";

interface User {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const useUserStore = create<User>((set) => ({
  isLogin: getLocalStorage<boolean>("isLogin", false),
  setIsLogin: (value) => set(() => ({ isLogin: value })),
}));

export default useUserStore;
