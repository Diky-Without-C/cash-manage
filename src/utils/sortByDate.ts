import { Credit } from "@lib/firebase/data.type";

export default function sortByDate(nameList: Credit[]) {
  return nameList.sort((a, b) => {
    const dateA = a.date instanceof Date ? a.date : a.date.toDate();
    const dateB = b.date instanceof Date ? b.date : b.date.toDate();
    return dateA.getTime() - dateB.getTime();
  });
}
