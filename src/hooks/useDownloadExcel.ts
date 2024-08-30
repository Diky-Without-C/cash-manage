import createJSON from "@services/createJSON";
import { downloadExcel } from "@lib/xlsx/services";
import useStudentsStore from "@lib/zustand/stores/studentsStore";

export default function useDownloadExcel() {
  const { students } = useStudentsStore();

  const download = () => {
    const json = createJSON(students);
    return downloadExcel(json);
  };

  return download;
}
