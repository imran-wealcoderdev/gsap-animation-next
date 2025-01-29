"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (boxRef.current) {
  //     gsap.fromTo(
  //       boxRef.current,
  //       {
  //         opacity: 0,
  //         x: -100,

  //         scale: 0.5,
  //         duration: 1.5,
  //         ease: "elastic.out(1, 0.5)",
  //       },
  //       { x: 200, opacity: 1, rotation: -360 }
  //     );
  //   }
  // }, []);

  const handleGsapFrom = () => {
    if (boxRef.current) {
      gsap.from(boxRef.current, {
        opacity: 0,
        x: -200,
        rotation: -360,
        scale: 0.5,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      });
    }
  };

  const handleGsapTo = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        rotation: "+=360",
        scale: 1.2,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  const handleGsapFromTo = () => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        {
          opacity: 0,
          x: -200,
          scale: 0.5,
          duration: 1.5,
          rotation: 0,
          ease: "elastic.out(1, 0.5)",
        },
        { x: 200, opacity: 1, scale: 1, rotation: 360 }
      );
    }
  };

  return (
    <div>
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
        />
      </svg>
      <div
        ref={boxRef}
        className="w-32 h-32 bg-blue-500 rounded-lg cursor-pointer text-white text-center"
        onClick={() => {}}
      >
        ImR
      </div>
      <div className="button-wrapper flex gap-10">
        <button
          className="rounded-lg border px-10 py-[15px]"
          onClick={handleGsapTo}
        >
          To
        </button>
        <button
          className="rounded-lg border px-10 py-[15px]"
          onClick={handleGsapFrom}
        >
          From
        </button>
        <button
          className="rounded-lg border px-10 py-[15px]"
          onClick={handleGsapFromTo}
        >
          FromTo
        </button>
      </div>
    </div>
  );
};

export default AnimatedBox;
