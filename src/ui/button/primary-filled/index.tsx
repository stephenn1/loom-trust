import React from "react";
import { ButtonProps } from "../types";

export default function PrimaryFilled({
  children,
  className,
  disabled,
  isLoading,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`grid grid-flow-col gap-2 bg-primary border border-primary text-white rounded-md items-center justify-center font-semibold text-sm px-5 py-2 ${
        disabled && "opacity-60"
      } ${className}`}
    >
      {isLoading && (
        <span className="block border-2 border-white border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
      )}

      {!isLoading && children}
    </button>
  );
}
