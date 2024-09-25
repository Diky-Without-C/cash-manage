import { ChangeEvent, useRef, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import useUserStore from "@lib/zustand/stores/userStore";
import useStudentsStore from "@lib/zustand/stores/studentsStore";
import Modal, { ModalRef, SubmitEvent } from "@components/Modal";
import useAddStudent from "@hooks/useAddStudent";
import formatNumber from "@/utils/formatNumber";
import { WEEKS } from "@/constants";

export default function Footer() {
  const [name, setName] = useState("");
  const { students } = useStudentsStore();
  const { isLogin } = useUserStore();

  const modalRef = useRef<ModalRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddStudent = useAddStudent();

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
                className="input input-bordered input-primary w-full rounded-none uppercase placeholder-shown:capitalize"
              />
            </div>
          </Modal>
        </td>
      ) : (
        <td className="border"></td>
      )}
      {WEEKS.map((week) => {
        return <td key={week} className="border text-center"></td>;
      })}
      <td className="border text-right text-lg font-semibold">
        <span>{formatNumber(totalStudentsPayments)}</span>
      </td>
    </tr>
  );
}
