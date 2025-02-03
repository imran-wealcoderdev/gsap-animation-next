"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3",
  "https://images.unsplash.com/photo-1444723121867-7a241cacace9",
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e",
];

const ImageGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const middleImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && middleImageRef.current) {
      gsap.to(middleImageRef.current, {
        scale: 3,
        zIndex: 10,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div
          key={index}
          ref={index === 4 ? middleImageRef : null}
          className={`relative w-full pb-[100%] overflow-hidden rounded-lg ${
            index === 4 ? "col-span-1 row-span-1" : ""
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Image ${index + 1}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
