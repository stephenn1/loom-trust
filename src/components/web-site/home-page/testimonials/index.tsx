import { TESTIMONIALS } from "@/constants/testimonials";
import React from "react";
import Card from "./card";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 overflow-hidde sm:py-24 bg-[linear-gradient(to_left_top,_#E1B530720_0%,_#FFFFFF_70%)] grid"
    >
      <div className="grid">
        <h2
          className={`text-3xl lg:text-5xl w-full text-center font-bold relative mx-auto text-primary`}
        >
          LoomTrust users share their experiences
        </h2>
        <p className=" max-w-4xl text-gray-500 text-center text-lg sm:text-xl mx-auto">
          Renowned and relied upon by an extensive network of more than 100
          esteemed companies spanning the globe, our services exemplify
          excellence and unparalleled reliability.
        </p>
      </div>

      <div className="overflow-x-auto w-full scrollbar-hidden mt-10 sm:mt-16">
        <Marquee speed={30} pauseOnHover>
          <div className="grid grid-cols-[repeat(10,_300px)] gap-5 select-none mx-3">
            {TESTIMONIALS.map((t, i) => (
              <Card
                key={i}
                name={t.name}
                img={t.img}
                subject={t.subject}
                testimony={t.testimony}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
