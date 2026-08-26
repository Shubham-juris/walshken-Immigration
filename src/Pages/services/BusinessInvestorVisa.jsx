// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const BusinessInvestorVisa = () => {
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
//     <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white">
//       {/* Hero Section */}
//       <section className="py-20 px-6 text-center">
//         <motion.div
//           className="max-w-4xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Business & Investor Visa
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300">
//             Unlock global opportunities by investing abroad and expanding your
//             business internationally.
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
//               Why Choose a{" "}
//               <span className="text-red-500">Business Investor Visa?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Business or Investor Visa provides individuals and companies the
//               opportunity to invest, establish, or expand their businesses in a
//               foreign country. This visa opens doors to permanent residency,
//               global trade, and new markets.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               Our expert visa consultants help you navigate the process with
//               ease, ensuring compliance with immigration laws while maximizing
//               your business potential abroad.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
//               alt="Business Investor Visa"
//               className="rounded-2xl shadow-lg w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Key Benefits of{" "}
//             <span className="text-red-500">Business & Investor Visas</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Global Expansion",
//                 desc: "Access international markets and grow your business presence globally.",
//               },
//               {
//                 title: "Residency Options",
//                 desc: "Many countries offer permanent residency and citizenship pathways.",
//               },
//               {
//                 title: "Tax Advantages",
//                 desc: "Benefit from favorable tax regimes and business incentives abroad.",
//               },
//               {
//                 title: "Family Inclusion",
//                 desc: "Bring your spouse and children with dependent visa options.",
//               },
//               {
//                 title: "Investment Opportunities",
//                 desc: "Invest in real estate, startups, or government bonds for visa eligibility.",
//               },
//               {
//                 title: "Networking & Trade",
//                 desc: "Expand professional networks and trade partnerships worldwide.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold text-red-500 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
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
//             Our <span className="text-red-500">Application Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Consultation",
//                 desc: "We assess your eligibility and recommend the best visa options for your business goals.",
//               },
//               {
//                 step: "Step 2: Documentation",
//                 desc: "Assistance with preparing financial records, investment proofs, and legal documents.",
//               },
//               {
//                 step: "Step 3: Submission",
//                 desc: "We file your visa application and provide guidance until you receive approval.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-red-900 to-black rounded-xl shadow-lg"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-white">
//                   {item.step}
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Popular Countries Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Popular Destinations for{" "}
//             <span className="text-red-500">Business & Investor Visas</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-4">
//             {[
//               "USA",
//               "Canada",
//               "UK",
//               "Australia",
//               "Portugal",
//               "UAE",
//               "Singapore",
//               "New Zealand",
//             ].map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-lg border border-red-700 hover:bg-red-900 hover:text-white transition"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-lg font-semibold text-red-500">
//                   {country}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Country-wise Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Country-wise <span className="text-red-500">Business Visa Programs</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 country: "USA",
//                 program: "EB-5 Immigrant Investor Program",
//                 desc: "Invest $800,000+ in U.S. commercial enterprises to obtain Green Card eligibility.",
//               },
//               {
//                 country: "Canada",
//                 program: "Start-Up Visa & Provincial Nominee Programs",
//                 desc: "Launch innovative businesses or invest in provincial business streams with PR pathways.",
//               },
//               {
//                 country: "UK",
//                 program: "Innovator Founder Visa",
//                 desc: "Invest in innovative business ideas with approval from UK endorsing bodies.",
//               },
//               {
//                 country: "Australia",
//                 program: "Business Innovation & Investment Visa (Subclass 188/888)",
//                 desc: "Multiple streams for investors, entrepreneurs, and significant investors.",
//               },
//               {
//                 country: "Portugal",
//                 program: "Golden Visa",
//                 desc: "Invest in real estate, funds, or job creation to secure residency in the EU.",
//               },
//               {
//                 country: "UAE",
//                 program: "Investor & Golden Visa",
//                 desc: "Long-term residency options for entrepreneurs and investors in UAE free zones.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg border border-red-700 text-left"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold text-red-500 mb-2">
//                   {item.country}
//                 </h3>
//                 <p className="text-white font-medium mb-1">{item.program}</p>
//                 <p className="text-gray-300 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Why <span className="text-red-500">Choose Us?</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Expert Guidance",
//                 desc: "Years of experience in immigration and business consultancy.",
//               },
//               {
//                 title: "Tailored Solutions",
//                 desc: "Customized visa plans based on your investment and goals.",
//               },
//               {
//                 title: "High Success Rate",
//                 desc: "Trusted track record with successful visa approvals worldwide.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow border border-red-700"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-red-500">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-14 text-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Ready to{" "}
//             <span className="text-red-500">Expand Your Business</span> Globally?
//           </h2>
//           <p className="mb-6 text-lg text-gray-300">
//             Contact our experts today to explore the right Business & Investor
//             Visa options for you.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition"
//           >
//             Get Free Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default BusinessInvestorVisa;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const BusinessInvestorVisa = () => {
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
//               Corporate & Investor Portfolios
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Business & Investor Visa
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Unlock global opportunities by investing abroad and expanding your
//             business internationally.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             Structuring corporate relocations, intra-company transfers, and startup expansions requires complete compliance with complex international policy guidelines. We design business immigration portfolios to satisfy strict regulatory standards from the start.
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
//               Why Choose a{" "}
//               <span className="text-red-500">Business Investor Visa?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Business or Investor Visa provides individuals and companies the
//               opportunity to invest capital, establish new ventures, or transfer key personnel to a foreign country. These programs serve as pathways to <Link to="/pr" className="text-red-500 hover:underline">permanent residency</Link>, citizenship, global networking, and access to major trade zones. Depending on your operational strategy, you may also qualify for fast-tracked <Link to="/work-visa" className="text-red-500 hover:underline">Work Visas</Link> like intra-company transfers.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Our expert visa consultants help you navigate the process with
//               ease, ensuring compliance with international regulations while maximizing
//               your operational potential abroad.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               Applying for an investor or corporate visa requires a meticulous approach. Minor discrepancies in corporate structures, source-of-fund tracking, or local compliance requirements can trigger audits or application denials. We coordinate your commercial and personal paperwork to protect your investment schedule.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
//               alt="Business Investor Visa"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive: Collective Contexts & Corporate Strategy */}
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
//                 Immigration as a Core Business Strategy
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 For organizations that rely on global talent or wish to scale internationally, business immigration planning is an essential operational strategy. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 We work with employers and enterprise clients to structure immigration strategies that serve both the organization and the employees arriving to support it. This covers Labour Market Impact Assessments (LMIAs), intra-company transfers, government audits, and long-term talent retention plans through <Link to="/pr" className="text-red-500 hover:underline">permanent residency pathways</Link>.
//               </p>
//               <p className="text-gray-400 leading-relaxed text-xs italic">
//                 If your business has not formulated an immigration plan beyond individual ad-hoc work permits, let us assist you in building a stable strategy before the next critical talent gap arises.
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
//                 The Advantage of Multi-Layered Consulting
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Corporate immigration issues rarely exist in isolation. An executive transfer can intersect with employment standards, corporate governance structures, and international tax frameworks. 
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, your consulting team understands these interconnected business environments. When your expansion or investment requires a comprehensive overview, that corporate context is built directly into our strategic advisory process to minimize operational risks.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Key Benefits of{" "}
//             <span className="text-red-500">Business & Investor Visas</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Global Expansion",
//                 desc: "Access competitive international markets and grow your operational presence across borders.",
//               },
//               {
//                 title: "Residency Options",
//                 desc: "Many countries offer pathways to permanent residency and citizenship based on compliant investments.",
//               },
//               {
//                 title: "Tax Advantages",
//                 desc: "Benefit from favorable tax frameworks, regional incentives, and investment-friendly climates.",
//               },
//               {
//                 title: "Family Inclusion",
//                 desc: "Secure dependent visas to bring your spouse, children, and eligible family members with you.",
//               },
//               {
//                 title: "Diverse Investments",
//                 desc: "Qualify through custom real estate, venture capital, government bonds, or active commercial operations.",
//               },
//               {
//                 title: "Strategic Trade Networks",
//                 desc: "Build professional relationships, establish local vendor partnerships, and expand trade operations.",
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
//                 <h3 className="text-xl font-semibold text-red-500 mb-2 text-left">
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
//             Our <span className="text-red-500">Application Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Consultation & Assessment",
//                 desc: "We perform a thorough evaluation of your business goals, verify your investment capabilities, and recommend optimal pathways.",
//               },
//               {
//                 step: "Step 2: Business & Financial Document Preparation",
//                 desc: "We assist in organizing source-of-fund records, business expansion proposals, corporate documents, and compliance forms.",
//               },
//               {
//                 step: "Step 3: Submission & Portal Management",
//                 desc: "Our consulting team files your complete investment package and coordinates with consular offices and endorsing bodies through to approval.",
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

