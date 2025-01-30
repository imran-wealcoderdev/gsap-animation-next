"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathHelper, MotionPathPlugin } from "@/lib/plugins";

gsap.registerPlugin(MotionPathPlugin);

const MotionPathAnimation = () => {
  return <div>MotionPathAnimation</div>;
};

export default MotionPathAnimation;
