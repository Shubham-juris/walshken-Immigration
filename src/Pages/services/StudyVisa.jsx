// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const StudyVisa = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // Expanded list of study destinations
//   const studyDestinations = [
//     "Canada", "USA", "UK", "Australia", "New Zealand", "Germany",
//     "France", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland",
//     "Ireland", "Denmark", "Norway", "Austria", "Belgium", "Finland",
//     "Mexico", "United Arab Emirates", "Saudi Arabia", "Qatar", "Singapore",
//     "Japan", "South Korea", "China", "Malaysia"
//   ];

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
//             Study Visa Assistance
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300">
//             Begin your international education journey with our expert study
//             visa services. Unlock global opportunities for learning and career
//             growth.
//           </p>
//         </motion.div>
//       </section>

//       {/* About Study Visa */}
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
//               <span className="text-red-500">Study Visa?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Study Visa allows international students to pursue education in
//               top universities across the world. It opens doors to high-quality
//               education, international exposure, and global career
//               opportunities.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               With the right guidance, you can secure admission to your dream
//               university, experience cultural diversity, and set the foundation
//               for a successful career abroad.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
//               alt="Study Abroad"
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
//             Benefits of a <span className="text-red-500">Study Visa</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Global Education",
//                 desc: "Access world-class universities and advanced learning systems.",
//               },
//               {
//                 title: "Cultural Exposure",
//                 desc: "Experience diversity and build global connections.",
//               },
//               {
//                 title: "Work Opportunities",
//                 desc: "Part-time job options while studying to support living expenses.",
//               },
//               {
//                 title: "Post-Study Options",
//                 desc: "Opportunity to extend stay with post-study work visas.",
//               },
//               {
//                 title: "Permanent Residency Pathway",
//                 desc: "Study visas often lead to PR options in many countries.",
//               },
//               {
//                 title: "Skill Development",
//                 desc: "Enhance personal, academic, and professional skills abroad.",
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
//                 <h3 className="text-xl font-semibold mb-2 text-red-500">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Top Study Destinations */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Global <span className="text-red-500">Study Destinations</span>
//           </h2>
//           <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
//             {studyDestinations.map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow-lg border border-red-700 hover:bg-red-900 hover:text-white transition cursor-pointer"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <h3 className="text-sm font-semibold text-red-500 hover:text-white">
//                   {country}
//                 </h3>
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
//           <h2 className="text-3xl font-bold mb-8 text-white">
//             Study Visa <span className="text-red-500">Application Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: University Admission",
//                 desc: "Get accepted by a recognized university or college abroad.",
//               },
//               {
//                 step: "Step 2: Documentation",
//                 desc: "Prepare financial proofs, language test scores, and academic records.",
//               },
//               {
//                 step: "Step 3: Visa Approval",
//                 desc: "Submit your application and get your study visa approved.",
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

//       {/* Why Choose Us */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 text-white">
//             Why <span className="text-red-500">Choose Us?</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Expert Counsellors",
//                 desc: "Our team provides the best university and visa guidance.",
//               },
//               {
//                 title: "High Success Rate",
//                 desc: "Thousands of successful student visas processed globally.",
//               },
//               {
//                 title: "Complete Assistance",
//                 desc: "From admissions to visa approval, we guide you at every step.",
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
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             Start Your{" "}
//             <span className="text-red-500">Study Abroad Journey</span> Today
//           </h2>
//           <p className="mb-6 text-lg text-gray-300">
//             Contact us now for expert guidance on study visas and admissions.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition"
//           >
//             Book Free Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default StudyVisa;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const StudyVisa = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // Expanded list of study destinations
//   const studyDestinations = [
//     "Canada", "USA", "UK", "Australia", "New Zealand", "Germany",
//     "France", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland",
//     "Ireland", "Denmark", "Norway", "Austria", "Belgium", "Finland",
//     "Mexico", "United Arab Emirates", "Saudi Arabia", "Qatar", "Singapore",
//     "Japan", "South Korea", "China", "Malaysia"
//   ];

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
//               Temporary Residence pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Study Visa Assistance
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Begin your international education journey with our expert study
//             visa services. Unlock global opportunities for learning and career
//             growth.
//           </p>
//           <p className="text-base text-gray-400 max-w-2xl mx-auto">
//             Study permits and temporary resident applications carry precise requirements and 
//             strict timelines. We assist in preparing and submitting these applications with 
//             the absolute accuracy and attention to detail these processes demand, keeping you 
//             informed at every stage of your application.
//           </p>
//         </motion.div>
//       </section>

