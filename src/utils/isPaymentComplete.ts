export default function isPaymentComplete(payments: number[]) {
  return payments.length && payments.every((payment) => payment === 5000);
}
