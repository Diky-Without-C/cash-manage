import { ChangeEvent, useRef, useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Modal from "@components/Modal";
import { ModalRef, SubmitEvent } from "@components/Modal/modal.type";
import useDeleteStudent from "@hooks/useDeleteStudent";
import useUpdateStudent from "@hooks/useUpdateStudent";
import isPaymentComplete from "@/utils/isPaymentComplete";
import useGlobalContext from "@context/globalContext";
import { NameProps } from "./table.type";

export default function Name({ onClick, className, student }: NameProps) {
  const [name, setName] = useState("");
  const handleDeleteStudent = useDeleteStudent();
  const handleUpdateStudent = useUpdateStudent();
  const { getData } = useGlobalContext();
  const isLogin = getData("isLogin");

  const modalRef = useRef<ModalRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value.toUpperCase();
    setName(value);
  };

  const handleSubmit = (event: SubmitEvent, id: string) => {
    if (!name) return;

    const isEnterKey = (event as unknown as KeyboardEvent).key === "Enter";
    const isClickEvent = event.type === "click";

    if (isEnterKey || isClickEvent) {
      handleUpdateStudent(id, { name });

      if (isEnterKey) modalRef.current?.close();

      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <td
      onClick={() => isLogin && !modalRef.current?.isOpen && onClick?.()}
      className={`${isPaymentComplete(student.payments) && "bg-green-600 text-white"} relative flex h-full cursor-pointer items-center text-gray-900 ring-1 ring-gray-200`}
    >
      <div
        className={`${className} absolute left-0 top-0 flex h-full items-center justify-end overflow-hidden bg-gray-900 bg-opacity-60 transition-all duration-200`}
      >
        <button
          onClick={() => {
            modalRef.current?.open();
            inputRef.current?.focus();
            if (inputRef.current) {
              inputRef.current.value = student.name;
            }
          }}
          className="btn btn-sm"
        >
          <PencilIcon className="size-5" />
        </button>
        <button
          onClick={() => handleDeleteStudent(student.id)}
          className="btn btn-sm mx-2"
        >
          <TrashIcon className="size-5" />
        </button>
      </div>
      <div className="text-md font-semibold uppercase">{student.name}</div>
      <Modal
        id="editStudentModal"
        ref={modalRef}
        onSubmit={(e) => handleSubmit(e, student.id)}
      >
        <h3 className="text-lg font-bold">Edit student</h3>
        <div className="my-2 w-full bg-slate-400">
          <input
            ref={inputRef}
            type="text"
            placeholder="Name"
            id={`editNameInput-${student.id}`}
            autoComplete="off"
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleSubmit(e, student.id)}
            className="input input-bordered input-primary w-full rounded-none uppercase"
          />
        </div>
      </Modal>
    </td>
  );
}
