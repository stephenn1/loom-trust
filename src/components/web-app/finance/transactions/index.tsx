"use client";

import React from "react";
import TransactionItem from "./transaction-item";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Transactions() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="bg-white content-start gap-5 rounded-r-lg grid h-full py-5 px-5 overflow-auto custom-scroll-bar">
      {user.transactions.map((t, i) => (
        <TransactionItem
          key={i}
          id={t?.id}
          amount={t?.amount}
          completed={t?.completed}
          date={t?.date}
          type={t?.type}
        />
      ))}
    </div>
  );
}
