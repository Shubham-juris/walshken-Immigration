// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const WorkVisa = () => {
//   const navigate = useNavigate();

//   // Framer Motion Variants
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
//             Work Visa Services
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Unlock global career opportunities with our comprehensive work visa solutions. 
//             From skill assessment to job placement, we guide you through every step of your international career journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* About Work Visa */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               What is a Work Visa?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Work Visa allows individuals to live and work in a foreign
//               country legally. Depending on the visa type, you may be sponsored
//               by an employer, apply independently, or qualify for skilled
//               migration programs.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               We provide end-to-end support including skill assessment, document preparation, 
//               interview training, and job placement assistance to ensure your successful transition 
//               to working abroad.
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
//               src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=80"
//               alt="Work Abroad"
//               className="rounded-2xl shadow-lg w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Comprehensive Services Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Comprehensive Work Visa Services
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Skill Assessment & WES Services",
//                 desc: "We assist with educational credential assessment (WES, IQAS, etc.) required for visa applications.",
//                 icon: "📋"
//               },
//               {
//                 title: "Language Proficiency Training",
//                 desc: "IELTS/TOEFL preparation classes to help you achieve the required scores for visa eligibility.",
//                 icon: "🌐"
//               },
//               {
//                 title: "Candidate Screening & Profiling",
//                 desc: "Comprehensive evaluation of your skills, experience, and qualifications for optimal job matching.",
//                 icon: "🔍"
//               },
//               {
//                 title: "Skill Enhancement Training",
//                 desc: "Specialized training programs to bridge skill gaps and meet international employer requirements.",
//                 icon: "📚"
//               },
//               {
//                 title: "Interview Preparation",
//                 desc: "Mock interviews and coaching to help you excel in international job interviews.",
//                 icon: "💼"
//               },
//               {
//                 title: "Job Placement Assistance",
//                 desc: "Access to our network of international employers and recruitment partners.",
//                 icon: "🤝"
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800 hover:border-red-500 transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="text-3xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold text-red-400 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-300">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Recruitment Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Recruitment Process with Third-Party Supervision
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold text-white mb-6">
//                 How Our Supervised Recruitment Works
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 We partner with reputable recruitment agencies and employers worldwide, 
//                 maintaining oversight throughout the process to ensure transparency and 
//                 protect your interests.
//               </p>
//               <ul className="space-y-4 text-gray-300">
//                 {[
//                   "We identify legitimate job opportunities with verified employers",
//                   "Our team screens and shortlists candidates based on employer requirements",
//                   "We facilitate communication between candidates and employers",
//                   "Provide continuous support during interview and selection process",
//                   "Ensure compliance with all immigration and employment regulations",
//                   "Monitor the entire process until successful placement"
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="text-red-500 mr-2">✔</span> {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={1}
//               viewport={{ once: true }}
//               className="bg-gray-800 p-6 rounded-xl shadow"
//             >
//               <h3 className="text-2xl font-semibold text-white mb-6">
//                 Benefits of Our Supervised Approach
//               </h3>
//               <div className="space-y-4">
//                 {[
//                   {
//                     title: "Reduced Fraud Risk",
//                     desc: "We vet all employers and opportunities to prevent scams"
//                   },
//                   {
//                     title: "Better Job Matching",
//                     desc: "Our expertise ensures alignment between your skills and job requirements"
//                   },
//                   {
//                     title: "Continuous Support",
//                     desc: "We remain involved throughout your employment transition"
//                   },
//                   {
//                     title: "Legal Compliance",
//                     desc: "All processes adhere to international employment and immigration laws"
//                   }
//                 ].map((benefit, index) => (
//                   <div key={index} className="bg-gray-700 p-4 rounded-lg">
//                     <h4 className="font-semibold text-red-400 mb-1">{benefit.title}</h4>
//                     <p className="text-gray-300 text-sm">{benefit.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Benefits of a Work Visa
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Global Opportunities",
//                 desc: "Expand your career in top international markets.",
//               },
//               {
//                 title: "Higher Income",
//                 desc: "Earn competitive salaries abroad with better perks.",
//               },
//               {
//                 title: "Permanent Residency Path",
//                 desc: "Many work visas lead to permanent residency options.",
//               },
//               {
//                 title: "Skill Development",
//                 desc: "Gain international exposure and professional growth.",
//               },
//               {
//                 title: "Family Sponsorship",
//                 desc: "Bring your spouse and children on dependent visas.",
//               },
//               {
//                 title: "Networking",
//                 desc: "Build professional connections worldwide.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800"
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

//       {/* Eligibility Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-5xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-8 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Work Visa Eligibility
//           </motion.h2>
//           <ul className="grid gap-6 md:grid-cols-2 text-gray-300">
//             {[
//               "✔ Valid job offer or employer sponsorship",
//               "✔ Educational qualifications or relevant work experience",
//               "✔ Proof of financial stability",
//               "✔ Health and character certificates",
//               "✔ Language proficiency (IELTS/TOEFL where required)",
//               "✔ Skill assessment report (WES or equivalent)",
//               "✔ Relevant professional certifications/licenses",
//               "✔ Meeting points-based system requirements (where applicable)",
//             ].map((req, index) => (
//               <motion.li
//                 key={index}
//                 className="p-5 bg-gray-800 rounded-xl shadow"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 {req}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Work Visa Application Process
//           </motion.h2>
//           <div className="grid gap-10 md:grid-cols-4">
//             {[
//               {
//                 step: "Step 1: Consultation & Assessment",
//                 desc: "We evaluate your qualifications and suggest the best visa options.",
//               },
//               {
//                 step: "Step 2: Documentation & Skill Training",
//                 desc: "Prepare necessary paperwork and enhance skills for better opportunities.",
//               },
//               {
//                 step: "Step 3: Job Matching & Interviews",
//                 desc: "Connect with employers and prepare for interviews with our coaching.",
//               },
//               {
//                 step: "Step 4: Visa Submission & Relocation",
//                 desc: "Submit your application and receive support for relocation.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-red-800"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <div className="text-white bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
//                   {index + 1}
//                 </div>
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
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Why Choose Us?
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "End-to-End Solutions",
//                 desc: "From skill assessment to relocation, we handle everything for your work visa journey.",
//               },
//               {
//                 title: "Industry Partnerships",
//                 desc: "Strong network with employers and recruitment agencies worldwide.",
//               },
//               {
//                 title: "Proven Success Rate",
//                 desc: "Thousands of successful placements with high client satisfaction.",
//               },
//               {
//                 title: "Personalized Approach",
//                 desc: "Customized strategies based on your qualifications and career goals.",
//               },
//               {
//                 title: "Transparent Processes",
//                 desc: "Clear communication and regular updates throughout your application.",
//               },
//               {
//                 title: "Post-Arrival Support",
//                 desc: "Assistance with accommodation, banking, and settlement in your new country.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-red-800 hover:border-red-500 transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
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
//           className="text-3xl md:text-4xl font-bold mb-4 text-white"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//         >
//           Begin Your International Career Journey Today
//         </motion.h2>
//         <motion.p
//           className="mb-6 text-lg text-gray-300"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           custom={1}
//         >
//           Contact us now to explore work visa opportunities and build your
//           future overseas with our comprehensive support services.
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

// export default WorkVisa;


// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const WorkVisa = () => {
//   const navigate = useNavigate();

//   // Framer Motion Variants
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
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-[1px] w-8 bg-red-500"></span>
//             <span className="text-xs font-bold tracking-widest uppercase text-red-500">
//               Employer & Individual Work Permits
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           >
//             Work Visa Services
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Unlock global career opportunities with our comprehensive work visa solutions. 
//             From skill assessment to job placement, we guide you through every step of your international career journey.
//           </motion.p>
//           <motion.p
//             className="text-sm text-gray-400 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//           >
//             Work permits, Labour Market Impact Assessments (LMIAs), and specialized pathways carry their own complex requirements and timelines. We structure applications with the precision and attention to detail that regulatory authorities demand.
//           </motion.p>
//         </div>
//       </section>

//       {/* About Work Visa */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               What is a Work Visa?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Work Visa allows individuals to live and work in a foreign
//               country with authorization. Depending on the visa type, you may be sponsored
//               by an employer, transfer within your current multinational company, or qualify 
//               for skilled migration programs designed to bridge critical labor shortages.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               We provide end-to-end support including skill assessment, document preparation, 
//               interview training, and job placement assistance to ensure your successful transition 
//               to working abroad. If you work in the technology sector, we recommend reviewing our dedicated <Link to="/tech-immigration" className="text-red-500 hover:underline">Tech Immigration Pathways</Link>. 
//               Over time, many foreign work permits can be successfully transitioned 
//               into <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 italic">
//               Temporary work applications require deep scrutiny from government bodies. A single error in documenting your qualifications, your employer’s LMIA filing, or your past employment history can delay your start date or set back your relocation plans by months. We focus on getting the paperwork right the first time.
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
//               src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=80"
//               alt="Work Abroad"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Business & Employer Strategy Deep Dive */}
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
//                 Workforce Strategy for Employers
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 Labour shortages in competitive sectors are often a long-term operational hurdle. For organizations that rely on global talent, workforce planning is a critical operational strategy.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 We work directly with corporate teams and employers to build immigration strategies covering LMIAs, intra-company transfers, compliance audits, and long-term retention pathways through <Link to="/pr" className="text-red-500 hover:underline">permanent residency</Link>.
//               </p>
//               <p className="text-gray-400 leading-relaxed text-sm italic">
//                 If your enterprise has not developed an immigration approach beyond basic ad-hoc work permits, let us assist you in formulating a stable strategy before the next critical hiring gap.
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
//               How a Consultant Navigates the Process
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Employer-sponsored applications can be complex and challenging. Preparing detailed job descriptions, demonstrating recruitment compliance, organizing educational evaluations, and coordinating with immigration bodies requires weeks of systematic administrative effort.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               At **Walshken Immigration**, we understand that every individual career move and corporate transfer represents a major transition. We manage these administrative steps for you so your transition is structured smoothly.
//             </p>
//             <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//               <span className="font-semibold text-red-400 block text-sm mb-1">Our Focus</span>
//               <p className="text-xs text-gray-300">
//                 To build customized files that address every policy requirement, helping you demonstrate the absolute legitimacy and value of your foreign worker profile.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Comprehensive Services Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Comprehensive Work Visa Services
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Labour Market Impact Assessments (LMIAs)",
//                 desc: "Full support for employers navigating the LMIA application process, demonstrating recruitment compliance and labor market shortages.",
//                 icon: "🏢"
//               },
//               {
//                 title: "Intra-Company Transfers (ICT)",
//                 desc: "Facilitating key personnel transfers, including executives and specialized knowledge staff, to branches and affiliates.",
//                 icon: "🔄"
//               },
//               {
//                 title: "Tech Sector Fast-Track Options",
//                 desc: "Advising technology firms and skilled professionals on fast-tracked pathways structured for highly competitive technical markets.",
//                 icon: "💻"
//               },
//               {
//                 title: "Skill Assessment & Credential Services",
//                 desc: "We assist with educational credential assessment (WES, IQAS, etc.) required to satisfy regulatory equivalency guidelines.",
//                 icon: "📋"
//               },
//               {
//                 title: "Language Proficiency Support",
//                 desc: "Guided guidance for exam preparations (IELTS, CELPIP, TOEFL) to secure the target eligibility points.",
//                 icon: "🌐"
//               },
//               {
//                 title: "Candidate Profile Audits",
//                 desc: "Comprehensive assessment of your skills, background, and certifications to position you optimally for visas or employer sponsorships.",
//                 icon: "🔍"
//               },
//               {
//                 title: "Skill Gaps & Training Guidance",
//                 desc: "Specialized advisory resources to target skill gaps and satisfy compliance parameters for specific international markets.",
//                 icon: "📚"
//               },
//               {
//                 title: "Interview Preparation Coaching",
//                 desc: "Practice sessions and administrative preparation to support you during complex assessment interviews.",
//                 icon: "💼"
//               },
//               {
//                 title: "Recruitment Coordination Support",
//                 desc: "Collaboration with international recruitment circles to bridge individual talent directly with active vacancies.",
//                 icon: "🤝"
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800/40 hover:border-red-500 transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="text-3xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold text-red-400 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Recruitment Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Recruitment Process with Third-Party Supervision
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold text-white mb-6">
//                 How Our Supervised Recruitment Works
//               </h3>
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 We partner with reputable recruitment agencies and employers worldwide, 
//                 maintaining oversight throughout the process to ensure transparency and 
//                 protect your interests.
//               </p>
//               <ul className="space-y-4 text-gray-300">
//                 {[
//                   "We identify legitimate job opportunities with verified employers",
//                   "Our team screens and shortlists candidates based on employer requirements",
//                   "We facilitate communication between candidates and employers",
//                   "Provide continuous support during interview and selection process",
//                   "Ensure compliance with all immigration and employment regulations",
//                   "Monitor the entire process until successful placement"
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-start text-sm">
//                     <span className="text-red-500 mr-2">✔</span> {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={1}
//               viewport={{ once: true }}
//               className="bg-gray-850 p-6 rounded-xl shadow border border-red-950"
//             >
//               <h3 className="text-2xl font-semibold text-white mb-6">
//                 Benefits of Our Supervised Approach
//               </h3>
//               <div className="space-y-4">
//                 {[
//                   {
//                     title: "Reduced Fraud Risk",
//                     desc: "We vet all employers and opportunities to prevent scams"
//                   },
//                   {
//                     title: "Better Job Matching",
//                     desc: "Our expertise ensures alignment between your skills and job requirements"
//                   },
//                   {
//                     title: "Continuous Support",
//                     desc: "We remain involved throughout your employment transition"
//                   },
//                   {
//                     title: "Regulatory Compliance",
//                     desc: "All processes adhere to international employment and immigration rules"
//                   }
//                 ].map((benefit, index) => (
//                   <div key={index} className="bg-gray-800 p-4 rounded-lg border border-red-900/10">
//                     <h4 className="font-semibold text-red-400 mb-1">{benefit.title}</h4>
//                     <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Benefits of a Work Visa
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Global Opportunities",
//                 desc: "Expand your career in top international markets.",
//               },
//               {
//                 title: "Higher Income",
//                 desc: "Earn competitive salaries abroad with better perks.",
//               },
//               {
//                 title: "Permanent Residency Path",
//                 desc: "Many work visas lead to permanent residency options.",
//               },
//               {
//                 title: "Skill Development",
//                 desc: "Gain international exposure and professional growth.",
//               },
//               {
//                 title: "Family Sponsorship",
//                 desc: "Bring your spouse and children on dependent visas.",
//               },
//               {
//                 title: "Networking",
//                 desc: "Build professional connections worldwide.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800/40"
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

//       {/* Eligibility Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-5xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-8 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Work Visa Eligibility
//           </motion.h2>
//           <ul className="grid gap-6 md:grid-cols-2 text-gray-300">
//             {[
//               "✔ Valid job offer or LMIA-supported employer sponsorship",
//               "✔ Educational qualifications or relevant work experience",
//               "✔ Proof of financial stability to support migration",
//               "✔ Cleared health assessment and police character certificates",
//               "✔ Language proficiency (IELTS/CELPIP where required)",
//               "✔ Skill assessment report (WES or equivalent equivalent)",
//               "✔ Professional certifications, licenses, or portfolio proof",
//               "✔ Meeting points-based profile requirements (where applicable)",
//             ].map((req, index) => (
//               <motion.li
//                 key={index}
//                 className="p-5 bg-gray-800 rounded-xl shadow border border-red-900/10 text-sm font-medium"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 {req}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Work Visa Application Process
//           </motion.h2>
//           <div className="grid gap-10 md:grid-cols-4">
//             {[
//               {
//                 step: "Step 1: Consultation & Assessment",
//                 desc: "We evaluate your qualifications, assess your employer sponsorship status, and suggest optimal pathways.",
//               },
//               {
//                 step: "Step 2: Documentation & Strategy",
//                 desc: "Prepare compliant paperwork, run LMIA checks, and verify credential evaluation documents.",
//               },
//               {
//                 step: "Step 3: Submission Coordination",
//                 desc: "Liaise with sponsoring bodies, complete regulatory forms, and manage procedural requirements.",
//               },
//               {
//                 step: "Step 4: Visa Submission & Resettlement",
//                 desc: "Submit your final package to authorities and receive comprehensive support for post-arrival transition.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-red-800/40"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <div className="text-white bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
//                   {index + 1}
//                 </div>
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
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Why Choose Walshken Immigration?
//           </motion.h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Comprehensive Corporate Services",
//                 desc: "From LMIA compliance strategies to specialized internal transfers, we handle employer and candidate paperwork.",
//               },
//               {
//                 title: "Strong Regulatory Compliance",
//                 desc: "Our consultants map requirements strictly to policy rules, significantly lowering risk of procedural denials.",
//               },
//               {
//                 title: "Transparent & Accountable",
//                 desc: "Detailed assessments, step-by-step processing checks, and straight answers about your file's strength.",
//               },
//               {
//                 title: "Pathways to Permanent Residency",
//                 desc: "We look beyond temporary permits to position you strategically for express entry and permanent settlement pathways.",
//               },
//               {
//                 title: "Multi-Language Capabilities",
//                 desc: "Accessible and diverse advisory solutions to make sure your professional experience translates clearly.",
//               },
//               {
//                 title: "Post-Arrival Care",
//                 desc: "Practical post-arrival settlement support, aiding in administrative registrations, housing, and integration.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gradient-to-br from-gray-900 to-gray-900 rounded-xl shadow-lg border border-red-800/40 hover:border-red-500 transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
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
//             className="text-3xl md:text-4xl font-bold mb-4 text-white"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//           >
//             Begin Your International Career Journey Today
//           </motion.h2>
//           <motion.p
//             className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//           >
//             Navigating work permit programs requires careful strategic planning. Contact us to coordinate an eligibility assessment and discuss how to secure your global career transition safely.
//           </motion.p>
//           <motion.button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-0.5"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={2}
//           >
//             Book Your Consultation
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WorkVisa;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaExchangeAlt,
  FaLaptopCode,
  FaClipboardList,
  FaLanguage,
  FaSearch,
  FaBookReader,
  FaUserTie,
  FaHandshake,
  FaShieldAlt,
  FaUserCheck,
  FaHandsHelping,
  FaCheckCircle,
  FaGlobeAmericas,
  FaChartLine,
  FaAward,
  FaUsers,
  FaNetworkWired,
  FaFileAlt,
  FaPaperPlane,
  FaPassport
} from "react-icons/fa";

