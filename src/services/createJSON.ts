import { Student } from "@lib/firebase/data.type";

export default function createJSON(students: Student[]) {
  const data = students.map((student, i) => {
    const dummyData: Record<string, string | number> = {};

    dummyData["No"] = i + 1;
    dummyData["Name"] = student.name;

    const payments = student.payments;
    const baseRecord = Array.from({ length: 20 }).fill(0);
    const paymentsRecord = baseRecord.map((_, i) => payments[i] || 0);

    paymentsRecord.forEach((payment, i) => {
      dummyData[`Week-${i + 1}`] = payment;
    });

    dummyData["Total"] = paymentsRecord.reduce((prev, cur) => prev + cur, 0);

    return dummyData;
  });

  return data;
}
