"use client";

import React, { Dispatch, SetStateAction } from "react";
import NavigationItem from "./navigation-item";
import { ADMIN_NAVIGATION } from "@/constants/admin-navigation";

interface NavigationProps {
  setIsMobileNav?: Dispatch<SetStateAction<boolean>>;
}

export default function Navigation({ setIsMobileNav }: NavigationProps) {
  return (
    <nav className="lg:py-20 grid grid-cols-3 justify-items-center lg:justify-items-start lg:grid-cols-1 gap-5 content-center lg:content-start">
      {ADMIN_NAVIGATION.map((n, i) => (
        <NavigationItem
          key={i}
          onClick={() => setIsMobileNav && setIsMobileNav(false)}
          icon={n.icon}
          title={n.title}
          url={n.url}
        />
      ))}
    </nav>
  );
}