//       {/* About Study Visa */}
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
//               <span className="text-red-500">Study Visa?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Study Visa allows international students to pursue education in
//               top universities across the world. It opens doors to high-quality
//               education, international exposure, and global career
//               opportunities.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               With the right guidance, you can secure admission to your dream
//               university, experience cultural diversity, and set the foundation
//               for a successful career abroad. If you wish to transition to employment 
//               after graduation, explore our <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Options</Link>. 
//               Many candidates also utilize their academic background as a pathway 
//               to <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
//               Coming to study in a new country is one of the most significant decisions 
//               you will ever make. Because study permit applications require comprehensive, detailed profiles with unforgiving timelines, a single error can set back months of academic preparation. We focus on ensuring your submission is structurally correct and complete the first time.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
//               alt="Study Abroad"
//               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
//             />
//             <div className="absolute -bottom-6 -right-6 bg-gray-950 border border-red-800/40 p-5 rounded-lg max-w-[220px] hidden md:block">
//               <span className="text-red-500 font-bold block text-sm tracking-widest uppercase mb-1">Our Standard</span>
//               <p className="text-xs text-gray-300 leading-relaxed">
//                 Thoroughly compiled profiles submitted with absolute diligence.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section: Consultancy & Value Added */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20"
//           >
//             <h3 className="text-2xl font-bold mb-4 text-red-500">
//               Why Do You Need the Assistance of a Consultant?
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               By regulatory framework, you have the right to receive professional consulting assistance to guide you through your study permit processes. This pathway is recommended because the immigration requirements can be complex, and temporary resident intent must be thoroughly demonstrated to immigration authorities.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               We focus on ensuring that your educational ambitions line up with all policy guidelines, and we take responsibility for navigating these hurdles systematically.
//             </p>
//             <ul className="space-y-3 text-gray-300">
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Complete review of academic credentials and study plan intent.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Strategic formulation of strong, convincing Statements of Purpose (SOP).</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Careful analysis of financial support documents to satisfy border agency requirements.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Proactive management of potential administrative delays or procedural requests.</span>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="space-y-6"
//           >
//             <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20">
//               <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//                 What We Do for Your Profile
//               </h4>
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 Global student applications can be highly complex and confusing. Compiling extensive documents, filling out various forms correctly, and proving educational ties can take weeks of continuous work.
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 The best consulting firm for you is one that gets to know your background, possesses the skill and dedication to handle your unique situation, and prepares a file that clearly demonstrates the merits of your application. Having **Walshken Immigration** on your side lets you focus on preparing for your classes while we handle the administration.
//               </p>
//             </div>

//             <div className="bg-gradient-to-r from-red-950 to-black p-8 rounded-2xl border border-red-700/40">
//               <h4 className="text-xl font-bold mb-3 text-white">
//                 Preliminary Consultation Value
//               </h4>
//               <p className="text-gray-300 leading-relaxed">
//                 We believe in providing an honest eligibility assessment. Our initial consultation session is a mutual opportunity to evaluate your qualifications, carry out a thorough interview regarding your chosen course of study, and map out post-study opportunities, such as <Link to="/work-visa" className="text-red-500 hover:underline">work permits</Link> or potential long-term <Link to="/pr" className="text-red-500 hover:underline">permanent residency pathways</Link>.
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
//             Benefits of a <span className="text-red-500">Study Visa</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Global Education",
//                 desc: "Access world-class universities and advanced learning systems.",
//               },
//               {
//                 title: "Cultural Exposure",
//                 desc: "Experience diversity and build global connections.",
//               },
//               {
//                 title: "Work Opportunities",
//                 desc: "Part-time job options while studying to support living expenses.",
//               },
//               {
//                 title: "Post-Study Options",
//                 desc: "Opportunity to extend stay with post-study work visas.",
//               },
//               {
//                 title: "Permanent Residency Pathway",
//                 desc: "Study visas often lead to PR options in many countries.",
//               },
//               {
//                 title: "Skill Development",
//                 desc: "Enhance personal, academic, and professional skills abroad.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800/40"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold mb-2 text-red-500">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Top Study Destinations */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Global <span className="text-red-500">Study Destinations</span>
//           </h2>
//           <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
//             {studyDestinations.map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow-lg border border-red-700/50 hover:bg-red-900 hover:text-white transition cursor-pointer"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <h3 className="text-sm font-semibold text-red-500 hover:text-white">
//                   {country}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-8 text-white">
//             Study Visa <span className="text-red-500">Application Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Institution Admission",
//                 desc: "Get accepted by an authorized or designated learning institution abroad.",
//               },
//               {
//                 step: "Step 2: Documentation & Strategy",
//                 desc: "Compile detailed financial proofs, language test scores, academic records, and statement of intent.",
//               },
//               {
//                 step: "Step 3: Visa Processing & Submission",
//                 desc: "Consultant-supported submission of your final profile for visa processing and subsequent approval.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-red-950 to-black rounded-xl shadow-lg border border-red-900/20"
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

