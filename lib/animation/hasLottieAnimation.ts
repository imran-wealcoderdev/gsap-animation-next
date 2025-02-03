import { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function hasLottieAnimation(animationSource: string | object) {
  const lottieRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {

      if (typeof animationSource === "string") {
        // If it's a URL or path, fetch the JSON
        fetch(animationSource)
        .then((response) => response.json())
        .then((data) => setAnimationData(data))
        .catch((error) => console.error("Error loading Lottie animation:", error))
      } else {
        // If it's already an object, use it directly
        setAnimationData(animationSource)
      }
  }, [animationSource])

  useEffect(() => {
    if (!lottieRef.current || !animationData) return

    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData,
    })

    const setupScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: lottieRef.current,
        start: "top center-=300",
        end: "bottom top",
        markers: true,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          if (animationRef.current) {
            animationRef.current.goToAndStop(self.progress * animationRef.current.totalFrames, true)
          }
        },
      })
    }

    animationRef.current.addEventListener("DOMLoaded", setupScrollTrigger)

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animationData])

  return lottieRef
}

