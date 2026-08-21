// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const USVisasTravelWaivers = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-24 px-6 text-center relative overflow-hidden">
//         <motion.div
//           className="max-w-4xl mx-auto relative z-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-[1px] w-8 bg-red-500"></span>
//             <span className="text-xs font-bold tracking-widest uppercase text-red-500">
//               Cross-Border Entry & Waiver Solutions
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             US Visas & Travel Waivers
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Secure professional consulting support for US temporary entry visas 
//             and Advance Permission waivers to overcome past inadmissibility at the US border.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             Whether traveling for business, tourism, or corporate relocation, US Customs and Border 
//             Protection (CBP) enforces strict entry guidelines. We assist in preparing detailed 
//             application portfolios and travel waivers to help you navigate cross-border entry smoothly.
//           </p>
//         </motion.div>
//       </section>

//       {/* About Section */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//               Navigating <span className="text-red-500">US Entry Barriers</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               For Canadian citizens, permanent residents, and foreign nationals, traveling to or working in 
//               the United States involves navigating complex non-immigrant classifications. For those with a history 
//               of minor criminal convictions, past overstays, or visa denials, entering the US can result in a finding of 
//               inadmissibility by CBP officers at ports of entry.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Overcoming these entry barriers requires applying for a temporary travel waiver (such as the I-192 
//               Advance Permission to Enter). This process involves compiling detailed police clearances, court records, 
//               and rehabilitation portfolios.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               Inadmissibility issues at the US border do not resolve automatically over time. We assist in building 
//               structured, compliant portfolios that clearly address CBP requirements to establish your temporary intent and rehabilitation.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80"
//               alt="Golden Gate US Travel"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="space-y-6"
//           >
//             <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20">
//               <h3 className="text-2xl font-bold text-red-500 mb-4">
//                 The US Border Waiver Process (I-192)
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 If you are a Canadian citizen who is inadmissible to the US due to a criminal record, past immigration 
//                 violation, or deportation order, you must apply for an I-192 Waiver through the CBP Admissibility Review Office (ARO).
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 These waivers are granted for temporary periods ranging from one to five years. Preparing the application 
//                 requires arranging state clearances, fingerprinting (RCMP and FBI), proof of rehabilitation, and detailed 
//                 explanation letters.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we guide you through the process of compiling these complex portfolios, 
//                 ensuring your explanations address CBP criteria.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="space-y-6"
//           >
//             <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 CUSMA Professional Work Entry (TN Visa)
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 The Canada-United States-Mexico Agreement (CUSMA / USMCA) allows Canadian citizens in designated 
//                 professions (such as engineers, computer systems analysts, or management consultants) to apply for 
//                 TN work authorization directly at ports of entry.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 While fast-tracked, these applications are heavily scrutinized by CBP officers. The employer support 
//                 letter must strictly align with CUSMA professional descriptions and credential requirements.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Corporate Relocations</span>
//                 <p className="text-xs text-gray-300">
//                   Where US-bound work authorizations require E-2 Treaty Investor status or L-1 Intra-Company transfers, we coordinate closely with <Link to="/business-visa" className="text-red-500 hover:underline font-semibold text-xs">Business Visa Options</Link> and assist professional class applicants with CUSMA requirements under our <Link to="/work-visa" className="text-red-500 hover:underline font-semibold text-xs">Work Visa Services</Link>.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Cross-Border Services <span className="text-red-500">We Assist With</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "US Waiver Applications (I-192)",
//                 desc: "Assembling comprehensive packages for Advance Permission to Enter as a Nonimmigrant, addressing past inadmissibility concerns.",
//               },
//               {
//                 title: "CUSMA TN Visa Support",
//                 desc: "Drafting detailed employer support letters and verifying candidate credentials to support TN application reviews at the border.",
//               },
//               {
//                 title: "L-1 Intra-Company Transfers",
//                 desc: "Structuring business transfer files for executives, managers, or specialized knowledge personnel relocating to US affiliates.",
//               },
//               {
//                 title: "B-1 / B-2 Travel Portfolios",
//                 desc: "Assisting business travelers and tourists in organizing robust proof of ties and purpose-of-travel portfolios.",
//               },
//               {
//                 title: "E-2 Treaty Investor Support",
//                 desc: "Coordinating with cross-border partners to structure business investment files for entrepreneurs starting ventures in the US.",
//               },
//               {
//                 title: "Prior US Refusal Consultation",
//                 desc: "Analyzing past US visa denials or border turn-backs to determine appropriate corrective strategies.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800/40 text-left"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold text-red-500 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Step Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Our Strategy <span className="text-red-500">For US Portfolios</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Admissibility Analysis",
//                 desc: "We perform a thorough evaluation of your travel history, past applications, or criminal records to identify potential border issues.",
//               },
//               {
//                 step: "Step 2: File Structure & Document Prep",
//                 desc: "We assist with gathering fingerprints, court records, employer letters, and proof of rehabilitation to build a detailed application.",
//               },
//               {
//                 step: "Step 3: Submission & Portal Support",
//                 desc: "We coordinate the preparation and submission of your waiver packages through designated systems (such as e-SAFE) or for port-of-entry presentation.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-red-950 to-black border border-red-900/20 rounded-xl text-left"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-white">
//                   {item.step}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Why <span className="text-red-500">Choose Walshken Immigration?</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Thorough Compliance Focus",
//                 desc: "We examine every aspect of your application, ensuring employer support letters and personal histories align strictly with CBP expectations.",
//               },
//               {
//                 title: "Specialized Waiver Experience",
//                 desc: "We understand the exact evidentiary requirements CBP Admissibility Review Officers look for when assessing I-192 waivers.",
//               },
//               {
//                 title: "Structured, Step-by-Step Guidance",
//                 desc: "We guide you systematically through fingerprinting processes, court document retrieval, and the filing stages.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-red-800/40 text-left"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-lg font-bold text-red-500 mb-3 text-left">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 text-center bg-gradient-to-t from-red-950/20 to-transparent">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           className="max-w-4xl mx-auto px-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Coordinate Your Cross-Border Travel With Confidence
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Resolving inadmissibility at the US border or preparing CUSMA employment portfolios requires careful planning. Contact our consulting team today to schedule an initial consultation.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Request Your US Travel Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default USVisasTravelWaivers;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPassport,
  FaBriefcase,
  FaExchangeAlt,
  FaSuitcaseRolling,
  FaHandshake,
  FaRedoAlt,
  FaSearch,
  FaFileInvoiceDollar,
  FaPaperPlane
} from "react-icons/fa";

