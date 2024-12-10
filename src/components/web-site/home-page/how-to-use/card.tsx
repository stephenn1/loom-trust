import Image from "next/image";
import React from "react";

interface CardProps {
  content: string;
  img: { url: string; alt: string };
  title: string;
}
export default function Card({ content, img, title }: CardProps) {
  return (
    <div className="p-4 rounded-lg border shadow-xl">
      <span className="flex justify-center items-center">
        <Image src={img.url} width={200} height={200} alt={img.alt} />
      </span>
      <div className="mt-4 grid gap-3 text-center">
        <h3 className="text-xl font-semibold md:text-2xl text-primary">
          {title}
        </h3>
        <p className="text-neutral-600 text-base sm:text-xl xl:text-xl md:px-4 px-0">
          {content}
        </p>
      </div>
    </div>
  );
}
