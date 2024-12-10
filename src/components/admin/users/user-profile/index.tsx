"use client";

import React, { FormEvent, useEffect, useState } from "react";
import DetailsItem from "./details-item";
import {
  FaGlobe,
  FaKey,
  FaPhoneAlt,
  FaSuitcase,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosAddCircle, IoMdMale } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { db } from "@/config/firebase";
import { useParams, useRouter } from "next/navigation";
import { User, userInitialState } from "@/store/slices/user.slice";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";

export default function Profile() {
  const router = useRouter();
  const userEmail = useParams().email as string;

  const [user, setUser] = useState<User | { [field: string]: any }>(
    userInitialState
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingProfit, setIsAddingProfit] = useState(false);

  const handleAddProfit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsAddingProfit(true);
    const formData = new FormData(e.currentTarget);
    const profit = formData.get("add-profit");

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Get the day number with ordinal suffix
    const day = date.getDate();
    const ordinalSuffix = (n: number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const finalFormattedDate = ordinalSuffix(day) + " " + formattedDate;

    await setDoc(doc(db, "users", user.email), {
      ...user,
      balance: Number(user.balance) + Number(profit),
      profit: Number(user.profit) + Number(profit),
      transactions: [
        ...user.transactions,
        {
          id: uuidV4(),
          type: "profit",
          amount: Number(profit),
          paymentMethod: {
            title: "",
            paymentNetwork: "",
          },
          date: finalFormattedDate,
          completed: true,
        },
      ],
    }).catch(() => {});

    setIsAddingProfit(false);
    getUserData();
  };

  const getUserData = async () => {
    const docRef = doc(db, "users", decodeURIComponent(userEmail));

    onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setUser({ ...doc.data() });
        setIsLoading(false);
      } else {
        router.push("/admin/users");
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full grid items-center justify-center">
        <p className="text-gray-300 text-3xl font-semibold animate-pulse">
          PrimeFuturesPip
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 py-10 bg-white rounded-xl overflow-y-auto">
      {/* User Image */}
      <div className="grid px-5 sm:px-10">
        <div className="relative w-max mx-auto xl:mx-0">
          {!user.photoUrl ? (
            <div className="grid bg-primary place-content-center w-40 h-40 rounded-full mx-auto relative overflow-hidden">
              <span className="text-5xl font-semibold text-white">
                {user.firstName.substring(0, 1)} {user.lastName.substring(0, 1)}
              </span>
            </div>
          ) : (
            <span
              className={`block w-10 mx-auto rounded-full ${
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
        </div>
      </div>

      <div className="grid px-5 sm:px-10 xl:px-0 xl:grid-cols-2">
        {/* Personal Details */}
        <div className="xl:px-10 pb-10 xl:pb-0 grid gap-5 content-start">
          <DetailsItem
            id="ful-name"
            icon={<FaUser />}
            label="Full Name"
            placeholder="Enter Your Full Name"
            type="text"
            value={`${user.firstName} ${user.lastName}`}
          />

          <DetailsItem
            id="phone-number"
            icon={<FaPhoneAlt />}
            label="Phone Number"
            placeholder="Include country code, e.g., +1 for US"
            type="text"
            value={user.phoneNumber}
          />

          <DetailsItem
            id="email"
            icon={<MdMail />}
            label="Email"
            placeholder="Your Email Address"
            type="email"
            value={user.email}
          />

          <DetailsItem
            id="password"
            icon={<FaKey />}
            label="Password"
            placeholder="Your password"
            type="email"
            value={user.password}
          />

          <DetailsItem
            id="balance"
            icon={<FaWallet />}
            label="Balance (₦)"
            placeholder="Balance"
            type="text"
            value={Number(user.balance).toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />

          <DetailsItem
            id="balance"
            icon={<FaWallet />}
            label="Profit (₦)"
            placeholder="Balance"
            type="text"
            value={Number(user.profit).toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
        </div>

        {/* Adress Details */}
        <div className="content-start xl:px-10 py-10 xl:py-0  border-t xl:border-t-0 xl:border-l border-gray-300 h-full grid gap-5">
          <DetailsItem
            id="gender"
            icon={<IoMdMale />}
            placeholder="Your Gender"
            label="Gender"
            type="text"
            value={user.gender}
          />

          <DetailsItem
            id="occupation"
            icon={<FaSuitcase />}
            label="Occupation"
            placeholder="What do you do"
            type="text"
            value={user.occupation}
          />

          <DetailsItem
            id="address"
            icon={<IoLocationSharp />}
            label="Address Line"
            placeholder="Address Line"
            type="text"
            value={user.address}
          />

          <DetailsItem
            id="city"
            icon={<IoLocationSharp />}
            label="City"
            placeholder="City"
            type="text"
            value={user.city}
          />

          <DetailsItem
            id="state"
            icon={<IoLocationSharp />}
            label="State"
            placeholder="State"
            type="text"
            value={user.state}
          />

          <DetailsItem
            id="country"
            icon={<FaGlobe />}
            label="Country"
            placeholder="Country"
            type="text"
            value={user.country}
          />
        </div>

        {/* Add Profit */}
        <div className="content-start xl:px-10 pt-10 xl:col-[1/3]  border-t xl:border-t-0 xl:border-l border-gray-300 h-full grid gap-2">
          <label
            htmlFor="add-profit"
            className="text-sm font-semibold text-gray-400"
          >
            Add Profit
          </label>
          <form
            onSubmit={handleAddProfit}
            className="grid gap-5 py-3 grid-cols-[auto_1fr] px-5 bg-gray-100 rounded-lg items-center"
          >
            <span className="text-primary text-2xl">
              <IoIosAddCircle />
            </span>
            <div className="grid grid-cols-[1fr_auto] overflow-hidden">
              <input
                id={"add-profit"}
                name={"add-profit"}
                type={"number"}
                placeholder={"Add Profit"}
                className="outline-none bg-transparent w-full"
              />

              <button
                disabled={isAddingProfit}
                className={`text-sm bg-primary text-white px-3 rounded-lg font-semibold w-12 grid place-content-center ${
                  isAddingProfit && "opacity-60"
                }`}
              >
                {isAddingProfit ? (
                  <span className="block w-4 h-4 rounded-full border border-white border-b-transparent animate-spin"></span>
                ) : (
                  "Add"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
