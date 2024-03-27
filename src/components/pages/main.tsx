"use client";

const Main = () => {
  return (
    <div className="h-[35rem] w-full bg-zinc-900 bg-grid-white/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="font-bold relative z-20 bg-clip-text py-8">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-blue-500">
            Kabir Bose
          </h1>
          <p className="text-2xl md:text-3xl font-md">
            Software Eng & Cybersecurity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
