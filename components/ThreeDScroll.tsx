"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y =
        ScrollTrigger.getAll()[0]?.progress * Math.PI * 2 || 0;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
}

export default function ThreeDScroll() {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
