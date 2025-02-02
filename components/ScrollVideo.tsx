"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollTrigger() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: "top 60%",
        end: "bottom 30%",
        onEnter: () => {
          console.log("Video entered view");
          video.play().catch((e) => console.error("Error playing video:", e));
          setIsPlaying(true);
        },
        onLeave: () => {
          console.log("Video left view");
          video.pause();
          setIsPlaying(false);
        },
        onEnterBack: () => {
          console.log("Video entered view (scrolling up)");
          video.play().catch((e) => console.error("Error playing video:", e));
          setIsPlaying(true);
        },
        onLeaveBack: () => {
          console.log("Video left view (scrolling up)");
          video.pause();
          setIsPlaying(false);
        },
        markers: true,
      },
    });

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      tl.kill();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch((e) => console.error("Error playing video:", e));
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const time = Number.parseFloat(e.target.value);
    video.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Scroll down to play the video
        </h1>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="relative">
          <video
            ref={videoRef}
            className="w-[640px] h-[360px] bg-black object-cover"
            playsInline
            muted
            loop
            preload="metadata"
          >
            <source
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            <source
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
            <div className="flex items-center justify-between">
              <Button
                onClick={togglePlay}
                variant="ghost"
                size="icon"
                className="text-white"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full mx-2"
              />
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Keep scrolling to pause the video
        </h2>
      </div>
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">
          Scroll back up to play the video again
        </p>
      </div>
    </div>
  );
}
