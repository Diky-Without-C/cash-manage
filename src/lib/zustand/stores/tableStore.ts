import { create } from "zustand";

interface Table {
  isEditActive: boolean;
  setIsEditActive: (value: boolean) => void;
}

const useTableStore = create<Table>((set) => ({
  isEditActive: false,
  setIsEditActive: (value) => set(() => ({ isEditActive: value })),
}));

export default useTableStore;
