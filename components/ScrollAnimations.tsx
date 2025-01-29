"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section.querySelector(".animate-me"),
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="space-y-96 pb-96">
      {[...Array(5)].map((_, index) => (
        <section
          key={index}
          ref={addToRefs}
          className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"
        >
          <div className="animate-me bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Section {index + 1}
            </h2>
            <p className="text-gray-600">
              This content will animate as you scroll.
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ScrollAnimations;
