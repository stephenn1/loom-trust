import React from "react";
import { IconProps } from "../types";

export default function Telephone({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.74588 2.10733C5.00065 1.42256 3.85517 1.42256 3.10994 2.10733C3.07942 2.13537 3.04684 2.16796 3.00453 2.21028L2.3688 2.846C1.7291 3.48571 1.46056 4.4079 1.65681 5.29104C2.77029 10.3017 6.6835 14.2149 11.6942 15.3284C12.5773 15.5246 13.4995 15.2561 14.1392 14.6164L14.7748 13.9807C14.8172 13.9384 14.8498 13.9058 14.8779 13.8752C15.5626 13.13 15.5626 11.9845 14.8779 11.2393C14.8498 11.2088 14.8172 11.1762 14.7749 11.1338L13.7341 10.0931C13.0116 9.37054 11.9203 9.16388 10.9836 9.57221C10.4473 9.80597 9.8226 9.68766 9.40893 9.27399L7.7112 7.57625C7.29753 7.16258 7.17922 6.53787 7.41298 6.00159C7.82131 5.06484 7.61465 3.97364 6.89208 3.25106L5.8513 2.21029C5.80899 2.16797 5.7764 2.13537 5.74588 2.10733ZM3.82883 2.88969C4.16757 2.57844 4.68825 2.57844 5.02699 2.88969C5.03868 2.90044 5.05401 2.9156 5.10789 2.96948L6.14078 4.00236C6.55445 4.41603 6.67276 5.04075 6.43899 5.57703C6.03067 6.51377 6.23732 7.60498 6.95989 8.32755L8.65763 10.0253C9.38021 10.7479 10.4714 10.9545 11.4082 10.5462C11.9444 10.3124 12.5692 10.4307 12.9828 10.8444L14.0157 11.8773C14.0696 11.9312 14.0847 11.9465 14.0955 11.9582C14.4068 12.2969 14.4068 12.8176 14.0955 13.1564C14.0847 13.168 14.0696 13.1834 14.0157 13.2373L13.3879 13.8651C13.0051 14.2479 12.4532 14.4086 11.9246 14.2912C7.3167 13.2672 3.71799 9.66849 2.69401 5.06055C2.57656 4.53203 2.73727 3.98014 3.12011 3.5973L3.74793 2.96948C3.80181 2.9156 3.81714 2.90044 3.82883 2.88969Z"
        fill={color}
      />
    </svg>
  );
}