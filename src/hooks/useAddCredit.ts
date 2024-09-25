import useCreditStore from "@lib/zustand/stores/creditsStore";
import { addData } from "@lib/firebase/service";
import { serverTimestamp, Timestamp } from "firebase/firestore";

export default function useAddCredit() {
  const { credits, setCredits } = useCreditStore();

  const handleAddCredit = async (
    description: string,
    debit: number,
    credit: number,
  ) => {
    const newCredit = {
      date: serverTimestamp() as Timestamp,
      debit,
      credit,
      description,
    };

    try {
      const id = await addData("credit", newCredit);
      console.log(`New Credit added with id: ${id}`);

      const updatedCredits = [...credits, { id, ...newCredit }];
      setCredits(updatedCredits);
    } catch (error) {
      console.error("Error adding new credit:", error);
    }
  };

  return handleAddCredit;
}