//       {/* Why Choose Us */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 text-white">
//             Why <span className="text-red-500">Choose Walshken Immigration?</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Expert Consultants",
//                 desc: "Our team provides thorough academic mapping, profile strengthening, and visa compliance guidance.",
//               },
//               {
//                 title: "Detail-Oriented Processing",
//                 desc: "We verify every document, statement, and financial record to minimize risk of delays.",
//               },
//               {
//                 title: "Comprehensive Care",
//                 desc: "From your initial assessment up to permit issuance, we support you with clear communication.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow border border-red-700/50"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-red-500">
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
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             Start Your{" "}
//             <span className="text-red-500">Study Abroad Journey</span> Today
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Speak with us before submitting your application. A thorough consultation can identify potential risks in your file and optimize your plan of study.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Request a Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default StudyVisa;


// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaGraduationCap,
//   FaGlobe,
//   FaBriefcase,
//   FaPassport,
//   FaAward,
//   FaLightbulb,
//   FaUniversity,
//   FaFileAlt,
//   FaPaperPlane,
//   FaUserTie,
//   FaClipboardCheck,
//   FaHandsHelping,
// } from "react-icons/fa";

// const StudyVisa = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // Expanded list of study destinations
//   const studyDestinations = [
//     "Canada", "USA", "UK", "Australia", "New Zealand", "Germany",
//     "France", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland",
//     "Ireland", "Denmark", "Norway", "Austria", "Belgium", "Finland",
//     "Mexico", "United Arab Emirates", "Saudi Arabia", "Qatar", "Singapore",
//     "Japan", "South Korea", "China", "Malaysia"
//   ];

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
//               Temporary Residence pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Study Visa Assistance
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Begin your international education journey with our expert study
//             visa services. Unlock global opportunities for learning and career
//             growth.
//           </p>
//           <p className="text-base text-gray-400 max-w-2xl mx-auto">
//             Study permits and temporary resident applications carry precise requirements and 
//             strict timelines. We assist in preparing and submitting these applications with 
//             the absolute accuracy and attention to detail these processes demand, keeping you 
//             informed at every stage of your application.
//           </p>
//         </motion.div>
//       </section>

//       {/* About Study Visa */}
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
//               <span className="text-red-500">Study Visa?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Study Visa allows international students to pursue education in
//               top universities across the world. It opens doors to high-quality
//               education, international exposure, and global career
//               opportunities.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               With the right guidance, you can secure admission to your dream
//               university, experience cultural diversity, and set the foundation
//               for a successful career abroad. If you wish to transition to employment 
//               after graduation, explore our <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Options</Link>. 
//               Many candidates also utilize their academic background as a pathway 
//               to <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
//               Coming to study in a new country is one of the most significant decisions 
//               you will ever make. Because study permit applications require comprehensive, detailed profiles with unforgiving timelines, a single error can set back months of academic preparation. We focus on ensuring your submission is structurally correct and complete the first time.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
//               alt="Study Abroad"
//               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
//             />
//             <div className="absolute -bottom-6 -right-6 bg-gray-950 border border-red-800/40 p-5 rounded-lg max-w-[220px] hidden md:block">
//               <span className="text-red-500 font-bold block text-sm tracking-widest uppercase mb-1">Our Standard</span>
//               <p className="text-xs text-gray-300 leading-relaxed">
//                 Thoroughly compiled profiles submitted with absolute diligence.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section: Consultancy & Value Added */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20"
//           >
//             <h3 className="text-2xl font-bold mb-4 text-red-500">
//               Why Do You Need the Assistance of a Consultant?
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               By regulatory framework, you have the right to receive professional consulting assistance to guide you through your study permit processes. This pathway is recommended because the immigration requirements can be complex, and temporary resident intent must be thoroughly demonstrated to immigration authorities.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               We focus on ensuring that your educational ambitions line up with all policy guidelines, and we take responsibility for navigating these hurdles systematically.
//             </p>
//             <ul className="space-y-3 text-gray-300">
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Complete review of academic credentials and study plan intent.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Strategic formulation of strong, convincing Statements of Purpose (SOP).</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Careful analysis of financial support documents to satisfy border agency requirements.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1.5">•</span>
//                 <span>Proactive management of potential administrative delays or procedural requests.</span>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="space-y-6"
//           >
//             <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20">
//               <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//                 What We Do for Your Profile
//               </h4>
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 Global student applications can be highly complex and confusing. Compiling extensive documents, filling out various forms correctly, and proving educational ties can take weeks of continuous work.
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 The best consulting firm for you is one that gets to know your background, possesses the skill and dedication to handle your unique situation, and prepares a file that clearly demonstrates the merits of your application. Having **Walshken Immigration** on your side lets you focus on preparing for your classes while we handle the administration.
//               </p>
//             </div>

