import useCreditStore from "@lib/zustand/stores/creditsStore";
import { updateData } from "@lib/firebase/service";

export default function useAddCredit() {
  const { credits, setCredits } = useCreditStore();

  const handleUpdateCredit = async (id: string, newData: object) => {
    try {
      await updateData("credit", id, newData);
      console.log(`Credit with id ${id} has been updated.`);

      const updatedCredits = credits.map((credit) =>
        credit.id === id ? { ...credit, ...newData } : credit,
      );
      setCredits(updatedCredits);
    } catch (error) {
      console.error("Error updating credit:", error);
    }
  };

  return handleUpdateCredit;
}
