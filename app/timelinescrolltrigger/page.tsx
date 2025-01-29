import TimelineScrolltrigger from "@/components/TimelineScrolltrigger";

export default function TimelineScrollPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        GSAP ScrollTrigger Timeline Animations Scroll Down
      </h1>
      <TimelineScrolltrigger />
    </main>
  );
}
