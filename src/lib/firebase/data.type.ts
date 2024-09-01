import { Timestamp } from "firebase/firestore";

export interface Student {
  id: string;
  name: string;
  payments: number[];
}

export interface Revenue {
  id: string;
  description: string;
  date: Timestamp | Date;
  debit: number;
  credit: number;
}
