"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "@/lib/plugins";

// Register the InertiaPlugin
gsap.registerPlugin(InertiaPlugin);

export default function GsapInertiaAnimation() {
  const letterRef = useRef<SVGTextElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      // Set initial position
      gsap.set(letterRef.current, { x: 50, y: 50 });
    }
  }, []);

  const startAnimation = () => {
    if (letterRef.current) {
      // Stop any existing animation
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Create a new animation
      animationRef.current = gsap.to(letterRef.current, {
        duration: 2,
        x: gsap.utils.wrap([50, 250]),
        y: gsap.utils.wrap([50, 250]),
        ease: "inertia",
        inertia: {
          x: gsap.utils.random(100, 500),
          y: gsap.utils.random(100, 500),

          decay: 0.8,
          end: {
            velocity: 0,
          },
        },
        repeat: -1,
        yoyo: true,
      });
    }
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="border border-gray-300 bg-white mb-4"
      >
        <text
          ref={letterRef}
          x="0"
          y="0"
          fontSize="48"
          fontWeight="bold"
          fill="hsl(var(--primary))"
        >
          A
        </text>
      </svg>
      <div className="space-x-4">
        <button onClick={startAnimation}>Start Animation</button>
        <button onClick={stopAnimation}>Stop Animation</button>
      </div>
    </div>
  );
}
