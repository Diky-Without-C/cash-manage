export const WEEK_PER_MONTH = 4;
export const MONTHS = ["Aug", "Sep", "oct", "Nov", "Des"];
export const WEEKS = MONTHS.flatMap((month) =>
  Array.from({ length: WEEK_PER_MONTH }, (_, i) => `${month} ${i + 1}`),
);
export const PAYMENT_COST = 5000