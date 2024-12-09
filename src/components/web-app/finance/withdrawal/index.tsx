import { useSearchParams } from "next/navigation";
import AccountDetails from "./account-details";
import ProcessingWithdrawal from "./processing-withdrawal";

export default function Withdrawal() {
  const step = useSearchParams().get("step");

  return (
    <div className="bg-white rounded-r-lg grid h-full py-5 sm:py-10 px-5 overflow-auto custom-scroll-bar">
      {(!step || step === "account-details") && <AccountDetails />}
      {step === "processing-withdrawal" && <ProcessingWithdrawal />}
    </div>
  );
}
