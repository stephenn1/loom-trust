import Image from "next/image";
import React from "react";

interface CardProps {
  value: number;
}

export default function Withdrawals({ value }: CardProps) {
  return (
    <div
      className={`bg-[#E7F7FE] p-5 grid gap-5 items-center rounded-xl overflow-hidden`}
    >
      <Image
        src={"/wallet-withdraw.svg"}
        width={32}
        height={32}
        alt="Wallet Icon"
      />

      <div className="grid gap-3">
        <p className="bg-opacity-80 rounded-lg w-maxtext-xs font-semibold text-gray-800">
          Withdrawals
        </p>
        <p className="text-3xl sm:text-4xl text-gray-800 font-bold">
          ${" "}
          {Number(value || 0).toLocaleString("en-US", {
            style: "decimal",
          })}
          <span className="text-base font-normal">.00</span>
        </p>
      </div>
    </div>
  );
}