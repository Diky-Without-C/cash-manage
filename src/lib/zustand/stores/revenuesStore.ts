import { create } from "zustand";
import { Revenue } from "@lib/firebase/data.type";
import { getLocalStorage } from "@services/localStorage";

interface Revenues {
  revenues: Revenue[];
  setRevenues: (Revenues: Revenue[]) => void;
}

const useRevenuesStore = create<Revenues>((set) => ({
  revenues: getLocalStorage<Revenue[]>("revenue-table", []),
  setRevenues: (revenues: Revenue[]) => set(() => ({ revenues })),
}));

export default useRevenuesStore;
