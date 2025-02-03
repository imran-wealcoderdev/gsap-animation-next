"use client";

import { useGSAP } from "@gsap/react";
import { hasLottieAnimation } from "@/lib/animation/hasLottieAnimation";

const LottieAnimation = () => {
  const lottieRef = hasLottieAnimation(
    "https://assets.codepen.io/35984/tapered_hello.json"
  );
  console.log(lottieRef);

  return (
    <div className="bg-[#0e100f] lottie-animation">
      <h1 className="text-4xl font-bold mb-8">Lottie Scroll Animation</h1>
      <p className="mb-8">Scroll down to see the animation progress</p>
      <div className="h-screen"></div> {/* Spacer to allow scrolling */}
      <div ref={lottieRef}></div>
    </div>
  );
};

export default LottieAnimation;
