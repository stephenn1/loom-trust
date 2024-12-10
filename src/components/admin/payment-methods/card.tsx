import React from "react";
import EditPaymentMethod from "./edit-payment-method";

interface CardProps {
  id: string;
  title: string;
  numOfChainTypes: { title: string; address: string }[];
  refresh: () => void;
}

export default function Card({
  id,
  title,
  numOfChainTypes,
  refresh,
}: CardProps) {
  return (
    <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 justify-between bg-secondary p-5">
      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Method
        </p>
        <p className="text-sm text-gray-700">{title}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Number Of Chains
        </p>
        <div className="grid grid-flow-col items-center w-24 gap-1">
          <p className="text-sm text-gray-700 text-center">
            {numOfChainTypes.length}
          </p>
        </div>
      </div>

      <div className="grid gap-2 col-1/3">
        <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
          Action
        </p>
        <EditPaymentMethod
          id={id}
          title={title}
          numOfChainTypes={numOfChainTypes}
          refresh={refresh}
        />
      </div>
    </div>
  );
}
