"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TimelineScrolltrigger = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [progress, setProgress] = useState(0);

  const createTimeline = () => {
    if (containerRef.current) {
      const elements = containerRef.current.children;

      timeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center-=100",
          end: "bottom bottom",
          markers: true,
          toggleActions: "play none none reverse",
        },
      });
      timeline.current.addLabel("midPoint", 2);

      timeline.current
        // .from(elements[0], { x: -100, opacity: 0, duration: 0.5 })
        // .from(elements[1], { x: 100, opacity: 0, duration: 0.5 })
        // .from(elements[2], { y: 50, opacity: 0, duration: 0.5 })
        // .to(elements[0], { rotation: 360, scale: 1.2, duration: 1 }, "<")
        // .to(elements[1], {
        //   backgroundColor: "#ff6b6b",
        //   color: "#fff",
        //   duration: 0.5,
        // })
        // .to(elements[0], { backgroundColor: "#9333ea", scale: 0.7 })
        .fromTo(
          elements[0],
          { x: 160, y: 320, ease: "power3", scale: 0.3 },
          { x: 250, y: -50, ease: "back", duration: 1, scale: 1 }
        )
        .fromTo(
          elements[1],
          { x: 100, y: 220, ease: "power3", scale: 0.3 },
          { x: -200, y: -50, ease: "back", duration: 1, scale: 1 },
          "<"
        );
    }
  };

  useEffect(() => {
    createTimeline();
    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  const restartAnimation = () => {
    if (timeline.current) {
      timeline.current.kill();
    }

    const elements = containerRef.current?.children;
    if (elements) {
      // Reset all elements to their initial state
      gsap.set(elements, {
        clearProps: "all",
      });
    }

    createTimeline();
    setProgress(0);
  };

  const pauseAnimation = () => {
    timeline.current?.pause();
  };

  const playAnimation = () => {
    timeline.current?.play();
  };

  const reverseAnimation = () => {
    timeline.current?.reverse();
  };

  const killAnimation = () => {
    if (timeline.current) {
      timeline.current.kill();
      setProgress(0);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number.parseFloat(e.target.value);
    setProgress(newProgress);
    timeline.current?.progress(newProgress / 100);
  };

  useEffect(() => {
    const updateProgress = () => {
      if (timeline.current) {
        setProgress(timeline.current.progress() * 100);
      }
    };

    const intervalId = setInterval(updateProgress, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-200 ">
      <div className="h-[100vh] w-full bg-orange-200"></div>
      <div ref={containerRef} className="mb-8 ">
        <div className="w-32 h-32 text-white bg-blue-500 rounded-full mb-4 flex items-center justify-center z-[1] relative">
          ImR
        </div>
        <div className="w-64 h-16 bg-green-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold z-[1] relative">
          Hello, GSAP!
        </div>
        <div className="w-[400px] h-[400px]  rounded-lg z-[2] relative">
          <Image
            src="/assets/imgs/giftbox.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        <button
          onClick={restartAnimation}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Restart
        </button>
        <button
          onClick={pauseAnimation}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Pause
        </button>
        <button
          onClick={playAnimation}
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
        >
          Play
        </button>
        <button
          onClick={reverseAnimation}
          className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
        >
          Reverse
        </button>
        <button
          onClick={killAnimation}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Kill
        </button>
      </div>
      <div className="flex items-center gap-4 w-full max-w-md">
        <label htmlFor="progress" className="text-gray-700">
          Progress:
        </label>
        <input
          id="progress"
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-full"
        />
        <span className="text-gray-700">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default TimelineScrolltrigger;