//       {/* Popular Countries Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Popular Destinations for{" "}
//             <span className="text-red-500">Business & Investor Visas</span>
//           </h2>
//           <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
//             {[
//               "USA",
//               "Canada",
//               "UK",
//               "Australia",
//               "Portugal",
//               "UAE",
//               "Singapore",
//               "New Zealand",
//             ].map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow border border-red-800/40 hover:bg-red-900 hover:text-white transition cursor-pointer"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-sm font-semibold text-red-500 hover:text-white">
//                   {country}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Country-wise Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Country-wise <span className="text-red-500">Business Visa Programs</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 country: "USA",
//                 program: "EB-5 Immigrant Investor Program",
//                 desc: "Invest $800,000+ in targeted employment areas to establish Green Card eligibility.",
//               },
//               {
//                 country: "Canada",
//                 program: "Start-Up Visa & Provincial Nominee Streams",
//                 desc: "Launch innovative businesses with endorsement, or invest in established provincial business streams.",
//               },
//               {
//                 country: "UK",
//                 program: "Innovator Founder Visa",
//                 desc: "Establish innovative business ideas with endorsing body approval and minimal capital requirements.",
//               },
//               {
//                 country: "Australia",
//                 program: "Business Innovation & Investment (Subclass 188/888)",
//                 desc: "Strategic streams designed for corporate investors, active entrepreneurs, and significant fund investors.",
//               },
//               {
//                 country: "Portugal",
//                 program: "Golden Visa Program",
//                 desc: "Invest in approved venture capital funds or support qualified business creation to secure EU residency.",
//               },
//               {
//                 country: "UAE",
//                 program: "Investor & Golden Visa Options",
//                 desc: "Long-term residency options designed for business owners and high-capital investors inside free zones.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-red-800/30 text-left flex flex-col justify-between"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <div>
//                   <h3 className="text-xl font-bold text-red-500 mb-2">
//                     {item.country}
//                   </h3>
//                   <p className="text-white font-medium text-sm mb-2">{item.program}</p>
//                 </div>
//                 <p className="text-gray-300 text-xs leading-relaxed mt-2 pt-2 border-t border-red-950/40">{item.desc}</p>
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
//                 title: "Thorough Compliance Review",
//                 desc: "We evaluate corporate structures, business proposals, and capital sources against regulatory rules.",
//               },
//               {
//                 title: "Structured, Clear Advice",
//                 desc: "We suggest pathways aligned with active policy and economic draws to optimize processing times.",
//               },
//               {
//                 title: "Strategic Corporate Perspective",
//                 desc: "We look beyond individual visas to help you coordinate long-term business goals and permanent residency.",
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
//           variants={fadeUp}
//           className="max-w-4xl mx-auto px-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Ready to <span className="text-red-500">Expand Your Business</span> Globally?
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Structuring investor portfolios requires a clear strategic approach. Contact our consulting team today to set up an eligibility assessment and discuss how to expand your operations internationally.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Request Your Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default BusinessInvestorVisa;



// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaGlobeAmericas,
//   FaPassport,
//   FaPercent,
//   FaUsers,
//   FaCoins,
//   FaHandshake,
//   FaUserTie,
//   FaFileInvoiceDollar,
//   FaPaperPlane
// } from "react-icons/fa";

// const BusinessInvestorVisa = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // 1. Benefits Data (6 Cards with Images)
//   const businessBenefits = [
//     {
//       title: "Global Expansion",
//       desc: "Access competitive international markets and grow your operational presence across borders.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwv7hZc2ATuGttTQEAuveiUMrPJqP04zcytE3J4Q3ig&s=10",
//       icon: <FaGlobeAmericas className="text-red-500" />,
//     },
//     {
//       title: "Residency Options",
//       desc: "Many countries offer pathways to permanent residency and citizenship based on compliant investments.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ez8icu_pR3lS20eVqMN6KM0pQOkNS9r2v_tMk5Txzw&s=10",
//       icon: <FaPassport className="text-red-500" />,
//     },
//     {
//       title: "Tax Advantages",
//       desc: "Benefit from favorable tax frameworks, regional incentives, and investment-friendly climates.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S1-MmOMJ-EAAwPH6P6bSwmVm4u1FLe7aCVzdxLI6xw&s=10",
//       icon: <FaPercent className="text-red-500" />,
//     },
//     {
//       title: "Family Inclusion",
//       desc: "Secure dependent visas to bring your spouse, children, and eligible family members with you.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhWssDp0xIIQ3-T5-CUuOMVLU3icEMtIhJcAWCJbZ_w&s=10",
//       icon: <FaUsers className="text-red-500" />,
//     },
//     {
//       title: "Diverse Investments",
//       desc: "Qualify through custom real estate, venture capital, government bonds, or active commercial operations.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw01Dvtig3z08ec0vpctNlCnRbOjhYWf65oaq8vnGvFA&s=10",
//       icon: <FaCoins className="text-red-500" />,
//     },
//     {
//       title: "Strategic Trade Networks",
//       desc: "Build professional relationships, establish local vendor partnerships, and expand trade operations.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcLH0kL7De26EJlC9DEfqXOPinW8ExxHadkkbDFcg0w&s=10",
//       icon: <FaHandshake className="text-red-500" />,
//     },
//   ];

