import { ChangeEvent, useRef, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Modal from "@components/Modal";
import { ModalRef, SubmitEvent } from "@components/Modal/modal.type";
import useAddStudent from "@hooks/useAddStudent";
import formatNumber from "@/utils/formatNumber";
import useGlobalContext from "@context/globalContext";
import { TableProps } from "./table.type";

export default function Footer({ students, dateAmount }: TableProps) {
  const [name, setName] = useState("");
  const modalRef = useRef<ModalRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddStudent = useAddStudent();
  const { getData } = useGlobalContext();
  const isLogin = getData("isLogin");

  const totalStudentsPayments = students
    .flatMap((student) => student.payments)
    .reduce((prev, curr) => prev + curr, 0);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value.toUpperCase();
    setName(value);
  };

  const handleSubmit = (event: SubmitEvent) => {
    if (!name) return;

    const isEnterKey = (event as unknown as KeyboardEvent).key === "Enter";
    const isClickEvent = event.type === "click";

    if (isEnterKey || isClickEvent) {
      handleAddStudent(name);

      if (isEnterKey) {
        modalRef.current?.close();
      }

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <tr>
      <td className="border"></td>
      {isLogin ? (
        <td className="flex cursor-pointer justify-center border">
          <button
            className="btn btn-sm bg-blue-700 text-center text-white"
            onClick={() => {
              modalRef.current?.open();
              inputRef.current?.focus();
            }}
          >
            <span>
              <PlusCircleIcon className="size-5" />
            </span>
            Add new student
          </button>

          <Modal
            id="addStudentModal"
            ref={modalRef}
            onSubmit={(e) => handleSubmit(e)}
          >
            <h3 className="text-lg font-bold">Add new student</h3>
            <div className="my-2 w-full bg-slate-400">
              <input
                ref={inputRef}
                type="text"
                placeholder="Name"
                id="addNameInput"
                autoComplete="off"
                onChange={(e) => handleInput(e)}
                onKeyDown={(e) => handleSubmit(e)}
                className="input input-bordered input-primary w-full rounded-none uppercase"
              />
            </div>
          </Modal>
        </td>
      ) : (
        <td className="border"></td>
      )}
      {Array.from({ length: dateAmount }).map((_, i) => {
        return <td key={i} className="border text-center"></td>;
      })}
      <td className="border text-right">
        <span>{formatNumber(totalStudentsPayments)}</span>
      </td>
    </tr>
  );
}
