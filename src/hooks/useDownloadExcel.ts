import createJSON from "@services/createJSON";
import { downloadExcel } from "@lib/xlsx/services";
import useGlobalContext from "@context/globalContext";

export default function useDownloadExcel() {
  const { getData } = useGlobalContext();

  const download = () => {
    const students = getData("students");
    const json = createJSON(students);
    return downloadExcel(json);
  };

  return download;
}
