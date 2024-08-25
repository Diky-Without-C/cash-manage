import { WEEKS } from "@/constants";

export default function Header() {
  return (
    <thead>
      <tr className="text-md border bg-blue-600 font-semibold uppercase tracking-wide text-white">
        <th className="w-[2rem] border-x text-center">No</th>
        <th className="w-[18rem] border-x text-center">Name</th>
        {WEEKS.map((week) => {
          return (
            <th key={week} className="w-[6rem] border-x text-center">
              <span> {week} </span>
            </th>
          );
        })}
        <th className="w-[10rem] border-x text-center">Total</th>
      </tr>
    </thead>
  );
}
