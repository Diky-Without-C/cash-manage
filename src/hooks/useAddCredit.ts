import useRevenuesStore from "@lib/zustand/stores/revenuesStore";
import { addData } from "@lib/firebase/service";
import { serverTimestamp, Timestamp } from "firebase/firestore";

export default function useAddRevenue() {
  const { revenues, setRevenues } = useRevenuesStore();

  const handleAddRevenue = async (
    description: string,
    debit: number,
    credit: number,
  ) => {
    const newRevenue = {
      date: serverTimestamp() as Timestamp,
      debit,
      credit,
      description,
    };

    try {
      const id = await addData("revenue", newRevenue);
      console.log(`New Revenue added with id: ${id}`);

      const updatedRevenues = [...revenues, { id, ...newRevenue }];
      setRevenues(updatedRevenues);
    } catch (error) {
      console.error("Error adding revenue:", error);
    }
  };

  return handleAddRevenue;
}
