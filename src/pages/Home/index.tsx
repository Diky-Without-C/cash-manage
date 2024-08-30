import { useEffect } from "react";
import useStudentsStore from "@lib/zustand/stores/studentsStore";
import Table from "@components/Table";
import { retriveData } from "@lib/firebase/service";
import { Student } from "@lib/firebase/data.type";
import { setLocalStorage } from "@services/localStorage";

export default function Home() {
  const { students, setStudents } = useStudentsStore();

  useEffect(() => {
    async function getData() {
      const data = await retriveData<Student[]>("students");
      if (data && data.length) setStudents(data);
    }
    getData();
  }, []);

  useEffect(() => {
    setLocalStorage("student-list", students);
  }, [students]);

  return (
    <main className="flex h-full w-full flex-col">
      <Table />
    </main>
  );
}
