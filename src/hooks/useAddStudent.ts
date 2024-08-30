import useStudentsStore from "@lib/zustand/stores/studentsStore";
import { addData } from "@lib/firebase/service";

export default function useAddStudent() {
  const { students, setStudents } = useStudentsStore();

  const handleAddStudent = async (name: string) => {
    const newStudent = {
      name: name,
      payments: [],
    };

    try {
      const id = await addData("students", newStudent);
      console.log(`New student added with ID: ${id}`);

      const updatedStudents = [...students, { id, ...newStudent }];
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return handleAddStudent;
}