//             <div className="bg-gradient-to-r from-red-950 to-black p-8 rounded-2xl border border-red-700/40">
//               <h4 className="text-xl font-bold mb-3 text-white">
//                 Preliminary Consultation Value
//               </h4>
//               <p className="text-gray-300 leading-relaxed">
//                 We believe in providing an honest eligibility assessment. Our initial consultation session is a mutual opportunity to evaluate your qualifications, carry out a thorough interview regarding your chosen course of study, and map out post-study opportunities, such as <Link to="/work-visa" className="text-red-500 hover:underline">work permits</Link> or potential long-term <Link to="/pr" className="text-red-500 hover:underline">permanent residency pathways</Link>.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section with Icons */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Benefits of a <span className="text-red-500">Study Visa</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Global Education",
//                 desc: "Access world-class universities and advanced learning systems.",
//                 icon: <FaGraduationCap className="text-red-500 text-2xl" />,
//               },
//               {
//                 title: "Cultural Exposure",
//                 desc: "Experience diversity and build global connections.",
//                 icon: <FaGlobe className="text-red-500 text-2xl" />,
//               },
//               {
//                 title: "Work Opportunities",
//                 desc: "Part-time job options while studying to support living expenses.",
//                 icon: <FaBriefcase className="text-red-500 text-2xl" />,
//               },
//               {
//                 title: "Post-Study Options",
//                 desc: "Opportunity to extend stay with post-study work visas.",
//                 icon: <FaPassport className="text-red-500 text-2xl" />,
//               },
//               {
//                 title: "Permanent Residency Pathway",
//                 desc: "Study visas often lead to PR options in many countries.",
//                 icon: <FaAward className="text-red-500 text-2xl" />,
//               },
//               {
//                 title: "Skill Development",
//                 desc: "Enhance personal, academic, and professional skills abroad.",
//                 icon: <FaLightbulb className="text-red-500 text-2xl" />,
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800/40 text-left flex flex-col justify-between"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <div>
//                   <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center mb-4">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Top Study Destinations */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Global <span className="text-red-500">Study Destinations</span>
//           </h2>
//           <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
//             {studyDestinations.map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow-lg border border-red-700/50 hover:bg-red-900 hover:text-white transition cursor-pointer"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <h3 className="text-sm font-semibold text-red-500 hover:text-white">
//                   {country}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Process Section with Styled Icons */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-8 text-white">
//             Study Visa <span className="text-red-500">Application Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Institution Admission",
//                 desc: "Get accepted by an authorized or designated learning institution abroad.",
//                 icon: <FaUniversity className="text-white text-2xl" />,
//               },
//               {
//                 step: "Step 2: Documentation & Strategy",
//                 desc: "Compile detailed financial proofs, language test scores, academic records, and statement of intent.",
//                 icon: <FaFileAlt className="text-white text-2xl" />,
//               },
//               {
//                 step: "Step 3: Visa Processing & Submission",
//                 desc: "Consultant-supported submission of your final profile for visa processing and subsequent approval.",
//                 icon: <FaPaperPlane className="text-white text-2xl" />,
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-red-950 to-black rounded-xl shadow-lg border border-red-900/20 text-center flex flex-col items-center"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <div className="w-16 h-16 rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center mb-4 shadow-lg shadow-red-900/40">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">
//                   {item.step}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us with Styled Icons */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 text-white">
//             Why <span className="text-red-500">Choose Walshken Immigration?</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Expert Consultants",
//                 desc: "Our team provides thorough academic mapping, profile strengthening, and visa compliance guidance.",
//                 icon: <FaUserTie className="text-red-500 text-2xl" />,
//               },
//               {
//                 title: "Detail-Oriented Processing",
//                 desc: "We verify every document, statement, and financial record to minimize risk of delays.",
//                 icon: <FaClipboardCheck className="text-red-500 text-2xl" />,
//               },
//               {
//                 title: "Comprehensive Care",
//                 desc: "From your initial assessment up to permit issuance, we support you with clear communication.",
//                 icon: <FaHandsHelping className="text-red-500 text-2xl" />,
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow border border-red-700/50 text-left flex flex-col justify-between"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <div>
//                   <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center mb-4">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//                 </div>
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
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             Start Your{" "}
//             <span className="text-red-500">Study Abroad Journey</span> Today
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Speak with us before submitting your application. A thorough consultation can identify potential risks in your file and optimize your plan of study.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Request a Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default StudyVisa;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaGraduationCap,
//   FaGlobe,
//   FaBriefcase,
//   FaPassport,
//   FaAward,
//   FaLightbulb,
//   FaUniversity,
//   FaFileAlt,
//   FaPaperPlane,
//   FaUserTie,
//   FaClipboardCheck,
//   FaHandsHelping,
// } from "react-icons/fa";

// const StudyVisa = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // Expanded list of study destinations
//   const studyDestinations = [
//     "Canada", "USA", "UK", "Australia", "New Zealand", "Germany",
//     "France", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland",
//     "Ireland", "Denmark", "Norway", "Austria", "Belgium", "Finland",
//     "Mexico", "United Arab Emirates", "Saudi Arabia", "Qatar", "Singapore",
//     "Japan", "South Korea", "China", "Malaysia"
//   ];

