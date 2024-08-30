import useStudentsStore from "@lib/zustand/stores/studentsStore";
import { deleteData } from "@lib/firebase/service";

export default function useDeleteStudent() {
  const { students, setStudents } = useStudentsStore();

  const handleDeleteStudent = async (id: string) => {
    try {
      await deleteData("students", id);
      console.log(`Student with id ${id} has been deleted.`);

      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return handleDeleteStudent;
}
