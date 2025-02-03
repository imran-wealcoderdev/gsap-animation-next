import { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function hasLottieAnimation(path: string) {
  const lottieRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading Lottie animation:", error))
  }, [path])

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
        start: "top center",
        end: "bottom center",
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

