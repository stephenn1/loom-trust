import Image from "next/image";
import React from "react";
import { LogoProps } from "./types";
import Link from "next/link";

export function Logo({ className }: LogoProps) {
  return (
    <Link href={"/"} className={`relative grid ${className}`}>
      <Image src={"/logo.svg"} alt="" width={235.58} height={56} />
    </Link>
  );
}
