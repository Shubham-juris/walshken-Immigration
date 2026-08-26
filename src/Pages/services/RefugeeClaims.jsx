// import React from "react";
// import { useNavigate , Link} from "react-router-dom";
// import { motion } from "framer-motion";

// const RefugeeClaims = () => {
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
//               Protection & Humanitarian Pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Refugee Claims & Protection
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Navigate the Canadian refugee protection system with dedicated, professional 
//             consulting support during one of the most critical times of your life.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             A refugee claim is not merely a set of forms; it directly concerns your safety, 
//             well-being, and future. We assist you in presenting your narrative accurately and 
//             completely to the Immigration and Refugee Board of Canada (IRB).
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
//               Understanding Refugee <span className="text-red-500">Protection in Canada</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               In Canada, you have the right to seek professional consulting representation to assist 
//               you with your refugee claim. Because the refugee determination process is highly structured, 
//               carries strict procedural timelines, and often takes considerable time to finalize, 
//               having professional advisors is strongly recommended.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               The application journey is complex and demands thorough preparation, patience, and 
//               accurate decision-making. We stand by you to offer clear regulatory strategy, 
//               patience, and detailed attention to your personal file. If your claim encounters complications, 
//               we also provide specialized <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link> and represent 
//               clients facing <Link to="/detention-removal" className="text-red-500 hover:underline">Detention & Removal</Link> challenges.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               We help make sure your story is communicated truthfully, comprehensively, and 
//               with absolute administrative precision, avoiding clerical errors that could delay 
//               your protection hearing.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
//               alt="Refugee Support"
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
//                 What Our Consulting Representation Ensures
//               </h3>
//               <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//                 Navigating a claim before the Refugee Protection Division (RPD) requires compiling 
//                 objective country condition documentation alongside your personal narrative. We provide 
//                 comprehensive support to ensure:
//               </p>
//               <ul className="space-y-3 text-gray-300 text-sm">
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1.5">•</span>
//                   <span>Personal documents are securely collected, verified, and organized systematically.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1.5">•</span>
//                   <span>Basis of Claim (BOC) narratives are drafted with absolute care, aligning with objective facts.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1.5">•</span>
//                   <span>Relevant, verified international country conditions are thoroughly researched and presented.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1.5">•</span>
//                   <span>All immigration portals, forms, and updates are managed within strict regulatory deadlines.</span>
//                 </li>
//               </ul>
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
//                 Immediate Action block: Arrival in Canada
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 If you have recently arrived in Canada and intend to seek asylum or refugee protection, 
//                 it is critical to understand the immediate administrative steps. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 How and where you make your claim, what documentation must be produced, and when your initial 
//                 eligibility interview will take place are key elements to organize as early as possible.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Consult Early</span>
//                 <p className="text-xs text-gray-300">
//                   Securing professional advisory support early in your arrival helps ensure your initial declarations are consistent and complete.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Refugee Program Sub-categories */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Refugee Services <span className="text-red-500">We Support</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Basis of Claim (BOC) Preparation",
//                 desc: "Assistance with structuring and drafting your primary narrative, which serves as the core foundation for your entire claim.",
//               },
//               {
//                 title: "RPD Hearing Prep",
//                 desc: "Complete simulation and structural preparation for your hearing before the Refugee Protection Division.",
//               },
//               {
//                 title: "RAD Appeal Support",
//                 desc: "Advising and preparing administrative submissions to the Refugee Appeal Division if your primary claim is rejected.",
//               },
//               {
//                 title: "Humanitarian & Compassionate (H&C)",
//                 desc: "Formulating detailed residency applications based on domestic establishment and best interests of affected children.",
//               },
//               {
//                 title: "Pre-Removal Risk Assessments",
//                 desc: "Guiding you through PRRA submissions to demonstrate risk of persecution if returned to your home country.",
//               },
//               {
//                 title: "Resettlement Sponsorships",
//                 desc: "Assisting family groups and organizations with private sponsorships of refugees from outside Canadian borders.",
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

