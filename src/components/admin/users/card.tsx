import { formatTimestampToDate } from "@/utils/date.utils";
import Link from "next/link";
import React from "react";

interface CardProps {
  profit: number;
  email: string;
  firstName: string;
  lastName: string;
  timestamp: number;
}

export default function Card({
  profit,
  email,
  firstName,
  lastName,
  timestamp,
}: CardProps) {
  return (
    <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between bg-secondary p-5">
      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          First Name
        </p>
        <p className="text-sm text-gray-700">{firstName}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Last Name
        </p>
        <div className="grid grid-flow-col items-center w-max gap-1">
          {/* <FiArrowUpRight className="text-primary text-xl" /> */}
          {/* <FiArrowDownLeft className="text-primary text-xl" /> */}
          <p className="text-sm text-gray-700">{lastName}</p>
        </div>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Email
        </p>

        <p className="text-sm text-gray-700 w-full overflow-hidden text-ellipsis">
          {email}
        </p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Profit
        </p>
        <p className="text-sm text-gray-700">
          ${" "}
          {Number(profit)?.toLocaleString("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Date Joined
        </p>
        <p className="text-sm text-gray-700">
          {formatTimestampToDate(timestamp)}
        </p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Action
        </p>
        <Link
          href={`/admin/users/${email}`}
          className="text-xs font-semibold text-white bg-primary py-2 px-3 rounded-md w-max grid items-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
