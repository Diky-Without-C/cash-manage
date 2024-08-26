import { useEffect, useState } from "react";
import Table from "@components/Table";
import { retriveData } from "@lib/firebase/service";
import { Student } from "@lib/firebase/data.type";
import useGlobalContext from "@context/globalContext";
import sortByName from "@pages/Home/utils/sortByName";
import useLocalStorage from "@hooks/useLocalStorage";
import data from "@assets/data/students.json";

export default function Home() {
  const [studentList, setStudentList] = useLocalStorage<Student[]>(
    "student-list",
    data.students,
  );
  const [isLogin, _] = useLocalStorage<boolean>("isLogin", false);
  const [students, setStudents] = useState<Student[]>(studentList);
  const { setData } = useGlobalContext();

  useEffect(() => {
    if (studentList.length < data.students.length) {
      setStudents(data.students);
    }

    setData({ students, setStudents, isLogin });

    async function getData() {
      const data = await retriveData<Student[]>("students");
      if (data && data.length) setStudents(data);
    }
    getData();
  }, []);

  useEffect(() => {
    setStudentList(students);
  }, [students]);

  return (
    <main className="flex h-full w-full flex-col">
      <Table students={sortByName(students)} />
    </main>
  );
}
