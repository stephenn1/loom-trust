"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function OurServicesSection() {
  const [isContentIntersecting1, setIsContentIntersecting1] = useState(false);
  const [isContentIntersecting2, setIsContentIntersecting2] = useState(false);
  const [isImageIntersecting1, setIsImageIntersecting1] = useState(false);
  const [isImageIntersecting2, setIsImageIntersecting2] = useState(false);

  const contentRef1 = useRef<HTMLDivElement | null>(null);
  const contentRef2 = useRef<HTMLDivElement | null>(null);
  const imageRef1 = useRef<HTMLDivElement | null>(null);
  const imageRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Content
        if (entry.target.id === "content-1") {
          entry.isIntersecting
            ? setIsContentIntersecting1(true)
            : setIsContentIntersecting1(false);
        }
        // Image
        if (entry.target.id === "image-1") {
          entry.isIntersecting
            ? setIsImageIntersecting1(true)
            : setIsImageIntersecting1(false);
        }
        // Content
        if (entry.target.id === "content-2") {
          entry.isIntersecting
            ? setIsContentIntersecting2(true)
            : setIsContentIntersecting2(false);
        }
        // Image
        if (entry.target.id === "image-2") {
          entry.isIntersecting
            ? setIsImageIntersecting2(true)
            : setIsImageIntersecting2(false);
        }
      });
    });

    imageRef1.current && observer.observe(imageRef1.current);
    contentRef1.current && observer.observe(contentRef1.current);
    imageRef2.current && observer.observe(imageRef2.current);
    contentRef2.current && observer.observe(contentRef2.current);
  }, []);

  return (
    <section
      id="our-services"
      className="relative layout-spacing grid gap-20 py-10"
    >
      <h2
        className={`text-3xl lg:text-5xl text-center font-bold text-primary relative transition-all duration-500`}
      >
        Our Services
      </h2>

      <div className="grid lg:grid-flow-col justify-between container mx-auto gap-5 lg:gap-20 items-center">
        <span
          id="image-1"
          ref={imageRef1}
          className="block overflow-hidden w-[40vw] min-w-[280px] max-w-[500px] mx-auto"
        >
          <Image
            src={"/our-services-img-1.png"}
            width={500}
            height={500}
            priority
            layout="responsive"
            alt="Our Services Illustration"
            className={`relative transition-all duration-700 delay-300 ${
              isImageIntersecting1 ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>

        <div
          id="content-1"
          ref={contentRef1}
          className="grid gap-5 max-w-xl overflow-hidden"
        >
          <div
            className={`grid gap-3 overflow-hidden relative transition-all duration-500 ${
              isContentIntersecting1 ? "left-0" : "-left-full"
            }`}
          >
            <h2
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Send and receive cryptocurrency instantly
            </h2>
            <p
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Send and receive cryptocurrencies instantly. Also track the
              crypto, swap progress on the exchange page.
            </p>
          </div>

          <div
            className={`grid gap-3 overflow-hidden relative transition-all duration-500 ${
              isContentIntersecting1 ? "left-0" : "-left-full"
            }`}
          >
            <h2
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Real-time copy trading
            </h2>
            <p
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Copy trading lets you replicate another trader&apos;s positions in
              real time. Choose your investment amount, and your account will
              automatically mirror their trades.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-flow-col justify-between container mx-auto gap-5 lg:gap-20 items-center">
        <div
          id="content-2"
          ref={contentRef2}
          className="grid gap-5 max-w-xl overflow-hidden"
        >
          <div
            className={`grid gap-3 overflow-hidden relative transition-all duration-500 ${
              isContentIntersecting2 ? "left-0" : "-left-full"
            }`}
          >
            <h2
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Instant withdrawals
            </h2>
            <p
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Experience our instant withdrawal feature, enabling immediate
              transfers to your bank acocunt.
            </p>
          </div>

          <div
            className={`grid gap-3 overflow-hidden relative transition-all duration-500 ${
              isContentIntersecting2 ? "left-0" : "-left-full"
            }`}
          >
            <h2
              className={`text-xl sm:text-3xl text-center lg:text-left font-bold text-primary`}
            >
              Effortless Crypto Mining
            </h2>
            <p
              className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-700 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9`}
            >
              Harness the power of advanced mining technology to earn
              cryptocurrencies seamlessly and efficiently. Let your assets work
              for you.
            </p>
          </div>
        </div>

        <span
          id="image-2"
          ref={imageRef2}
          className="block overflow-hidden w-[40vw] min-w-[280px] max-w-[500px] mx-auto"
        >
          <Image
            src={"/our-services-img-2.png"}
            width={500}
            height={500}
            priority
            layout="responsive"
            alt="Our Services Illustration"
            className={`relative transition-all duration-700 delay-300 ${
              isImageIntersecting2 ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>
      </div>
    </section>
  );
}
