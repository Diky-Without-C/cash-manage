import { Credit } from "@lib/firebase/data.type";

export type CreditProps = {
  credit: Credit;
};

export type TableDescriptionProps = CreditProps & {
  onClick?: () => void;
  className?: string;
  index: number;
};
