import React, {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react";

export interface ModalRef {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export type SubmitEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement>;

interface ModalProps {
  onSubmit?: (e: SubmitEvent) => void;
  children: ReactNode;
  id?: string;
}

const Modal = forwardRef(
  ({ onSubmit, children, id = "modal" }: ModalProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
      ref,
      (): ModalRef => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        isOpen: isOpen,
      }),
    );

    return (
      <dialog id={id} className={`${isOpen && "modal-open"} modal`}>
        <div className="modal-box text-left">
          {children}
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => setIsOpen(false)} className="btn mx-2">
                Cancel
              </button>
              <button
                onClick={(e) => {
                  setIsOpen(false);
                  onSubmit?.(e);
                }}
                className="btn btn-primary text-white"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    );
  },
);

export default Modal;
