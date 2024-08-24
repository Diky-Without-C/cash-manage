export default function formatNumber(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
