import { Student } from "@lib/firebase/data.type";

export type StudentProps = {
  student: Student;
};

export type StudentsProps = {
  students: Student[];
};

export type NameProps = StudentProps & {
  onClick?: () => void;
  className?: string;
  index: number;
};
