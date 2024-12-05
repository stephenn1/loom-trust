import React from "react";
import { IconProps } from "../types";

export default function InfoSquare({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.34 2C19.73 2 22 4.38 22 7.92V16.091C22 19.621 19.73 22 16.34 22H7.67C4.28 22 2 19.621 2 16.091V7.92C2 4.38 4.28 2 7.67 2H16.34ZM11.99 10.481C11.51 10.481 11.12 10.88 11.12 11.361V15.781C11.12 16.261 11.51 16.651 11.99 16.651C12.48 16.651 12.87 16.261 12.87 15.781V11.361C12.87 10.88 12.48 10.481 11.99 10.481ZM12.01 7.311C11.52 7.311 11.13 7.701 11.13 8.191C11.13 8.67 11.52 9.061 11.99 9.061C12.49 9.061 12.88 8.67 12.88 8.191C12.88 7.701 12.49 7.311 12.01 7.311Z"
        fill={color}
      />
    </svg>
  );
}
