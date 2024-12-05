"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function AboutUsSection() {
  const [isContentIntersecting, setIsContentIntersecting] = useState(false);
  const [isImageIntersecting, setIsImageIntersecting] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Content
        if (entry.target.id === "content") {
          entry.isIntersecting
            ? setIsContentIntersecting(true)
            : setIsContentIntersecting(false);
        }
        // Image
        if (entry.target.id === "image") {
          entry.isIntersecting
            ? setIsImageIntersecting(true)
            : setIsImageIntersecting(false);
        }
      });
    });

    imageRef.current && observer.observe(imageRef.current);
    contentRef.current && observer.observe(contentRef.current);
  }, []);

  return (
    <section
      id="about-us"
      className="relative layout-spacing grid gap-10 py-10"
    >
      <div className="grid lg:grid-flow-col justify-between container mx-auto gap-5 lg:gap-20 items-center">
        <span
          id="image"
          ref={imageRef}
          className="block overflow-hidden w-[40vw] min-w-[280px] max-w-[500px] mx-auto"
        >
          <Image
            src={"/about-us-img.svg"}
            width={500}
            height={500}
            priority
            layout="responsive"
            alt="About Us Illustration"
            className={`relative transition-all duration-700 delay-300 ${
              isImageIntersecting ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>

        <div
          id="content"
          ref={contentRef}
          className="grid gap-5 lg:gap-10 overflow-hidden"
        >
          <h2
            className={`text-3xl lg:text-5xl text-center lg:text-left font-bold text-primary relative transition-all duration-500 ${
              isContentIntersecting ? "left-0" : "-left-full"
            }`}
          >
            About Us
          </h2>
          <p
            className={`text-lg sm:text-xl xl:text-2xl text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-gray-500 sm:leading-[1.7] lg:leading-[1.7] xl:leading-9 relative transition-all duration-500 ${
              isContentIntersecting ? "left-0" : "-left-full"
            }`}
          >
            At Loom Trust, we are redefining how you interact with
            cryptocurrencies. Our secure, intuitive platform empowers users to
            seamlessly send, receive, trade, and withdraw digital assets.
            Whether you&apos;re a beginner or an expert, we prioritize trust,
            simplicity, and innovation, making cryptocurrency accessible to
            everyone. Experience the future of digital finance with us.
          </p>
        </div>
      </div>
    </section>
  );
}
