// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import heroImage from "../../assets/hero/HeroBGImage.webp"; 
// import CoachingCards from "./Services";
// import AboutVisa from "../../Components/About";
// import ContactForm from "../../Components/ContactForm";
// import logo from "../../assets/hero/logo.webp"; // Import your logo here


// // Loading Component with Logo
// const LoadingPage = () => {
//   return (
//     <div className="fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-red-900 flex items-center justify-center z-50">
//       <div className="text-center">
//         <div className="relative">
//           {/* Outer ring */}
//           <div className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          
//           {/* Inner ring */}
//           <div className="w-14 h-14 border-4 border-red-500 border-b-transparent rounded-full animate-spin mx-auto absolute top-3 left-3"></div>
          
//           {/* Logo in center */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <img 
//               src={logo} 
//               alt="Walshken Immigration Logo" 
//               className="w-10 h-10 object-contain" 
//             />
//           </div>
//         </div>
//         <p className="mt-6 text-xl text-white font-semibold">Welcome to Walshken Immigration</p>
//         <p className="mt-2 text-red-300">Your journey to a better future starts here...</p>
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate page loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // 3 second loading time

//     return () => clearTimeout(timer);
//   }, []);

//   // Show loading page while content is loading
//   if (isLoading) {
//     return <LoadingPage />;
//   }

//   return (
//     <>
//       <header className="relative bg-gradient-to-r from-black via-gray-900 to-red-900 text-white overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={heroImage}
//             alt="Immigration Banner"
//             className="w-full h-full object-cover opacity-80"
//           />
//           <div className="absolute inset-0 bg-black/70"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center">
//           {/* Left Side Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 2, ease: "easeInOut" }}
//             className="text-center md:text-left md:w-1/2"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
//               className="text-4xl md:text-6xl font-extrabold leading-tight"
//             >
//               <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Walshken</span>{" "}
//               <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
//                 Immigration
//               </span>
//             </motion.h1>

//             {/* <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
//               className="mt-4 text-lg md:text-xl text-gray-300"
//             >
//               Trusted solutions for Study Visa, Work Visa, PR, and more.  
//               Start your journey to a better future today.
//             </motion.p> */}
//              <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
//               className="mt-4 text-lg md:text-xl text-gray-300"
//             >
//               Trusted solutions for{" "}
//               <Link to="/study-visa" className="text-red-400 hover:underline font-semibold">
//                 Study Visa
//               </Link>
//               ,{" "}
//               <Link to="/work-visa" className="text-red-400 hover:underline font-semibold">
//                 Work Visa
//               </Link>
//               ,{" "}
//               <Link to="/pr" className="text-red-400 hover:underline font-semibold">
//                 PR
//               </Link>
//               , and more. Start your journey to a better future today.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
//               className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//               <a
//                 href="/contact"
//                 className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
//               >
//                 Book Consultation
//               </a>
//               <a
//                 href="/services"
//                 className="px-6 py-3 border-2 border-red-500 text-white font-semibold rounded-full hover:bg-red-600 hover:text-white transition-transform transform hover:scale-105"
//               >
//                 Explore Services
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right Side Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
//             className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           >
//             <img
//               src={heroImage}
//               alt="Immigration Concept"
//               className="w-[400px] md:w-[500px] rounded-xl shadow-2xl border-4 border-red-600"
//             />
//           </motion.div>
//         </div>
//       </header>

//       {/* Other Sections */}
//       <CoachingCards />
//       <AboutVisa />
//       <ContactForm />
//     </>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import heroImage from "../../assets/hero/HeroBGImage.webp"; 
// import CoachingCards from "./Services";
// import HomeCoursesSection from "./HomeCourseSection";
// import logo from "../../assets/hero/logo.webp"; 

// // Loading Component with Logo
// const LoadingPage = () => {
//   return (
//     <div className="fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-red-900 flex items-center justify-center z-50">
//       <div className="text-center">
//         <div className="relative">
//           {/* Outer ring */}
//           <div className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          
//           {/* Inner ring */}
//           <div className="w-14 h-14 border-4 border-red-500 border-b-transparent rounded-full animate-spin mx-auto absolute top-3 left-3"></div>
          
//           {/* Logo in center */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <img 
//               src={logo} 
//               alt="Walshken Immigration Logo" 
//               className="w-10 h-10 object-contain" 
//             />
//           </div>
//         </div>
//         <p className="mt-6 text-xl text-white font-semibold">Welcome to Walshken Immigration</p>
//         <p className="mt-2 text-red-300">Your journey to a better future starts here...</p>
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate page loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // 3 second loading time

//     return () => clearTimeout(timer);
//   }, []);

//   // Show loading page while content is loading
//   if (isLoading) {
//     return <LoadingPage />;
//   }

