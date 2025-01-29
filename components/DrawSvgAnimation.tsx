"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "@/lib/plugins";

gsap.registerPlugin(DrawSVGPlugin);

const DrawSvgAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");

    if (paths) {
      gsap.fromTo(
        paths,
        { drawSVG: "0%" }, // Start with no stroke drawn
        {
          drawSVG: "100%", // Animate to fully drawn
          duration: 2,
          stagger: 0.3, // Add delay between each letter
          ease: "power1.inOut",
          repeat: -1, // Loop infinitely
          yoyo: true, // Reverse the animation on repeat
        }
      );
    }
  }, []);

  ///custom svg
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    // Fetch your custom SVG file
    fetch("/assets/svg/img.svg") // Replace with the actual path to your SVG file
      .then((response) => response.text())
      .then((data) => setSvgContent(data));
  }, []);

  useEffect(() => {
    if (svgContent && containerRef.current) {
      const paths = containerRef.current?.querySelectorAll("path");
      console.log("-----", containerRef.current);

      if (paths) {
        gsap.fromTo(
          paths,
          { drawSVG: "0%", opacity: 0 }, // Start with no stroke drawn
          {
            drawSVG: "100%", // Animate to fully drawn
            duration: 1,
            stagger: 0.3, // Add delay between each letter

            ease: "power1.inOut",
            repeat: -1, // Loop infinitely
            yoyo: true, // Reverse the animation on repeat
            // stroke: "black",
            // strokeWidth: 1,
            fill: "green",

            opacity: 1,
          }
        );
      }
    }
  }, [svgContent]);

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        {/* <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100"
        className="w-96"
        stroke="white"
        strokeWidth="4"
        fill="none"
      >

        <path d="M10 90 V10 L50 90 V10" />
        <path d="M10 90 V10 H50 A20 20 0 0 1 50 50 H10 M30 50 L50 90" />
        <path d="M70 10 V90 L110 10 V90" />
        <path d="M150 90 V10 L190 50 V10" />
        <path d="M210 10 L210 90 L250 10 L250 90" />
        <path d="M270 90 L310 10 L350 90" />
      </svg> */}

        <svg
          ref={svgRef}
          // xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="100"
          viewBox="0 0 500 100"
          fill="none"
          stroke="White"
          strokeWidth="2"
        >
          {/* <!-- I --> */}
          <path d="M10 10 H30 M20 10 V90 M10 90 H30" />

          {/* <!-- M --> */}
          <path d="M50 90 V10 L70 50 L90 10 V90" />

          {/* <!-- R --> */}
          <path d="M110 90 V10 H150 A20 20 0 0 1 150 50 H110 M130 50 L150 90" />

          {/* <!-- A --> */}
          <path d="M170 90 L190 10 H210 L230 90 M180 60 H220" />

          {/* <!-- N --> */}
          <path d="M250 90 V10 L290 90 V10" />
        </svg>
      </div>

      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div
          ref={containerRef}
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="w-96"
        />
      </div>
    </div>
  );
};

export default DrawSvgAnimation;
