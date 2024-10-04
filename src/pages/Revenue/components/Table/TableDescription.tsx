import { ChangeEvent, useCallback, useRef, useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import useUserStore from "@lib/zustand/stores/userStore";
import Modal, { ModalRef } from "@components/Modal";
import useDeleteCredit from "@hooks/useDeleteCredit";
import useUpdateCredit from "@hooks/useUpdateCredit";
import { TableDescriptionProps } from "./table.type";

export default function Description({
  onClick,
  className,
  credit,
}: TableDescriptionProps) {
  const [form, setForm] = useState({
    description: "",
    debit: 0,
    credit: 0,
  });
  const { isLogin } = useUserStore();

  const modalRef = useRef<ModalRef>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const debitRef = useRef<HTMLInputElement>(null);
  const creditRef = useRef<HTMLInputElement>(null);
  const handleDeleteCredit = useDeleteCredit();
  const handleUpdateCredit = useUpdateCredit();

  const handleInputChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      field: "description" | "debit" | "credit"
    ) => {
      const value =
        field === "description"
          ? event.target.value
          : event.target.value.replace(/[^0-9]/g, "") || "";

      setForm((prev) => ({
        ...prev,
        [field]: field === "description" ? value : Number(value),
      }));
    },
    []
  );

  const handleSubmit = (id: string) => {
    if (!form.description) return;
    handleUpdateCredit(id, {
      description: form.description,
      debit: form.debit,
      credit: form.credit,
    });

    setForm({ description: "", debit: 0, credit: 0 });
    if (descriptionRef.current && debitRef.current && creditRef.current) {
      descriptionRef.current.value = "";
      debitRef.current.value = "";
      creditRef.current.value = "";
    }
  };

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }

    setForm({
      description: credit.description,
      debit: credit.debit,
      credit: credit.credit,
    });

    if (descriptionRef.current) {
      descriptionRef.current.value = credit.description;
    }
  };

  return (
    <td
      onClick={() => isLogin && !modalRef.current?.isOpen && onClick?.()}
      className="relative flex h-full cursor-pointer items-center text-gray-900 ring-1 ring-gray-200"
    >
      <div
        className={`${className} absolute left-0 top-0 flex h-full items-center justify-end overflow-hidden bg-gray-900 bg-opacity-60 transition-all duration-200`}
      >
        <button onClick={() => handleOpenModal()} className="btn btn-sm">
          <PencilIcon className="size-5" />
        </button>
        <button
          onClick={() => handleDeleteCredit(credit.id)}
          className="btn btn-sm mx-2"
        >
          <TrashIcon className="size-5" />
        </button>
      </div>
      <div className="font-semibold text-lg capitalize">
        {credit.description}
      </div>
      <Modal
        id="addStudentModal"
        ref={modalRef}
        onSubmit={() => handleSubmit(credit.id)}
      >
        <h3 className="text-lg font-bold">Add new content</h3>
        <div className="my-2 flex w-full flex-col gap-2">
          <input
            ref={descriptionRef}
            id="content-description-2"
            type="text"
            placeholder="Description"
            autoComplete="off"
            onChange={(e) => handleInputChange(e, "description")}
            className="input input-bordered input-primary w-full rounded-none"
          />
          <div className="flex w-full gap-2">
            <input
              ref={debitRef}
              type="text"
              id="content-debit-2"
              inputMode="numeric"
              placeholder="Debit"
              autoComplete="off"
              value={form.debit === 0 ? "" : form.debit}
              onChange={(e) => handleInputChange(e, "debit")}
              className="input input-bordered input-primary w-full rounded-none"
            />
            <input
              ref={creditRef}
              id="content-credit-2"
              type="text"
              placeholder="Credit"
              autoComplete="off"
              value={form.credit === 0 ? "" : form.credit}
              onChange={(e) => handleInputChange(e, "credit")}
              className="input input-bordered input-primary w-full rounded-none"
            />
          </div>
        </div>
      </Modal>
    </td>
  );
}
