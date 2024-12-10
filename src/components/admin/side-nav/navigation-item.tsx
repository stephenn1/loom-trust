"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationItemProps {
  icon: React.ReactNode;
  onClick: () => void;
  title: string;
  url: string;
}

export default function NavigationItem({
  icon,
  onClick,
  title,
  url,
}: NavigationItemProps) {
  const path = usePathname();

  return (
    <>
      {/* Mobile */}
      <Link
        href={url}
        onClick={onClick}
        className={`grid lg:hidden grid-cols-[auto_1fr] py-2 rounded-md overflow-hidden transition-all relative gap-3 items-center ${
          path === url
            ? " text-primary"
            : " text-gray-400 hover:pl-4 hover:text-primary"
        }`}
      >
        <span className="text-3xl sm:text-2xl">{icon}</span>
        <p
          className={`font-semibold hidden sm:block ${path === url ? "" : ""}`}
        >
          {title}
        </p>
      </Link>

      {/* Desktop */}
      <Link
        href={url}
        className={`hidden lg:grid grid-cols-[auto_1fr] text- py-2 rounded-md overflow-hidden transition-all relative gap-3 items-center ${
          path === url
            ? " text-primary"
            : " text-gray-400 hover:pl-4 hover:text-primary"
        }`}
      >
        {icon}
        <p className={`font-semibold ${path === url ? "" : ""}`}>{title}</p>
      </Link>
    </>
  );
}
