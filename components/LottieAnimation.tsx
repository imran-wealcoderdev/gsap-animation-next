"use client";

import { useGSAP } from "@gsap/react";
import { hasLottieAnimation } from "@/lib/animation/hasLottieAnimation";
import lottieAnim from "@/public/assets/lottie/lottieanimation.json";
import loadingAnim from "@/public/assets/lottie/loading.json";

const LottieAnimation = () => {
  // const lottieRef = hasLottieAnimation(
  //   "https://assets.codepen.io/35984/tapered_hello.json"
  // );
  // const lottieRef = hasLottieAnimation(lottieAnim);
  const lottieRef = hasLottieAnimation(loadingAnim);
  const lottieRef2 = hasLottieAnimation(
    "https://assets.codepen.io/35984/tapered_hello.json"
  );

  console.log(lottieRef);

  return (
    <div className="bg-[#0e100f]">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Lottie Scroll Animation
      </h1>
      <p className="mb-8 text-white">
        Scroll down to see the animation progress
      </p>
      {/* <div className="h-screen"></div>  */}
      <div className=" w-[90vw] left-[5vw]" ref={lottieRef}></div>
      <div
        className="lottie-animation w-[90vw] left-[5vw]"
        ref={lottieRef2}
      ></div>
    </div>
  );
};

export default LottieAnimation;
