import ImageGrid from "@/components/ImageGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Image Grid Animation
        </h1>
        <div className="h-screen flex items-center justify-center">
          <p className="text-2xl text-gray-600">
            Scroll down to see the effect
          </p>
        </div>
        <ImageGrid />
        <div className="h-screen"></div>
      </main>
    </div>
  );
}