const WorkVisa = () => {
  const navigate = useNavigate();

  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Comprehensive Services (9 Cards with distinct images & icons)
  const comprehensiveServices = [
    {
      title: "Labour Market Impact Assessments (LMIAs)",
      desc: "Full support for employers navigating the LMIA application process, demonstrating recruitment compliance and labor market shortages.",
      icon: <FaBuilding className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Intra-Company Transfers (ICT)",
      desc: "Facilitating key personnel transfers, including executives, managers, and specialized knowledge staff, to Canadian branches and affiliates.",
      icon: <FaExchangeAlt className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Tech Sector Fast-Track Options",
      desc: "Advising technology firms and skilled professionals on fast-tracked pathways structured for highly competitive technical markets.",
      icon: <FaLaptopCode className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Skill Assessment & Credential Services",
      desc: "We assist with educational credential assessment (WES, IQAS, etc.) required to satisfy regulatory equivalency guidelines.",
      icon: <FaClipboardList className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Language Proficiency Support",
      desc: "Guided preparation resources for exam benchmarks (IELTS, CELPIP, PTE) to secure the target eligibility points.",
      icon: <FaLanguage className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Candidate Profile Audits",
      desc: "Comprehensive assessment of your skills, background, and certifications to position you optimally for visas or employer sponsorships.",
      icon: <FaSearch className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Skill Gaps & Training Guidance",
      desc: "Specialized advisory resources to target skill gaps and satisfy compliance parameters for specific international markets.",
      icon: <FaBookReader className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Interview Preparation Coaching",
      desc: "Practice sessions and administrative preparation to support you during complex assessment interviews.",
      icon: <FaUserTie className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Recruitment Coordination Support",
      desc: "Collaboration with international recruitment circles to bridge individual talent directly with active vacancies.",
      icon: <FaHandshake className="text-red-500 text-xl" />,
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // 2. Benefits of Work Visa (6 Cards with distinct images)
  const workVisaBenefits = [
    {
      title: "Global Opportunities",
      desc: "Expand your career in top international markets with verified employers.",
      img: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80",
      icon: <FaGlobeAmericas className="text-red-500" />,
    },
    {
      title: "Higher Income",
      desc: "Earn competitive salaries abroad with better compensation and perks.",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
      icon: <FaChartLine className="text-red-500" />,
    },
    {
      title: "Permanent Residency Path",
      desc: "Accumulate valuable international work experience to transition into permanent residency.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      icon: <FaAward className="text-red-500" />,
    },
    {
      title: "Skill Development",
      desc: "Gain international exposure, master cutting-edge tools, and accelerate professional growth.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      icon: <FaLaptopCode className="text-red-500" />,
    },
    {
      title: "Family Sponsorship",
      desc: "Bring your spouse on open work permits and children on study or dependent visas.",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
      icon: <FaUsers className="text-red-500" />,
    },
    {
      title: "Professional Networking",
      desc: "Build lasting professional connections and leadership relationships worldwide.",
      img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
      icon: <FaNetworkWired className="text-red-500" />,
    },
  ];

  // 3. Process Steps with Styled Icons
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Assessment",
      desc: "We evaluate your qualifications, assess your employer sponsorship status, and suggest optimal pathways.",
      icon: <FaUserTie className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Documentation & Strategy",
      desc: "Prepare compliant paperwork, run LMIA checks, and verify credential evaluation documents.",
      icon: <FaFileAlt className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Submission Coordination",
      desc: "Liaise with sponsoring bodies, complete regulatory forms, and manage procedural requirements.",
      icon: <FaPaperPlane className="text-white text-2xl" />,
    },
    {
      step: "04",
      title: "Visa Submission & Resettlement",
      desc: "Submit your final package to authorities and receive comprehensive support for post-arrival transition.",
      icon: <FaPassport className="text-white text-2xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-950 text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center relative overflow-hidden border-b border-red-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-red-500"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-red-500">
              Employer & Individual Work Permits
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Work Visa Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Unlock global career opportunities with our comprehensive work visa solutions. 
            From skill assessment to job placement, we guide you through every step of your international career journey.
          </motion.p>
          <motion.p
            className="text-sm text-gray-400 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Work permits, Labour Market Impact Assessments (LMIAs), and specialized pathways carry their own complex requirements and timelines. We structure applications with the precision and attention to detail that regulatory authorities demand.
          </motion.p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT WORK VISA
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
              What is a Work Visa?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Work Visa allows individuals to live and work in a foreign
              country with authorization. Depending on the visa type, you may be sponsored
              by an employer, transfer within your current multinational company, or qualify 
              for skilled migration programs designed to bridge critical labor shortages.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We provide end-to-end support including skill assessment, document preparation, 
              interview training, and job placement assistance to ensure your successful transition 
              to working abroad. If you work in the technology sector, we recommend reviewing our dedicated <Link to="/tech-immigration" className="text-red-500 hover:underline">Tech Immigration Pathways</Link>. 
              Over time, many foreign work permits can be successfully transitioned 
              into <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Temporary work applications require deep scrutiny from government bodies. A single error in documenting your qualifications, your employer’s LMIA filing, or your past employment history can delay your start date or set back your relocation plans by months. We focus on getting the paperwork right the first time.
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
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=80"
              alt="Work Abroad"
              className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover h-[380px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. BUSINESS & EMPLOYER STRATEGY DEEP DIVE
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
                Workforce Strategy for Employers
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Labour shortages in competitive sectors are often a long-term operational hurdle. For organizations that rely on global talent, workforce planning is a critical operational strategy.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                We work directly with corporate teams and employers to build immigration strategies covering LMIAs, intra-company transfers, compliance audits, and long-term retention pathways through <Link to="/pr" className="text-red-500 hover:underline">permanent residency</Link>.
              </p>
              <p className="text-gray-400 leading-relaxed text-xs italic">
                If your enterprise has not developed an immigration approach beyond basic ad-hoc work permits, let us assist you in formulating a stable strategy before the next critical hiring gap.
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
              How a Consultant Navigates the Process
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Employer-sponsored applications can be complex and challenging. Preparing detailed job descriptions, demonstrating recruitment compliance, organizing educational evaluations, and coordinating with immigration bodies requires weeks of systematic administrative effort.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              At **Walshken Immigration**, we understand that every individual career move and corporate transfer represents a major transition. We manage these administrative steps for you so your transition is structured smoothly.
            </p>
            <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
              <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Our Focus</span>
              <p className="text-xs text-gray-300">
                To build customized files that address every policy requirement, helping you demonstrate the absolute legitimacy and value of your foreign worker profile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. COMPREHENSIVE SERVICES (9 CARDS WITH IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Our Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Our Comprehensive <span className="text-red-500">Work Visa Services</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            From LMIA filings to specialized technical programs, explore our full spectrum of employment immigration support.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {comprehensiveServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:border-red-500/50 transition-all flex flex-col justify-between group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.5}
              viewport={{ once: true }}
            >
              {/* Card Image Header */}
              <div className="relative h-44 overflow-hidden bg-gray-900">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-gray-950/90 border border-red-800/40 flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. RECRUITMENT PROCESS (ENHANCED BOX STYLING & ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-950 border-t border-b border-red-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Supervised Oversight</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Our Recruitment Process with <span className="text-red-500">Third-Party Supervision</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-stretch">
            {/* Left: How It Works */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 bg-gray-950/60 p-8 rounded-2xl border border-gray-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  How Our Supervised Recruitment Works
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  We partner with reputable recruitment agencies and employers worldwide, 
                  maintaining oversight throughout the process to ensure transparency and 
                  protect your interests.
                </p>
                <ul className="space-y-3.5 text-gray-300">
                  {[
                    "We identify legitimate job opportunities with verified employers",
                    "Our team screens and shortlists candidates based on employer requirements",
                    "We facilitate communication between candidates and employers",
                    "Provide continuous support during interview and selection process",
                    "Ensure compliance with all immigration and employment regulations",
                    "Monitor the entire process until successful placement"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-xs sm:text-sm">
                      <span className="text-red-500 mr-2.5 font-bold">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Benefits of Supervised Approach (Enhanced Boxes + Icons) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
            >
              {[
                {
                  title: "Reduced Fraud Risk",
                  desc: "We vet all employers and opportunities to prevent scams and unauthorized offers.",
                  icon: <FaShieldAlt className="text-red-500 text-2xl" />,
                },
                {
                  title: "Better Job Matching",
                  desc: "Our expertise ensures strict alignment between your skills and employer requirements.",
                  icon: <FaUserCheck className="text-red-500 text-2xl" />,
                },
                {
                  title: "Continuous Support",
                  desc: "We remain actively involved throughout your employment and relocation transition.",
                  icon: <FaHandsHelping className="text-red-500 text-2xl" />,
                },
                {
                  title: "Regulatory Compliance",
                  desc: "All processes adhere strictly to international employment and immigration rules.",
                  icon: <FaCheckCircle className="text-red-500 text-2xl" />,
                },
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1.5">{benefit.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. BENEFITS OF A WORK VISA (6 CARDS WITH IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Key Advantages</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Benefits of a <span className="text-red-500">Work Visa</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {workVisaBenefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/40 transition-all flex flex-col justify-between shadow-xl group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.5}
              viewport={{ once: true }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-base font-bold text-white">
                    {item.icon}
                    <h3>{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. ELIGIBILITY SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Qualifications</p>
            <motion.h2 
              className="text-3xl md:text-4xl font-extrabold text-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Work Visa <span className="text-red-500">Eligibility</span>
            </motion.h2>
          </div>

          <ul className="grid gap-4 md:grid-cols-2 text-gray-300">
            {[
              "Valid job offer or LMIA-supported employer sponsorship",
              "Educational qualifications or relevant verified work experience",
              "Proof of financial stability to support international relocation",
              "Cleared health assessment and police character certificates",
              "Language proficiency (IELTS/CELPIP/PTE where required)",
              "Skill assessment report (WES or equivalent where applicable)",
              "Professional certifications, licenses, or portfolio proof",
              "Meeting points-based profile requirements (where applicable)",
            ].map((req, index) => (
              <motion.li
                key={index}
                className="p-4 bg-gray-900/60 rounded-xl shadow border border-gray-800 text-xs sm:text-sm font-medium flex items-center gap-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.2}
                viewport={{ once: true }}
              >
                <span className="text-red-500 font-bold">✔</span>
                <span>{req}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8. APPLICATION PROCESS (WITH STYLED ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Visa <span className="text-red-500">Application Process</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-red-950/20 to-black rounded-xl shadow-lg border border-red-900/30 text-center flex flex-col items-center justify-between"
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
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          9. WHY CHOOSE WALSHKEN IMMIGRATION?
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-black/40 border-t border-red-950/40">
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
              title: "Comprehensive Corporate Services",
              desc: "From LMIA compliance strategies to specialized internal transfers, we handle employer and candidate paperwork.",
            },
            {
              title: "Strong Regulatory Compliance",
              desc: "Our consultants map requirements strictly to policy rules, significantly lowering risk of procedural denials.",
            },
            {
              title: "Transparent & Accountable",
              desc: "Detailed assessments, step-by-step processing checks, and straight answers about your file's strength.",
            },
            {
              title: "Pathways to Permanent Residency",
              desc: "We look beyond temporary permits to position you strategically for express entry and permanent settlement pathways.",
            },
            {
              title: "Multi-Language Capabilities",
              desc: "Accessible and diverse advisory solutions to make sure your professional experience translates clearly.",
            },
            {
              title: "Post-Arrival Care",
              desc: "Practical post-arrival settlement support, aiding in administrative registrations, housing, and integration.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg border border-red-900/30 hover:border-red-500 transition-all text-left"
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
          10. CALL TO ACTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/40 via-black to-gray-950 border-t border-red-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Begin Your International Career Journey Today
          </motion.h2>
          <motion.p
            className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            Navigating work permit programs requires careful strategic planning. Contact us to coordinate an eligibility assessment and discuss how to secure your global career transition safely.
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
          >
            Book Your Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default WorkVisa;
