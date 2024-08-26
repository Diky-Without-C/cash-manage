import React, { useRef, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import useUpdateStudent from "@hooks/useUpdateStudent";
import isPaymentComplete from "@/utils/isPaymentComplete";
import useGlobalContext from "@context/globalContext";
import { PAYMENT_COST, WEEKS } from "@/constants";
import { StudentProps } from "./table.type";

export default function Payment({ student }: StudentProps) {
  const payments = [...student.payments];
  const [inputs, setInputs] = useState(payments);
  const handleUpdateStudent = useUpdateStudent();
  const { getData } = useGlobalContext();
  const isLogin = getData("isLogin");
  const isEditActive = getData("isEditActive");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (id: string, i: number) => {
    if (!isLogin) return;
    const baseRecord = Array.from({ length: WEEKS.length }).fill(0);
    const paymentsRecord = baseRecord.map((_, i) => payments[i] || 0);
    paymentsRecord[i] = paymentsRecord[i] === PAYMENT_COST ? 0 : PAYMENT_COST;

    if (!isEditActive) {
      setInputs(paymentsRecord);
      handleUpdateStudent(id, { payments: paymentsRecord });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const value = e.target.value.replace(/[^0-9]/g, "") || "0";
    const paymentsRecord = [...inputs];
    paymentsRecord[i] = Number(value);
    setInputs(paymentsRecord);
  };

  const updatePayment = (id: string, i: number) => {
    const updatedPayments = [...payments];
    const newValue = inputs[i];
    updatedPayments[i] = newValue;

    handleUpdateStudent(id, { payments: updatedPayments });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: string,
    i: number,
  ) => {
    if (e.key === "Enter") {
      updatePayment(id, i);
    }
  };

  const handleBlur = (id: string, i: number) => {
    updatePayment(id, i);
  };

  return (
    <>
      {WEEKS.map((_, i) => {
        const payment = payments[i];
        const input = inputs[i];
        return (
          <td
            key={`${student.id}-${i}`}
            onClick={() => handleClick(student.id, i)}
            className={`${isPaymentComplete(payments) && "bg-green-600 text-white"} relative cursor-pointer border text-center`}
          >
            {!isEditActive ? (
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center ring-blue-500 hover:ring-1">
                {payment !== 0 && (
                  <span>
                    {payment === PAYMENT_COST ? (
                      <CheckIcon className="size-5" />
                    ) : (
                      payment
                    )}
                  </span>
                )}
              </div>
            ) : (
              <input
                ref={inputRef}
                type="text"
                value={input === 0 ? "" : input}
                inputMode="numeric"
                name="payment"
                onChange={(e) => handleInput(e, i)}
                onKeyDown={(e) => handleKeyDown(e, student.id, i)}
                onBlur={() => handleBlur(student.id, i)}
                className="input input-ghost absolute left-0 top-0 h-full w-full rounded-none bg-transparent text-center ring-inset ring-blue-500 focus:focus-within:outline-none focus:focus-within:ring-1"
              />
            )}
          </td>
        );
      })}
    </>
  );
}
