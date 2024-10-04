import formatNumber from "@utils/formatNumber";

interface TotalProps {
  value: number;
}

export default function Total({ value }: TotalProps) {
  return (
    <td className="border text-right text-gray-900">
      <span className="text-base font-semibold">{formatNumber(value)}</span>
    </td>
  );
}
