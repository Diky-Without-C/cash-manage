import { useEffect } from "react";
import useCreditStore from "@lib/zustand/stores/creditsStore";
import Table from "./components/Table";
import { retriveData } from "@lib/firebase/service";
import { Credit } from "@lib/firebase/data.type";
import { setLocalStorage } from "@services/localStorage";

export default function RevenuePage() {
  const { credits, setCredits } = useCreditStore();

  useEffect(() => {
    async function getData() {
      const data = await retriveData<Credit[]>("credit");
      if (data && data.length) setCredits(data);
    }
    getData();
  }, []);

  useEffect(() => {
    setLocalStorage("credit-table", credits);
  }, [credits]);

  return (
    <main className="flex h-full w-full flex-col">
      <Table />
    </main>
  );
}