//       {/* Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Refugee Claim <span className="text-red-500">Milestones</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Intake & BOC Strategy",
//                 desc: "We perform a thorough review of your narrative, highlight core protection grounds, and draft your Basis of Claim form.",
//               },
//               {
//                 step: "Step 2: Document Collection & Research",
//                 desc: "Gathering supporting proof of identity, incident records, medical assessments, and relevant objective country data.",
//               },
//               {
//                 step: "Step 3: Board Representation Support",
//                 desc: "Comprehensive hearing preparation and guidance throughout the process to ensure your claim is communicated clearly.",
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
//                 title: "Thorough Compliance & Care",
//                 desc: "We approach your protection case with high attention to detail, verifying your supporting proof meticulously.",
//               },
//               {
//                 title: "Objective Policy Focus",
//                 desc: "We verify your narrative directly against domestic laws and current international country guidelines.",
//               },
//               {
//                 title: "Dedicated Client Communication",
//                 desc: "We prioritize regular updates and clarify every milestone of your claim with clear, supportive language.",
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
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto px-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Secure Experienced Protection Guidance
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Refugee claim timelines are rigid and demand structured preparation from day one. Contact our consulting team today to coordinate an initial assessment of your file.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Book Your Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default RefugeeClaims;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaFileAlt,
//   FaUsers,
//   FaGavel,
//   FaHeart,
//   FaShieldAlt,
//   FaHandsHelping,
//   FaUserCheck,
//   FaSearch,
//   FaLandmark
// } from "react-icons/fa";

// const RefugeeClaims = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // 1. Refugee Services (6 Cards with Full Images & Icons)
//   const refugeeServices = [
//     {
//       title: "Basis of Claim (BOC) Preparation",
//       desc: "Assistance with structuring and drafting your primary narrative, which serves as the core foundation for your entire claim.",
//       img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
//       icon: <FaFileAlt className="text-red-500" />,
//     },
//     {
//       title: "RPD Hearing Prep",
//       desc: "Complete simulation and structural preparation for your hearing before the Refugee Protection Division.",
//       img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
//       icon: <FaUsers className="text-red-500" />,
//     },
//     {
//       title: "RAD Appeal Support",
//       desc: "Advising and preparing administrative submissions to the Refugee Appeal Division if your primary claim is rejected.",
//       img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
//       icon: <FaGavel className="text-red-500" />,
//     },
//     {
//       title: "Humanitarian & Compassionate (H&C)",
//       desc: "Formulating detailed residency applications based on domestic establishment and best interests of affected children.",
//       img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
//       icon: <FaHeart className="text-red-500" />,
//     },
//     {
//       title: "Pre-Removal Risk Assessments",
//       desc: "Guiding you through PRRA submissions to demonstrate risk of persecution if returned to your home country.",
//       img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
//       icon: <FaShieldAlt className="text-red-500" />,
//     },
//     {
//       title: "Resettlement Sponsorships",
//       desc: "Assisting family groups and organizations with private sponsorships of refugees from outside Canadian borders.",
//       img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
//       icon: <FaHandsHelping className="text-red-500" />,
//     },
//   ];

