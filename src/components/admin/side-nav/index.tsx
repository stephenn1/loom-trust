"use client";

import React from "react";
import Navigation from "./navigation";
import Image from "next/image";

export default function SideNav() {
  return (
    <div
      className={`lg:relative order-1 lg:order-none grid w-full lg:w-64 lg:grid-rows-[auto_1fr_auto] gap-10 lg:h-full h-max px-8 py-2 sm:py-5 bg-white lg:border-r border-gray-300`}
    >
      <span className="relative hidden lg:block w-40">
        <Image src={"/logo/logo.svg"} width={300} height={300} alt="Logo" />
      </span>

      <Navigation />
    </div>
  );
}
