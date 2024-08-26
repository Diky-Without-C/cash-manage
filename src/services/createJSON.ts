import { Student } from "@lib/firebase/data.type";
import { WEEKS } from "@/constants";

export default function createJSON(students: Student[]) {
  const data = students.map((student, i) => {
    const dummyData: Record<string, string | number> = {};

    dummyData["No"] = i + 1;
    dummyData["Name"] = student.name;

    const payments = student.payments;
    const baseRecord = Array.from({ length: 20 }).fill(0);
    const paymentsRecord = baseRecord.map((_, i) => payments[i] || 0);

    WEEKS.forEach((week, i) => {
      dummyData[week] = paymentsRecord[i];
    });

    dummyData["Total"] = paymentsRecord.reduce((prev, cur) => prev + cur, 0);

    return dummyData;
  });

  return data;
}
