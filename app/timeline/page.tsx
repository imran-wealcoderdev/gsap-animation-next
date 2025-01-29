import TimelineAnimations from "@/components/TimelineAnimations";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        GSAP Timeline Animations
      </h1>
      <TimelineAnimations />
    </main>
  );
}
