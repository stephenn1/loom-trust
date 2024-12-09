import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Support() {
  return (
    <div className="bg-white grid gap-5 justify-items-center p-10 rounded-xl max-w-3xl w-full mx-auto">
      <Image
        src={"/support.svg"}
        width={300}
        height={300}
        alt="Support illustration"
        className="mx-auto"
      />
      <p className="text-xl sm:text-3xl font-semibold text-gray-600">
        Contact Us via our Email
      </p>
      <Link
        href={"mailto:support@primefutures.com"}
        className="text-primary sm:text-xl font-semibold underline"
      >
        support@primefutures.com
      </Link>
    </div>
  );
}
