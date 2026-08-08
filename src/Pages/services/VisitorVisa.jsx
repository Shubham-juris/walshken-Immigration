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

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const VisitorVisa = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
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
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
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

      {/* About Visitor Visa */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
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
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
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
              className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Section: Temporary Intent and Consultation Value */}
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
              <p className="text-gray-300 leading-relaxed text-sm">
                At **Walshken Immigration**, we understand how these factors are analyzed. We work with you to arrange and document these critical factors carefully, helping you present a transparent and consistent travel profile to immigration authorities.
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

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-10">
            Benefits of a Visitor Visa
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Tourism",
                desc: "Explore new cultures, traditions, and historic travel destinations worldwide.",
              },
              {
                title: "Family Visits",
                desc: "Reconnect with immediate family, relatives, and close friends across international borders.",
              },
              {
                title: "Business Trips",
                desc: "Attend executive meetings, industry conferences, and expand your international business networks.",
              },
              {
                title: "Short-Term Study",
                desc: "Participate in short-term language classes, vocational training, or academic certificate programs.",
              },
              {
                title: "Events & Exhibitions",
                desc: "Attend global trade fairs, cultural festivals, athletic tournaments, or professional expos.",
              },
              {
                title: "Flexible Entry Formats",
                desc: "Obtain single-entry or long-term multiple-entry visas to coordinate multiple travel plans.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-850 p-6 rounded-xl border border-red-950 text-left hover:border-red-900/30 transition flex flex-col justify-between"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  <span className="text-red-500">{item.title}</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-10 text-red-500">
            Visitor Visa Application Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Consultation & Intake Assessment",
                desc: "We review your purpose of travel, target destination, and home ties to assess eligibility and identify potential profile risks.",
              },
              {
                step: "Step 2: Document Compilation & Verification",
                desc: "Our consultants assist you in arranging compliant financial records, tax filings, employment proof, and invitation letters.",
              },
              {
                step: "Step 3: Portal Submission & Support",
                desc: "We review your forms, compile your supporting documents, manage portal submissions, and guide you through to approval.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-850 border border-red-950 rounded-xl text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  {item.step}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-10">
            Why Choose Walshken Immigration?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
                className="p-6 bg-gray-800 border border-red-950 rounded-xl text-left shadow-lg hover:border-red-900/30 transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  <span className="text-red-500">{item.title}</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-t from-red-950/20 to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Plan Your Next Trip with Ease
          </motion.h2>
          <motion.p
            className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            A visitor visa application requires careful administrative planning. Contact our consultancy team today to schedule an initial consultation and organize your next trip with confidence.
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-0.5"
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
