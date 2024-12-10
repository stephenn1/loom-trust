"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button, ButtonVariants, Modal } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { setUser } from "@/store/slices/user.slice";
// import Translator from "@/components/translator";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const path = usePathname().split("/").join("");

  const handleContinue = async () => {
    dispatch(
      setUser({
        ...user,
        prompt: { ...user.prompt, seen: true },
      })
    );

    await setDoc(doc(db, "users", user.email), {
      ...user,
      prompt: { ...user.prompt, seen: true },
    }).then(() => {});
  };

  return (
    <>
      {/* <div>
        <Translator /> */}
      <header className="layout-spacing py-3 sm:py-5 grid grid-flow-col items-center justify-between bg-white border-b border-gray-200">
        <span className="relative block lg:hidden w-10">
          <Image
            src={"/logo.svg"}
            width={300}
            height={300}
            layout="responsive"
            alt="Logo"
          />
        </span>

        <h2 className="font-bold text-gray-800 text-xl sm:text-2xl capitalize">
          {path}
        </h2>

        <div className=" grid grid-cols-[auto_1fr] gap-3 items-center">
          <p className="hidden md:block text-sm text-gray-500 italic">
            User Id: #{user.id.substring(0, 12)}
          </p>

          {/* User Image */}
          <div className="relative w-max">
            {!user.photoUrl ? (
              <div className="grid bg-primary place-content-center w-10 h-10 rounded-full mx-auto relative overflow-hidden">
                <span className="text-sm font-semibold text-white">
                  {user.firstName.substring(0, 1)}{" "}
                  {user.lastName.substring(0, 1)}
                </span>
              </div>
            ) : (
              <span
                className={`block w-10 h-10 mx-auto rounded-full ${
                  user.photoUrl && "overflow-hidden"
                }`}
              >
                <Image
                  src={user.photoUrl}
                  width={500}
                  height={500}
                  alt="User Image"
                />
              </span>
            )}
            <span className="block bg-green-400 rounded-full w-3 h-3 absolute bottom-0 right-0"></span>
          </div>
        </div>
      </header>

      {/* Prompt */}
      <Modal isModal={Boolean(user?.id && !user?.prompt?.seen)}>
        <div className="grid gap-5">
          <p className="font-bold text-center text-xl">{user.prompt.title}</p>
          <div className="grid gap-3">
            {user.prompt.message.split("/n").map((v, index) => (
              <p key={index} className="text-lg text-gray-500 text-center">
                {v}
              </p>
            ))}
          </div>

          <Button
            onClick={handleContinue}
            variant={ButtonVariants.PrimaryFilled}
            className="mt-5"
          >
            Continue to Dashboard
          </Button>
        </div>
      </Modal>
      {/* </div> */}
    </>
  );
}
