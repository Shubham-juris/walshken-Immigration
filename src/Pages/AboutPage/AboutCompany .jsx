// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// import mainImage from "../../assets/hero/TouristVisa.webp";
// import smallImage from "../../assets/hero/home3.webp";

// const AboutCompany = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
      
//       {/* Background Accent */}
//       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
//         {/* Left Side Images */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="relative w-full md:w-1/2"
//         >
//           <img
//             src={mainImage}
//             alt="Main"
//             className="rounded-2xl w-full h-auto object-cover shadow-2xl"
//           />

//           <motion.img
//             src={smallImage}
//             alt="Small"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute -bottom-12 left-10 w-2/3 rounded-xl shadow-2xl border-4 border-gray-900"
//           />
//         </motion.div>

//         {/* Right Side Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2 space-y-6"
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-wide">
//             About Company
//           </p>

//           <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Welcome To Experience <br />
//             <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//               Visa Consulting Firm
//             </span>
//           </h2>

//           <p className="text-gray-300 text-lg leading-relaxed">
//             We are experts in immigration and visa consulting, offering personalized support for students, professionals, and families worldwide. With a proven track record and 99% success rate, we make your global journey smoother.
//           </p>

//           {/* IMPORTANT NOTICE */}
//           <div className="bg-red-500/10 border border-red-500 rounded-2xl p-5 mb-8 backdrop-blur-sm shadow-lg">
//             <p className="text-red-400 text-sm md:text-base font-medium leading-relaxed">
//               Each and every text msg and call is paid.
//               <br />
//               <br />
//               Someone will get back to you in{" "}
//               <span className="text-white font-bold">42 to 72hr</span>
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="flex gap-10 mb-6">
//             <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//               <div className="w-24 h-24 rounded-full border-4 border-red-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
//                 68%
//               </div>
//               <p className="mt-2 font-semibold text-gray-300">
//                 Business Strategy
//               </p>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//               <div className="w-24 h-24 rounded-full border-4 border-red-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
//                 93%
//               </div>
//               <p className="mt-2 font-semibold text-gray-300">
//                 Real Tech Solutions
//               </p>
//             </motion.div>
//           </div>

//           {/* Bullet Points */}
//           <ul className="space-y-4 text-gray-300 font-medium">
//             <motion.li whileHover={{ x: 10 }} className="flex items-center">
//               <FaCheckCircle className="text-red-500 mr-2" />
//               Immigration & Visa Consulting
//             </motion.li>

//             <motion.li whileHover={{ x: 10 }} className="flex items-center">
//               <FaCheckCircle className="text-red-500 mr-2" />
//               Direct Online Interview
//             </motion.li>

//             <motion.li whileHover={{ x: 10 }} className="flex items-center">
//               <FaCheckCircle className="text-red-500 mr-2" />
//               99% Visa Approvals
//             </motion.li>
//           </ul>

//           {/* Extra Highlight Box */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl shadow-lg"
//           >
//             <h3 className="text-xl font-bold mb-2 text-white">
//               Why Choose Us?
//             </h3>
//             <p className="text-gray-300">
//               Our experienced team provides personalized consultations, reliable strategies, and complete end-to-end visa assistance. We ensure your application is smooth, fast, and stress-free.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutCompany;



import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import mainImage from "../../assets/hero/TouristVisa.webp";
import smallImage from "../../assets/hero/smallimageabout.jpg";

// Repurposed CircleCallout (No percentages, fully compliant)
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
          <circle cx="56" cy="56" r={radius} stroke="#374151" strokeWidth="8" fill="transparent" />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#dc2626"
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
        <p className="text-xs text-gray-400 leading-relaxed max-w-[180px]">{desc}</p>
      </div>
    </div>
  );
};

const AboutCompany = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side Images */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2"
        >
          <img
            src={mainImage}
            alt="Main About"
            className="rounded-2xl w-full h-auto object-cover shadow-2xl"
          />

          <motion.img
            src={smallImage}
            alt="Supporting About"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-12 left-10 w-2/3 rounded-xl shadow-2xl border-4 border-gray-900"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <p className="text-red-500 font-semibold uppercase tracking-wide text-xs">
            About Company
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Clear Advice. <br />
            <span className="text-red-500">
              Personalized Attention.
            </span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Walshken Immigration provides Canadian immigration guidance to individuals, families, students, workers, visitors and employers. We begin by understanding your circumstances, then explain the available options, requirements and next steps in clear language.
          </p>

          {/* APPROVED APPOINTMENT NOTICE */}
          <div className="bg-red-500/10 border border-red-500 rounded-2xl p-5 mb-8 backdrop-blur-sm shadow-lg">
            <p className="text-red-400 text-xs md:text-sm font-semibold leading-relaxed">
              APPOINTMENT NOTICE
              <br />
              <span className="text-gray-300 font-normal">
                Consultations are provided by appointment. Complete the{" "}
                <Link to="/form" className="text-red-500 hover:underline font-semibold">Immigration Form</Link>{" "}
                and our team will review the information provided. Consultation fees, availability and scope are confirmed before the appointment.
              </span>
            </p>
          </div>

          {/* Two-Circle Treatment (No percentage stats) */}
          <div className="flex flex-col sm:flex-row gap-10 mb-8">
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

          {/* Bullet Points */}
          <ul className="space-y-3.5 text-gray-300 font-semibold text-sm">
            <motion.li whileHover={{ x: 10 }} className="flex items-center">
              <FaCheckCircle className="text-red-500 mr-2 text-xs" />
              Canadian Immigration Guidance
            </motion.li>

            <motion.li whileHover={{ x: 10 }} className="flex items-center">
              <FaCheckCircle className="text-red-500 mr-2 text-xs" />
              Careful Document Preparation
            </motion.li>

            <motion.li whileHover={{ x: 10 }} className="flex items-center">
              <FaCheckCircle className="text-red-500 mr-2 text-xs" />
              Clear Communication at Each Step
            </motion.li>
          </ul>

          {/* Approved Why Choose Walshken Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg border border-red-950/40"
          >
            <h3 className="text-lg font-bold mb-2 text-white">
              Why Choose Walshken?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We review the information you provide, identify concerns early and clearly explain the requirements and next steps.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