//   // 2. Application Process Steps (with Styled Icons)
//   const processSteps = [
//     {
//       step: "01",
//       title: "Consultation & Assessment",
//       desc: "We perform a thorough evaluation of your business goals, verify your investment capabilities, and recommend optimal pathways.",
//       icon: <FaUserTie className="text-white text-2xl" />,
//     },
//     {
//       step: "02",
//       title: "Business & Financial Document Preparation",
//       desc: "We assist in organizing source-of-fund records, business expansion proposals, corporate documents, and compliance forms.",
//       icon: <FaFileInvoiceDollar className="text-white text-2xl" />,
//     },
//     {
//       step: "03",
//       title: "Submission & Portal Management",
//       desc: "Our consulting team files your complete investment package and coordinates with consular offices and endorsing bodies through to approval.",
//       icon: <FaPaperPlane className="text-white text-2xl" />,
//     },
//   ];

//   // 3. Popular Destinations (with photos)
//   const popularDestinations = [
//     { country: "USA", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80" },
//     { country: "Canada", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=400&q=80" },
//     { country: "UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80" },
//     { country: "Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80" },
//     { country: "Portugal", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=400&q=80" },
//     { country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" },
//     { country: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80" },
//     { country: "New Zealand", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80" },
//   ];

//   // 4. Country-wise Business Visa Programs (with blurred background images)
//   const businessPrograms = [
//     {
//       country: "USA",
//       program: "EB-5 Immigrant Investor Program",
//       desc: "Invest $800,000+ in targeted employment areas to establish Green Card eligibility.",
//       bgImg: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       country: "Canada",
//       program: "Start-Up Visa & Provincial Nominee Streams",
//       desc: "Launch innovative businesses with endorsement, or invest in established provincial business streams.",
//       bgImg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       country: "UK",
//       program: "Innovator Founder Visa",
//       desc: "Establish innovative business ideas with endorsing body approval and minimal capital requirements.",
//       bgImg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       country: "Australia",
//       program: "Business Innovation & Investment (Subclass 188/888)",
//       desc: "Strategic streams designed for corporate investors, active entrepreneurs, and significant fund investors.",
//       bgImg: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       country: "Portugal",
//       program: "Golden Visa Program",
//       desc: "Invest in approved venture capital funds or support qualified business creation to secure EU residency.",
//       bgImg: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       country: "UAE",
//       program: "Investor & Golden Visa Options",
//       desc: "Long-term residency options designed for business owners and high-capital investors inside free zones.",
//       bgImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
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
//               Corporate & Investor Portfolios
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Business & Investor Visa
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
//             Unlock global opportunities by investing abroad and expanding your
//             business internationally.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             Structuring corporate relocations, intra-company transfers, and startup expansions requires complete compliance with complex international policy guidelines. We design business immigration portfolios to satisfy strict regulatory standards from the start.
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
//               Why Choose a{" "}
//               <span className="text-red-500">Business Investor Visa?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Business or Investor Visa provides individuals and companies the
//               opportunity to invest capital, establish new ventures, or transfer key personnel to a foreign country. These programs serve as pathways to <Link to="/pr" className="text-red-500 hover:underline">permanent residency</Link>, citizenship, global networking, and access to major trade zones. Depending on your operational strategy, you may also qualify for fast-tracked <Link to="/work-visa" className="text-red-500 hover:underline">Work Visas</Link> like intra-company transfers.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Our expert visa consultants help you navigate the process with
//               ease, ensuring compliance with international regulations while maximizing
//               your operational potential abroad.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               Applying for an investor or corporate visa requires a meticulous approach. Minor discrepancies in corporate structures, source-of-fund tracking, or local compliance requirements can trigger audits or application denials. We coordinate your commercial and personal paperwork to protect your investment schedule.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
//               alt="Business Investor Visa"
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
//                 Immigration as a Core Business Strategy
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 For organizations that rely on global talent or wish to scale internationally, business immigration planning is an essential operational strategy. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 We work with employers and enterprise clients to structure immigration strategies that serve both the organization and the employees arriving to support it. This covers Labour Market Impact Assessments (LMIAs), intra-company transfers, government audits, and long-term talent retention plans through <Link to="/pr" className="text-red-500 hover:underline">permanent residency pathways</Link>.
//               </p>
//               <p className="text-gray-400 leading-relaxed text-xs italic">
//                 If your business has not formulated an immigration plan beyond individual ad-hoc work permits, let us assist you in building a stable strategy before the next critical talent gap arises.
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
//                 The Advantage of Multi-Layered Consulting
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Corporate immigration issues rarely exist in isolation. An executive transfer can intersect with employment standards, corporate governance structures, and international tax frameworks. 
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At <span className="text-white font-bold">Walshken Immigration</span>, your consulting team understands these interconnected business environments. When your expansion or investment requires a comprehensive overview, that corporate context is built directly into our strategic advisory process to minimize operational risks.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           4. BENEFITS OF BUSINESS & INVESTOR VISAS (6 CARDS WITH IMAGES)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
//           <motion.h2
//             className="text-3xl md:text-5xl font-extrabold text-white"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Key Benefits of <span className="text-red-500">Business & Investor Visas</span>
//           </motion.h2>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {businessBenefits.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:border-red-500/40 transition-all flex flex-col justify-between group"
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={index * 0.2}
//               viewport={{ once: true }}
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
//                   <span className="text-xs font-bold text-white">{item.title}</span>
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="p-6 flex-1 flex flex-col justify-between">
//                 <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           5. OUR APPLICATION PROCESS (WITH STYLED ICONS)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
//           <motion.h2 
//             className="text-3xl md:text-5xl font-extrabold text-white"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our <span className="text-red-500">Application Process</span>
//           </motion.h2>
//         </div>

