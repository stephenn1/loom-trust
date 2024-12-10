import React from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

interface TransactionItemProps {
  type: "deposit" | "withdrawal";
  amount: number;
  completed: boolean;
  date: string;
  id: string;
}

export default function TransactionItem({
  id,
  amount,
  completed,
  type,
  date,
}: TransactionItemProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-between bg-secondary p-5">
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
    </div>
  );
}
