import { useState } from "react";
import {
  ArrowDownTrayIcon,
  UserCircleIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import DropdownForm from "@components/DropdownForm";
import useDownloadExcel from "@hooks/useDownloadExcel";
import useGlobalContext from "@context/globalContext";

export default function Content() {
  const [isActive, setIsActive] = useState(false);
  const downloadExcel = useDownloadExcel();
  const { getData, setData } = useGlobalContext();
  const isLogin = getData("isLogin");
  const isEditActive = getData("isEditActive");

  const toggleCustomEdit = () => {
    setIsActive((prev) => !prev);
    setData({ isEditActive: !isActive });
  };

  return (
    <>
      <span className="mx-1 mb-1 font-semibold text-white">General</span>
      {!isLogin ? (
        <div className="flex w-full cursor-pointer items-center rounded-lg bg-gray-800 px-1 py-2 text-start leading-tight text-white transition-all hover:bg-gray-900 hover:text-blue-600">
          <DropdownForm>
            <span className="mx-2">
              <UserCircleIcon className="size-6" />
            </span>
            <span className="font-semibold">Login</span>
          </DropdownForm>
        </div>
      ) : (
        <div
          onClick={toggleCustomEdit}
          className="relative flex w-full cursor-pointer items-center rounded-lg bg-gray-800 px-1 py-2 text-start leading-tight text-white transition-all hover:bg-gray-900 hover:text-blue-600"
        >
          <span className="mx-2">
            <WrenchIcon className="size-6" />
          </span>
          <span className="font-semibold">Custom input</span>
          {isEditActive && (
            <span className="badge badge-success absolute right-0 mx-2 rounded-badge text-white">
              active
            </span>
          )}
        </div>
      )}
      <span className="mx-1 mb-1 font-semibold text-white">Others</span>
      <div
        onClick={downloadExcel}
        className="flex w-full cursor-pointer items-center rounded-lg bg-gray-800 px-1 py-2 text-start leading-tight text-white transition-all hover:bg-gray-900 hover:text-blue-600"
      >
        <span className="mx-2">
          <ArrowDownTrayIcon className="size-6" />
        </span>
        <span className="font-semibold">Download .xlsx</span>
      </div>
    </>
  );
}
