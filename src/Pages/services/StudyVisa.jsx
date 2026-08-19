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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaFileAlt, 
  FaUserCheck, 
  FaPenFancy, 
  FaMoneyCheckAlt, 
  FaSearch, 
  FaRedoAlt,
  FaGraduationCap,
  FaGlobe,
  FaBriefcase,
  FaCheckCircle,
  FaShieldAlt,
  FaCompass
} from "react-icons/fa";

// Image Imports (Using verified available assets)
import heroStudent from "../../assets/hero/studentVisa.webp";
import benefitImg1 from "../../assets/hero/pexels-cottonbro-5137969.jpg";
import benefitImg2 from "../../assets/hero/pexels-ekrulila-2305114.jpg";
import benefitImg3 from "../../assets/hero/pexels-joshsorenson-1716826.jpg";
import processImg1 from "../../assets/hero/AboutImage1.webp";
import processImg2 from "../../assets/hero/AboutImage2.webp";
import processImg3 from "../../assets/hero/AboutImage3.webp";
import processImg4 from "../../assets/hero/TouristVisa.webp";
import trustImg1 from "../../assets/hero/pexels-freestockpro-1008155.jpg";
import trustImg2 from "../../assets/hero/VisaImg.jpg";
import trustImg3 from "../../assets/hero/WorkVisa.webp";
import trustImg4 from "../../assets/hero/HeroBGImage.webp";

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

  // Compact Global Destinations Data
  const destinations = [
    { country: "Canada", flag: "🇨🇦" },
    { country: "USA", flag: "🇺🇸" },
    { country: "UK", flag: "🇬🇧" },
    { country: "Australia", flag: "🇦🇺" },
    { country: "New Zealand", flag: "🇳🇿" },
    { country: "Germany", flag: "🇩🇪" },
    { country: "Ireland", flag: "🇮🇪" },
    { country: "France", flag: "🇫🇷" },
    { country: "Switzerland", flag: "🇨🇭" },
    { country: "Singapore", flag: "🇸🇬" },
  ];

  // 6 Service Cards (3x2 Grid)
  const services = [
    {
      title: "Study Visa & Permit Applications",
      desc: "End-to-end guidance and compliant application filing support for your target country.",
      icon: <FaFileAlt className="text-red-500 text-2xl" />,
    },
    {
      title: "Student Profile Assessment",
      desc: "We evaluate your academic background and credentials to recommend optimal study pathways.",
      icon: <FaUserCheck className="text-red-500 text-2xl" />,
    },
    {
      title: "Study Plan & Statement Guidance",
      desc: "Assisting you in formulating clear, genuine Statements of Purpose (SOP) that satisfy immigration criteria.",
      icon: <FaPenFancy className="text-red-500 text-2xl" />,
    },
    {
      title: "Financial Documentation Review",
      desc: "Verification and strategic organization of proof-of-funds to satisfy strict visa office thresholds.",
      icon: <FaMoneyCheckAlt className="text-red-500 text-2xl" />,
    },
    {
      title: "Application & Document Review",
      desc: "Thorough pre-submission quality audits to prevent clerical errors, inconsistencies, or omissions.",
      icon: <FaSearch className="text-red-500 text-2xl" />,
    },
    {
      title: "Previous Visa Refusal Assessment",
      desc: "Detailed case analysis of prior refusals to construct strategic, responsive re-applications.",
      icon: <FaRedoAlt className="text-red-500 text-2xl" />,
    },
  ];

  // 4 Image-Led Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Institution Admission",
      desc: "Get accepted by an authorized or designated learning institution abroad.",
      img: processImg1,
    },
    {
      step: "02",
      title: "Documentation & Strategy",
      desc: "Compile detailed financial proofs, language test scores, academic records, and statement of intent.",
      img: processImg2,
    },
    {
      step: "03",
      title: "Visa Processing & Submission",
      desc: "Consultant-supported submission of your final profile for visa processing and official review.",
      img: processImg3,
    },
    {
      step: "04",
      title: "Pre-Departure Support",
      desc: "Guidance on travel preparation, arrival protocols, and initial settlement support.",
      img: processImg4,
    },
  ];

  // 4 Image-Led Trust Cards
  const trustCards = [
    {
      title: "Expert Consultants",
      desc: "Our team provides thorough academic mapping, profile strengthening, and compliance guidance.",
      img: trustImg1,
      icon: <FaShieldAlt className="text-red-500 text-lg" />,
    },
    {
      title: "Detail-Oriented Processing",
      desc: "We verify every document, statement, and financial record to minimize risk of administrative delays.",
      img: trustImg2,
      icon: <FaCheckCircle className="text-red-500 text-lg" />,
    },
    {
      title: "Comprehensive Care",
      desc: "From initial intake up to permit issuance, we support you with clear, timely communication.",
      img: trustImg3,
      icon: <FaCompass className="text-red-500 text-lg" />,
    },
    {
      title: "Proven Track Record",
      desc: "Reliable experience supporting international students across diverse study destinations worldwide.",
      img: trustImg4,
      icon: <FaGraduationCap className="text-red-500 text-lg" />,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-r from-black via-gray-950 to-red-950 overflow-hidden border-b border-red-950/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Hero Text */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs uppercase font-bold tracking-widest">
              Global Immigration Services
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
                Study Visa Assistance
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Begin your international education journey with our expert study visa services. Unlock global opportunities for learning and career growth.
            </p>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl border-l-2 border-red-600 pl-4 py-1 italic">
              Study permits and temporary resident applications carry precise requirements and strict timelines. We assist in preparing and submitting these applications with the absolute accuracy and detail these processes demand.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/form"
                className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-red-900/30 transition transform hover:-translate-y-0.5 text-center"
              >
                Request a Consultation
              </Link>
              <Link
                to="/form"
                className="px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 font-bold text-sm uppercase tracking-wider rounded-lg transition text-center"
              >
                Start Your Assessment
              </Link>
            </div>
          </motion.div>

          {/* Right Hero Image with Trust Highlights */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md">
              <img
                src={heroStudent}
                alt="International Student"
                className="rounded-2xl shadow-2xl border-2 border-red-950 object-cover w-full h-[420px]"
              />
              
              {/* Overlay Badge 1 */}
              <div className="absolute top-6 -left-6 bg-gray-950/90 backdrop-blur-md border border-red-900/40 p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                  <FaGlobe />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Global Guidance</p>
                  <p className="text-xs font-bold text-white">Top Destinations</p>
                </div>
              </div>

              {/* Overlay Badge 2 */}
              <div className="absolute bottom-6 -right-6 bg-gray-950/90 backdrop-blur-md border border-red-900/40 p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                  <FaCheckCircle />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Comprehensive Care</p>
                  <p className="text-xs font-bold text-white">Personalized Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. BENEFITS OF STUDYING ABROAD (3 IMAGE-LED CARDS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Benefits of <span className="text-red-500">Studying Abroad</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Studying abroad opens doors to transform your future. Here's how.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "World-Class Education",
              desc: "Access top-tier universities and globally recognized academic programs that build a strong foundation for your future.",
              img: benefitImg1,
              icon: <FaGraduationCap className="text-red-500" />,
            },
            {
              title: "Global Exposure",
              desc: "Experience diverse cultures, build international networks, and broaden your personal and professional perspectives.",
              img: benefitImg2,
              icon: <FaGlobe className="text-red-500" />,
            },
            {
              title: "Career Growth",
              desc: "Enhance your career prospects with post-study work options, internships, and valuable global workplace experience.",
              img: benefitImg3,
              icon: <FaBriefcase className="text-red-500" />,
            },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/40 transition-all flex flex-col justify-between shadow-xl group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-base font-bold text-white">
                    {benefit.icon}
                    <h3>{benefit.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. HOW WE CAN HELP (6 SERVICE CARDS, 3x2 GRID)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-b border-red-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Our Expertise</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              How We <span className="text-red-500">Can Help</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Comprehensive consulting services structured to guide you through every stage of your study visa application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 hover:border-red-500/40 transition-colors shadow-lg flex flex-col justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
              >
                <div className="mb-4">{srv.icon}</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">{srv.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. GLOBAL STUDY DESTINATIONS (COMPACT GRID WITH FLAGS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Destinations</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Global <span className="text-red-500">Study Destinations</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            We assist students with admissions and study visa filing across top educational hubs.
          </p>
        </div>

        {/* Balanced, Compact Destination Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              className="p-4 bg-gray-950 rounded-xl border border-gray-800/80 hover:border-red-600/50 transition-all flex items-center justify-center gap-3 shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx * 0.5}
            >
              <span className="text-2xl">{dest.flag}</span>
              <span className="text-sm font-semibold text-gray-200">{dest.country}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. STUDY VISA APPLICATION PROCESS (4 IMAGE-LED STEPS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 border-t border-red-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Step-By-Step Roadmap</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Study Visa <span className="text-red-500">Application Process</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              A structured roadmap designed to keep your preparation transparent and timely.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-950 rounded-xl overflow-hidden border border-gray-800 shadow-xl flex flex-col justify-between group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-extrabold px-2.5 py-1 rounded shadow">
                    Step {step.step}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. WHY CHOOSE WALSHKEN IMMIGRATION? (4 IMAGE-LED CARDS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/30">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Why Walshken</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Why Choose <span className="text-red-500">Walshken Immigration?</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Experienced consulting guidance focused on compliance, clarity, and client care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-gray-950 rounded-xl overflow-hidden border border-gray-800 shadow-xl flex flex-col justify-between group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-gray-900/90 p-2 rounded-lg border border-gray-700">
                  {card.icon}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. FINAL CTA SECTION (SINGLE DOMINANT BUTTON)
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/30 via-black to-gray-950 border-t border-red-950/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight">
            Start Your Study Abroad Journey Today
          </h2>
          <p className="mb-10 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Speak with us before submitting your application. A thorough consultation can identify potential risks in your file and optimize your plan of study.
          </p>
          <Link
            to="/form"
            className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Request a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default StudyVisa;
