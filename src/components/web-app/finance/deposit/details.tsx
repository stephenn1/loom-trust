import { db } from "@/config/firebase";
import { RootState } from "@/store";
import { Button } from "@/ui";
import { decodeData } from "@/utils/codec.util";
import { formatTime } from "@/utils/date.utils";
import { doc, setDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";

export default function Details() {
  const router = useRouter();
  const data = useSearchParams().get("data") as string;
  const decodedData = decodeData(data);

  const user = useSelector((state: RootState) => state.user);

  const [timeLeft, setTimeLeft] = useState(600); // 600 seconds = 10 minutes
  const [copied, setCopied] = useState(false);
  const [isMakingPayment, setIsMakingPayment] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(decodedData.paymentNetwork.address);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handlePaymentMade = async () => {
    setIsMakingPayment(true);
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

    await setDoc(doc(db, "users", user.email), {
      ...user,
      transactions: [
        ...user.transactions,
        {
          id: uuidV4(),
          type: "deposit",
          amount: Number(decodedData?.amount),
          paymentMethod: {
            title: decodedData?.paymentMethod,
            paymentNetwork: decodedData.paymentNetwork,
          },
          date: finalFormattedDate,
          completed: false,
        },
      ],
    }).catch(() => {
      // setErrorMessage(error.message);
    });

    router.push("/finance?active_tab=deposit&step=processing-payment");
    setIsMakingPayment(false);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // Clear interval on component unmount
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  return (
    <div className="w-full max-w-2xl mx-auto grid grid-rows-[auto_1fr_auto] gap-3">
      <div className="grid grid-cols-[auto_1fr] bg-secondary rounded-lg p-5 gap-3 content-start">
        <IoIosInformationCircleOutline className="text-lg sm:text-2xl text-gray-700" />
        <p className="text-sm sm:text-base text-gray-800">
          Facilitate a deposit into your account effortlessly by utilizing the
          provided wallet address and QR code below.
        </p>
      </div>

      <div className="bg-white grid gap-2 content-center rounded-xl">
        <p className="text-center text-gray-600 font-semibold">
          {decodedData.paymentNetwork.title}
        </p>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 200,
            width: "100%",
          }}
        >
          <QRCode
            size={500}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={decodedData.paymentNetwork.address}
            viewBox={`0 0 256 256`}
          />
        </div>

        <p className="text-green-500 text-center min-h-6">
          {copied && "Address copied!"}
        </p>

        <div className="grid grid-cols-[1fr_auto] gap-3 overflow-hidden items-center text-center border py-3 px-5 rounded-xl border-neutral-300">
          <p className="w-full overflow-hidden text-ellipsis text-sm sm:text-base">
            {decodedData.paymentNetwork.address}
          </p>
          <button type="button" onClick={handleCopy}>
            <FaRegCopy className="text-primary text-xl" />
          </button>
        </div>
      </div>

      <p className="text-center text-sm font-bold text-gray-500">
        {formatTime(timeLeft)}
      </p>

      <Button
        onClick={handlePaymentMade}
        isLoading={isMakingPayment}
        disabled={isMakingPayment}
        className="mx-auto w-full max-w-sm mt-5 py-3"
      >
        I have made payment
      </Button>
    </div>
  );
}
