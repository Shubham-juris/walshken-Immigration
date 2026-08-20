// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const InadmissibilityServices = () => {
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
//               Overcoming Regulatory Barriers
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Inadmissibility Services
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Address and resolve criminal, medical, financial, or misrepresentation 
//             inadmissibility issues that threaten your status or visa application.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             A finding of inadmissibility can block an application or end a residency status 
//             that took years to build. We provide strategic consulting to identify your options, 
//             respond to government letters, and compile thorough, compliant submissions.
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
//               What is <span className="text-red-500">Immigration Inadmissibility?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Immigration authorities may find an individual inadmissible to enter or remain 
//               in the country for several regulatory reasons. These include past criminal records, 
//               complex medical conditions that may cause excessive demand on public systems, lack of 
//               sufficient financial resources, or accidental administrative misrepresentations.
//             </p>
//            <p className="text-gray-300 leading-relaxed mb-4">
//               Encountering these barriers is highly stressful, as they often involve strict 
//               procedural deadlines. Our consulting team assists you by reviewing the underlying facts, 
//               assessing governmental guidelines, and developing structured responses to overcome these challenges. If you require temporary entry during processing, we can arrange a Temporary Resident Permit under our <Link to="/visitor-visa" className="text-red-500 hover:underline">Visitor Visa Framework</Link>, or build a permanent path via <Link to="/pr" className="text-red-500 hover:underline">Humanitarian & Compassionate PR</Link>.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               Whether you have received a Procedural Fairness Letter (PFL) or are proactively addressing 
//               a past record, our objective is to ensure your explanation is built thoroughly and 
//               presented professionally.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
//               alt="Regulatory Compliance"
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
//                 Responding to Procedural Fairness Letters (PFL)
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 A Procedural Fairness Letter is an immigration officer’s indication that they have 
//                 concerns regarding your eligibility or truthfulness, typically before making a final refusal. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 The timeline to respond to a PFL is exceptionally short and demanding. A weak or 
//                 incomplete reply can lead to an immediate application rejection or, in severe cases, 
//                 a multi-year ban for misrepresentation.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we analyze the exact nature of the officer's concerns, 
//                 advise you on gathering objective evidence, and draft a structured, comprehensive response 
//                 to mitigate processing risks.
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
//                 The Risks of Misrepresentation Findings
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Misrepresentation does not require intent to deceive. Simple errors, such as forgetting 
//                 to declare a minor historical visa refusal from another country, can be interpreted by 
//                 officers as withholding material facts.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 A formal finding of misrepresentation results in a five-year ban from entering or applying. 
//                 Our consultations verify your historical applications to align all declarations perfectly.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Act Proactively</span>
//                 <p className="text-xs text-gray-300">
//                   Addressing past omissions proactively through experienced consulting is far safer than waiting for an officer to issue a PFL.
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
//             Inadmissibility Solutions <span className="text-red-500">We Provide</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Criminal Rehabilitation",
//                 desc: "Assisting individuals with past foreign convictions to apply for formal, permanent rehabilitation to resolve criminal barriers.",
//               },
//               {
//                 title: "Temporary Resident Permits (TRP)",
//                 desc: "Drafting compelling applications for individuals who need temporary entry despite being technically inadmissible.",
//               },
//               {
//                 title: "Medical Inadmissibility Responses",
//                 desc: "Compiling detailed medical mitigation plans and financial outlines to counter excessive demand concerns on social systems.",
//               },
//               {
//                 title: "Procedural Fairness Responses",
//                 desc: "Structuring highly evidence-based, formal responses to address officer doubts regarding eligibility or document truthfulness.",
//               },
//               {
//                 title: "Humanitarian & Compassionate (H&C)",
//                 desc: "Developing complete permanent residency portfolios based on severe hardship and strong establishment in Canada.",
//               },
//               {
//                 title: "Record Suspensions / Pardons",
//                 desc: "Guiding clients through administrative processes to clear past domestic records and restore smooth travel pathways.",
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
//             Our Strategy <span className="text-red-500">For Overcoming Barriers</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Thorough File Analysis",
//                 desc: "We conduct a exhaustive intake review of all prior applications, court documents, or government letters to pinpoint the core regulatory concern.",
//               },
//               {
//                 step: "Step 2: Evidence Gathering & Drafting",
//                 desc: "We coordinate with you to gather robust, objective proof—such as rehabilitation documents or medical opinions—and draft comprehensive response letters.",
//               },
//               {
//                 step: "Step 3: Portal Submission & Follow-up",
//                 desc: "We compile and submit your finished, highly structured response package to authorities, tracking and managing the file closely to resolution.",
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
//                 title: "Risk-Focused Preparation",
//                 desc: "We analyze every possible weakness or document omission in your past records before submitting any files to officers.",
//               },
//               {
//                 title: "Thorough Regulatory Alignment",
//                 desc: "Our responses are mapped strictly to current immigration policy guidelines, helping officers locate key merits quickly.",
//               },
//               {
//                 title: "Dedicated Advisory Support",
//                 desc: "We guide you calmly and clearly through high-stress situations, ensuring complete transparency during your processing.",
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
//             Overcome Inadmissibility Hurdles Today
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Responding to procedural fairness letters or clearing criminal history requires careful, urgent attention. Contact our consulting team today to schedule an in-depth, private assessment.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Request Your Private Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default InadmissibilityServices;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGavel,
  FaPassport,
  FaHeartbeat,
  FaFileAlt,
  FaHandsHelping,
  FaShieldAlt,
  FaSearch,
  FaFileSignature,
  FaPaperPlane
} from "react-icons/fa";

