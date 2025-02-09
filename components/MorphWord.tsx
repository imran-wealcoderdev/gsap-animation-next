"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "@/lib/plugins";
import { InertiaPlugin } from "@/lib/plugins";

// Register plugins
gsap.registerPlugin(InertiaPlugin, MorphSVGPlugin);

export default function SvgMorphAnimation() {
  const pathRef = useRef<SVGPathElement>(null);
  const targetPath = useRef<SVGPathElement>(null);
  const targetPath2 = useRef<SVGPathElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (pathRef.current && targetPath.current && targetPath2.current) {
      gsap.set(targetPath.current, { display: "none" });
      gsap.set(targetPath2.current, { display: "none" });

      tl.current = gsap.timeline({ repeat: -1 });

      // Forward animations
      tl.current.to(
        pathRef.current,
        {
          duration: 1,
          morphSVG: targetPath.current,
        },
        "+=1"
      );
      // tl.current.to(pathRef.current, {
      //   duration: 1,
      //   morphSVG: targetPath2.current,
      // });

      // Reverse animations
      tl.current.to(
        pathRef.current,
        {
          duration: 1,
          morphSVG: pathRef.current,
        },
        "+=1"
      );
    }
  }, []);

  return (
    <div className="bg-cyan-300">
      <svg
        width="300"
        height="210"
        viewBox="-91.5 -118.5 291.5 204"
        className="border"
      >
        <g transform="matrix(1,0,0,1,0,0)">
          <path
            ref={pathRef}
            d="M112,-98.5 C112,-98.5 -4,-98.5 -4,-98.5 C-4,-98.5 -91.5,85 -91.5,85 C-91.5,85 -5.5,85.5 -5.5,85.5 C-5.5,85.5 9.5,52.5 9.5,52.5 C9.5,52.5 100,52 100,52 C100,52 114,85 114,85 C114,85 200,85 200,85 C200,85 112,-98.5 112,-98.5z"
            stroke="black"
            fill="transparent"
            strokeWidth="2"
          />
          <path
            ref={targetPath}
            d="M77,-118.5 C77,-118.5 21,-98.5 21,-98.5 C21,-98.5 -91.5,85 -91.5,85 C-91.5,85 -5.5,85.5 -5.5,85.5 C-5.5,85.5 9.5,52.5 9.5,52.5 C9.5,52.5 100,52 100,52 C100,52 114,85 114,85 C114,85 200,85 200,85 C200,85 77,-118.5 77,-118.5z"
            stroke="black"
            fill="transparent"
            strokeWidth="2"
          />
          <path
            ref={targetPath2}
            fillOpacity="0"
            strokeMiterlimit="4"
            stroke="rgb(0,0,0)"
            strokeOpacity="1"
            strokeWidth="2"
            d="M86.69920349121094,-112.95760345458984 C86.69920349121094,-112.95760345458984 21,-98.5 21,-98.5 C21,-98.5 -91.5,85 -91.5,85 C-91.5,85 -5.5,85.5 -5.5,85.5 C-5.5,85.5 9.5,52.5 9.5,52.5 C9.5,52.5 100,52 100,52 C100,52 114,85 114,85 C114,85 200,85 200,85 C200,85 86.69920349121094,-112.95760345458984 86.69920349121094,-112.95760345458984z"
          ></path>
        </g>
        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
          <path
            fillOpacity="0"
            strokeMiterlimit="4"
            stroke="rgb(0,0,0)"
            strokeOpacity="1"
            strokeWidth="2"
            d=" M54,-50.5 C54,-50.5 29.5,5.5 29.5,5.5 C29.5,5.5 79,5.5 79,5.5 C79,5.5 54,-50.5 54,-50.5z"
          ></path>
        </g>
      </svg>
    </div>
  );
}
