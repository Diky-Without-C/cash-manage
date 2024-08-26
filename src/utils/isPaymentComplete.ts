import { PAYMENT_COST } from "@/constants";

export default function isPaymentComplete(payments: number[]) {
  return (
    payments.length && payments.every((payment) => payment === PAYMENT_COST)
  );
}
