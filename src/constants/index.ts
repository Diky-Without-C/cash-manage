export const WEEK_PER_MONTH = 4;
export const MONTHS = ["Aug", "Sep", "oct", "Nov", "Des"];
export const WEEKS = MONTHS.map((month, i) =>
  Array(WEEK_PER_MONTH).fill(`${month} ${(i % WEEK_PER_MONTH) + 1}`),
).flat();
