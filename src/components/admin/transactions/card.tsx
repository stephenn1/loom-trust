import { db } from "@/config/firebase";
import { Button } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

interface CardProps {
  amount: number;
  user: Record<string, any>;
  id: string;
  type: string;
  date: number;
  completed: boolean;
  refresh: () => void;
}

export default function Card({
  amount,
  user,
  id,
  type,
  date,
  completed,
  refresh,
}: CardProps) {
  const [isApproving, setIsApproving] = useState(false);

  const handleApprove = async () => {
    setIsApproving(true);
    const amount = Number(
      user.transactions.filter((e: any) => e.id === id)[0].amount
    );

    await setDoc(doc(db, "users", user.email), {
      ...user,
      balance:
        type === "deposit"
          ? Number(user.balance || 0) + amount
          : Number(user.balance || 0) - amount,
      deposit:
        type === "deposit" ? Number(user.deposit || 0) + amount : user.deposit,
      transactions: [
        ...user.transactions.filter((e: any) => e.id !== id),
        {
          ...user.transactions.filter((e: any) => e.id === id)[0],
          completed: true,
        },
      ],
    }).catch(() => {
      // setErrorMessage(error.message);
    });

    setIsApproving(false);
    refresh();
  };

  return (
    <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between bg-secondary p-5">
      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Transaction ID
        </p>
        <p className="text-sm text-gray-700">#{id.substring(0, 8)}...</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Type
        </p>
        <div className="grid grid-flow-col items-center w-max gap-1 capitalize">
          {type === "withdrawal" ? (
            <FiArrowUpRight className="text-primary text-xl" />
          ) : (
            <FiArrowDownLeft className="text-primary text-xl" />
          )}
          <p className="text-sm text-gray-700">{type}</p>
        </div>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Email
        </p>
        <p className="text-sm text-gray-700">{user.email}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Amount
        </p>
        <p className="text-sm text-gray-700">
          ${" "}
          {Number(amount)?.toLocaleString("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Date
        </p>
        <p className="text-sm text-gray-700">{date}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Status
        </p>
        <span
          className={`block w-20 lg:w-28 h-max text-center text-xs lg:text-xs text-white border py-1 rounded-lg capitalize ${
            completed
              ? "bg-green-500 border-green-500"
              : "bg-yellow-500 border-yellow-500"
          }`}
        >
          {completed ? "completed" : "pending"}
        </span>
      </div>

      {!completed && (
        <div className="grid gap-2">
          <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
            Action
          </p>
          <Button
            onClick={handleApprove}
            isLoading={isApproving}
            disabled={isApproving}
            className="text-xs font-semibold text-white bg-primary py-2 px-3 rounded-md w-max grid items-center"
          >
            Approve
          </Button>
        </div>
      )}
    </div>
  );
}
