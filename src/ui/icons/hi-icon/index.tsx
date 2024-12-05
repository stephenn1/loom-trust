import React from "react";
import { IconProps } from "../types";

export default function HiIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3141 7.8998C14.5351 7.63463 14.4992 7.24052 14.2341 7.01955C13.9689 6.79857 13.5748 6.8344 13.3538 7.09957L10.4675 10.5631C10.1585 10.9339 9.96878 11.1593 9.81246 11.3004C9.73996 11.3659 9.69696 11.392 9.67635 11.402C9.67216 11.404 9.66918 11.4052 9.66729 11.4059C9.66729 11.4059 9.6673 11.4059 9.66729 11.4059C9.6654 11.4052 9.66242 11.404 9.65824 11.402C9.63762 11.392 9.59462 11.3659 9.52213 11.3004C9.36581 11.1593 9.17606 10.9339 8.86706 10.5631L7.64743 9.09957C7.42645 8.8344 7.03235 8.79857 6.76718 9.01955C6.502 9.24052 6.46618 9.63463 6.68715 9.8998L7.9334 11.3953C8.20713 11.7238 8.45389 12.02 8.68438 12.2282C8.93517 12.4546 9.25105 12.6563 9.66729 12.6563C10.0835 12.6563 10.3994 12.4546 10.6502 12.2282C10.8807 12.02 11.1275 11.7239 11.4012 11.3953L14.3141 7.8998Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4709 2.29687C12.6181 -0.691404 8.38314 -0.691404 7.53033 2.29687C7.25799 3.25117 6.27756 3.81722 5.31494 3.57592C2.30061 2.82035 0.183131 6.48793 2.34464 8.72063C3.03492 9.43363 3.03492 10.5657 2.34464 11.2787C0.18313 13.5114 2.30061 17.179 5.31494 16.4234C6.27756 16.1822 7.25799 16.7482 7.53033 17.7025C8.38314 20.6908 12.6181 20.6908 13.4709 17.7025C13.7433 16.7482 14.7237 16.1822 15.6863 16.4234C18.7006 17.179 20.8181 13.5114 18.6566 11.2787C17.9663 10.5657 17.9663 9.43363 18.6566 8.72063C20.8181 6.48793 18.7006 2.82035 15.6863 3.57592C14.7237 3.81722 13.7433 3.25117 13.4709 2.29687ZM8.73234 2.6399C9.24004 0.860917 11.7612 0.860917 12.2689 2.6399C12.7264 4.2429 14.3733 5.19373 15.9902 4.78841C17.7847 4.3386 19.0453 6.522 17.7585 7.85117C16.599 9.04886 16.599 10.9505 17.7585 12.1482C19.0453 13.4774 17.7847 15.6608 15.9902 15.211C14.3733 14.8056 12.7264 15.7565 12.2689 17.3595C11.7612 19.1385 9.24004 19.1385 8.73234 17.3595C8.27487 15.7565 6.62798 14.8056 5.01101 15.211C3.21651 15.6608 1.95593 13.4774 3.24273 12.1482C4.40222 10.9505 4.40222 9.04886 3.24273 7.85118C1.95593 6.522 3.21651 4.3386 5.01101 4.78841C6.62798 5.19373 8.27487 4.2429 8.73234 2.6399Z"
        fill={color}
      />
    </svg>
  );
}