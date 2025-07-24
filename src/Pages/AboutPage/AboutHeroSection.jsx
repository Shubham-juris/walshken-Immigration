import React from "react";
import image from "../../assets/hero/WorkVisa.webp";
import AboutCompany from "./AboutCompany ";
import AboutSevices from "./AboutSevices";
import AboutConsultants from "./AboutConsultants";

const AboutHeroSection = () => {
  return (
    <>
      <div
        className="relative w-full h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 7.2)), url(${image})`,
        }}
      >
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white text-center md:text-left lg:px-20">
            About
          </h1>
        </div>
      </div>

      <AboutCompany />
      <AboutSevices />
      <AboutConsultants />
    </>
  );
};

export default AboutHeroSection;
