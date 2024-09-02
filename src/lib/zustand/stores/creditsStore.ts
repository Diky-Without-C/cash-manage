import { create } from "zustand";
import { Credit } from "@lib/firebase/data.type";
import { getLocalStorage } from "@services/localStorage";

interface Credits {
  credits: Credit[];
  setCredits: (credits: Credit[]) => void;
}

const useCreditStore = create<Credits>((set) => ({
  credits: getLocalStorage<Credit[]>("credit-table", []),
  setCredits: (credits: Credit[]) => set(() => ({ credits })),
}));

export default useCreditStore;
