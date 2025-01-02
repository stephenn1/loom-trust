import { RootState } from "@/store";
import { Button, ButtonVariants, Modal } from "@/ui";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

export default function Details() {
  const user = useSelector((state: RootState) => state.user);

  const [showModal, setShowModal] = useState(false);

  const handleToggleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(user.depositAddress);
  };

  return (
    <div className="w-full max-w-2xl mx-auto grid sm:gap-5">
      <div className="grid gap-5 sm:gap-10 bg-primary bg-opacity-20 rounded-lg p-5 sm:p-10">
        <div className="bg-white p-10 rounded-xl mx-auto">
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
              value={user.depositAddress}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>

        <div className="grid gap-3 overflow-hidden items-center">
          <div className="overflow-hidden bg-white h-full rounded-md grid items-center px-5 py-3 text-center">
            <p className="w-full overflow-hidden text-ellipsis text-sm sm:text-base">
              {user.depositAddress}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="bg-primary text-white border border-primary text-sm font-semibold grid grid-flow-col justify-center gap-3 p-3 rounded-md"
          >
            <FaRegCopy className="text-xl" /> Copy Wallet Address
          </button>
        </div>
      </div>

      <Modal isModal={showModal}>
        <div className="grid gap-3">
          <p className="font-bold text-center text-xl">Payment Processing</p>
          <p className="sm:text-lg text-gray-600 text-center">
            Thank you for your patience as we verify your deposit. Our team is
            carefully reviewing the transaction to ensure accuracy and security.
            We appreciate your cooperation and understanding throughout this
            process.
          </p>

          <Link href={"/dashboard"} className="grid">
            <Button
              onClick={handleToggleShowModal}
              variant={ButtonVariants.PrimaryFilled}
              className="mt-5"
            >
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
