import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Image from "next/image";
import React from "react";
import Subscribe from "./subscribe";
import OtherLinks from "./other-links";

export default function Footer() {
  return (
    <footer className="px-4 md:px-16">
      <div className="grid grid-flow-col gap-3 w-max items-center">
        {/* Logo */}
        <Image
          src={"/logo.svg"}
          width={300}
          height={300}
          alt="Entobo Logo"
          className="w-8"
        />
        <p className="font-semibold text-gray-000 text-xl text-primary">
          LoomTrust
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-10">
        <Subscribe />
        <OtherLinks />
      </div>
      <p className="text-gray-700 text-sm md:text-base text-center py-10 border-b-2 border-primary">
        LoomTrust is a trademark registered by the company Bitcoinforme S.L.
        (Tax ID B54835301), operating since 2015 in Spain (Europe) and
        protecting our customers and the funds provided with special accounts
        from our partners (More information), complying with current regulations
        on Anti-Money Laundering and Counter-Terrorist Financing. <br />{" "}
        <span className="my-3">
          LoomTrust is a company registered with the Bank of Spain with the
          number D592 for custody services and buying and selling digital
          assets.
        </span>
      </p>
      <p className="text-sm md:text-base text-gray-500 text-center">
        © 2018 LoomTrust. All rights reserved
      </p>
    </footer>
  );
}