//   // 1. Benefits Data (6 Cards with Full Images & Icons)
//   const studyBenefits = [
//     {
//       title: "Global Education",
//       desc: "Access world-class universities and advanced learning systems.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGV2k17fk_9XiQ5p6nO94jJEaqALRA4QNgQzfSakoiA&s=10",
//       icon: <FaGraduationCap className="text-red-500" />,
//     },
//     {
//       title: "Cultural Exposure",
//       desc: "Experience diversity and build global connections.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91-Jc5dMqzmeI06Lul95y-kBJrE4WrGGN5epzNlZBaw&s=10",
//       icon: <FaGlobe className="text-red-500" />,
//     },
//     {
//       title: "Work Opportunities",
//       desc: "Part-time job options while studying to support living expenses.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRlLxT3or4FdJB_Pnj8Q_NZQxUqhXOev4Wa4h6Zhn5g&s=10",
//       icon: <FaBriefcase className="text-red-500" />,
//     },
//     {
//       title: "Post-Study Options",
//       desc: "Opportunity to extend stay with post-study work visas.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QoWs79X_QyzOY1I0aEnvDvSDL1d4EuVArayR9ZPDog&s=10",
//       icon: <FaPassport className="text-red-500" />,
//     },
//     {
//       title: "Permanent Residency Pathway",
//       desc: "Study visas often lead to PR options in many countries.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8tsb5l7JPt1o3YiBnuWCGKJl6Fxipr70z9cR6SRjYA&s=10",
//       icon: <FaAward className="text-red-500" />,
//     },
//     {
//       title: "Skill Development",
//       desc: "Enhance personal, academic, and professional skills abroad.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4gc-XnyFhQ8LdJUdfwhhxwSGcm8-y-ku_JhPTG-CDg&s=10",
//       icon: <FaLightbulb className="text-red-500" />,
//     },
//   ];

//   // 2. Application Process Steps (with Images & Icons)
//   const processSteps = [
//     {
//       step: "Step 1: Institution Admission",
//       stepNum: "01",
//       desc: "Get accepted by an authorized or designated learning institution abroad.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsdIcrJ64RvOSFCVTOH8q6PkAX-uGyXf7z2fOpGdsMw&s=10",
//       icon: <FaUniversity className="text-white text-2xl" />,
//     },
//     {
//       step: "Step 2: Documentation & Strategy",
//       stepNum: "02",
//       desc: "Compile detailed financial proofs, language test scores, academic records, and statement of intent.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KpUsFr93yFgoKhorvCtnXvvjXrkP41ym898Eh6lS8Q&s=10",
//       icon: <FaFileAlt className="text-white text-2xl" />,
//     },
//     {
//       step: "Step 3: Visa Processing & Submission",
//       stepNum: "03",
//       desc: "Consultant-supported submission of your final profile for visa processing and subsequent approval.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lLiC9AR-dD3a8ZZeBH5qPO2ByOtZiaCBO54AbSjrLA&s=10",
//       icon: <FaPaperPlane className="text-white text-2xl" />,
//     },
//   ];

