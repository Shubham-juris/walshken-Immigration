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
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Expanded list of study destinations
  const studyDestinations = [
    "Canada", "USA", "UK", "Australia", "New Zealand", "Germany",
    "France", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland",
    "Ireland", "Denmark", "Norway", "Austria", "Belgium", "Finland",
    "Mexico", "United Arab Emirates", "Saudi Arabia", "Qatar", "Singapore",
    "Japan", "South Korea", "China", "Malaysia"
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
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
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Begin your international education journey with our expert study
            visa services. Unlock global opportunities for learning and career
            growth.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Study permits and temporary resident applications carry precise requirements and 
            strict timelines. We assist in preparing and submitting these applications with 
            the absolute accuracy and attention to detail these processes demand, keeping you 
            informed at every stage of your application.
          </p>
        </motion.div>
      </section>

      {/* About Study Visa */}
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
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
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
              className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
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

      {/* Deep Dive Section: Consultancy & Value Added */}
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
            <p className="text-gray-300 mb-6 leading-relaxed">
              By regulatory framework, you have the right to receive professional consulting assistance to guide you through your study permit processes. This pathway is recommended because the immigration requirements can be complex, and temporary resident intent must be thoroughly demonstrated to immigration authorities.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We focus on ensuring that your educational ambitions line up with all policy guidelines, and we take responsibility for navigating these hurdles systematically.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1.5">•</span>
                <span>Complete review of academic credentials and study plan intent.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1.5">•</span>
                <span>Strategic formulation of strong, convincing Statements of Purpose (SOP).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1.5">•</span>
                <span>Careful analysis of financial support documents to satisfy border agency requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1.5">•</span>
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
              <p className="text-gray-300 leading-relaxed mb-4">
                Global student applications can be highly complex and confusing. Compiling extensive documents, filling out various forms correctly, and proving educational ties can take weeks of continuous work.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The best consulting firm for you is one that gets to know your background, possesses the skill and dedication to handle your unique situation, and prepares a file that clearly demonstrates the merits of your application. Having **Walshken Immigration** on your side lets you focus on preparing for your classes while we handle the administration.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-950 to-black p-8 rounded-2xl border border-red-700/40">
              <h4 className="text-xl font-bold mb-3 text-white">
                Preliminary Consultation Value
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We believe in providing an honest eligibility assessment. Our initial consultation session is a mutual opportunity to evaluate your qualifications, carry out a thorough interview regarding your chosen course of study, and map out post-study opportunities, such as <Link to="/work-visa" className="text-red-500 hover:underline">work permits</Link> or potential long-term <Link to="/pr" className="text-red-500 hover:underline">permanent residency pathways</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with Icons */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Benefits of a <span className="text-red-500">Study Visa</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Education",
                desc: "Access world-class universities and advanced learning systems.",
                icon: <FaGraduationCap className="text-red-500 text-2xl" />,
              },
              {
                title: "Cultural Exposure",
                desc: "Experience diversity and build global connections.",
                icon: <FaGlobe className="text-red-500 text-2xl" />,
              },
              {
                title: "Work Opportunities",
                desc: "Part-time job options while studying to support living expenses.",
                icon: <FaBriefcase className="text-red-500 text-2xl" />,
              },
              {
                title: "Post-Study Options",
                desc: "Opportunity to extend stay with post-study work visas.",
                icon: <FaPassport className="text-red-500 text-2xl" />,
              },
              {
                title: "Permanent Residency Pathway",
                desc: "Study visas often lead to PR options in many countries.",
                icon: <FaAward className="text-red-500 text-2xl" />,
              },
              {
                title: "Skill Development",
                desc: "Enhance personal, academic, and professional skills abroad.",
                icon: <FaLightbulb className="text-red-500 text-2xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800/40 text-left flex flex-col justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Top Study Destinations */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Global <span className="text-red-500">Study Destinations</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {studyDestinations.map((country, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow-lg border border-red-700/50 hover:bg-red-900 hover:text-white transition cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-sm font-semibold text-red-500 hover:text-white">
                  {country}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section with Styled Icons */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">
            Study Visa <span className="text-red-500">Application Process</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Institution Admission",
                desc: "Get accepted by an authorized or designated learning institution abroad.",
                icon: <FaUniversity className="text-white text-2xl" />,
              },
              {
                step: "Step 2: Documentation & Strategy",
                desc: "Compile detailed financial proofs, language test scores, academic records, and statement of intent.",
                icon: <FaFileAlt className="text-white text-2xl" />,
              },
              {
                step: "Step 3: Visa Processing & Submission",
                desc: "Consultant-supported submission of your final profile for visa processing and subsequent approval.",
                icon: <FaPaperPlane className="text-white text-2xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-red-950 to-black rounded-xl shadow-lg border border-red-900/20 text-center flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <div className="w-16 h-16 rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center mb-4 shadow-lg shadow-red-900/40">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.step}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us with Styled Icons */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 text-white">
            Why <span className="text-red-500">Choose Walshken Immigration?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Expert Consultants",
                desc: "Our team provides thorough academic mapping, profile strengthening, and visa compliance guidance.",
                icon: <FaUserTie className="text-red-500 text-2xl" />,
              },
              {
                title: "Detail-Oriented Processing",
                desc: "We verify every document, statement, and financial record to minimize risk of delays.",
                icon: <FaClipboardCheck className="text-red-500 text-2xl" />,
              },
              {
                title: "Comprehensive Care",
                desc: "From your initial assessment up to permit issuance, we support you with clear communication.",
                icon: <FaHandsHelping className="text-red-500 text-2xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow border border-red-700/50 text-left flex flex-col justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-t from-red-950/20 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Your{" "}
            <span className="text-red-500">Study Abroad Journey</span> Today
          </h2>
          <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
            Speak with us before submitting your application. A thorough consultation can identify potential risks in your file and optimize your plan of study.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
          >
            Request a Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default StudyVisa;
