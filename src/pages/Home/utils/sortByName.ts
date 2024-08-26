import { Student } from "@lib/firebase/data.type";

export default function sortByName(nameList: Student[]) {
  return nameList.sort((a, b) => a.name?.localeCompare(b.name)) || nameList;
}