const InadmissibilityServices = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Inadmissibility Solutions (6 Cards with Full Images & Icons)
  const solutions = [
    {
      title: "Criminal Rehabilitation",
      desc: "Assisting individuals with past foreign convictions to apply for formal, permanent rehabilitation to resolve criminal barriers.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L0tkcGxG_hmMWRY2G5sz2srinqE_qHABZXRTUky7vQ&s=10",
      icon: <FaGavel className="text-red-500" />,
    },
    {
      title: "Temporary Resident Permits (TRP)",
      desc: "Drafting compelling applications for individuals who need temporary entry despite being technically inadmissible.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIKss_sBfIip8nkI4y9FRimw6ouMGZYR2LNGkCJonFw&s=10",
      icon: <FaPassport className="text-red-500" />,
    },
    {
      title: "Medical Inadmissibility Responses",
      desc: "Compiling detailed medical mitigation plans and financial outlines to counter excessive demand concerns on social systems.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m_C1bteE_nGbXmqkifyUN3Q7rawdWTrOSz1Yp6nJSg&s=10",
      icon: <FaHeartbeat className="text-red-500" />,
    },
    {
      title: "Procedural Fairness Responses",
      desc: "Structuring highly evidence-based, formal responses to address officer doubts regarding eligibility or document truthfulness.",
      img: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3v09c8i7TfjaDEiXFd1VY1AluAZXbo2oHxeRws01oLg&s=10",
      icon: <FaFileAlt className="text-red-500" />,
    },
    {
      title: "Humanitarian & Compassionate (H&C)",
      desc: "Developing complete permanent residency portfolios based on severe hardship and strong establishment in Canada.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37LwEm7kkHYqMeT9RT_HwaCKgmodG3i55FOT6XZwp_w&s=10",
      icon: <FaHandsHelping className="text-red-500" />,
    },
    {
      title: "Record Suspensions / Pardons",
      desc: "Guiding clients through administrative processes to clear past domestic records and restore smooth travel pathways.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXX16RzxyNgpYu6Ll4bIR5FmALNyqBQBZRZoaQfZj1g&s=10",
      icon: <FaShieldAlt className="text-red-500" />,
    },
  ];

  // 2. Strategy Steps (with Styled Icons)
  const strategySteps = [
    {
      step: "01",
      title: "Thorough File Analysis",
      desc: "We conduct an exhaustive intake review of all prior applications, court documents, or government letters to pinpoint the core regulatory concern.",
      icon: <FaSearch className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Evidence Gathering & Drafting",
      desc: "We coordinate with you to gather robust, objective proof—such as rehabilitation documents or medical opinions—and draft comprehensive response letters.",
      icon: <FaFileSignature className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Portal Submission & Follow-up",
      desc: "We compile and submit your finished, highly structured response package to authorities, tracking and managing the file closely to resolution.",
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
              Overcoming Regulatory Barriers
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Inadmissibility Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Address and resolve criminal, medical, financial, or misrepresentation 
            inadmissibility issues that threaten your status or visa application.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            A finding of inadmissibility can block an application or end a residency status 
            that took years to build. We provide strategic consulting to identify your options, 
            respond to government letters, and compile thorough, compliant submissions.
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
              What is <span className="text-red-500">Immigration Inadmissibility?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Immigration authorities may find an individual inadmissible to enter or remain 
              in the country for several regulatory reasons. These include past criminal records, 
              complex medical conditions that may cause excessive demand on public systems, lack of 
              sufficient financial resources, or accidental administrative misrepresentations.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Encountering these barriers is highly stressful, as they often involve strict 
              procedural deadlines. Our consulting team assists you by reviewing the underlying facts, 
              assessing governmental guidelines, and developing structured responses to overcome these challenges. If you require temporary entry during processing, we can arrange a Temporary Resident Permit under our <Link to="/visitor-visa" className="text-red-500 hover:underline">Visitor Visa Framework</Link>, or build a permanent path via <Link to="/pr" className="text-red-500 hover:underline">Humanitarian & Compassionate PR</Link>.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Whether you have received a Procedural Fairness Letter (PFL) or are proactively addressing 
              a past record, our objective is to ensure your explanation is built thoroughly and 
              presented professionally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
              alt="Regulatory Compliance"
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
                Responding to Procedural Fairness Letters (PFL)
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                A Procedural Fairness Letter is an immigration officer’s indication that they have 
                concerns regarding your eligibility or truthfulness, typically before making a final refusal. 
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                The timeline to respond to a PFL is exceptionally short and demanding. A weak or 
                incomplete reply can lead to an immediate application rejection or, in severe cases, 
                a multi-year ban for misrepresentation.
              </p>
              {/* Cleaned bold tags without raw asterisks */}
              <p className="text-gray-300 leading-relaxed text-sm">
                At <span className="text-white font-bold">Walshken Immigration</span>, we analyze the exact nature of the officer's concerns, 
                advise you on gathering objective evidence, and draft a structured, comprehensive response 
                to mitigate processing risks.
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
                The Risks of Misrepresentation Findings
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Misrepresentation does not require intent to deceive. Simple errors, such as forgetting 
                to declare a minor historical visa refusal from another country, can be interpreted by 
                officers as withholding material facts.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                A formal finding of misrepresentation results in a five-year ban from entering or applying. 
                Our consultations verify your historical applications to align all declarations perfectly.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Act Proactively</span>
                <p className="text-xs text-gray-300">
                  Addressing past omissions proactively through experienced consulting is far safer than waiting for an officer to issue a PFL.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. INADMISSIBILITY SOLUTIONS (6 CARDS WITH FULL IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Resolving Obstacles</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Inadmissibility Solutions <span className="text-red-500">We Provide</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {solutions.map((item, index) => (
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
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Action Plan</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Our Strategy <span className="text-red-500">For Overcoming Barriers</span>
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
              title: "Risk-Focused Preparation",
              desc: "We analyze every possible weakness or document omission in your past records before submitting any files to officers.",
            },
            {
              title: "Thorough Regulatory Alignment",
              desc: "Our responses are mapped strictly to current immigration policy guidelines, helping officers locate key merits quickly.",
            },
            {
              title: "Dedicated Advisory Support",
              desc: "We guide you calmly and clearly through high-stress situations, ensuring complete transparency during your processing.",
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
            Overcome Inadmissibility Hurdles Today
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Responding to procedural fairness letters or clearing criminal history requires careful, urgent attention. Contact our consulting team today to schedule an in-depth, private assessment.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Request Your Private Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default InadmissibilityServices;
