import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import useCreditStore from "@lib/zustand/stores/creditsStore";
import getTotalCreditLeft from "@utils/getTotalCreditLeft";
import formatDate from "@utils/formatDate";
import Description from "./TableDescription";
import Footer from "./TableFooter";
import formatNumber from "@utils/formatNumber";
import Total from "./TableTotal";

export default function Body() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isClick, setIsClick] = useState(false);
  const { credits } = useCreditStore();

  const totalCredits: number[] = credits
    .flatMap((rev) => [-rev.credit, rev.debit])
    .filter((num) => num != 0);
  const totalCreditLeft = getTotalCreditLeft(totalCredits);

  const handleClick = (index: number) => {
    const isSelected = selectedIndex === index;
    setIsClick(isSelected ? !isClick : true);
    setSelectedIndex(index);
  };

  return (
    <tbody className="bg-white">
      {credits?.map((revenue, index) => {
        const isSelected = selectedIndex === index;
        const { date, debit, credit } = revenue;
        const currentDate = formatDate(
          date instanceof Timestamp ? date.toDate() : new Date()
        );

        return (
          <tr key={revenue.id}>
            <td className="text-base border text-center">
              <span className="mx-auto px-2 font-semibold">{index + 1}</span>
            </td>
            <Description
              className={`${isSelected && isClick ? "w-full" : "w-0"}`}
              onClick={() => handleClick(index)}
              credit={revenue}
              index={index}
            />
            <td className="text-base border text-center">
              <span className="mx-auto px-2 font-semibold">{currentDate}</span>
            </td>
            <td className="text-base border text-center">
              <span className="mx-auto px-2 font-semibold">
                {debit === 0 ? "" : formatNumber(debit)}
              </span>
            </td>
            <td className="text-base border text-center">
              <span className="mx-auto px-2 font-semibold">
                {credit === 0 ? "" : formatNumber(credit)}
              </span>
            </td>
            <Total value={totalCreditLeft[index]} />
          </tr>
        );
      })}
      <Footer />
    </tbody>
  );
}
