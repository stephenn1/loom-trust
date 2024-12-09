import React from "react";
import Details from "./details";
import { useSearchParams } from "next/navigation";
import ProcessingPayment from "./processing-payment";
import SelectPaymentMethod from "./select-payment-method";

export default function Deposit() {
  const step = useSearchParams().get("step");

  return (
    <div className="bg-white rounded-r-lg grid h-full py-5 sm:py-10 px-5 overflow-auto custom-scroll-bar">
      {(!step || step === "select-payment-method") && <SelectPaymentMethod />}
      {step === "details" && <Details />}
      {step === "processing-payment" && <ProcessingPayment />}
    </div>
  );
}
