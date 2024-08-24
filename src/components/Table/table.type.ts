import { Student } from "@lib/firebase/data.type";

export type StudentProps = {
  student: Student;
};

export type StudentsProps = {
  students: Student[];
};

export type DateAmountProps = {
  dateAmount: number;
};

export type NameProps = StudentProps & {
  onClick?: () => void;
  className?: string;
  index: number;
};

export type TableProps = StudentsProps & DateAmountProps;
export type PaymentProps = StudentProps & DateAmountProps;