//   return (
//     <>
//       <header className="relative bg-gradient-to-r from-black via-gray-900 to-red-900 text-white overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={heroImage}
//             alt="Immigration Banner"
//             className="w-full h-full object-cover opacity-80"
//           />
//           <div className="absolute inset-0 bg-black/70"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center">
//           {/* Left Side Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 2, ease: "easeInOut" }}
//             className="text-center md:text-left md:w-1/2"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
//               className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             >
//               Professional Guidance for Your Canadian Immigration Journey
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
//               className="mt-4 text-base md:text-lg text-gray-300 space-y-4"
//             >
//               <p>
//                 Clear, personalized support for individuals, families and employers navigating Canadian
//                 immigration programs and application requirements.
//               </p>
//               <p>
//                 Whether you are planning to study, work, visit, reunite with family or build your future in Canada, 
//                 Walshken Immigration can help you understand your options and prepare for the next step.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
//               className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//               <Link
//                 to="/services"
//                 className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
//               >
//                 Explore Services
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Right Side Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
//             className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           >
//             <img
//               src={heroImage}
//               alt="Immigration Concept"
//               className="w-[400px] md:w-[500px] rounded-xl shadow-2xl border-4 border-red-600"
//             />
//           </motion.div>
//         </div>
//       </header>

//       {/* Other Sections */}
//       <CoachingCards />
//       <HomeCoursesSection />
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Asset Imports (Relative to src/Pages/HomePage/)
import logo from "../../assets/hero/logo.webp";
import heroImage from "../../assets/hero/HeroBGImage.webp";
import citizen from "../../assets/hero/citizentest.jpg";
import ielts from "../../assets/hero/ielts.jpg";
import toefl from "../../assets/hero/coaching.jpg";
import oet from "../../assets/hero/oet.jpg";
import studentVisa from "../../assets/hero/studentVisa.webp"; 
import visa2 from "../../assets/hero/VisaImg.jpg";

// ==========================================
// 1. LOADING SCREEN COMPONENT
// ==========================================
const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-red-900 flex items-center justify-center z-[9999]">
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

