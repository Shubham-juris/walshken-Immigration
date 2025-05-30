import React from "react";

import heroBgImage from "../../assets/hero/HeroBGImage.webp";

import HomeCoursesSection from "./HomeCoursesSection ";

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${heroBgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-2xl">
          <p className="text-lg font-semibold mb-4 ">
            SOLUTIONS FOR ALL TYPE OF VISAS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            APPLY FOR <br /> IMMIGRATION
          </h1>
         
        </div>
      </div>
      <HomeCoursesSection />
    </>
  );
};

export default Hero;