//   // 3. Why Choose Us (with Images & Icons)
//   const trustCards = [
//     {
//       title: "Expert Consultants",
//       desc: "Our team provides thorough academic mapping, profile strengthening, and visa compliance guidance.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0715fLlpwA0-WRfAqkqV355yCd8pNv5XCYTiEoM8qmg&s=10",
//       icon: <FaUserTie className="text-red-500" />,
//     },
//     {
//       title: "Detail-Oriented Processing",
//       desc: "We verify every document, statement, and financial record to minimize risk of delays.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQb8sN508SyEqVvkl28G8jqTccZlp792t7noKnA6TYQ&s=10",
//       icon: <FaClipboardCheck className="text-red-500" />,
//     },
//     {
//       title: "Comprehensive Care",
//       desc: "From your initial assessment up to permit issuance, we support you with clear communication.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HWY26UAnJDf-d58UsjrQsK-SJ9JfIceSy79Nn69x7Q&s=10",
//       icon: <FaHandsHelping className="text-red-500" />,
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
//               Temporary Residence pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Study Visa Assistance
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
//             Begin your international education journey with our expert study
//             visa services. Unlock global opportunities for learning and career
//             growth.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             Study permits and temporary resident applications carry precise requirements and 
//             strict timelines. We assist in preparing and submitting these applications with 
//             the absolute accuracy and attention to detail these processes demand, keeping you 
//             informed at every stage of your application.
//           </p>
//         </motion.div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           2. ABOUT STUDY VISA
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
//               <span className="text-red-500">Study Visa?</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Study Visa allows international students to pursue education in
//               top universities across the world. It opens doors to high-quality
//               education, international exposure, and global career
//               opportunities.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               With the right guidance, you can secure admission to your dream
//               university, experience cultural diversity, and set the foundation
//               for a successful career abroad. If you wish to transition to employment 
//               after graduation, explore our <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Options</Link>. 
//               Many candidates also utilize their academic background as a pathway 
//               to <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               Coming to study in a new country is one of the most significant decisions 
//               you will ever make. Because study permit applications require comprehensive, detailed profiles with unforgiving timelines, a single error can set back months of academic preparation. We focus on ensuring your submission is structurally correct and complete the first time.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
//               alt="Study Abroad"
//               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover h-[380px]"
//             />
//             <div className="absolute -bottom-6 -right-6 bg-gray-950 border border-red-800/40 p-5 rounded-lg max-w-[220px] hidden md:block">
//               <span className="text-red-500 font-bold block text-sm tracking-widest uppercase mb-1">Our Standard</span>
//               <p className="text-xs text-gray-300 leading-relaxed">
//                 Thoroughly compiled profiles submitted with absolute diligence.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           3. DEEP DIVE SECTION: CONSULTANCY & VALUE ADDED
//           ──────────────────────────────────────────────────────── */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20"
//           >
//             <h3 className="text-2xl font-bold mb-4 text-red-500">
//               Why Do You Need the Assistance of a Consultant?
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               By regulatory framework, you have the right to receive professional consulting assistance to guide you through your study permit processes. This pathway is recommended because the immigration requirements can be complex, and temporary resident intent must be thoroughly demonstrated to immigration authorities.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               We focus on ensuring that your educational ambitions line up with all policy guidelines, and we take responsibility for navigating these hurdles systematically.
//             </p>
//             <ul className="space-y-3 text-gray-300 text-xs sm:text-sm">
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1">•</span>
//                 <span>Complete review of academic credentials and study plan intent.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1">•</span>
//                 <span>Strategic formulation of strong, convincing Statements of Purpose (SOP).</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1">•</span>
//                 <span>Careful analysis of financial support documents to satisfy border agency requirements.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-red-500 mt-1">•</span>
//                 <span>Proactive management of potential administrative delays or procedural requests.</span>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="space-y-6"
//           >
//             <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20">
//               <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//                 What We Do for Your Profile
//               </h4>
//               <p className="text-gray-300 leading-relaxed mb-4 text-sm">
//                 Global student applications can be highly complex and confusing. Compiling extensive documents, filling out various forms correctly, and proving educational ties can take weeks of continuous work.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 The best consulting firm for you is one that gets to know your background, possesses the skill and dedication to handle your unique situation, and prepares a file that clearly demonstrates the merits of your application. Having <span className="text-white font-bold">Walshken Immigration</span> on your side lets you focus on preparing for your classes while we handle the administration.
//               </p>
//             </div>

//             <div className="bg-gradient-to-r from-red-950 to-black p-8 rounded-2xl border border-red-700/40">
//               <h4 className="text-xl font-bold mb-3 text-white">
//                 Preliminary Consultation Value
//               </h4>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 We believe in providing an honest eligibility assessment. Our initial consultation session is a mutual opportunity to evaluate your qualifications, carry out a thorough interview regarding your chosen course of study, and map out post-study opportunities, such as <Link to="/work-visa" className="text-red-500 hover:underline font-semibold">work permits</Link> or potential long-term <Link to="/pr" className="text-red-500 hover:underline font-semibold">permanent residency pathways</Link>.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           4. BENEFITS SECTION (6 CARDS WITH IMAGES & ICONS)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-white">
//             Benefits of a <span className="text-red-500">Study Visa</span>
//           </h2>
//         </motion.div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {studyBenefits.map((item, index) => (
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
//           5. TOP STUDY DESTINATIONS
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <div className="mb-14">
//             <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Global Network</p>
//             <h2 className="text-3xl md:text-5xl font-extrabold text-white">
//               Global <span className="text-red-500">Study Destinations</span>
//             </h2>
//           </div>

//           <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
//             {studyDestinations.map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-950 p-3.5 rounded-xl shadow-md border border-gray-800 hover:border-red-500 hover:bg-gray-900 transition-all cursor-pointer text-center"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index * 0.05}
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h3 className="text-xs font-semibold text-gray-300 hover:text-white">
//                   {country}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           6. APPLICATION PROCESS (IMAGE-LED ROADMAP STEPS)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-white">
//             Study Visa <span className="text-red-500">Application Process</span>
//           </h2>
//         </motion.div>

//         <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
//           {processSteps.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl flex flex-col justify-between group hover:border-red-500/40 transition-all"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index * 0.3}
//               variants={fadeUp}
//             >
//               {/* Card Image Header */}
//               <div className="relative h-44 overflow-hidden bg-gray-900">
//                 <img
//                   src={item.img}
//                   alt={item.step}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
//                 <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded shadow">
//                   Step {item.stepNum}
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="p-6 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-base font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
//                     {item.step}
//                   </h3>
//                   <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           7. WHY CHOOSE WALSHKEN IMMIGRATION? (IMAGE-LED CARDS)
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
//           {trustCards.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl flex flex-col justify-between group hover:border-red-500/40 transition-all"
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
//                   <h3 className="text-lg font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
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
//           8. CALL TO ACTION
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
//             Start Your <span className="text-red-500">Study Abroad Journey</span> Today
//           </h2>
//           <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             Speak with us before submitting your application. A thorough consultation can identify potential risks in your file and optimize your plan of study.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
//           >
//             Request a Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default StudyVisa;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaGlobe,
  FaBriefcase,
  FaPassport,
  FaAward,
  FaLightbulb,
  FaUniversity,
  FaFileAlt,
  FaPaperPlane,
  FaUserTie,
  FaClipboardCheck,
  FaHandsHelping,
} from "react-icons/fa";