//         <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
//           {processSteps.map((item, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-2xl text-center flex flex-col items-center justify-between shadow-xl"
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={index * 0.3}
//               viewport={{ once: true }}
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
//           6. POPULAR DESTINATIONS (WITH COUNTRY PHOTOS)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Global Hubs</p>
//           <motion.h2 
//             className="text-3xl md:text-5xl font-extrabold text-white"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Popular Destinations for <span className="text-red-500">Business & Investor Visas</span>
//           </motion.h2>
//         </div>

//         <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 max-w-6xl mx-auto">
//           {popularDestinations.map((item, index) => (
//             <motion.div
//               key={index}
//               className="group relative h-40 rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:border-red-500/60 transition-all cursor-pointer"
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={index * 0.15}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.country}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-75"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
//               <div className="absolute bottom-3 left-0 right-0 text-center">
//                 <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
//                   {item.country}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           7. COUNTRY-WISE PROGRAMS (BLURRED BACKGROUND OVERLAY)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 bg-black/40 border-t border-red-950/40">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Available Streams</p>
//           <motion.h2 
//             className="text-3xl md:text-5xl font-extrabold text-white"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Country-wise <span className="text-red-500">Business Visa Programs</span>
//           </motion.h2>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {businessPrograms.map((item, index) => (
//             <motion.div
//               key={index}
//               className="relative rounded-2xl overflow-hidden border border-red-800/40 p-7 flex flex-col justify-between shadow-2xl group hover:border-red-500 transition-all duration-300"
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={index * 0.3}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               {/* Blurred & Dark Background Image */}
//               <img
//                 src={item.bgImg}
//                 alt={item.country}
//                 className="absolute inset-0 w-full h-full object-cover filter blur-[1px] opacity-90 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-black/80"></div>

