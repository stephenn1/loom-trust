"use client";

import { db } from "@/config/firebase";
import { RootState } from "@/store";
import { setUser, User } from "@/store/slices/user.slice";
import { doc, setDoc } from "firebase/firestore";
import { Span } from "next/dist/trace";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { BsFillSaveFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { IoCheckmarkDoneCircleSharp, IoCloudDone } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

interface DetailsItemProps {
  editable?: boolean;
  id: string;
  user?: User | { [field: string]: any };
  placeholder: string;
  type: string;
  value: string | number;
  icon: React.ReactNode;
  label?: string;
}

export default function DetailsItem({
  editable,
  id,
  user,
  placeholder,
  type,
  value,
  icon,
  label,
}: DetailsItemProps) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData(e.currentTarget);
    const newValue = data.get(id);

    await setDoc(doc(db, "users", user?.email ?? ""), {
      ...user,
      [id]: newValue,
    }).then(() => {
      dispatch(
        setUser({
          ...user,
          [id]: newValue,
        })
      );
      setIsLoading(false);
      setIsEdit(false);
    });
  };

  return (
    <div className="grid gap-2">
      {label && (
        <label className="text-sm font-semibold text-gray-400">{label}</label>
      )}
      <form
        onSubmit={handleFormSubmit}
        className="grid gap-5 py-3 grid-cols-[auto_1fr] px-5 bg-gray-100 rounded-lg items-baseline"
      >
        <span className="text-primary text-xl">{icon}</span>
        <div className="grid grid-cols-[1fr_auto] rounded-lg overflow-hidden">
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            defaultValue={value ? value : ""}
            readOnly={!editable || !isEdit}
            className="outline-none bg-transparent"
          />

          {editable && (
            <>
              {isEdit ? (
                isLoading ? (
                  <div className="px-5 grid items-center justify-center">
                    <span className="block relative w-5 h-5 border-2 border-primary rounded-full border-r-transparent border-b-transparent animate-spin"></span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="block relative w-max px-5 text-2xl transition-all hover:text-primary after:transition-all hover:after:h-full hover:after:bg-primary after:absolute after:w-[1px] after:h-1/2 after:bg-[#00000030] after:left-0 after:bottom-1/2 after:translate-y-1/2"
                  >
                    <IoCloudDone />
                  </button>
                )
              ) : (
                <span
                  onClick={() => setIsEdit(true)}
                  className="grid items-center relative w-max px-5 hover:text-primary transition-all after:transition-all hover:after:h-full hover:after:bg-primary after:absolute after:w-[1px] after:h-1/2 after:bg-[#00000030] after:left-0 after:bottom-1/2 after:translate-y-1/2"
                >
                  <FiEdit3 />
                </span>
              )}
            </>
          )}
        </div>
      </form>
    </div>
  );
}
