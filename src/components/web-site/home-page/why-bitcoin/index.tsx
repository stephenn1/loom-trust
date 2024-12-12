import Image from "next/image";
import React from "react";
import { RiCheckDoubleLine } from "react-icons/ri";

export default function WhyBitcoin() {
  return (
    <section className="py-12 sm:py-24 grid px-8 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-[auto_1fr] items-center gap-20 lg:gap-10 xl:gap-20">
        <div className="pt-16">
          <h2
            className={` mx-auto lg:mx-0 w-max pb-2 text-3xl lg:text-5xl text-center lg:text-left font-bold text-primary relative transition-all duration-500`}
          >
            Why Bitcoin(BTC)
          </h2>

          <p className="text-lg sm:text-xl text-center lg:text-left leading-8 mx-auto lg:mx-0 max-w-xl text-neutral-600 mt-10">
            Bitcoin is a form of digital money that allows people to send,
            receive, and store just like traditional money(like dollars or
            euros).
          </p>
          <div className="flex max-w-md mb-5">
            <RiCheckDoubleLine className="size-10 text-primary" />
            <div className="ml-1 mt-2">
              <h4 className=" text-xl font-semibold md:text-2xl text-primary">
                Security
              </h4>
              <p className="text-gray-700 text-lg sm:text-xl">
                Transactions are secured by cryptography, making it highly
                resistant to fraud or hacking.
              </p>
            </div>
          </div>
          <div className="flex max-w-md mb-5">
            <RiCheckDoubleLine className="size-10 text-primary" />
            <div className="ml-1 mt-2">
              <h4 className=" text-xl font-semibold md:text-2xl text-primary">
                Use like money
              </h4>
              <p className="text-gray-700 text-lg xl:text-2xl sm:text-xl  ">
                You can use Bitcoin to pay for goods and services worldwide,
                just like cash.
              </p>
            </div>
          </div>
          <div className="flex max-w-md ">
            <RiCheckDoubleLine className="size-16 text-primary" />
            <div className="ml-1 mt-2">
              <h4 className=" text-xl font-semibold md:text-2xl text-primary">
                Authenticity
              </h4>
              <p className="text-gray-700 text-lg sm:text-xl">
                It's easy to verify the authenticity of BTC. Actually, it's
                effectively impossible to transact with fake bitcoin, as opposed
                to many gold scams.
              </p>
            </div>
          </div>
        </div>
        <span className="relative w-[50vw] min-w-80 max-w-xl mx-auto lg:mx-0 bg rounded-xl grid place-content-center">
          <Image
            src={"/why-bitcoin.svg"}
            width={5000}
            height={500}
            alt="Illustration"
          />
        </span>
      </div>
    </section>
  );
}
