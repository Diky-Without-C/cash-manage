import { create } from "zustand";
import { Credit } from "@lib/firebase/data.type";
import { getLocalStorage } from "@services/localStorage";
import sortByDate from "@utils/sortByDate";

interface Credits {
  credits: Credit[];
  setCredits: (credits: Credit[]) => void;
}

const useCreditStore = create<Credits>((set) => ({
  credits: getLocalStorage<Credit[]>("credit-table", []),
  setCredits: (credits: Credit[]) =>
    set(() => ({ credits: sortByDate(credits) })),
}));

export default useCreditStore;
