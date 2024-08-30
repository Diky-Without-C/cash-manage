import { updateData } from "@lib/firebase/service";
import useStudentsStore from "@lib/zustand/stores/studentsStore";

export default function useUpdateStudent() {
  const { students, setStudents } = useStudentsStore();

  const handleUpdateStudent = async (id: string, newData: object) => {
    try {
      await updateData("students", id, newData);
      console.log(`Student with id ${id} has been updated.`);

      const updatedStudents = students.map((student) =>
        student.id === id ? { ...student, ...newData } : student,
      );
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return handleUpdateStudent;
}
