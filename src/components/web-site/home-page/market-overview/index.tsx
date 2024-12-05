import React from "react";
import CryptoCurrencyMarketWidget from "./crypto-currency-market-widget";

export default function MarketOverview() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-secondary grid layout-spacing"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-primary">
        Market Overview
      </h2>

      <div className="custom-container grid gap-5 mt-10">
        {/* <Ticker /> */}
        <CryptoCurrencyMarketWidget />
      </div>
    </section>
  );
}
