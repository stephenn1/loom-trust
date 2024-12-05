import React from "react";
import { IconProps } from "../types";

export default function Clock({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.31059 1.09404C4.56216 0.892782 4.60294 0.525695 4.40169 0.274125C4.20043 0.0225557 3.83334 -0.0182318 3.58177 0.183024L1.63733 1.73858C1.38576 1.93983 1.34497 2.30692 1.54623 2.55849C1.74748 2.81006 2.11457 2.85085 2.36614 2.64959L4.31059 1.09404Z"
        fill={color}
      />
      <path
        d="M14.4217 0.183024C14.1701 -0.0182318 13.803 0.0225557 13.6018 0.274125C13.4005 0.525695 13.4413 0.892782 13.6929 1.09404L15.6373 2.64959C15.8889 2.85085 16.256 2.81006 16.4572 2.55849C16.6585 2.30692 16.6177 1.93983 16.3661 1.73858L14.4217 0.183024Z"
        fill={color}
      />
      <path
        d="M9.58507 5.88853C9.58507 5.56636 9.3239 5.3052 9.00174 5.3052C8.67957 5.3052 8.4184 5.56636 8.4184 5.88853L8.4184 8.61075C8.4184 9.57725 9.2019 10.3608 10.1684 10.3608H11.3351C11.6572 10.3608 11.9184 10.0996 11.9184 9.77742C11.9184 9.45525 11.6572 9.19409 11.3351 9.19409H10.1684C9.84624 9.19409 9.58507 8.93292 9.58507 8.61075L9.58507 5.88853Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00174 0.638531C4.38402 0.638531 0.640625 4.38193 0.640625 8.99964C0.640625 13.6174 4.38402 17.3608 9.00174 17.3608C13.6194 17.3608 17.3628 13.6174 17.3628 8.99964C17.3628 4.38193 13.6194 0.638531 9.00174 0.638531ZM1.80729 8.99964C1.80729 5.02626 5.02835 1.8052 9.00174 1.8052C12.9751 1.8052 16.1962 5.02626 16.1962 8.99964C16.1962 12.973 12.9751 16.1941 9.00174 16.1941C5.02835 16.1941 1.80729 12.973 1.80729 8.99964Z"
        fill={color}
      />
    </svg>
  );
}
