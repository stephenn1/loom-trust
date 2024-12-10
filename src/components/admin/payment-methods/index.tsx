"use client";

import React, { useLayoutEffect, useState } from "react";
import CreatePaymentMethod from "./create-payment-method";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import Card from "./card";

export default function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const getPaymentMethods = async () => {
    const arr: any[] = [];
    const q = query(
      collection(db, "payment-methods"),
      orderBy("paymentMethodTitle", "asc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setPaymentMethods(arr);
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    getPaymentMethods();
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-3 p-5 overflow-hidden">
      <CreatePaymentMethod
        refresh={() => {
          getPaymentMethods();
        }}
      />

      <div className="grid overflow-hidden">
        {isLoading ? (
          <div className="grid place-content-center">
            <span className="block w-16 h-16 rounded-full border-2 border-gray-300 border-b-transparent animate-spin"></span>
          </div>
        ) : (
          <div className="grid gap-5 content-start overflow-y-scroll custom-scroll-bar">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                id={method.id}
                numOfChainTypes={method?.chainTypes}
                title={method?.paymentMethodTitle}
                refresh={() => {
                  getPaymentMethods();
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
