// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const VisitorVisa = () => {
//   const navigate = useNavigate();

//   // Animation Variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
//       {/* Hero Section */}
//       <section className="py-20 px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           >
//             Visitor Visa Services
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Travel across the globe with ease. We simplify your visitor visa
//             process, ensuring a smooth and stress-free journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* About Visitor Visa */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               What is a Visitor Visa?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Visitor Visa allows you to enter another country temporarily for
//               tourism, visiting family/friends, attending events, or short-term
//               business trips. Each country has specific requirements and
//               conditions for granting visitor visas.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               Our expert consultants help you prepare the right documentation,
//               meet eligibility requirements, and secure approvals quickly so you
//               can travel stress-free.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//             viewport={{ once: true }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=900&q=80"
//               alt="Visitor Visa"
//               className="rounded-2xl shadow-lg w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Benefits of a Visitor Visa
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Tourism",
//                 desc: "Explore new cultures, traditions, and breathtaking destinations.",
//               },
//               {
//                 title: "Family Visits",
//                 desc: "Reconnect with your loved ones across borders.",
//               },
//               {
//                 title: "Business Trips",
//                 desc: "Attend meetings, conferences, and expand global networks.",
//               },
//               {
//                 title: "Short-Term Study",
//                 desc: "Participate in short training or certificate programs.",
//               },
//               {
//                 title: "Events & Exhibitions",
//                 desc: "Attend global events, fairs, or cultural festivals.",
//               },
//               {
//                 title: "Multiple Entry Options",
//                 desc: "Choose single-entry or multiple-entry visas as per your needs.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   <span className="text-red-500">{item.title}</span>
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-10 text-red-500">
//             Visitor Visa Application Process
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Consultation",
//                 desc: "We assess your purpose of visit and suggest the best visa option.",
//               },
//               {
//                 step: "Step 2: Documentation",
//                 desc: "Our experts help you prepare financial proofs, invitation letters, and other required documents.",
//               },
//               {
//                 step: "Step 3: Visa Approval",
//                 desc: "We submit your application and guide you until your visa is approved.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-800 rounded-xl"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-red-400">
//                   {item.step}
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Why Choose Us?
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Trusted Expertise",
//                 desc: "Years of experience in processing visitor visas for top countries.",
//               },
//               {
//                 title: "Fast & Hassle-Free",
//                 desc: "Quick and simplified process with minimal stress for applicants.",
//               },
//               {
//                 title: "End-to-End Guidance",
//                 desc: "From application submission to approval, we are with you at every step.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-white">
//                   <span className="text-red-500">{item.title}</span>
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-14 text-center bg-gradient-to-r from-red-900 via-black to-gray-900">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//         >
//           Plan Your Next Trip with Ease
//         </motion.h2>
//         <motion.p
//           className="mb-6 text-lg text-gray-300"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           custom={1}
//         >
//           Contact us today for expert assistance in securing your visitor visa.
//         </motion.p>
//         <motion.button
//           onClick={() => navigate("/contact")}
//           className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           custom={2}
//         >
//           Get Free Consultation
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default VisitorVisa;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const VisitorVisa = () => {
//   const navigate = useNavigate();

//   // Animation Variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-24 px-6 text-center relative overflow-hidden">
//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-[1px] w-8 bg-red-500"></span>
//             <span className="text-xs font-bold tracking-widest uppercase text-red-500">
//               Temporary Entry & Tourism Pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           >
//             Visitor Visa Services
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Travel across the globe with ease. We simplify your visitor visa
//             process, ensuring a smooth and stress-free journey.
//           </motion.p>
//           <motion.p
//             className="text-sm text-gray-400 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//           >
//             Visitor visas and short-term travel permits carry precise requirements and strict timelines. We help organize and submit your applications with the meticulous detail and accuracy required by border agencies.
//           </motion.p>
//         </div>
//       </section>

//       {/* About Visitor Visa */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               What is a Visitor Visa?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Visitor Visa allows you to enter another country temporarily for
//               tourism, visiting family/friends, attending events, or coordinating short-term
//               business meetings. Each country enforces specific regulatory frameworks and eligibility criteria for granting temporary entry.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Our expert consultants help you prepare the right documentation,
//               meet complex eligibility requirements, and compile responsive applications so you
//               can coordinate your travels with confidence.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
//               Temporary resident applications are subject to high refusal rates because immigration officers closely evaluate your temporary intent. A single clerical error, inadequate proof of funds, or a weak demonstration of your ties to your home country can set back your travel plans for months. We focus on ensuring your file is prepared properly on the first submission.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//             viewport={{ once: true }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=900&q=80"
//               alt="Visitor Visa"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section: Temporary Intent and Consultation Value */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20">
//               <h3 className="text-2xl font-bold text-red-500 mb-4">
//                 Understanding Temporary Resident Intent & Consular Scrutiny
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 To secure a temporary visitor visa, you must satisfy consular officers that you will voluntarily exit the host nation at the end of your authorized stay. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Visa officers closely analyze your home ties—such as ongoing employment, business assets, immediate family relations, and real estate holdings—alongside your travel itinerary and financial capability.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we understand how these factors are analyzed. We work with you to arrange and document these critical factors carefully, helping you present a transparent and consistent travel profile to immigration authorities.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//             viewport={{ once: true }}
//             className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20"
//           >
//             <h3 className="text-2xl font-bold text-white mb-4">
//               The Value of a Strategic Consultation
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               While a visitor visa application may seem like a basic form, it forms part of your permanent immigration record. Inconsistencies or accidental omissions on visitor visa applications can negatively impact your future study permit, work permit, or permanent residency goals.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               Our initial consultation provides an eligibility assessment and identifies potential challenges in your travel history or documentation before you submit files to foreign offices. 
//             </p>
//             <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//               <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Our Commitment</span>
//               <p className="text-xs text-gray-300">
//                 To assess your profile objectively, help you gather necessary documentation, and structure an organized submission package that addresses common consular concerns.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Benefits of a Visitor Visa
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Tourism",
//                 desc: "Explore new cultures, traditions, and historic travel destinations worldwide.",
//               },
//               {
//                 title: "Family Visits",
//                 desc: "Reconnect with immediate family, relatives, and close friends across international borders.",
//               },
//               {
//                 title: "Business Trips",
//                 desc: "Attend executive meetings, industry conferences, and expand your international business networks.",
//               },
//               {
//                 title: "Short-Term Study",
//                 desc: "Participate in short-term language classes, vocational training, or academic certificate programs.",
//               },
//               {
//                 title: "Events & Exhibitions",
//                 desc: "Attend global trade fairs, cultural festivals, athletic tournaments, or professional expos.",
//               },
//               {
//                 title: "Flexible Entry Formats",
//                 desc: "Obtain single-entry or long-term multiple-entry visas to coordinate multiple travel plans.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-850 p-6 rounded-xl border border-red-950 text-left hover:border-red-900/30 transition flex flex-col justify-between"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   <span className="text-red-500">{item.title}</span>
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-10 text-red-500">
//             Visitor Visa Application Process
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Consultation & Intake Assessment",
//                 desc: "We review your purpose of travel, target destination, and home ties to assess eligibility and identify potential profile risks.",
//               },
//               {
//                 step: "Step 2: Document Compilation & Verification",
//                 desc: "Our consultants assist you in arranging compliant financial records, tax filings, employment proof, and invitation letters.",
//               },
//               {
//                 step: "Step 3: Portal Submission & Support",
//                 desc: "We review your forms, compile your supporting documents, manage portal submissions, and guide you through to approval.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-850 border border-red-950 rounded-xl text-left"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-red-400">
//                   {item.step}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Why Choose Walshken Immigration?
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Rigorous File Quality Control",
//                 desc: "We verify every bank certificate, employment record, and invitation letter to ensure consistency and minimize risks.",
//               },
//               {
//                 title: "Transparent, Honest Guidance",
//                 desc: "We provide realistic assessments of your profile's strengths and highlight potential concerns before submission.",
//               },
//               {
//                 title: "Experienced Consultant Support",
//                 desc: "From initial intake up to biometric and visa collection steps, our team supports you with clear communication.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-800 border border-red-950 rounded-xl text-left shadow-lg hover:border-red-900/30 transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-white">
//                   <span className="text-red-500">{item.title}</span>
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 text-center bg-gradient-to-t from-red-950/20 to-transparent">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//           >
//             Plan Your Next Trip with Ease
//           </motion.h2>
//           <motion.p
//             className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//           >
//             A visitor visa application requires careful administrative planning. Contact our consultancy team today to schedule an initial consultation and organize your next trip with confidence.
//           </motion.p>
//           <motion.button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-0.5"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={2}
//           >
//             Request Your Consultation
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default VisitorVisa;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const VisitorVisa = () => {
//   const navigate = useNavigate();

//   // Animation Variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-24 px-6 text-center relative overflow-hidden">
//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-[1px] w-8 bg-red-500"></span>
//             <span className="text-xs font-bold tracking-widest uppercase text-red-500">
//               Temporary Entry & Tourism Pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           >
//             Visitor Visa Services
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Travel across the globe with ease. We simplify your visitor visa
//             process, ensuring a smooth and stress-free journey.
//           </motion.p>
//           <motion.p
//             className="text-sm text-gray-400 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//           >
//             Visitor visas and short-term travel permits carry precise requirements and strict timelines. We help organize and submit your applications with the meticulous detail and accuracy required by border agencies.
//           </motion.p>
//         </div>
//       </section>

//       {/* About Visitor Visa */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               What is a Visitor Visa?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Visitor Visa allows you to enter another country temporarily for
//               tourism, visiting family/friends, attending events, or coordinating short-term
//               business meetings. Each country enforces specific regulatory frameworks and eligibility criteria for granting temporary entry. If you are considering transitioning your stay into an educational journey, read more about our <Link to="/study-visa" className="text-red-500 hover:underline">Study Visa Services</Link>, or evaluate <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Pathways</Link> if you receive an eligible employment offer.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Our expert consultants help you prepare the right documentation,
//               meet complex eligibility requirements, and compile responsive applications so you
//               can coordinate your travels with confidence.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
//               Temporary resident applications are subject to high refusal rates because immigration officers closely evaluate your temporary intent. A single clerical error, inadequate proof of funds, or a weak demonstration of your ties to your home country can set back your travel plans for months. We focus on ensuring your file is prepared properly on the first submission.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//             viewport={{ once: true }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=900&q=80"
//               alt="Visitor Visa"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section: Temporary Intent and Consultation Value */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20">
//               <h3 className="text-2xl font-bold text-red-500 mb-4">
//                 Understanding Temporary Resident Intent & Consular Scrutiny
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 To secure a temporary visitor visa, you must satisfy consular officers that you will voluntarily exit the host nation at the end of your authorized stay. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Visa officers closely analyze your home ties—such as ongoing employment, business assets, immediate family relations, and real estate holdings—alongside your travel itinerary and financial capability.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we understand how these factors are analyzed. We work with you to arrange and document these critical factors carefully, helping you present a transparent and consistent travel profile to immigration authorities.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//             viewport={{ once: true }}
//             className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20"
//           >
//             <h3 className="text-2xl font-bold text-white mb-4">
//               The Value of a Strategic Consultation
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               While a visitor visa application may seem like a basic form, it forms part of your permanent immigration record. Inconsistencies or accidental omissions on visitor visa applications can negatively impact your future <Link to="/study-visa" className="text-red-500 hover:underline">study permit</Link>, <Link to="/work-visa" className="text-red-500 hover:underline">work permit</Link>, or <Link to="/pr" className="text-red-500 hover:underline">permanent residency goals</Link>.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               Our initial consultation provides an eligibility assessment and identifies potential challenges in your travel history or documentation before you submit files to foreign offices. 
//             </p>
//             <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//               <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Our Commitment</span>
//               <p className="text-xs text-gray-300">
//                 To assess your profile objectively, help you gather necessary documentation, and structure an organized submission package that addresses common consular concerns.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Benefits of a Visitor Visa
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Tourism",
//                 desc: "Explore new cultures, traditions, and historic travel destinations worldwide.",
//               },
//               {
//                 title: "Family Visits",
//                 desc: "Reconnect with immediate family, relatives, and close friends across international borders.",
//               },
//               {
//                 title: "Business Trips",
//                 desc: "Attend executive meetings, industry conferences, and expand your international business networks.",
//               },
//               {
//                 title: "Short-Term Study",
//                 desc: "Participate in short-term language classes, vocational training, or academic certificate programs.",
//               },
//               {
//                 title: "Events & Exhibitions",
//                 desc: "Attend global trade fairs, cultural festivals, athletic tournaments, or professional expos.",
//               },
//               {
//                 title: "Flexible Entry Formats",
//                 desc: "Obtain single-entry or long-term multiple-entry visas to coordinate multiple travel plans.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-850 p-6 rounded-xl border border-red-950 text-left hover:border-red-900/30 transition flex flex-col justify-between"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   <span className="text-red-500">{item.title}</span>
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-10 text-red-500">
//             Visitor Visa Application Process
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Consultation & Intake Assessment",
//                 desc: "We review your purpose of travel, target destination, and home ties to assess eligibility and identify potential profile risks.",
//               },
//               {
//                 step: "Step 2: Document Compilation & Verification",
//                 desc: "Our consultants assist you in arranging compliant financial records, tax filings, employment proof, and invitation letters.",
//               },
//               {
//                 step: "Step 3: Portal Submission & Support",
//                 desc: "We review your forms, compile your supporting documents, manage portal submissions, and guide you through to approval.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-850 border border-red-950 rounded-xl text-left"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-red-400">
//                   {item.step}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Why Choose Walshken Immigration?
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Rigorous File Quality Control",
//                 desc: "We verify every bank certificate, employment record, and invitation letter to ensure consistency and minimize risks.",
//               },
//               {
//                 title: "Transparent, Honest Guidance",
//                 desc: "We provide realistic assessments of your profile's strengths and highlight potential concerns before submission.",
//               },
//               {
//                 title: "Experienced Consultant Support",
//                 desc: "From initial intake up to biometric and visa collection steps, our team supports you with clear communication.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-800 border border-red-950 rounded-xl text-left shadow-lg hover:border-red-900/30 transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-white">
//                   <span className="text-red-500">{item.title}</span>
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 text-center bg-gradient-to-t from-red-950/20 to-transparent">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//           >
//             Plan Your Next Trip with Ease
//           </motion.h2>
//           <motion.p
//             className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//           >
//             A visitor visa application requires careful administrative planning. Contact our consultancy team today to schedule an initial consultation and organize your next trip with confidence.
//           </motion.p>
//           <motion.button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-0.5"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={2}
//           >
//             Request Your Consultation
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default VisitorVisa;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUmbrellaBeach,
  FaUsers,
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaPassport,
  FaUserCheck,
  FaFileAlt,
  FaPaperPlane
} from "react-icons/fa";

const VisitorVisa = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Benefits of Visitor Visa (6 Cards with Distinct Images)
  const visitorBenefits = [
    {
      title: "Tourism",
      desc: "Explore new cultures, traditions, and historic travel destinations worldwide.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      icon: <FaUmbrellaBeach className="text-red-500 text-base" />,
    },
    {
      title: "Family Visits",
      desc: "Reconnect with immediate family, relatives, and close friends across international borders.",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
      icon: <FaUsers className="text-red-500 text-base" />,
    },
    {
      title: "Business Trips",
      desc: "Attend executive meetings, industry conferences, and expand your international business networks.",
      img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
      icon: <FaBriefcase className="text-red-500 text-base" />,
    },
    {
      title: "Short-Term Study",
      desc: "Participate in short-term language classes, vocational training, or academic certificate programs.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      icon: <FaGraduationCap className="text-red-500 text-base" />,
    },
    {
      title: "Events & Exhibitions",
      desc: "Attend global trade fairs, cultural festivals, athletic tournaments, or professional expos.",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      icon: <FaCalendarAlt className="text-red-500 text-base" />,
    },
    {
      title: "Flexible Entry Formats",
      desc: "Obtain single-entry or long-term multiple-entry visas to coordinate multiple travel plans.",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
      icon: <FaPassport className="text-red-500 text-base" />,
    },
  ];

  // 2. Application Process Steps (with Styled Icons)
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Intake Assessment",
      desc: "We review your purpose of travel, target destination, and home ties to assess eligibility and identify potential profile risks.",
      icon: <FaUserCheck className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Document Compilation & Verification",
      desc: "Our consultants assist you in arranging compliant financial records, tax filings, employment proof, and invitation letters.",
      icon: <FaFileAlt className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Portal Submission & Support",
      desc: "We review your forms, compile your supporting documents, manage portal submissions, and guide you through to approval.",
      icon: <FaPaperPlane className="text-white text-2xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-950 text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center relative overflow-hidden border-b border-red-950/40">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-red-500"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-red-500">
              Temporary Entry & Tourism Pathways
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Visitor Visa Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Travel across the globe with ease. We simplify your visitor visa
            process, ensuring a smooth and stress-free journey.
          </motion.p>
          <motion.p
            className="text-sm text-gray-400 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Visitor visas and short-term travel permits carry precise requirements and strict timelines. We help organize and submit your applications with the meticulous detail and accuracy required by border agencies.
          </motion.p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT VISITOR VISA
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              What is a Visitor Visa?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Visitor Visa allows you to enter another country temporarily for
              tourism, visiting family/friends, attending events, or coordinating short-term
              business meetings. Each country enforces specific regulatory frameworks and eligibility criteria for granting temporary entry. If you are considering transitioning your stay into an educational journey, read more about our <Link to="/study-visa" className="text-red-500 hover:underline">Study Visa Services</Link>, or evaluate <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Pathways</Link> if you receive an eligible employment offer.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our expert consultants help you prepare the right documentation,
              meet complex eligibility requirements, and compile responsive applications so you
              can coordinate your travels with confidence.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Temporary resident applications are subject to high refusal rates because immigration officers closely evaluate your temporary intent. A single clerical error, inadequate proof of funds, or a weak demonstration of your ties to your home country can set back your travel plans for months. We focus on ensuring your file is prepared properly on the first submission.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=900&q=80"
              alt="Visitor Visa"
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20">
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                Understanding Temporary Resident Intent & Consular Scrutiny
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                To secure a temporary visitor visa, you must satisfy consular officers that you will voluntarily exit the host nation at the end of your authorized stay. 
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Visa officers closely analyze your home ties—such as ongoing employment, business assets, immediate family relations, and real estate holdings—alongside your travel itinerary and financial capability.
              </p>
              {/* Cleaned bold tags without raw asterisks */}
              <p className="text-gray-300 leading-relaxed text-sm">
                At <span className="text-white font-bold">Walshken Immigration</span>, we understand how these factors are analyzed. We work with you to arrange and document these critical factors carefully, helping you present a transparent and consistent travel profile to immigration authorities.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              The Value of a Strategic Consultation
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              While a visitor visa application may seem like a basic form, it forms part of your permanent immigration record. Inconsistencies or accidental omissions on visitor visa applications can negatively impact your future <Link to="/study-visa" className="text-red-500 hover:underline">study permit</Link>, <Link to="/work-visa" className="text-red-500 hover:underline">work permit</Link>, or <Link to="/pr" className="text-red-500 hover:underline">permanent residency goals</Link>.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Our initial consultation provides an eligibility assessment and identifies potential challenges in your travel history or documentation before you submit files to foreign offices. 
            </p>
            <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
              <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Our Commitment</span>
              <p className="text-xs text-gray-300">
                To assess your profile objectively, help you gather necessary documentation, and structure an organized submission package that addresses common consular concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. BENEFITS OF A VISITOR VISA (6 CARDS WITH IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Benefits of a <span className="text-red-500">Visitor Visa</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {visitorBenefits.map((item, index) => (
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
          5. APPLICATION PROCESS (WITH STYLED ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Visitor Visa <span className="text-red-500">Application Process</span>
          </h2>
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
          6. WHY CHOOSE WALSHKEN IMMIGRATION?
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Why Walshken</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Why Choose <span className="text-red-500">Walshken Immigration?</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Rigorous File Quality Control",
              desc: "We verify every bank certificate, employment record, and invitation letter to ensure consistency and minimize risks.",
            },
            {
              title: "Transparent, Honest Guidance",
              desc: "We provide realistic assessments of your profile's strengths and highlight potential concerns before submission.",
            },
            {
              title: "Experienced Consultant Support",
              desc: "From initial intake up to biometric and visa collection steps, our team supports you with clear communication.",
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
              <h3 className="text-lg font-bold mb-2 text-white">
                <span className="text-red-500">{item.title}</span>
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
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Plan Your Next Trip with Ease
          </motion.h2>
          <motion.p
            className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            A visitor visa application requires careful administrative planning. Contact our consultancy team today to schedule an initial consultation and organize your next trip with confidence.
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
          >
            Request Your Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default VisitorVisa;
