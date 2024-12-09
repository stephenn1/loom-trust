"use client";

import React, { useState } from "react";

export default function Investment() {
  const [time, setTime] = useState(60000);
  const [investment, setInvestment] = useState(100);

  return (
    <div className="mt-5 md:mt-0 md:p-5 md:bg-white shadow-[3px_3px_10px_-7px_rgba(0,0,0,0.3)] rounded-lg">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-1">
        {/* Time */}
        <div>
          <p className="text-gray-700 mb-1 text-sm">Time (Min)</p>
          <div className="border border-gray-300 grid grid-cols-[auto_1fr_auto] gap-3 rounded-md px-5 py-3">
            <span
              onClick={() => time > 60000 && setTime(time - 60000)}
              className="w-6 h-6 bg-gray-300 text-gray-700 cursor-pointer rounded-full grid place-content-center"
            >
              -
            </span>
            <input
              type="text"
              className="bg-transparent w-full text-center text-gray-700 outline-none"
              value={`${time / 60000}`}
              onChange={(e) =>
                e.target.value.match(/^[0-9]{0,2}$/) &&
                Number(e.target.value) >= 0 &&
                Number(e.target.value) <= 15 &&
                setTime(Number(e.target.value) * 60000)
              }
            />
            <span
              onClick={() => time < 15 * 60000 && setTime(time + 60000)}
              className="w-6 h-6 bg-gray-300 text-gray-700 cursor-pointer rounded-full grid place-content-center"
            >
              +
            </span>
          </div>
        </div>

        {/* Investment */}
        <div className="">
          <p className="text-gray-700 mb-1 text-sm">Investment ($)</p>
          <div className="border border-gray-300 grid grid-cols-[auto_1fr_auto] gap-3 rounded-md px-5 py-3">
            <span
              onClick={() => setInvestment(investment - 1)}
              className="w-6 h-6 bg-gray-300 text-gray-700 cursor-pointer rounded-full grid place-content-center"
            >
              -
            </span>
            <input
              type="text"
              className="bg-transparent w-full text-center text-gray-700 outline-none"
              value={`${investment}`}
              onChange={(e) =>
                e.target.value.match(/[0-9]/) &&
                setInvestment(Number(e.target.value))
              }
            />
            <span
              onClick={() => setInvestment(investment + 10)}
              className="w-6 h-6 bg-gray-300 text-gray-700 cursor-pointer rounded-full grid place-content-center"
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 mt-5 grid-cols-2 md:mt-10">
        <button
          onClick={() => {}}
          className="py-3 bg-[#0faf59] rounded-md text-white"
        >
          Buy
        </button>

        <button
          onClick={() => {}}
          className="py-3 bg-[#ff6251] rounded-md text-white"
        >
          Sell
        </button>
      </div>

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
              Trade Not Possible
            </p>
            <p className="text-gray-600 sm:text-lg px-5">
              A deposit is required before you can place a trade. Please make a
              deposit to proceed with your trading activities.
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
