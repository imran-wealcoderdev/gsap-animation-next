import MorphSvgAnimation from "@/components/MorphSvgAnimation";

export default function TimelineScrollPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        GSAP DrawSvg animation
      </h1>
      <MorphSvgAnimation />
    </main>
  );
}
