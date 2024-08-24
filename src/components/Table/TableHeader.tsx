import { DateAmountProps } from "./table.type";

export default function Header({ dateAmount }: DateAmountProps) {
  return (
    <thead>
      <tr className="text-md border bg-blue-600 font-semibold uppercase tracking-wide text-white">
        <th className="w-[2rem] border-x text-center">No</th>
        <th className="w-[18rem] border-x text-center">Name</th>
        {Array.from({ length: dateAmount }).map((_, i) => {
          return (
            <th key={i} className="w-[6rem] border-x text-center">
              <span> week {i + 1} </span>
            </th>
          );
        })}
        <th className="w-[10rem] border-x text-center">Total</th>
      </tr>
    </thead>
  );
}
