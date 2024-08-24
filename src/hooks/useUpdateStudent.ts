import useGlobalContext from "@context/globalContext";
import { updateData } from "@lib/firebase/service";
import { Student } from "@lib/firebase/data.type";

export default function useUpdateStudent() {
  const { getData } = useGlobalContext();

  const handleUpdateStudent = async (id: string, newData: object) => {
    try {
      await updateData("students", id, newData);
      console.log(`Student with id ${id} has been updated.`);

      const setStudents = getData("setStudents");
      setStudents((prev: Student[]) =>
        prev.map((student) =>
          student.id === id ? { ...student, ...newData } : student,
        ),
      );
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return handleUpdateStudent;
}
