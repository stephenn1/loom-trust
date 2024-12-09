"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { GrTransaction } from "react-icons/gr";
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi";
import Deposit from "./deposit";
import Withdrawal from "./withdrawal";
import Transactions from "./transactions";

export default function Finance() {
  const activeTab = useSearchParams().get("active_tab");

  return (
    <div className="lg:p-5 grid overflow-hidden bg-secondary">
      <div className="grid grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-[auto_1fr] overflow-hidden bg-white border border-gray-300 lg:border-none lg:bg-transparent">
        {/* Tabs */}
        <div className="bg-secondary border-b border-gray-300 lg:border-none lg:bg-white h-max lg:w-52 lg:py-3 lg:pl-3 text-center lg:text-left lg:rounded-l-lg overflow-hidden grid grid-cols-3 lg:grid-cols-1 lg:gap-3">
          <Link
            href={"/finance?active_tab=deposit"}
            className={`relative overflow-hidden text-xs sm:text-sm grid grid-flow-col gap-3 justify-center lg:justify-start w-full items-center p-2 rounded-ee-3xl lg:rounded-ee-none lg:rounded-s-md font-medium transition-all lg:py-3 ${
              !activeTab || activeTab === "deposit"
                ? "bg-primary text-white"
                : "text-gray-600 lg:text-gray-600"
            }`}
          >
            <PiHandDepositFill className="text-xl hidden lg:block" />
            Deposit
            <span className="absolute -right-2 hidden lg:block border-8 border-white border-b-transparent border-r-transparent rotate-[-45deg]"></span>
          </Link>

          <Link
            href={"/finance?active_tab=withdrawal"}
            className={`relative overflow-hidden text-xs sm:text-sm grid grid-flow-col gap-3 justify-center lg:justify-start w-full items-center p-2 rounded-b-3xl lg:rounded-ee-none lg:rounded-s-md font-medium transition-all lg:py-3 ${
              activeTab === "withdrawal"
                ? "bg-primary text-white"
                : "text-gray-600 lg:text-gray-600"
            }`}
          >
            <PiHandWithdrawFill className="text-xl hidden lg:block" />
            Withdrawal
            <span className="absolute -right-2 hidden lg:block border-8 border-white border-b-transparent border-r-transparent rotate-[-45deg]"></span>
          </Link>

          <Link
            href={"/finance?active_tab=transactions"}
            className={`relative overflow-hidden text-xs sm:text-sm grid grid-flow-col gap-3 justify-center lg:justify-start w-full items-center p-2 lg:rounded-s-md rounded-es-3xl font-medium transition-all py-3 lg:py-3 ${
              activeTab === "transactions"
                ? "bg-primary text-white"
                : "text-gray-600 lg:text-gray-600"
            }`}
          >
            <GrTransaction className="hidden lg:block" />
            Transactions
            <span className="absolute -right-2 hidden lg:block border-8 border-white border-b-transparent border-r-transparent rotate-[-45deg]"></span>
          </Link>
        </div>

        {(!activeTab || activeTab === "deposit") && <Deposit />}

        {activeTab === "withdrawal" && <Withdrawal />}

        {activeTab === "transactions" && <Transactions />}
      </div>
    </div>
  );
}
