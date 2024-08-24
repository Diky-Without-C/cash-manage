import useGlobalContext from "@context/globalContext";
import { addData } from "@lib/firebase/service";
import { Student } from "@lib/firebase/data.type";

export default function useAddStudent() {
  const { getData } = useGlobalContext();

  const handleAddStudent = async (name: string) => {
    const newStudent = {
      name: name,
      payments: [],
    };

    try {
      const id = await addData("students", newStudent);
      console.log(`New student added with ID: ${id}`);

      const setStudents = getData("setStudents");
      setStudents((student: Student[]) => [...student, { id, ...newStudent }]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return handleAddStudent;
}
