import React from "react";

interface TransactionItemProps {
  type: "deposit" | "withdrawal" | "profit";
  amount: number;
}

export default function TransactionItem({
  amount,
  type,
}: TransactionItemProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-5 justify-between bg-secondary p-5 border border-gray-300 rounded-md">
      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Transaction ID
        </p>
        <p className="text-sm text-gray-900">{type}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Type
        </p>
        <p className="text-sm text-gray-900">{type}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Amount
        </p>
        <p className="text-sm text-gray-900">
          ${" "}
          {amount?.toLocaleString("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          To/From
        </p>
        <p className="text-sm text-gray-900">{type}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Date
        </p>
        <p className="text-sm text-gray-900">{type}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Status
        </p>
        <span
          className={`block w-20 lg:w-28 h-max text-center text-xs lg:text-xs border py-1 rounded-lg capitalize ${
            status
              ? "bg-green-500 border-green-500 bg-opacity-10 text-green-500"
              : "bg-yellow-500 border-yellow-500 bg-opacity-10 text-yellow-500"
          }`}
        >
          {status ? "completed" : "pending"}
        </span>
      </div>
    </div>
  );
}
