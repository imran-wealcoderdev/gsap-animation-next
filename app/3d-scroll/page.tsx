export default function ThreeDScrollPage() {
  return (
    <main className="h-[300vh] relative">
      <div className="sticky top-0 h-screen"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <h1 className="text-4xl font-bold text-white text-center">
          Scroll to rotate the 3D model
        </h1>
      </div>
    </main>
  );
}
