"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathHelper, MotionPathPlugin } from "@/lib/plugins";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MotionPathHelper);

const MotionPathAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);
  useEffect(() => {
    const path = svgRef.current?.querySelector("path");

    if (path) {
      gsap.set("#car", {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
      });
      tween.current = gsap.to("#car", {
        duration: 5,
        motionPath: { path, autoRotate: true },
      });
    }
    // MotionPathHelper.create("#car");
  }, []);
  const handleRestart = () => {
    if (tween.current) {
      tween.current.restart();
    }
  };

  return (
    <div className="bg-black h-[100vh] relative">
      <svg
        ref={svgRef}
        className="overflow-visible h-full"
        width="100%"
        height="100%"
        viewBox="-20 0 557 190"
        id="svg"
      >
        <circle cx="100" cy="100" r="3" />
        <circle cx="300" cy="20" r="3" />
        <path
          strokeWidth="2"
          stroke="gray"
          id="path"
          d="M13.357,89.976 C16.024,87.9 32.854,125.039 45.146,128.338 63.768,133.336 93.498,114.715 98.086,110.674 111.355,98.82 109.341,69.262 121.478,54.193 139.676,31.577 170.2008,21.287 175.773,21.287 209.642,21.287 222.046,27.349 241.546,44.118 264.616,63.962 256.716,101.32 278.096,124.3 302.186,150.19 331.536,171.05 380.466,171.05 402.696,171.05 421.086,168.22 436.306,163.62 464.276,155.17 480.516,140.74 491.086,126.92 497.5435,118.4825 519.417,85.237 517.2,51.221 515.8395,30.4335 517.406,-29.87 458.196,-48.599 407.8437,-64.48295 159.03293,-66.2861 85.52263,-66.46965 79.03643,-66.48585 24.34,-43.042 7.729,2.486 -4.755,36.639 7.486,72.497 14.279,89.227 "
        />
        {/* <g id="rect">
          <rect width="85" height="30" fill="dodgerblue" />
          <text x="10" y="19" font-size="14">
            SVG &lt;rect&gt;
          </text>
        </g> */}
        <g>
          <path
            id="car"
            stroke="white"
            d="M 6.59375 6 C 5.257813 6 4.023438 6.667969 3.28125 7.78125 L 0.5 11.9375 C 0.171875 12.429688 0 13 0 13.59375 L 0 20.21875 C 0 21.132813 0.613281 21.933594 1.5 22.15625 L 4.09375 22.8125 C 4.46875 24.628906 6.078125 26 8 26 C 9.851563 26 11.398438 24.71875 11.84375 23 L 21.15625 23 C 21.601563 24.71875 23.148438 26 25 26 C 26.851563 26 28.398438 24.71875 28.84375 23 L 30 23 C 31.09375 23 32 22.09375 32 21 L 32 17.34375 C 32 15.511719 30.746094 13.910156 28.96875 13.46875 L 23.5625 12.09375 L 19.65625 7.4375 C 18.894531 6.527344 17.78125 6 16.59375 6 Z M 6.59375 8 L 11 8 L 11 12 L 2.875 12 L 4.9375 8.90625 L 4.9375 8.875 C 5.308594 8.316406 5.921875 8 6.59375 8 Z M 13 8 L 16.59375 8 C 17.1875 8 17.746094 8.261719 18.125 8.71875 L 20.875 12 L 13 12 Z M 2 14 L 22.875 14 L 28.5 15.40625 C 29.394531 15.628906 30 16.421875 30 17.34375 L 30 21 L 28.84375 21 C 28.398438 19.28125 26.851563 18 25 18 C 23.148438 18 21.601563 19.28125 21.15625 21 L 11.84375 21 C 11.398438 19.28125 9.851563 18 8 18 C 6.226563 18 4.738281 19.171875 4.21875 20.78125 L 2 20.21875 Z M 8 20 C 9.117188 20 10 20.882813 10 22 C 10 23.117188 9.117188 24 8 24 C 6.882813 24 6 23.117188 6 22 C 6 20.882813 6.882813 20 8 20 Z M 25 20 C 26.117188 20 27 20.882813 27 22 C 27 23.117188 26.117188 24 25 24 C 23.882813 24 23 23.117188 23 22 C 23 20.882813 23.882813 20 25 20 Z"
          ></path>
        </g>
      </svg>
      <button
        onClick={handleRestart}
        className="p-5 bg-blue-400 absolute bottom-[20%] left-1/2"
      >
        Restart
      </button>
    </div>
  );
};

export default MotionPathAnimation;
