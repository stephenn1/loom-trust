import React from "react";
import Marquee from "react-fast-marquee";

export default function Statistics() {
  return (
    <section className="overflow-hidden w-screen">
      <Marquee direction="right">
        <div className="flex w-full justify-around">
          <div className="text-center mx-10">
            <h3 className="text-primary text-3xl font-bold">14M</h3>
            <p className="text-xl">Happy Users</p>
          </div>
          <div className="text-center  mx-10">
            <h3 className="text-primary text-3xl font-bold">24+</h3>
            <p className="text-xl">Supported Countries</p>
          </div>
          <div className="text-center mx-10">
            <h3 className="text-primary text-3xl font-bold">200+</h3>
            <p className="text-xl">successful Transactions</p>
          </div>
          <div className="text-center mx-10">
            <h3 className="text-primary text-3xl font-bold">98%</h3>
            <p className="text-xl">Client Satisfaction</p>
          </div>
          <div className="text-center mx-10">
            <h3 className="text-primary text-3xl font-bold">2K+</h3>
            <p className="text-xl">New User Per Month</p>
          </div>
          <div className="text-center mx-10">
            <h3 className="text-primary text-3xl font-bold">4.7</h3>
            <p className="text-xl">AVG Rating</p>
          </div>
        </div>
      </Marquee>
    </section>
  );
}
