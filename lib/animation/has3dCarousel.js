
import { Draggable, InertiaPlugin } from "@/lib/plugins";
import gsap from "gsap";

gsap.registerPlugin(Draggable, InertiaPlugin);

const has3DCarousel = () => {
  var cards = gsap.utils.toArray(".creative-pro"),
    dragDistancePerRotation = 3000,
    radius = 520,
    proxy = document.createElement("div"), // just a dummy element that'll get dragged, but we don't care about it.
    progressWrap = gsap.utils.wrap(0, 1),
    spin = gsap.fromTo(cards, {
      rotationY: i => i * 360 / cards.length
    }, {
      rotationY: "-=360",
      duration: 20,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50% " + -radius + "px"
    }),
    startProgress;
console.log(cards)

Draggable.create(proxy, {
  trigger: ".demoWrapper", // activate the dragging when the user presses on the .demoWrapper
  type: "x", // we only care about movement on the x-axis.
  inertia: true,
  allowNativeTouchScrolling: true,
  onPress() {
    gsap.killTweensOf(spin); // if it's in the middle of animating the spin back to timeScale: 1, kill that.
    spin.timeScale(0); // stop the spin.
    startProgress = spin.progress(); // remember the current progress value because we'll make the drag relative to that.
  },
  onDrag: updateRotation,
  onThrowUpdate: updateRotation,
  onRelease() {
    if (!this.tween || !this.tween.isActive()) { // if the user clicked and released (no inertia flick), resume the spin
      gsap.to(spin, {timeScale: 1, duration: 1});
    }
  },
  onThrowComplete() { // resume the spin after the inertia tween finishes
    gsap.to(spin, {timeScale: 1, duration: 1});
  }
});

function updateRotation() {
  let p = startProgress + (this.startX - this.x) / dragDistancePerRotation;
  spin.progress(progressWrap(p));
}

  // Apply scale effect to the front-facing card
  function updateCardScale() {
    cards.forEach((card, index) => {
      const rotation = gsap.getProperty(card, "rotationY");
      // Find the front-facing card (rotateY = 0 or close to 0)
      const isFrontCard = Math.abs(rotation) < 30;
      
      if (isFrontCard) {
        gsap.to(card, { scaleX: 1.5, duration: 2, ease: "power3.out", background: "#F0F0F0" }); // scale up the front card
        gsap.to(spin, { timeScale: 0, duration: 3 }); // pause the rotation
      } else {
        gsap.to(card, { scale: 1, duration: 2, ease: "power3.out", background: "transparent" }); // reset scale for other cards
        gsap.to(spin, { timeScale: 0.5, duration: 2 });
      }
    });
  }

  // Update scale on each frame or rotation
  gsap.ticker.add(updateCardScale);

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
     gsap.to(spin, { timeScale: 0, duration: 1 }); // pause the rotation
  });

  card.addEventListener("mouseleave", () => {
     gsap.to(spin, { timeScale: 1, duration: 1 }); // resume the rotation
  });
});

}



export default has3DCarousel;