//   // 2. Refugee Claim Milestones (with Styled Icons)
//   const claimMilestones = [
//     {
//       step: "01",
//       title: "Intake & BOC Strategy",
//       desc: "We perform a thorough review of your narrative, highlight core protection grounds, and draft your Basis of Claim form.",
//       icon: <FaUserCheck className="text-white text-2xl" />,
//     },
//     {
//       step: "02",
//       title: "Document Collection & Research",
//       desc: "Gathering supporting proof of identity, incident records, medical assessments, and relevant objective country data.",
//       icon: <FaSearch className="text-white text-2xl" />,
//     },
//     {
//       step: "03",
//       title: "Board Representation Support",
//       desc: "Comprehensive hearing preparation and guidance throughout the process to ensure your claim is communicated clearly.",
//       icon: <FaLandmark className="text-white text-2xl" />,
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen font-sans">
//       {/* ────────────────────────────────────────────────────────
//           1. HERO SECTION
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-24 px-6 text-center relative overflow-hidden border-b border-red-950/40">
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
//               Protection & Humanitarian Pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Refugee Claims & Protection
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
//             Navigate the Canadian refugee protection system with dedicated, professional 
//             consulting support during one of the most critical times of your life.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             A refugee claim is not merely a set of forms; it directly concerns your safety, 
//             well-being, and future. We assist you in presenting your narrative accurately and 
//             completely to the Immigration and Refugee Board of Canada (IRB).
//           </p>
//         </motion.div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           2. ABOUT SECTION
//           ──────────────────────────────────────────────────────── */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//               Understanding Refugee <span className="text-red-500">Protection in Canada</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               In Canada, you have the right to seek professional consulting representation to assist 
//               you with your refugee claim. Because the refugee determination process is highly structured, 
//               carries strict procedural timelines, and often takes considerable time to finalize, 
//               having professional advisors is strongly recommended.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               The application journey is complex and demands thorough preparation, patience, and 
//               accurate decision-making. We stand by you to offer clear regulatory strategy, 
//               patience, and detailed attention to your personal file. If your claim encounters complications, 
//               we also provide specialized <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link> and represent 
//               clients facing <Link to="/detention-removal" className="text-red-500 hover:underline">Detention & Removal</Link> challenges.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               We help make sure your story is communicated truthfully, comprehensively, and 
//               with absolute administrative precision, avoiding clerical errors that could delay 
//               your protection hearing.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
//               alt="Refugee Support"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover h-[380px]"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           3. DEEP DIVE SECTION
//           ──────────────────────────────────────────────────────── */}
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
//                 What Our Consulting Representation Ensures
//               </h3>
//               <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//                 Navigating a claim before the Refugee Protection Division (RPD) requires compiling 
//                 objective country condition documentation alongside your personal narrative. We provide 
//                 comprehensive support to ensure:
//               </p>
//               <ul className="space-y-3 text-gray-300 text-xs sm:text-sm">
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1">•</span>
//                   <span>Personal documents are securely collected, verified, and organized systematically.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1">•</span>
//                   <span>Basis of Claim (BOC) narratives are drafted with absolute care, aligning with objective facts.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1">•</span>
//                   <span>Relevant, verified international country conditions are thoroughly researched and presented.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-red-500 mt-1">•</span>
//                   <span>All immigration portals, forms, and updates are managed within strict regulatory deadlines.</span>
//                 </li>
//               </ul>
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
//                 Immediate Action: Arrival in Canada
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 If you have recently arrived in Canada and intend to seek asylum or refugee protection, 
//                 it is critical to understand the immediate administrative steps. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 How and where you make your claim, what documentation must be produced, and when your initial 
//                 eligibility interview will take place are key elements to organize as early as possible.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Consult Early</span>
//                 <p className="text-xs text-gray-300">
//                   Securing professional advisory support early in your arrival helps ensure your initial declarations are consistent and complete.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           4. REFUGEE SERVICES WE SUPPORT (6 CARDS WITH FULL IMAGES)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Protection Pathways</p>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-white">
//             Refugee Services <span className="text-red-500">We Support</span>
//           </h2>
//         </motion.div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {refugeeServices.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:border-red-500/40 transition-all flex flex-col justify-between group"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index * 0.2}
//               variants={fadeUp}
//             >
//               {/* Card Image Header */}
//               <div className="relative h-44 overflow-hidden bg-gray-900">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
//                 <div className="absolute top-3 left-3 flex items-center gap-2 bg-gray-950/90 px-3 py-1.5 rounded-lg border border-gray-700">
//                   {item.icon}
//                   <span className="text-xs font-bold text-white">{item.title.split(" ")[0]}</span>
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="p-6 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           5. REFUGEE CLAIM MILESTONES (WITH STYLED ICONS)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Step-By-Step Roadmap</p>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-white">
//             Refugee Claim <span className="text-red-500">Milestones</span>
//           </h2>
//         </motion.div>

