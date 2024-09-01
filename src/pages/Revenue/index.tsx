import { useEffect } from "react";
import Table from "./components/Table";
import { setLocalStorage } from "@services/localStorage";
import { retriveData } from "@lib/firebase/service";
import useRevenuesStore from "@lib/zustand/stores/revenuesStore";
import { Revenue } from "@lib/firebase/data.type";

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
