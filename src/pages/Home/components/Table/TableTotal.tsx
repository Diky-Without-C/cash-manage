import formatNumber from "@/utils/formatNumber";
import { StudentProps } from "./table.type";
import isPaymentComplete from "@/utils/isPaymentComplete";

export default function Total({ student }: StudentProps) {
  const total = student.payments.reduce((prev, curr) => prev + curr, 0);

  return (
    <td
      className={`${isPaymentComplete(student.payments) && "bg-green-600 text-white"} border text-right text-gray-900`}
    >
      <span className="text-md">{formatNumber(total)}</span>
    </td>
  );
}
