import dynamic from "next/dynamic";
const LottieAnimation = dynamic(() => import("@/components/LottieAnimation"), {
  ssr: false, // Disable server-side rendering
});

const page = () => {
  return (
    <main>
      <LottieAnimation />
    </main>
  );
};

export default page;
