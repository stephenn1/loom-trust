import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isModal: boolean;
}

export function Modal({ children, isModal }: ModalProps) {
  return (
    <div
      className={`bg-black bg-opacity-50 z-10 fixed top-0 left-0 w-full h-full p-5 grid transition-all overflow-hidden ${
        isModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-white w-full h-full grid max-w-xl rounded-md ml-auto relative overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}
