"use client";

const Main = () => {
  return (
    <div className="bg-zinc-950">
      <div className="h-[35rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text py-8">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-blue-500">
              Kabir Bose
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-md">
              Software Eng & Cybersecurity
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Main;
