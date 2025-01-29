"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TimelineAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [progress, setProgress] = useState(0);

  const createTimeline = () => {
    if (containerRef.current) {
      const elements = containerRef.current.children;

      timeline.current = gsap.timeline({ paused: true });
      timeline.current.addLabel("midPoint", 2);

      timeline.current
        .from(elements[0], { x: -100, opacity: 0, duration: 0.5 })
        .from(elements[1], { x: 100, opacity: 0, duration: 0.5 })
        .from(elements[2], { y: 50, opacity: 0, duration: 0.5 })
        .to(elements[0], { rotation: 360, scale: 1.2, duration: 1 }, "<")
        .to(elements[1], {
          backgroundColor: "#ff6b6b",
          color: "#fff",
          duration: 0.5,
        })
        .to(elements[0], { backgroundColor: "#9333ea", scale: 0.7 })
        .fromTo(
          elements[0],
          { x: 0, y: 200, ease: "power3" },
          { x: 100, y: -50, ease: "back", duration: 1 }
        )
        .fromTo(
          elements[1],
          { x: -60, y: 200, ease: "power3" },
          { x: -200, y: -50, ease: "back", duration: 1 },
          "<"
        );

      timeline.current.play();
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
    <div className="flex flex-col items-center">
      <div ref={containerRef} className="mb-8">
        <div className="w-32 h-32 text-white bg-blue-500 rounded-full mb-4 flex items-center justify-center">
          ImR
        </div>
        <div className="w-64 h-16 bg-green-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
          Hello, GSAP!
        </div>
        <div className="w-48 h-48 bg-yellow-500 rounded-lg"></div>
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

export default TimelineAnimations;
