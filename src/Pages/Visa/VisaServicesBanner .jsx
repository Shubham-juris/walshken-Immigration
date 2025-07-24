import React from "react";
import VisaBGImage from "../../assets/hero/BlogPageImg.jpg";
const VisaServicesBanner = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 2.7)), url(${VisaBGImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
        <h1 className="text-4xl md:text-7xl font-bold text-white text-center md:text-left lg:px-20">
          Services
        </h1>
      </div>
    </div>
  );
};

export default VisaServicesBanner;