// ==========================================
// 2. TWO-CIRCLE CALLOUT COMPONENT
// ==========================================
const CircleCallout = ({ label, desc, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (inView) {
      controls.start({ strokeDashoffset: 0 });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="flex flex-col sm:flex-row items-center gap-4 max-w-sm">
      <div className="relative w-28 h-28 flex-shrink-0">
        <svg className="w-28 h-28 transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#374151" // gray-700
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#dc2626" // red-600
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={controls}
            initial={{ strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-center p-2">
          <p className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">
            {label.split(" ")[0]} <br />
            <span className="text-red-500">{label.split(" ")[1] || ""}</span>
          </p>
        </div>
      </div>

      <div className="text-center sm:text-left">
        <h4 className="font-bold text-white text-base mb-1">{label}</h4>
        <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">{desc}</p>
      </div>
    </div>
  );
};

// ==========================================
// 3. MASTER HOME PAGE COMPONENT
// ==========================================
const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const marqueeControls = useAnimation();
  const navigate = useNavigate();

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Approved 5 Coaching Services
  const coachingServices = [
    {
      title: "IELTS Coaching",
      description: "Prepare for Listening, Reading, Writing and Speaking with targeted practice and practical feedback on the areas that need the most work.",
      image: ielts,
    },
    {
      title: "PTE Coaching",
      description: "Build familiarity with PTE Academic through task strategies, timed practice and feedback designed to improve accuracy and confidence.",
      image: studentVisa,
    },
    {
      title: "TOEFL Coaching",
      description: "Work through the Reading, Listening, Speaking and Writing sections with guided practice that reflects the test format.",
      image: toefl,
    },
    {
      title: "OET Coaching",
      description: "Profession-specific English preparation for healthcare candidates, with focused practice across the four tested language skills.",
      image: oet,
    },
    {
      title: "Citizenship Test Preparation",
      description: "Review Discover Canada, practise with guided questions and spend more time on the topics you find difficult.",
      image: citizen,
    },
  ];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-black min-h-screen text-white">
      {/* ────────────────────────────────────────────────────────
          SECTION 3.1: HEADER AND HERO
          ──────────────────────────────────────────────────────── */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center">
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-center md:text-left md:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
            >
              Professional Guidance for Your Canadian Immigration Journey
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              className="mt-6 text-base md:text-lg text-gray-300 space-y-4"
            >
              <p>
                Clear, personalized support for individuals, families and employers navigating Canadian
                immigration programs and application requirements.
              </p>
              <p>
                Whether you are planning to study, work, visit, reunite with family or build your future in Canada, 
                Walshken Immigration can help you understand your options and prepare for the next step.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="/services"
                className="px-8 py-3.5 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
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

      {/* ────────────────────────────────────────────────────────
          SECTION 3.2: COACHING SERVICES (MARQUEE)
          ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-red-900 overflow-hidden">
        <div className="max-w-7xl mx-auto relative mb-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Our Coaching Services
            </span>
          </h2>
          <p className="text-center text-sm text-gray-300 max-w-xl mx-auto mb-14 font-medium">
            Focused preparation, practical feedback and a clear study plan for the test ahead of you.
          </p>

          <div
            className="relative flex overflow-hidden w-full"
            onMouseEnter={() => marqueeControls.stop()}
            onMouseLeave={() => marqueeControls.start("animate")}
          >
            {/* Track 1 */}
            <motion.div
              className="flex gap-12 flex-shrink-0 pr-12"
              variants={marqueeVariants}
              animate={marqueeControls}
              initial="animate"
            >
              {coachingServices.map((service, index) => (
                <div
                  key={`track1-${index}`}
                  className="flex items-center gap-6 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl p-8 w-[360px] border border-gray-800 hover:border-red-500 hover:shadow-red-600/40 cursor-pointer transition-all"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-24 rounded-full object-cover border-4 border-red-500 shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs font-semibold">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Track 2 (duplicate) */}
            <motion.div
              className="flex gap-12 flex-shrink-0"
              variants={marqueeVariants}
              animate={marqueeControls}
              initial="animate"
            >
              {coachingServices.map((service, index) => (
                <div
                  key={`track2-${index}`}
                  className="flex items-center gap-6 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl p-8 w-[360px] border border-gray-800 hover:border-red-500 hover:shadow-red-600/40 cursor-pointer transition-all"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-24 rounded-full object-cover border-4 border-red-500 shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs font-semibold">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 3.3: ABOUT COMPANY
          ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-red-900 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative flex justify-center">
            <motion.img
              src={studentVisa}
              alt="Visa Consulting"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.img
              src={visa2}
              alt="Visa Documents"
              className="absolute bottom-[-40px] left-12 rounded-2xl shadow-2xl w-64 border-4 border-red-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-red-500 font-semibold uppercase tracking-wide text-xs mb-2">
              About Company
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Clear Advice. <br />
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Personalized Attention.
              </span>
            </h2>
            
            <div className="text-gray-300 text-sm md:text-base mb-8 space-y-4 leading-relaxed">
              <p>
                Walshken Immigration helps individuals, families and employers understand their Canadian 
                immigration options. We explain requirements, documentation and next steps in plain language 
                so clients can make informed decisions about how to proceed.
              </p>
              <p>
                Every matter begins with the client’s actual circumstances. We listen first, review the information 
                provided and offer support within the scope of the service agreed upon.
              </p>
            </div>

            {/* Approved Two-Circle Treatment (No percentage claims) */}
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <CircleCallout 
                label="Clear Guidance" 
                desc="Straightforward explanations of requirements, documents and next steps." 
                delay={0.2} 
              />
              <CircleCallout 
                label="Organized Preparation" 
                desc="Careful help gathering and arranging information for the application being prepared." 
                delay={0.4} 
              />
            </div>

            {/* Approved Checklist */}
            <ul className="space-y-3.5 mb-8">
              {[
                "Immigration support for individuals and families",
                "Employer and business immigration services",
                "IELTS, PTE, TOEFL, OET, and Citizenship Test coaching",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-gray-200 font-semibold text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition transform hover:scale-105"
            >
              Learn More About Walshken
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 3.4: CONSULTATION GUIDANCE SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white border-t border-red-950/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12">
          {/* Left Column: How We Support You */}
          <motion.div 
            className="bg-black/40 p-8 rounded-xl border border-red-950/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">How We Support You</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              We begin by understanding what you want to achieve and where you are in the process. From
              there, we review the information you provide, explain the options that may apply and outline
              the next steps for the service you choose.
            </p>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3.5 font-bold">1.</span>
                <span>Understand your immigration goal and immediate concerns.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3.5 font-bold">2.</span>
                <span>Review the information and history you provide.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3.5 font-bold">3.</span>
                <span>Explain relevant options, requirements and possible issues.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3.5 font-bold">4.</span>
                <span>Help you prepare for the next step within the agreed scope of service.</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Before Your Consultation */}
          <motion.div 
            className="bg-black/40 p-8 rounded-xl border border-red-950/20 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Before Your Consultation</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                A little preparation helps us use the consultation time well. Be ready to discuss:
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Your immigration goal.</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Your current immigration status and country of residence.</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Any previous applications or refusals.</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  <span>Important dates, deadlines or changes in your circumstances.</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  <span>The questions you want answered first.</span>
                </li>
              </ul>
            </div>
            <Link
              to="/form"
              className="w-full block text-center py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Header;
