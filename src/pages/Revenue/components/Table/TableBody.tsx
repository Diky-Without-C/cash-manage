import useRevenuesStore from "@lib/zustand/stores/revenuesStore";
import formatDate from "@utils/formatDate";
import Footer from "./TableFooter";

export default function Body() {
  const { revenues } = useRevenuesStore();

  return (
    <tbody className="bg-white">
      {revenues?.map((revenue, index) => {
        const { description, date, debit, credit } = revenue;
        const currentDate = formatDate(date.toDate());

        return (
          <tr key={revenue.id}>
            <td className="text-ms border text-center">
              <span className="mx-auto px-2 font-semibold">{index + 1}</span>
            </td>
            <td className="text-ms border text-center">
              <span className="mx-auto px-2 font-semibold">{description}</span>
            </td>
            <td className="text-ms border text-center">
              <span className="mx-auto px-2 font-semibold">{currentDate}</span>
            </td>
            <td className="text-ms border text-center">
              <span className="mx-auto px-2 font-semibold">
                {debit === 0 ? "" : debit}
              </span>
            </td>
            <td className="text-ms border text-center">
              <span className="mx-auto px-2 font-semibold">
                {credit === 0 ? "" : credit}
              </span>
            </td>
          </tr>
        );
      })}
      <Footer />
    </tbody>
  );
}