//               {/* Card Content */}
//               <div className="relative z-10">
//                 <h3 className="text-xl font-bold text-red-400 mb-2 pb-2 border-b border-gray-800/60">
//                   {item.country}
//                 </h3>
//                 <p className="text-white font-semibold text-sm mb-3">{item.program}</p>
//                 <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           8. WHY CHOOSE WALSHKEN IMMIGRATION?
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Why Walshken</p>
//           <motion.h2 
//             className="text-3xl md:text-5xl font-extrabold text-white"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Why Choose <span className="text-red-500">Walshken Immigration?</span>
//           </motion.h2>
//         </div>

//         <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
//           {[
//             {
//               title: "Thorough Compliance Review",
//               desc: "We evaluate corporate structures, business proposals, and capital sources against regulatory rules.",
//             },
//             {
//               title: "Structured, Clear Advice",
//               desc: "We suggest pathways aligned with active policy and economic draws to optimize processing times.",
//             },
//             {
//               title: "Strategic Corporate Perspective",
//               desc: "We look beyond individual visas to help you coordinate long-term business goals and permanent residency.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-gray-950 border border-gray-800 rounded-xl text-left shadow-lg hover:border-red-500/40 transition-all"
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={index * 0.2}
//               viewport={{ once: true }}
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
//           9. CALL TO ACTION
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
//             Ready to <span className="text-red-500">Expand Your Business</span> Globally?
//           </h2>
//           <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             Structuring investor portfolios requires a clear strategic approach. Contact our consulting team today to set up an eligibility assessment and discuss how to expand your operations internationally.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
//           >
//             Request Your Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default BusinessInvestorVisa;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGlobeAmericas,
  FaPassport,
  FaPercent,
  FaUsers,
  FaCoins,
  FaHandshake,
  FaUserTie,
  FaFileInvoiceDollar,
  FaPaperPlane
} from "react-icons/fa";

