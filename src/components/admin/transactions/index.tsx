"use client";

import React, { useLayoutEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import Card from "./card";

export default function Transactions() {
  const [transactionList, setTransactionList] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const arr: any[] = [];
    const q = query(collection(db, "users"), orderBy("email", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      doc.data().transactions.length > 0 &&
        doc
          .data()
          .transactions.forEach((e: Record<string, any>) =>
            arr.push({ user: doc.data(), ...e })
          );
    });
    setTransactionList(arr);
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full grid items-center justify-center">
        <p className="text-gray-300 text-3xl font-semibold animate-pulse">
          PrimeFuturesPip
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[auto_1fr] gap-3 p-5 overflow-hidden">
      {/* <CreatePaymentMethod
        refresh={() => {
          getPaymentMethods();
        }}
      /> */}

      <div className="grid overflow-hidden">
        {isLoading ? (
          <div className="grid place-content-center">
            <span className="block w-16 h-16 rounded-full border-2 border-gray-300 border-b-transparent animate-spin"></span>
          </div>
        ) : (
          <div className="grid gap-5 content-start overflow-y-scroll custom-scroll-bar">
            {transactionList.map((tran, index) => (
              <Card
                key={index}
                amount={tran.amount}
                user={tran.user}
                id={tran.id}
                type={tran.type}
                date={tran.date}
                completed={tran.completed}
                refresh={() => getUsers()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
