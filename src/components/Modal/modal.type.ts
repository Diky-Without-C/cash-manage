import { KeyboardEvent, MouseEvent, ReactNode } from "react";

export type SubmitEvent =
  | KeyboardEvent<HTMLInputElement>
  | MouseEvent<HTMLButtonElement>;

export interface ModalProps {
  onSubmit?: (e: SubmitEvent) => void;
  children: ReactNode;
  id?: string;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}