//         <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
//           {claimMilestones.map((item, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-2xl text-center flex flex-col items-center justify-between shadow-xl"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index * 0.3}
//               variants={fadeUp}
//             >
//               <div className="w-16 h-16 rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center mb-4 shadow-lg shadow-red-900/40">
//                 {item.icon}
//               </div>
//               <div>
//                 <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-1">Step {item.step}</span>
//                 <h3 className="text-lg font-bold mb-2 text-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           6. WHY CHOOSE WALSHKEN IMMIGRATION?
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Why Walshken</p>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-white">
//             Why <span className="text-red-500">Choose Walshken Immigration?</span>
//           </h2>
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
//           {[
//             {
//               title: "Thorough Compliance & Care",
//               desc: "We approach your protection case with high attention to detail, verifying your supporting proof meticulously.",
//             },
//             {
//               title: "Objective Policy Focus",
//               desc: "We verify your narrative directly against domestic laws and current international country guidelines.",
//             },
//             {
//               title: "Dedicated Client Communication",
//               desc: "We prioritize regular updates and clarify every milestone of your claim with clear, supportive language.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-gray-950 border border-gray-800 rounded-xl text-left shadow-lg hover:border-red-500/40 transition-all"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index * 0.2}
//               variants={fadeUp}
//             >
//               <h3 className="text-lg font-bold text-red-500 mb-2 text-left">
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           7. CALL TO ACTION
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-24 text-center bg-gradient-to-t from-red-950/40 via-black to-gray-950 border-t border-red-950/40">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="max-w-4xl mx-auto px-6"
//         >
//           <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight">
//             Secure Experienced Protection Guidance
//           </h2>
//           <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             Refugee claim timelines are rigid and demand structured preparation from day one. Contact our consulting team today to coordinate an initial assessment of your file.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
//           >
//             Book Your Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default RefugeeClaims;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaUsers,
  FaGavel,
  FaHeart,
  FaShieldAlt,
  FaHandsHelping,
  FaUserCheck,
  FaSearch,
  FaLandmark
} from "react-icons/fa";

