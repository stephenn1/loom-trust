import React from "react";
import { Transaction } from "@/store/slices/user.slice";
import RecentTransactionsItem from "./recent-transactions-item";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({}: RecentTransactionsProps) {
  return (
    <div className="overflow-hidden grid gap-5 order-1 xl:order-none">
      <div className="grid grid-flow-col gap-5 justify-between xl:pr-3 items-center">
        <p className="font-bold text-gray-700">Recent Transactions</p>
        <button className="text-gray-600 font-semibold text-sm">See All</button>
      </div>

      <div className="overflow-y-auto custom-scroll-bar grid gap-5 xl:pr-3">
        <RecentTransactionsItem
          amount={1000}
          status={"pending"}
          type={"deposit"}
        />
        <RecentTransactionsItem
          amount={1000}
          status={"pending"}
          type={"deposit"}
        />
        <RecentTransactionsItem
          amount={1000}
          status={"pending"}
          type={"deposit"}
        />
        {/* {transactions.length > 0 ? (
          <div className="grid grid-rows-[auto_1fr] gap-5">
            {transactions.map((t, i) => (
              <RecentTransactionsItem
                key={i}
                amount={t.amount}
                status={""}
                type={t.type}
              />
            ))}
          </div>
        ) : (
          <div className="h-full text-gray-400 text-center grid gap-3 content-center justify-items-center">
            <p className="text-xl">
              Zero(0)
              <br />
              Transactions Found
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
}
