import { Student } from "@lib/firebase/data.type";

export type StudentProps = {
  student: Student;
};

export type TableNameProps = StudentProps & {
  onClick?: () => void;
  className?: string;
  index: number;
};