const RefugeeClaims = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Refugee Services (6 Cards with Full Images & Icons)
  const refugeeServices = [
    {
      title: "Basis of Claim (BOC) Preparation",
      desc: "Assistance with structuring and drafting your primary narrative, which serves as the core foundation for your entire claim.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ExYeAwXs7oYQpJgKFQRyj7WrWsVcqUolRumMRWHqRw&s=10",
      icon: <FaFileAlt className="text-red-500" />,
    },
    {
      title: "RPD Hearing Prep",
      desc: "Complete simulation and structural preparation for your hearing before the Refugee Protection Division.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvsairMNPqnT_WlV-7ttoZJ_T0Ud6iqLKibwrcRUZ8A&s=10",
      icon: <FaUsers className="text-red-500" />,
    },
    {
      title: "RAD Appeal Support",
      desc: "Advising and preparing administrative submissions to the Refugee Appeal Division if your primary claim is rejected.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      icon: <FaGavel className="text-red-500" />,
    },
    {
      title: "Humanitarian & Compassionate (H&C)",
      desc: "Formulating detailed residency applications based on domestic establishment and best interests of affected children.",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
      icon: <FaHeart className="text-red-500" />,
    },
    {
      title: "Pre-Removal Risk Assessments",
      desc: "Guiding you through PRRA submissions to demonstrate risk of persecution if returned to your home country.",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      icon: <FaShieldAlt className="text-red-500" />,
    },
    {
      title: "Resettlement Sponsorships",
      desc: "Assisting family groups and organizations with private sponsorships of refugees from outside Canadian borders.",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
      icon: <FaHandsHelping className="text-red-500" />,
    },
  ];

  // 2. Refugee Claim Milestones (with Styled Icons)
  const claimMilestones = [
    {
      step: "01",
      title: "Intake & BOC Strategy",
      desc: "We perform a thorough review of your narrative, highlight core protection grounds, and draft your Basis of Claim form.",
      icon: <FaUserCheck className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Document Collection & Research",
      desc: "Gathering supporting proof of identity, incident records, medical assessments, and relevant objective country data.",
      icon: <FaSearch className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Board Representation Support",
      desc: "Comprehensive hearing preparation and guidance throughout the process to ensure your claim is communicated clearly.",
      icon: <FaLandmark className="text-white text-2xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION (FIXED DESCENDER CLIPPING ON 'g')
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
              Protection & Humanitarian Pathways
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          
          {/* Added leading-[1.2], pb-2, and overflow-visible to prevent cutting the 'g' */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 pb-2 leading-[1.2] bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent overflow-visible">
            Refugee Claims & Protection
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Navigate the Canadian refugee protection system with dedicated, professional 
            consulting support during one of the most critical times of your life.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            A refugee claim is not merely a set of forms; it directly concerns your safety, 
            well-being, and future. We assist you in presenting your narrative accurately and 
            completely to the Immigration and Refugee Board of Canada (IRB).
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
            <h2 className="text-3xl font-bold mb-6 pb-1 leading-normal bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Understanding Refugee <span className="text-red-500">Protection in Canada</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In Canada, you have the right to seek professional consulting representation to assist 
              you with your refugee claim. Because the refugee determination process is highly structured, 
              carries strict procedural timelines, and often takes considerable time to finalize, 
              having professional advisors is strongly recommended.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The application journey is complex and demands thorough preparation, patience, and 
              accurate decision-making. We stand by you to offer clear regulatory strategy, 
              patience, and detailed attention to your personal file. If your claim encounters complications, 
              we also provide specialized <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link> and represent 
              clients facing <Link to="/detention-removal" className="text-red-500 hover:underline">Detention & Removal</Link> challenges.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              We help make sure your story is communicated truthfully, comprehensively, and 
              with absolute administrative precision, avoiding clerical errors that could delay 
              your protection hearing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
              alt="Refugee Support"
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
                What Our Consulting Representation Ensures
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Navigating a claim before the Refugee Protection Division (RPD) requires compiling 
                objective country condition documentation alongside your personal narrative. We provide 
                comprehensive support to ensure:
              </p>
              <ul className="space-y-3 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Personal documents are securely collected, verified, and organized systematically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Basis of Claim (BOC) narratives are drafted with absolute care, aligning with objective facts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Relevant, verified international country conditions are thoroughly researched and presented.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>All immigration portals, forms, and updates are managed within strict regulatory deadlines.</span>
                </li>
              </ul>
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
                Immediate Action: Arrival in Canada
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                If you have recently arrived in Canada and intend to seek asylum or refugee protection, 
                it is critical to understand the immediate administrative steps. 
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                How and where you make your claim, what documentation must be produced, and when your initial 
                eligibility interview will take place are key elements to organize as early as possible.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Consult Early</span>
                <p className="text-xs text-gray-300">
                  Securing professional advisory support early in your arrival helps ensure your initial declarations are consistent and complete.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. REFUGEE SERVICES WE SUPPORT (6 CARDS WITH FULL IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Protection Pathways</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Refugee Services <span className="text-red-500">We Support</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {refugeeServices.map((item, index) => (
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
          5. REFUGEE CLAIM MILESTONES (WITH STYLED ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Step-By-Step Roadmap</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Refugee Claim <span className="text-red-500">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {claimMilestones.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-2xl text-center flex flex-col items-center justify-between shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.3}
              variants={fadeUp}
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
              title: "Thorough Compliance & Care",
              desc: "We approach your protection case with high attention to detail, verifying your supporting proof meticulously.",
            },
            {
              title: "Objective Policy Focus",
              desc: "We verify your narrative directly against domestic laws and current international country guidelines.",
            },
            {
              title: "Dedicated Client Communication",
              desc: "We prioritize regular updates and clarify every milestone of your claim with clear, supportive language.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-950 border border-gray-800 rounded-xl text-left shadow-lg hover:border-red-500/40 transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.2}
              variants={fadeUp}
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
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 pb-2 leading-[1.2] bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent overflow-visible">
            Secure Experienced Protection Guidance
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Refugee claim timelines are rigid and demand structured preparation from day one. Contact our consulting team today to coordinate an initial assessment of your file.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Book Your Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default RefugeeClaims;
