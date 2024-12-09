"use client";

import { db } from "@/config/firebase";
import { RootState } from "@/store";
import { Button, Input, Inputs } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import {
  CRYPTO_CURRENCIES,
  WITHDRAWAL_METHODS,
} from "@/constants/withdrawal-methods";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function AccountDetails() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrorMessage();
    setIsLoading(true);
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Get the day number with ordinal suffix
    const day = date.getDate();
    const ordinalSuffix = (n: number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const finalFormattedDate = ordinalSuffix(day) + " " + formattedDate;

    const data = new FormData(e.currentTarget);
    const amount = data.get("amount") as string;

    if (!paymentMethod) {
      setIsLoading(false);
      setErrorMessage("Please select a payment method.");
      return;
    }

    if (Number(amount) > user.balance) {
      setIsLoading(false);
      setErrorMessage(
        "Withdrawals exceeding your available balance are prohibited."
      );
      return;
    }

    await setDoc(doc(db, "users", user.email), {
      ...user,
      transactions: [
        ...user.transactions,
        {
          id: uuidV4(),
          type: "withdrawal",
          amount: Number(amount),
          date: finalFormattedDate,
          completed: false,
        },
      ],
    }).catch((error) => {
      setErrorMessage(error.message);
    });

    setIsLoading(false);
    router.push("/finance?active_tab=withdrawal&step=processing-withdrawal");
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto w-full">
      <div className="bg-white grid gap-5 rounded-xl">
        <Input
          type={Inputs.Number}
          name=""
          id="transaction-code"
          label="Transaction Code"
          placeholder="Please input the transaction code"
          required
        />

        <Input
          type={Inputs.Select}
          name="payment-method"
          label="Payment Method"
          placeholder="Select payment method"
          options={WITHDRAWAL_METHODS}
          onChange={setPaymentMethod}
          required
        />

        {paymentMethod === "Crypto Wallet" && (
          <>
            <Input
              type={Inputs.Select}
              name="crypto-currency"
              label="Crypto Currency"
              placeholder="Select crypto currency"
              options={CRYPTO_CURRENCIES}
              onChange={() => {}}
              required
            />

            <Input
              type={Inputs.Text}
              name=""
              id="wallet-address"
              label="Wallet Address"
              placeholder="Please enter your wallet address"
              required
            />
          </>
        )}

        {paymentMethod.split("-")[0] === "Bank Transfer" && (
          <>
            <Input
              type={Inputs.Text}
              name="bank-name"
              id="bank-name"
              label="Bank Name"
              placeholder="Enter your bank name"
              required
            />

            <Input
              type={Inputs.Text}
              name="account-name"
              id="account-name"
              label="Account Name"
              placeholder="Enter your account name"
              required
            />

            <Input
              type={Inputs.Number}
              name="account-number"
              id="account-number"
              label="Account Number"
              placeholder="Enter your account number"
              required
            />
          </>
        )}

        <Input
          type={Inputs.Number}
          name="amount"
          id="amount"
          label="Amount"
          placeholder="Please input the withdrawal amount."
          required
        />

        <p className="min-h-6 text-red-400 opacity-80 text-sm">
          {errorMessage}
        </p>
      </div>

      <div>
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          className="mx-auto w-full mt-5 py-3 px-20"
        >
          Proceed
        </Button>
        <div className="text-gray-500 grid grid-cols-[auto_1fr] gap-2 text-sm mt-5">
          <IoIosInformationCircleOutline className="text-xl" />
          <p>
            For assistance please contact our customer care to request your
            Transaction Code. Happy Investing!
          </p>
        </div>
      </div>
    </form>
  );
}