const BusinessInvestorVisa = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Benefits Data (6 Cards with Images)
  const businessBenefits = [
    {
      title: "Global Expansion",
      desc: "Access competitive international markets and grow your operational presence across borders.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwv7hZc2ATuGttTQEAuveiUMrPJqP04zcytE3J4Q3ig&s=10",
      icon: <FaGlobeAmericas className="text-red-500" />,
    },
    {
      title: "Residency Options",
      desc: "Many countries offer pathways to permanent residency and citizenship based on compliant investments.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ez8icu_pR3lS20eVqMN6KM0pQOkNS9r2v_tMk5Txzw&s=10",
      icon: <FaPassport className="text-red-500" />,
    },
    {
      title: "Tax Advantages",
      desc: "Benefit from favorable tax frameworks, regional incentives, and investment-friendly climates.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S1-MmOMJ-EAAwPH6P6bSwmVm4u1FLe7aCVzdxLI6xw&s=10",
      icon: <FaPercent className="text-red-500" />,
    },
    {
      title: "Family Inclusion",
      desc: "Secure dependent visas to bring your spouse, children, and eligible family members with you.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhWssDp0xIIQ3-T5-CUuOMVLU3icEMtIhJcAWCJbZ_w&s=10",
      icon: <FaUsers className="text-red-500" />,
    },
    {
      title: "Diverse Investments",
      desc: "Qualify through custom real estate, venture capital, government bonds, or active commercial operations.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw01Dvtig3z08ec0vpctNlCnRbOjhYWf65oaq8vnGvFA&s=10",
      icon: <FaCoins className="text-red-500" />,
    },
    {
      title: "Strategic Trade Networks",
      desc: "Build professional relationships, establish local vendor partnerships, and expand trade operations.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcLH0kL7De26EJlC9DEfqXOPinW8ExxHadkkbDFcg0w&s=10",
      icon: <FaHandshake className="text-red-500" />,
    },
  ];

  // 2. Application Process Steps (with Styled Icons)
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Assessment",
      desc: "We perform a thorough evaluation of your business goals, verify your investment capabilities, and recommend optimal pathways.",
      icon: <FaUserTie className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Business & Financial Document Preparation",
      desc: "We assist in organizing source-of-fund records, business expansion proposals, corporate documents, and compliance forms.",
      icon: <FaFileInvoiceDollar className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Submission & Portal Management",
      desc: "Our consulting team files your complete investment package and coordinates with consular offices and endorsing bodies through to approval.",
      icon: <FaPaperPlane className="text-white text-2xl" />,
    },
  ];

  // 3. Popular Destinations (with photos)
  const popularDestinations = [
    { country: "USA", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80" },
    { country: "Canada", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=400&q=80" },
    { country: "UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80" },
    { country: "Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80" },
    { country: "Portugal", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=400&q=80" },
    { country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" },
    { country: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80" },
    { country: "New Zealand", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80" },
  ];

  // 4. Country-wise Business Visa Programs (with brightened background images)
  const businessPrograms = [
    {
      country: "USA",
      program: "EB-5 Immigrant Investor Program",
      desc: "Invest $800,000+ in targeted employment areas to establish Green Card eligibility.",
      bgImg: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "Canada",
      program: "Start-Up Visa & Provincial Nominee Streams",
      desc: "Launch innovative businesses with endorsement, or invest in established provincial business streams.",
      bgImg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "UK",
      program: "Innovator Founder Visa",
      desc: "Establish innovative business ideas with endorsing body approval and minimal capital requirements.",
      bgImg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "Australia",
      program: "Business Innovation & Investment (Subclass 188/888)",
      desc: "Strategic streams designed for corporate investors, active entrepreneurs, and significant fund investors.",
      bgImg: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "Portugal",
      program: "Golden Visa Program",
      desc: "Invest in approved venture capital funds or support qualified business creation to secure EU residency.",
      bgImg: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "UAE",
      program: "Investor & Golden Visa Options",
      desc: "Long-term residency options designed for business owners and high-capital investors inside free zones.",
      bgImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
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
              Corporate & Investor Portfolios
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Business & Investor Visa
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Unlock global opportunities by investing abroad and expanding your
            business internationally.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Structuring corporate relocations, intra-company transfers, and startup expansions requires complete compliance with complex international policy guidelines. We design business immigration portfolios to satisfy strict regulatory standards from the start.
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
              Why Choose a{" "}
              <span className="text-red-500">Business Investor Visa?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Business or Investor Visa provides individuals and companies the
              opportunity to invest capital, establish new ventures, or transfer key personnel to a foreign country. These programs serve as pathways to <Link to="/pr" className="text-red-500 hover:underline">permanent residency</Link>, citizenship, global networking, and access to major trade zones. Depending on your operational strategy, you may also qualify for fast-tracked <Link to="/work-visa" className="text-red-500 hover:underline">Work Visas</Link> like intra-company transfers.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our expert visa consultants help you navigate the process with
              ease, ensuring compliance with international regulations while maximizing
              your operational potential abroad.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Applying for an investor or corporate visa requires a meticulous approach. Minor discrepancies in corporate structures, source-of-fund tracking, or local compliance requirements can trigger audits or application denials. We coordinate your commercial and personal paperwork to protect your investment schedule.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
              alt="Business Investor Visa"
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
                Immigration as a Core Business Strategy
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                For organizations that rely on global talent or wish to scale internationally, business immigration planning is an essential operational strategy. 
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                We work with employers and enterprise clients to structure immigration strategies that serve both the organization and the employees arriving to support it. This covers Labour Market Impact Assessments (LMIAs), intra-company transfers, government audits, and long-term talent retention plans through <Link to="/pr" className="text-red-500 hover:underline">permanent residency pathways</Link>.
              </p>
              <p className="text-gray-400 leading-relaxed text-xs italic">
                If your business has not formulated an immigration plan beyond individual ad-hoc work permits, let us assist you in building a stable strategy before the next critical talent gap arises.
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
                The Advantage of Multi-Layered Consulting
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Corporate immigration issues rarely exist in isolation. An executive transfer can intersect with employment standards, corporate governance structures, and international tax frameworks. 
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                At <span className="text-white font-bold">Walshken Immigration</span>, your consulting team understands these interconnected business environments. When your expansion or investment requires a comprehensive overview, that corporate context is built directly into our strategic advisory process to minimize operational risks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. BENEFITS OF BUSINESS & INVESTOR VISAS (6 CARDS WITH IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Key Benefits of <span className="text-red-500">Business & Investor Visas</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {businessBenefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:border-red-500/40 transition-all flex flex-col justify-between group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.2}
              viewport={{ once: true }}
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
                  <span className="text-xs font-bold text-white">{item.title}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. OUR APPLICATION PROCESS (WITH STYLED ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our <span className="text-red-500">Application Process</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {processSteps.map((item, index) => (
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
          6. POPULAR DESTINATIONS (WITH COUNTRY PHOTOS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Global Hubs</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Popular Destinations for <span className="text-red-500">Business & Investor Visas</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 max-w-6xl mx-auto">
          {popularDestinations.map((item, index) => (
            <motion.div
              key={index}
              className="group relative h-40 rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:border-red-500/60 transition-all cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.15}
              viewport={{ once: true }}
            >
              <img
                src={item.img}
                alt={item.country}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {item.country}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. COUNTRY-WISE PROGRAMS (BRIGHTENED BACKGROUNDS + CRISP READABILITY)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-black/40 border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Available Streams</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Country-wise <span className="text-red-500">Business Visa Programs</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {businessPrograms.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden border border-red-800/40 p-7 flex flex-col justify-between shadow-2xl group hover:border-red-500 transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.3}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Brightened Background Image with High-Contrast Overlay */}
              <img
                src={item.bgImg}
                alt={item.country}
                className="absolute inset-0 w-full h-full object-cover filter brightness-110 opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/45"></div>

              {/* Card Content with Crisp Text & Readability */}
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold text-red-400 mb-2 pb-2 border-b border-red-500/30 drop-shadow-md">
                  {item.country}
                </h3>
                <p className="text-white font-bold text-sm mb-3 drop-shadow">{item.program}</p>
                <p className="text-gray-200 text-xs leading-relaxed font-medium drop-shadow-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8. WHY CHOOSE WALSHKEN IMMIGRATION?
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Why Walshken</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose <span className="text-red-500">Walshken Immigration?</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Thorough Compliance Review",
              desc: "We evaluate corporate structures, business proposals, and capital sources against regulatory rules.",
            },
            {
              title: "Structured, Clear Advice",
              desc: "We suggest pathways aligned with active policy and economic draws to optimize processing times.",
            },
            {
              title: "Strategic Corporate Perspective",
              desc: "We look beyond individual visas to help you coordinate long-term business goals and permanent residency.",
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
          9. CALL TO ACTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/40 via-black to-gray-950 border-t border-red-950/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight">
            Ready to <span className="text-red-500">Expand Your Business</span> Globally?
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Structuring investor portfolios requires a clear strategic approach. Contact our consulting team today to set up an eligibility assessment and discuss how to expand your operations internationally.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Request Your Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default BusinessInvestorVisa;
