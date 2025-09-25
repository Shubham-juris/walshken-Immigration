import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/hero/HeroBGImage.webp"; 
import CoachingCards from "./Services";
import AboutVisa from "../../Components/About";
import ContactForm from "../../Components/ContactForm";
import logo from "../../assets/hero/logo.webp"; // Import your logo here


// Loading Component with Logo
const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-red-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          
          {/* Inner ring */}
          <div className="w-14 h-14 border-4 border-red-500 border-b-transparent rounded-full animate-spin mx-auto absolute top-3 left-3"></div>
          
          {/* Logo in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img 
              src={logo} 
              alt="Walshken Immigration Logo" 
              className="w-10 h-10 object-contain" 
            />
          </div>
        </div>
        <p className="mt-6 text-xl text-white font-semibold">Welcome to Walshken Immigration</p>
        <p className="mt-2 text-red-300">Your journey to a better future starts here...</p>
      </div>
    </div>
  );
};

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 second loading time

    return () => clearTimeout(timer);
  }, []);

  // Show loading page while content is loading
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <header className="relative bg-gradient-to-r from-black via-gray-900 to-red-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Immigration Banner"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center">
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-center md:text-left md:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Walshken</span>{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Immigration
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
              className="mt-4 text-lg md:text-xl text-gray-300"
            >
              Trusted solutions for Study Visa, Work Visa, PR, and more.  
              Start your journey to a better future today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="/contact"
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              >
                Book Consultation
              </a>
              <a
                href="/services"
                className="px-6 py-3 border-2 border-red-500 text-white font-semibold rounded-full hover:bg-red-600 hover:text-white transition-transform transform hover:scale-105"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          >
            <img
              src={heroImage}
              alt="Immigration Concept"
              className="w-[400px] md:w-[500px] rounded-xl shadow-2xl border-4 border-red-600"
            />
          </motion.div>
        </div>
      </header>

      {/* Other Sections */}
      <CoachingCards />
      <AboutVisa />
      <ContactForm />
    </>
  );
};

export default Header;