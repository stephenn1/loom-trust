"use client";

import React, { useState } from "react";
import { FaBtc } from "react-icons/fa6";

export default function Investment() {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="md:w-screen md:max-w-xs grid gap-5">
      <div className="w-full px-10 py-10 sm:py-16 rounded-lg bg-[#f7931a] bg-opacity-80">
        <p className="text-3xl sm:text-4xl text-white font-bold flex items-center gap-[8px]">
          {<FaBtc />} {0}.00
        </p>
      </div>

      <button
        onClick={handleToggleModal}
        className="py-3 bg-[#0faf59] rounded-md text-white w-full"
      >
        Buy Contract
      </button>

      {/* <div
        className={`fixed top-0 left-0 w-full h-full p-5 grid items-center transition-all ${
          showModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button className="absolute top-0 left-0 bg-black bg-opacity-30 backdrop-blur-[1px] w-full h-full z-10 "></button>
        <div className="bg-white z-20 w-full mx-auto max-w-lg grid grid-rows-[auto_1fr_auto] gap-10 rounded-lg relative p-5">
          <button
            onClick={handleToggleModal}
            className="ml-auto w-max block text-2xl text-gray-700"
          >
            <MdOutlineCancel />
          </button>
          <div className="grid gap-5 text-center">
            <p className="text-gray-700 font-semibold text-xl sm:text-2xl">
              Deposit Required
            </p>
            <p className="text-gray-600 sm:text-lg px-5">
              To proceed with purchasing a contract, please make a deposit. Once
              your deposit is confirmed, you&apos;ll be able to complete your
              purchase.
            </p>
          </div>
          <Link href={"/finance?active-tab=deposit"} className="grid">
            <Button >Make a Deposit</Button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
