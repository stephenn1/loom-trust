import { HOWTOUSE } from "@/constants/how-to-use";
import React from "react";
import Card from "./card";

export default function HowToUse() {
  return (
    <section className="relative px-4 md:px-16 lg:px-24 grid py-16">
      <div>
        <div className="grid">
          <h2
            className={`text-3xl lg:text-5xl text-center font-bold text-primary relative transition-all duration-500`}
          >
            It is easy to use LoomTrust
          </h2>
          <p className="text-gray-500 text-center text-lg sm:text-xl max-w-lg mx-auto">
            We make it easy to experience the future of money.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
          {HOWTOUSE.map((s, i) => (
            <Card key={i} content={s.content} img={s.img} title={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
