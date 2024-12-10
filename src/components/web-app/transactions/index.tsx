"use client";

import React from "react";
import TransactionItem from "./transaction-item";

export default function Transactions() {
  return (
    <div className="bg-white content-start gap-5 rounded-r-lg grid h-full p-10 overflow-auto custom-scroll-bar">
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      <TransactionItem amount={1000} type={"deposit"} />
      {/* {user.transactions.map((t, i) => (
        <TransactionItem
          key={i}
          id={t?.id}
          amount={t?.amount}
          completed={t?.completed}
          date={t?.date}
          type={t?.type}
        />
      ))} */}
    </div>
  );
}
