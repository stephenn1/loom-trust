import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { User } from "@/store/slices/user.slice";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

interface UpdateDepositAddressProps {
  user: User | { [field: string]: any };
  refresh: () => void;
}

export default function UpdateDepositAddress({
  user,
  refresh,
}: UpdateDepositAddressProps) {
  const [isUpadtingPrompt, setIsUpadtingPrompt] = useState(false);

  const handleUpdateDepositAddress = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsUpadtingPrompt(true);
    const formData = new FormData(e.currentTarget);
    const depositAddress = formData.get("deposit_address") as string;

    await setDoc(doc(db, "users", user.email), {
      ...user,
      depositAddress,
    }).catch(() => {});

    setIsUpadtingPrompt(false);
    refresh();
  };

  return (
    <div className="content-start h-full grid gap-2">
      <label className="text-sm font-semibold text-gray-400 grid grid-flow-col w-max items-center gap-3">
        <MdOutlineSystemUpdateAlt className="text-xl" />
        Update Deposit Address
      </label>

      <form onSubmit={handleUpdateDepositAddress} className="grid gap-5">
        <div className="grid gap-3">
          <input
            id={"deposit_address"}
            name={"deposit_address"}
            type={"text"}
            placeholder={"Deposit Address"}
            defaultValue={user?.depositAddress}
            className="outline-none w-full bg-white border border-gray-300 rounded-lg px-5 py-3"
          />
        </div>
        <button
          disabled={isUpadtingPrompt}
          className={`text-sm bg-primary text-white px-y py-3 w-44 rounded-lg font-semibold grid place-content-center justify-self-end ${
            isUpadtingPrompt && "opacity-60"
          }`}
        >
          {isUpadtingPrompt ? (
            <span className="block w-4 h-4 rounded-full border border-white border-b-transparent animate-spin"></span>
          ) : (
            "Update Deposit Address"
          )}
        </button>
      </form>
    </div>
  );
}