const USVisasTravelWaivers = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Cross-Border Services (6 Cards with Full Images & Icons)
  const crossBorderServices = [
    {
      title: "US Waiver Applications (I-192)",
      desc: "Assembling comprehensive packages for Advance Permission to Enter as a Nonimmigrant, addressing past inadmissibility concerns.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisRHuSwCi0J9qfWpy4z91sohgnH1hi7GK_U4hJ5esjg&s=10",
      icon: <FaPassport className="text-red-500" />,
    },
    {
      title: "CUSMA TN Visa Support",
      desc: "Drafting detailed employer support letters and verifying candidate credentials to support TN application reviews at the border.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfptxW1X2Ab5FW6yk_dL0oX3zQYFUnzC1bhar9Xc2Fdg&s=10",
      icon: <FaBriefcase className="text-red-500" />,
    },
    {
      title: "L-1 Intra-Company Transfers",
      desc: "Structuring business transfer files for executives, managers, or specialized knowledge personnel relocating to US affiliates.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Y574OHgKMjvVIIPU199R8yqX4EQ30yaOWbqhgYBfAw&s=10",
      icon: <FaExchangeAlt className="text-red-500" />,
    },
    {
      title: "B-1 / B-2 Travel Portfolios",
      desc: "Assisting business travelers and tourists in organizing robust proof of ties and purpose-of-travel portfolios.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqjiW7qhsDPutqaaeK7XWJWbab4xZ3RlUlNfD8ydfoA&s=10",
      icon: <FaSuitcaseRolling className="text-red-500" />,
    },
    {
      title: "E-2 Treaty Investor Support",
      desc: "Coordinating with cross-border partners to structure business investment files for entrepreneurs starting ventures in the US.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAz6wz-gocAJX8ZTvFWYcujTZzKJk0Zf22AdDgj4HgA&s=10",
      icon: <FaHandshake className="text-red-500" />,
    },
    {
      title: "Prior US Refusal Consultation",
      desc: "Analyzing past US visa denials or border turn-backs to determine appropriate corrective strategies.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AsUxehLAZYg7Ep7b5cQnCb6rmZjBBYPuLpK6rHB3iA&s=10",
      icon: <FaRedoAlt className="text-red-500" />,
    },
  ];

  // 2. Strategy Steps (with Styled Icons)
  const strategySteps = [
    {
      step: "01",
      title: "Admissibility Analysis",
      desc: "We perform a thorough evaluation of your travel history, past applications, or criminal records to identify potential border issues.",
      icon: <FaSearch className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "File Structure & Document Prep",
      desc: "We assist with gathering fingerprints, court records, employer letters, and proof of rehabilitation to build a detailed application.",
      icon: <FaFileInvoiceDollar className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Submission & Portal Support",
      desc: "We coordinate the preparation and submission of your waiver packages through designated systems (such as e-SAFE) or for port-of-entry presentation.",
      icon: <FaPaperPlane className="text-white text-2xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center relative overflow-hidden border-b border-red-950/40">
        <motion.div
          className="max-w-4xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-red-500"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-red-500">
              Cross-Border Entry & Waiver Solutions
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            US Visas & Travel Waivers
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Secure professional consulting support for US temporary entry visas 
            and Advance Permission waivers to overcome past inadmissibility at the US border.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Whether traveling for business, tourism, or corporate relocation, US Customs and Border 
            Protection (CBP) enforces strict entry guidelines. We assist in preparing detailed 
            application portfolios and travel waivers to help you navigate cross-border entry smoothly.
          </p>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Navigating <span className="text-red-500">US Entry Barriers</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For Canadian citizens, permanent residents, and foreign nationals, traveling to or working in 
              the United States involves navigating complex non-immigrant classifications. For those with a history 
              of minor criminal convictions, past overstays, or visa denials, entering the US can result in a finding of 
              inadmissibility by CBP officers at ports of entry.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Overcoming these entry barriers requires applying for a temporary travel waiver (such as the I-192 
              Advance Permission to Enter). This process involves compiling detailed police clearances, court records, 
              and rehabilitation portfolios.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Inadmissibility issues at the US border do not resolve automatically over time. We assist in building 
              structured, compliant portfolios that clearly address CBP requirements to establish your temporary intent and rehabilitation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80"
              alt="Golden Gate US Travel"
              className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover h-[380px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. DEEP DIVE SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20">
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                The US Border Waiver Process (I-192)
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                If you are a Canadian citizen who is inadmissible to the US due to a criminal record, past immigration 
                violation, or deportation order, you must apply for an I-192 Waiver through the CBP Admissibility Review Office (ARO).
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                These waivers are granted for temporary periods ranging from one to five years. Preparing the application 
                requires arranging state clearances, fingerprinting (RCMP and FBI), proof of rehabilitation, and detailed 
                explanation letters.
              </p>
              {/* Cleaned bold tags without raw asterisks */}
              <p className="text-gray-300 leading-relaxed text-sm">
                At <span className="text-white font-bold">Walshken Immigration</span>, we guide you through the process of compiling these complex portfolios, 
                ensuring your explanations address CBP criteria.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                CUSMA Professional Work Entry (TN Visa)
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                The Canada-United States-Mexico Agreement (CUSMA / USMCA) allows Canadian citizens in designated 
                professions (such as engineers, computer systems analysts, or management consultants) to apply for 
                TN work authorization directly at ports of entry.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                While fast-tracked, these applications are heavily scrutinized by CBP officers. The employer support 
                letter must strictly align with CUSMA professional descriptions and credential requirements.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Corporate Relocations</span>
                <p className="text-xs text-gray-300">
                  Where US-bound work authorizations require E-2 Treaty Investor status or L-1 Intra-Company transfers, we coordinate closely with <Link to="/business-visa" className="text-red-500 hover:underline font-semibold text-xs">Business Visa Options</Link> and assist professional class applicants with CUSMA requirements under our <Link to="/work-visa" className="text-red-500 hover:underline font-semibold text-xs">Work Visa Services</Link>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. CROSS-BORDER SERVICE SUPPORT (TITLE UPDATED & 6 IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Our Capabilities</p>
          {/* UPDATED TITLE */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Cross-Border <span className="text-red-500">Service Support</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {crossBorderServices.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:border-red-500/40 transition-all flex flex-col justify-between group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.2}
              variants={fadeUp}
            >
              {/* Card Image Header */}
              <div className="relative h-44 overflow-hidden bg-gray-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-gray-950/90 px-3 py-1.5 rounded-lg border border-gray-700">
                  {item.icon}
                  <span className="text-xs font-bold text-white">{item.title.split(" ")[0]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. OUR STRATEGY (WITH STYLED ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Our Strategy <span className="text-red-500">For US Portfolios</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {strategySteps.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-2xl text-center flex flex-col items-center justify-between shadow-xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.3}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center mb-4 shadow-lg shadow-red-900/40">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-1">Step {item.step}</span>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. WHY CHOOSE WALSHKEN IMMIGRATION?
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Why Walshken</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Why <span className="text-red-500">Choose Walshken Immigration?</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Thorough Compliance Focus",
              desc: "We examine every aspect of your application, ensuring employer support letters and personal histories align strictly with CBP expectations.",
            },
            {
              title: "Specialized Waiver Experience",
              desc: "We understand the exact evidentiary requirements CBP Admissibility Review Officers look for when assessing I-192 waivers.",
            },
            {
              title: "Structured, Step-by-Step Guidance",
              desc: "We guide you systematically through fingerprinting processes, court document retrieval, and the filing stages.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-950 border border-gray-800 rounded-xl text-left shadow-lg hover:border-red-500/40 transition-all"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.2}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-red-500 mb-2 text-left">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. CALL TO ACTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/40 via-black to-gray-950 border-t border-red-950/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight">
            Coordinate Your Cross-Border Travel With Confidence
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Resolving inadmissibility at the US border or preparing CUSMA employment portfolios requires careful planning. Contact our consulting team today to schedule an initial consultation.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Request Your US Travel Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default USVisasTravelWaivers;
