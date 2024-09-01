import { ChangeEvent, useRef, useState, useCallback } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import useUserStore from "@lib/zustand/stores/userStore";
import useRevenuesStore from "@lib/zustand/stores/revenuesStore";
import Modal, { ModalRef } from "@components/Modal";

export default function Footer() {
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

  const handleInputChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      field: "description" | "debit" | "credit",
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
    [],
  );

  const handleSubmit = () => {
    if (!form.description) return;
    if (descriptionRef.current && debitRef.current && creditRef.current) {
      descriptionRef.current.value = "";
      debitRef.current.value = "";
      creditRef.current.value = "";
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
              descriptionRef.current?.focus();
            }}
          >
            <PlusCircleIcon className="size-5" />
            Add new content
          </button>

          <Modal id="addStudentModal" ref={modalRef} onSubmit={handleSubmit}>
            <h3 className="text-lg font-bold">Add new content</h3>
            <div className="my-2 flex w-full flex-col gap-2">
              <input
                ref={descriptionRef}
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
                  inputMode="numeric"
                  placeholder="Debit"
                  autoComplete="off"
                  value={form.debit === 0 ? "" : form.debit}
                  onChange={(e) => handleInputChange(e, "debit")}
                  className="input input-bordered input-primary w-full rounded-none"
                />
                <input
                  ref={creditRef}
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
      ) : (
        <td className="border"></td>
      )}
      <td className="border"></td>
      <td className="border"></td>
      <td className="border"></td>
      <td className="border"></td>
    </tr>
  );
}
