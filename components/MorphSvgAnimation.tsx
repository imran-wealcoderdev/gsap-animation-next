"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "@/lib/plugins"; // assuming you have the plugin imported here

gsap.registerPlugin(MorphSVGPlugin);

const MorphSvgAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleClick = () => {
      const path = svgRef.current?.querySelector("path");

      // Ensure path is valid before calling gsap.to()
      if (path) {
        gsap.to(path, {
          duration: 1,
          morphSVG: "M10 2V14H3V2H10ZM14 14V2H21V14H14Z", // morph to thumb icon
          ease: "power1.inOut",
        });
      }
    };

    if (svgRef.current) {
      svgRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (svgRef.current) {
        svgRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
        fill="none"
        stroke="black"
        strokeWidth="2"
      >
        {/* Initial Heart Path */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
};

export default MorphSvgAnimation;
