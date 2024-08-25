import { useState } from "react";
import isPaymentComplete from "@/utils/isPaymentComplete";
import Footer from "./TableFooter";
import Total from "./TableTotal";
import Name from "./TableName";
import Payment from "./TablePayment";
import { StudentsProps } from "./table.type";

export default function Body({ students }: StudentsProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isClick, setIsClick] = useState(false);

  const handleClick = (index: number) => {
    const isSelected = selectedIndex === index;
    setIsClick(isSelected ? !isClick : true);
    setSelectedIndex(index);
  };

  return (
    <tbody className="bg-white">
      {students?.map((student, index) => {
        const isSelected = selectedIndex === index;
        return (
          <tr key={student.id}>
            <td
              className={`${isPaymentComplete(student.payments) && "bg-green-600 text-white"} text-ms border text-center`}
            >
              <span className="mx-auto px-2 font-semibold">{index + 1}</span>
            </td>
            <Name
              className={`${isSelected && isClick ? "w-full" : "w-0"}`}
              onClick={() => handleClick(index)}
              {...{ student, index }}
            />
            <Payment student={student} />
            <Total student={student} />
          </tr>
        );
      })}

      <Footer students={students} />
    </tbody>
  );
}