const StudyVisa = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Expanded list of study destinations with flag icons
  const studyDestinations = [
    { country: "Canada", flag: "🇨🇦" },
    { country: "USA", flag: "🇺🇸" },
    { country: "UK", flag: "🇬🇧" },
    { country: "Australia", flag: "🇦🇺" },
    { country: "New Zealand", flag: "🇳🇿" },
    { country: "Germany", flag: "🇩🇪" },
    { country: "France", flag: "🇫🇷" },
    { country: "Italy", flag: "🇮🇹" },
    { country: "Spain", flag: "🇪🇸" },
    { country: "Netherlands", flag: "🇳🇱" },
    { country: "Sweden", flag: "🇸🇪" },
    { country: "Switzerland", flag: "🇨🇭" },
    { country: "Ireland", flag: "🇮🇪" },
    { country: "Denmark", flag: "🇩🇰" },
    { country: "Norway", flag: "🇳🇴" },
    { country: "Austria", flag: "🇦🇹" },
    { country: "Belgium", flag: "🇧🇪" },
    { country: "Finland", flag: "🇫🇮" },
    { country: "Mexico", flag: "🇲🇽" },
    { country: "United Arab Emirates", flag: "🇦🇪" },
    { country: "Saudi Arabia", flag: "🇸🇦" },
    { country: "Qatar", flag: "🇶🇦" },
    { country: "Singapore", flag: "🇸🇬" },
    { country: "Japan", flag: "🇯🇵" },
    { country: "South Korea", flag: "🇰🇷" },
    { country: "China", flag: "🇨🇳" },
    { country: "Malaysia", flag: "🇲🇾" },
  ];

  // 2. Benefits Data (6 Cards with Full Images & Icons)
  const studyBenefits = [
    {
      title: "Global Education",
      desc: "Access world-class universities and advanced learning systems.",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
      icon: <FaGraduationCap className="text-red-500" />,
    },
    {
      title: "Cultural Exposure",
      desc: "Experience diversity and build global connections.",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
      icon: <FaGlobe className="text-red-500" />,
    },
    {
      title: "Work Opportunities",
      desc: "Part-time job options while studying to support living expenses.",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      icon: <FaBriefcase className="text-red-500" />,
    },
    {
      title: "Post-Study Options",
      desc: "Opportunity to extend stay with post-study work visas.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      icon: <FaPassport className="text-red-500" />,
    },
    {
      title: "Permanent Residency Pathway",
      desc: "Study visas often lead to PR options in many countries.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      icon: <FaAward className="text-red-500" />,
    },
    {
      title: "Skill Development",
      desc: "Enhance personal, academic, and professional skills abroad.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      icon: <FaLightbulb className="text-red-500" />,
    },
  ];

  // 3. Application Process Steps (Pure Icon-Led Design)
  const processSteps = [
    {
      step: "Institution Admission",
      stepNum: "01",
      desc: "Get accepted by an authorized or designated learning institution abroad.",
      icon: <FaUniversity className="text-white text-2xl" />,
    },
    {
      step: "Documentation & Strategy",
      stepNum: "02",
      desc: "Compile detailed financial proofs, language test scores, academic records, and statement of intent.",
      icon: <FaFileAlt className="text-white text-2xl" />,
    },
    {
      step: "Visa Processing & Submission",
      stepNum: "03",
      desc: "Consultant-supported submission of your final profile for visa processing and subsequent approval.",
      icon: <FaPaperPlane className="text-white text-2xl" />,
    },
  ];

  // 4. Why Choose Us (With Educational / Consulting Visuals)
  const trustCards = [
    {
      title: "Expert Consultants",
      desc: "Our team provides thorough academic mapping, profile strengthening, and visa compliance guidance.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      icon: <FaUserTie className="text-red-500" />,
    },
    {
      title: "Detail-Oriented Processing",
      desc: "We verify every document, statement, and financial record to minimize risk of delays.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      icon: <FaClipboardCheck className="text-red-500" />,
    },
    {
      title: "Comprehensive Care",
      desc: "From your initial assessment up to permit issuance, we support you with clear communication.",
      // Replaced with dedicated academic/student advising photo
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      icon: <FaHandsHelping className="text-red-500" />,
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
              Temporary Residence pathways
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Study Visa Assistance
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Begin your international education journey with our expert study
            visa services. Unlock global opportunities for learning and career
            growth.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Study permits and temporary resident applications carry precise requirements and 
            strict timelines. We assist in preparing and submitting these applications with 
            the absolute accuracy and attention to detail these processes demand, keeping you 
            informed at every stage of your application.
          </p>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT STUDY VISA
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
              <span className="text-red-500">Study Visa?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Study Visa allows international students to pursue education in
              top universities across the world. It opens doors to high-quality
              education, international exposure, and global career
              opportunities.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              With the right guidance, you can secure admission to your dream
              university, experience cultural diversity, and set the foundation
              for a successful career abroad. If you wish to transition to employment 
              after graduation, explore our <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Options</Link>. 
              Many candidates also utilize their academic background as a pathway 
              to <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Coming to study in a new country is one of the most significant decisions 
              you will ever make. Because study permit applications require comprehensive, detailed profiles with unforgiving timelines, a single error can set back months of academic preparation. We focus on ensuring your submission is structurally correct and complete the first time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
              alt="Study Abroad"
              className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover h-[380px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-gray-950 border border-red-800/40 p-5 rounded-lg max-w-[220px] hidden md:block">
              <span className="text-red-500 font-bold block text-sm tracking-widest uppercase mb-1">Our Standard</span>
              <p className="text-xs text-gray-300 leading-relaxed">
                Thoroughly compiled profiles submitted with absolute diligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. DEEP DIVE SECTION: CONSULTANCY & VALUE ADDED
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Why Do You Need the Assistance of a Consultant?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              By regulatory framework, you have the right to receive professional consulting assistance to guide you through your study permit processes. This pathway is recommended because the immigration requirements can be complex, and temporary resident intent must be thoroughly demonstrated to immigration authorities.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              We focus on ensuring that your educational ambitions line up with all policy guidelines, and we take responsibility for navigating these hurdles systematically.
            </p>
            <ul className="space-y-3 text-gray-300 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Complete review of academic credentials and study plan intent.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Strategic formulation of strong, convincing Statements of Purpose (SOP).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Careful analysis of financial support documents to satisfy border agency requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Proactive management of potential administrative delays or procedural requests.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20">
              <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
                What We Do for Your Profile
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                Global student applications can be highly complex and confusing. Compiling extensive documents, filling out various forms correctly, and proving educational ties can take weeks of continuous work.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                The best consulting firm for you is one that gets to know your background, possesses the skill and dedication to handle your unique situation, and prepares a file that clearly demonstrates the merits of your application. Having <span className="text-white font-bold">Walshken Immigration</span> on your side lets you focus on preparing for your classes while we handle the administration.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-950 to-black p-8 rounded-2xl border border-red-700/40">
              <h4 className="text-xl font-bold mb-3 text-white">
                Preliminary Consultation Value
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                We believe in providing an honest eligibility assessment. Our initial consultation session is a mutual opportunity to evaluate your qualifications, carry out a thorough interview regarding your chosen course of study, and map out post-study opportunities, such as <Link to="/work-visa" className="text-red-500 hover:underline font-semibold">work permits</Link> or potential long-term <Link to="/pr" className="text-red-500 hover:underline font-semibold">permanent residency pathways</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. BENEFITS SECTION (6 CARDS WITH IMAGES & ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Benefits of a <span className="text-red-500">Study Visa</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {studyBenefits.map((item, index) => (
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
          5. TOP STUDY DESTINATIONS (GLOBAL NETWORK WITH FLAGS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Global Network</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Global <span className="text-red-500">Study Destinations</span>
          </h2>
        </motion.div>

        {/* Responsive Grid with Flag Emojis and Country Names */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-w-6xl mx-auto">
          {studyDestinations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 p-3 rounded-xl shadow-md border border-gray-800 hover:border-red-500 hover:bg-gray-900 transition-all cursor-pointer flex items-center justify-center gap-2.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.02}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl">{item.flag}</span>
              <h3 className="text-xs font-semibold text-gray-300 hover:text-white">
                {item.country}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. ROADMAP: APPLICATION PROCESS (ICON-LED CARDS)
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
            Study Visa <span className="text-red-500">Application Process</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-br from-red-950/20 to-black rounded-2xl shadow-xl border border-red-900/30 text-center flex flex-col items-center justify-between hover:border-red-500/40 transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.2}
              variants={fadeUp}
            >
              <div className="w-16 h-16 rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center mb-6 shadow-lg shadow-red-900/40">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">Step {item.stepNum}</span>
                <h3 className="text-lg font-bold mb-3 text-white">
                  {item.step}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. WHY CHOOSE WALSHKEN IMMIGRATION? (WITH ACADEMIC CARE IMAGE)
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
          {trustCards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl flex flex-col justify-between group hover:border-red-500/40 transition-all"
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
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
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
          8. CALL TO ACTION
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
            Start Your <span className="text-red-500">Study Abroad Journey</span> Today
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Speak with us before submitting your application. A thorough consultation can identify potential risks in your file and optimize your plan of study.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Request a Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default StudyVisa;
