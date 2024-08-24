import useGlobalContext from "@context/globalContext";
import { deleteData } from "@lib/firebase/service";
import { Student } from "@lib/firebase/data.type";

export default function useDeleteStudent() {
  const { getData } = useGlobalContext();

  const handleDeleteStudent = async (id: string) => {
    try {
      await deleteData("students", id);
      console.log(`Student with id ${id} has been deleted.`);

      const setStudents = getData("setStudents");
      setStudents((students: Student[]) =>
        students.filter((student) => student.id !== id),
      );
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return handleDeleteStudent;
}
