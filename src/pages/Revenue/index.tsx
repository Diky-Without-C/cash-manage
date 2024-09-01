import { useEffect } from "react";
import useRevenuesStore from "@lib/zustand/stores/revenuesStore";
import Table from "./components/Table";
import { retriveData } from "@lib/firebase/service";
import { Revenue } from "@lib/firebase/data.type";
import { setLocalStorage } from "@services/localStorage";

export default function RevenuePage() {
  const { revenues, setRevenues } = useRevenuesStore();

  useEffect(() => {
    async function getData() {
      const data = await retriveData<Revenue[]>("revenue");
      if (data && data.length) setRevenues(data);
    }
    getData();
  }, []);

  useEffect(() => {
    setLocalStorage("revenue-table", revenues);
  }, [revenues]);

  return (
    <main className="flex h-full w-full flex-col">
      <Table />
    </main>
  );
}
