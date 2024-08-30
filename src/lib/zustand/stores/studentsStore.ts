import { create } from "zustand";
import { Student } from "@lib/firebase/data.type";
import { getLocalStorage } from "@services/localStorage";
import data from "@assets/data/students.json";
import sortByName from "@utils/sortByName";

interface Students {
  students: Student[];
  setStudents: (students: Student[]) => void;
}

const useStudentsStore = create<Students>((set) => ({
  students: getLocalStorage<Student[]>("student-list", data.students),
  setStudents: (students: Student[]) =>
    set(() => ({ students: sortByName(students) })),
}));

export default useStudentsStore;
