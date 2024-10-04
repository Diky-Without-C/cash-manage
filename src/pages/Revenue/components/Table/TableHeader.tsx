export default function Header() {
  return (
    <thead>
      <tr className=" bg-blue-600 font-semibold uppercase tracking-wide text-white">
        <th className="w-[2rem] border-x text-center">No</th>
        <th className="w-[40rem] border-x text-center">Descripton</th>
        <th className="w-[13rem] border-x text-center">Date</th>
        <th className="w-[15rem] border-x text-center">Debit</th>
        <th className="w-[15rem] border-x text-center">Credit</th>
        <th className="w-[15rem] border-x text-center">Total</th>
      </tr>
    </thead>
  );
}
