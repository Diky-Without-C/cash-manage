import useCreditStore from "@lib/zustand/stores/creditsStore";
import { deleteData } from "@lib/firebase/service";

export default function useAddCredit() {
  const { credits, setCredits } = useCreditStore();

  const handleDeleteCredit = async (id: string) => {
    try {
      await deleteData("credit", id);
      console.log(`Credit with id ${id} has been deleted.`);

      const updatedCredits = credits.filter((credit) => credit.id !== id);
      setCredits(updatedCredits);
    } catch (error) {
      console.error("Error deleting credit:", error);
    }
  };

  return handleDeleteCredit;
}
