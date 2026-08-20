// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const PermanentResidency = () => {
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

//   // Country-wise PR Programs
//   const countryPRPrograms = [
//     {
//       country: "Canada",
//       programs: [
//         "Express Entry System (FSW, FST, CEC)",
//         "Provincial Nominee Program (PNP)",
//         "Quebec Skilled Worker Program",
//         "Atlantic Immigration Program",
//         "Rural and Northern Immigration Pilot",
//         "Caregiver Programs"
//       ],
//       benefits: "Fast processing times, inclusive society, healthcare benefits",
//       processingTime: "6-12 months",
//       flag: "🇨🇦"
//     },
//     {
//       country: "Australia",
//       programs: [
//         "Skilled Independent Visa (Subclass 189)",
//         "Skilled Nominated Visa (Subclass 190)",
//         "Skilled Work Regional Visa (Subclass 491)",
//         "Global Talent Visa (Subclass 858)",
//         "Employer Nomination Scheme (Subclass 186)"
//       ],
//       benefits: "High quality of life, strong economy, pathway to citizenship",
//       processingTime: "8-15 months",
//       flag: "🇦🇺"
//     },
//     {
//       country: "USA",
//       programs: [
//         "EB-1: Priority Workers",
//         "EB-2: Professionals with Advanced Degrees",
//         "EB-3: Skilled Workers",
//         "EB-4: Special Immigrants",
//         "EB-5: Investor Visa",
//         "Diversity Visa Lottery"
//       ],
//       benefits: "Diverse opportunities, high earning potential, family inclusion",
//       processingTime: "1-3 years (varies by category)",
//       flag: "🇺🇸"
//     },
//     {
//       country: "Germany",
//       programs: [
//         "EU Blue Card for Highly Skilled Workers",
//         "Skilled Immigration Act",
//         "IT Specialist Visa",
//         "Job Seeker Visa",
//         "Freelancer Visa",
//         "Family Reunion Visa"
//       ],
//       benefits: "Strong economy, EU access, excellent social benefits",
//       processingTime: "4-8 months",
//       flag: "🇩🇪"
//     },
//     {
//       country: "New Zealand",
//       programs: [
//         "Skilled Migrant Category Resident Visa",
//         "Green List Straight to Residence",
//         "Work to Residence Visa",
//         "Parent Resident Visa",
//         "Investor and Entrepreneur Visas"
//       ],
//       benefits: "Work-life balance, beautiful environment, family-friendly",
//       processingTime: "6-12 months",
//       flag: "🇳🇿"
//     },
//     {
//       country: "UK",
//       programs: [
//         "Skilled Worker Visa",
//         "Global Talent Visa",
//         "Innovator Founder Visa",
//         "Scale-up Worker Visa",
//         "Family Visas",
//         "Ancestry Visa"
//       ],
//       benefits: "World-class education, healthcare system, cultural diversity",
//       processingTime: "3-6 months",
//       flag: "🇬🇧"
//     }
//   ];

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
//             Permanent Residency (PR) Visa
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Secure your future with Permanent Residency. Live, work, and enjoy
//             unlimited opportunities in your dream country.
//           </motion.p>
//         </div>
//       </section>

//       {/* About PR */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               Why Apply for Permanent Residency?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Permanent Residency Visa allows you to live, work, and study in
//               a country of your choice without time restrictions. It gives you
//               access to social benefits, healthcare, and the pathway to
//               citizenship.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               With PR status, you can secure your family's future, access
//               world-class opportunities, and enjoy a better quality of life.
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
//               src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
//               alt="Permanent Residency"
//               className="rounded-2xl shadow-lg w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Country-wise PR Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Country-Wise Permanent Residency Programs
//           </motion.h2>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {countryPRPrograms.map((country, index) => (
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
//                 <div className="flex items-center mb-4">
//                   <span className="text-3xl mr-3">{country.flag}</span>
//                   <h3 className="text-xl font-semibold text-red-400">
//                     {country.country}
//                   </h3>
//                 </div>
                
//                 <div className="mb-4">
//                   <h4 className="text-white font-medium mb-2">Key Programs:</h4>
//                   <ul className="text-gray-300 text-sm space-y-1">
//                     {country.programs.map((program, i) => (
//                       <li key={i} className="flex items-start">
//                         <span className="text-red-500 mr-2">•</span> {program}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="mb-3">
//                   <h4 className="text-white font-medium mb-1">Benefits:</h4>
//                   <p className="text-gray-300 text-sm">{country.benefits}</p>
//                 </div>
                
//                 <div>
//                   <h4 className="text-white font-medium mb-1">Processing Time:</h4>
//                   <p className="text-gray-300 text-sm">{country.processingTime}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Key Benefits of Permanent Residency
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Live & Work Freely",
//                 desc: "Freedom to live, work, or study in the country without restrictions.",
//               },
//               {
//                 title: "Healthcare Access",
//                 desc: "Enjoy public healthcare and social security benefits.",
//               },
//               {
//                 title: "Pathway to Citizenship",
//                 desc: "PR is often the first step towards full citizenship.",
//               },
//               {
//                 title: "Family Security",
//                 desc: "Include your spouse and children in your PR application.",
//               },
//               {
//                 title: "Education Opportunities",
//                 desc: "Access top universities and schools at resident tuition fees.",
//               },
//               {
//                 title: "Travel Flexibility",
//                 desc: "Travel in and out of the country freely with PR status.",
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

//       {/* Eligibility Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Who is Eligible for PR?
//           </h2>
//           <div className="grid gap-8 md:grid-cols-4">
//             {[
//               "Skilled Professionals",
//               "International Students",
//               "Business Investors",
//               "Family Sponsorship Applicants",
//             ].map((category, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold text-white">
//                   <span className="text-red-500">{category}</span>
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PR Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-8 text-red-500">
//             Step-by-Step PR Application Process
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Eligibility Check",
//                 desc: "We assess your qualifications, work experience, and language skills.",
//               },
//               {
//                 step: "Step 2: Documentation",
//                 desc: "We assist in gathering required documents like proof of funds, ID, and medical tests.",
//               },
//               {
//                 step: "Step 3: Application & Approval",
//                 desc: "Submit your PR application and receive support until approval.",
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
//                 title: "Expert Guidance",
//                 desc: "Our experts provide personalized PR strategies for maximum success.",
//               },
//               {
//                 title: "High Success Rate",
//                 desc: "Hundreds of successful PR applications handled by our team.",
//               },
//               {
//                 title: "End-to-End Support",
//                 desc: "From eligibility to approval, we're with you every step of the way.",
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
//           Start Your PR Journey Today
//         </motion.h2>
//         <motion.p
//           className="mb-6 text-lg text-gray-300"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           custom={1}
//         >
//           Secure your future with Permanent Residency. Contact us for a free
//           consultation and personalized guidance.
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

// export default PermanentResidency;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const PermanentResidency = () => {
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

//   // Country-wise PR Programs
//   const countryPRPrograms = [
//     {
//       country: "Canada",
//       programs: [
//         "Express Entry System (FSW, FST, CEC)",
//         "Provincial Nominee Program (PNP)",
//         "Quebec Skilled Worker Program",
//         "Atlantic Immigration Program",
//         "Rural and Northern Immigration Pilot",
//         "Caregiver Programs"
//       ],
//       benefits: "Fast processing times, inclusive society, healthcare benefits, and pathways to citizenship.",
//       processingTime: "6-12 months",
//       flag: "🇨🇦"
//     },
//     {
//       country: "Australia",
//       programs: [
//         "Skilled Independent Visa (Subclass 189)",
//         "Skilled Nominated Visa (Subclass 190)",
//         "Skilled Work Regional Visa (Subclass 491)",
//         "Global Talent Visa (Subclass 858)",
//         "Employer Nomination Scheme (Subclass 186)"
//       ],
//       benefits: "High quality of life, strong economy, state sponsorship pathways, and public healthcare.",
//       processingTime: "8-15 months",
//       flag: "🇦🇺"
//     },
//     {
//       country: "USA",
//       programs: [
//         "EB-1: Priority Workers",
//         "EB-2: Professionals with Advanced Degrees",
//         "EB-3: Skilled Workers",
//         "EB-4: Special Immigrants",
//         "EB-5: Investor Visa",
//         "Diversity Visa Lottery"
//       ],
//       benefits: "Diverse industrial opportunities, high earning potential, and extensive family inclusion benefits.",
//       processingTime: "1-3 years (varies by category)",
//       flag: "🇺🇸"
//     },
//     {
//       country: "Germany",
//       programs: [
//         "EU Blue Card for Highly Skilled Workers",
//         "Skilled Immigration Act",
//         "IT Specialist Visa",
//         "Job Seeker Visa",
//         "Freelancer Visa",
//         "Family Reunion Visa"
//       ],
//       benefits: "Strong industrial economy, unrestricted EU travel access, and excellent family social security.",
//       processingTime: "4-8 months",
//       flag: "🇩🇪"
//     },
//     {
//       country: "New Zealand",
//       programs: [
//         "Skilled Migrant Category Resident Visa",
//         "Green List Straight to Residence",
//         "Work to Residence Visa",
//         "Parent Resident Visa",
//         "Investor and Entrepreneur Visas"
//       ],
//       benefits: "Excellent work-life balance, pristine environment, and safe, family-friendly communities.",
//       processingTime: "6-12 months",
//       flag: "🇳🇿"
//     },
//     {
//       country: "UK",
//       programs: [
//         "Skilled Worker Visa",
//         "Global Talent Visa",
//         "Innovator Founder Visa",
//         "Scale-up Worker Visa",
//         "Family Visas",
//         "Ancestry Visa"
//       ],
//       benefits: "World-renowned education, access to NHS healthcare, and rich economic/cultural diversity.",
//       processingTime: "3-6 months",
//       flag: "🇬🇧"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-24 px-6 text-center relative overflow-hidden">
//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-[1px] w-8 bg-red-500"></span>
//             <span className="text-xs font-bold tracking-widest uppercase text-red-500">
//               Economic & Family Class Residency
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           >
//             Permanent Residency (PR) Visa
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Secure your future with Permanent Residency. Live, work, and enjoy
//             unlimited opportunities in your dream country.
//           </motion.p>
//           <motion.p
//             className="text-sm text-gray-400 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//           >
//             Getting the permanent residency application right the first time matters. Whether through economic skilled worker pathways, provincial nominations, or family classes, we structure your profile to satisfy strict government evaluation standards.
//           </motion.p>
//         </div>
//       </section>

//       {/* About PR */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               Why Apply for Permanent Residency?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Permanent Residency Visa allows you to live, work, and study in
//               a country of your choice without time restrictions. It grants you
//               access to social benefits, healthcare, resident education tuition rates, and establishes a stable pathway to full citizenship.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               With PR status, you secure your family's future, access
//               world-class career opportunities, and establish a permanent home with peace of mind.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
//               Relocating permanently is one of the most vital decisions an individual or family will make. Immigration programs demand meticulous preparation and carry rigid timelines. An accidental oversight or incomplete documentation can result in immediate rejections, delaying your migration by months or years. We handle the paperwork carefully so that your transition is smooth.
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
//               src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
//               alt="Permanent Residency"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive: Documentation Complexity & Preliminary Assessments */}
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
//                 Managing Application Complexity & Admissibility
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 National PR programs carry dense evaluation criteria. Compiling employment credentials, undergoing reference audits, proving settlement assets, translating foreign records, and maintaining point balances across active pools require continuous expert administration.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Additionally, minor issues related to historical medical conditions, minor police disclosures, financial discrepancies, or clerical errors can trigger misrepresentation or inadmissibility assessments.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we closely inspect every document and construct responsive profiles to mitigate these risks. If your profile encounters obstacles like procedural fairness reviews, we assist you in drafting transparent, policy-aligned responses.
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
//               The Value of a Full Eligibility Assessment
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               Applying for PR requires a significant commitment of resources. Before you pay major administrative or government fees, it is vital to establish an accurate assessment of your credentials, work experience, and point calculations under current policy draws.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               Our consultation is designed as a deep interview to evaluate your eligibility, outline potential drawbacks, and compare different provincial nominee or federal economic pathways. We focus on recommending pathways that give you and your household the strongest possibility of success.
//             </p>
//             <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//               <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Walshken Principles</span>
//               <p className="text-xs text-gray-300">
//                 We focus on transparency. If a program does not fit your background or is unlikely to succeed under current draws, we advise you honestly and suggest alternative pathways to build up your points.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Country-wise PR Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Country-Wise Permanent Residency Programs
//           </motion.h2>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {countryPRPrograms.map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800/30 hover:border-red-500 transition flex flex-col justify-between"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <span className="text-3xl mr-3">{country.flag}</span>
//                     <h3 className="text-xl font-semibold text-red-400">
//                       {country.country}
//                     </h3>
//                   </div>
                  
//                   <div className="mb-4">
//                     <h4 className="text-white font-semibold text-sm mb-2">Programs Handled:</h4>
//                     <ul className="text-gray-300 text-sm space-y-1.5">
//                       {country.programs.map((program, i) => (
//                         <li key={i} className="flex items-start">
//                           <span className="text-red-500 mr-2">•</span> {program}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 pt-4 border-t border-red-950/50 space-y-2">
//                   <div>
//                     <h4 className="text-white font-medium text-xs">Path Benefits:</h4>
//                     <p className="text-gray-400 text-xs leading-relaxed">{country.benefits}</p>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-white font-medium text-xs">Estimated Processing Time:</h4>
//                     <p className="text-gray-400 text-xs">{country.processingTime}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/10">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Key Benefits of Permanent Residency
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Live & Work Freely",
//                 desc: "Unrestricted freedom to live, build a career, establish businesses, or study in your country of choice.",
//               },
//               {
//                 title: "Healthcare & Social Benefits",
//                 desc: "Full access to public healthcare systems, social security coverage, and state infrastructure support.",
//               },
//               {
//                 title: "Pathway to Citizenship",
//                 desc: "Establishes a solid, federally recognized legal status that serves as the immediate precursor to full citizenship.",
//               },
//               {
//                 title: "Complete Family Security",
//                 desc: "Enables applicants to secure concurrent permanent status for their spouses, children, and eligible dependents.",
//               },
//               {
//                 title: "Subsidized Education",
//                 desc: "Qualify for domestic tuition fees and academic grants at world-class primary, secondary, and tertiary institutions.",
//               },
//               {
//                 title: "International Mobility",
//                 desc: "Maintain robust travel freedom to enter and exit the sovereign territory without complex visa requirements.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-850 p-6 rounded-xl shadow border border-red-950 hover:border-red-900/30 transition text-left"
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
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Who is Eligible for PR?
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {[
//               { category: "Skilled Professionals", details: "Individuals with work history, educational degrees, and language abilities evaluated under skilled worker points programs." },
//               { category: "International Graduates", details: "Students who completed qualifying foreign degrees and hold regional work experience to convert to permanent statuses." },
//               { category: "Business Investors", details: "Entrepreneurs, startup founders, and investors committing capital to boost local economic performance." },
//               { category: "Family Sponsored", details: "Eligible relatives sponsored by resident citizens, helping family reunification occur safely." }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-xl shadow border border-red-950 text-left hover:bg-gray-750 transition flex flex-col justify-between"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   <span className="text-red-500">{item.category}</span>
//                 </h3>
//                 <p className="text-gray-300 text-xs leading-relaxed">{item.details}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PR Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-8 text-red-500">
//             Step-by-Step PR Application Process
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Thorough Profile Evaluation",
//                 desc: "We perform careful verification of your work credentials, language proficiency certificates, and education to evaluate draw score alignments.",
//               },
//               {
//                 step: "Step 2: Profile Strategy & Document Assembly",
//                 desc: "We gather necessary records—including references, financial proofs, clearances, and translations—to avoid technical discrepancies.",
//               },
//               {
//                 step: "Step 3: Portal Submission & Management",
//                 desc: "We submit your detailed residency profile, assist with invitation to apply (ITA) updates, and manage communications through to approval.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-800 border border-red-950 rounded-xl text-left"
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
//                 title: "Thorough Compliance Verification",
//                 desc: "We review every detail of your PR application against immigration rules to mitigate processing risks.",
//               },
//               {
//                 title: "Honest Draw & Pool Assessments",
//                 desc: "We provide straight answers regarding pool scores and build alternative plans if criteria shift.",
//               },
//               {
//                 title: "Complete, Dedicated Care",
//                 desc: "From initial transcript evaluations up to settlement and arrival, we coordinate your relocation path with patience.",
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
//             Start Your PR Journey Today
//           </motion.h2>
//           <motion.p
//             className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//           >
//             Permanent residency paths require thorough, precise execution. Contact our consultancy team today to schedule an in-depth eligibility consultation and secure your family's future abroad.
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

// export default PermanentResidency;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const PermanentResidency = () => {
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

//   // Country-wise PR Programs
//   const countryPRPrograms = [
//     {
//       country: "Canada",
//       programs: [
//         "Express Entry System (FSW, FST, CEC)",
//         "Provincial Nominee Program (PNP)",
//         "Quebec Skilled Worker Program",
//         "Atlantic Immigration Program",
//         "Rural and Northern Immigration Pilot",
//         "Caregiver Programs"
//       ],
//       benefits: "Fast processing times, inclusive society, healthcare benefits, and pathways to citizenship.",
//       processingTime: "6-12 months",
//       flag: "🇨🇦"
//     },
//     {
//       country: "Australia",
//       programs: [
//         "Skilled Independent Visa (Subclass 189)",
//         "Skilled Nominated Visa (Subclass 190)",
//         "Skilled Work Regional Visa (Subclass 491)",
//         "Global Talent Visa (Subclass 858)",
//         "Employer Nomination Scheme (Subclass 186)"
//       ],
//       benefits: "High quality of life, strong economy, state sponsorship pathways, and public healthcare.",
//       processingTime: "8-15 months",
//       flag: "🇦🇺"
//     },
//     {
//       country: "USA",
//       programs: [
//         "EB-1: Priority Workers",
//         "EB-2: Professionals with Advanced Degrees",
//         "EB-3: Skilled Workers",
//         "EB-4: Special Immigrants",
//         "EB-5: Investor Visa",
//         "Diversity Visa Lottery"
//       ],
//       benefits: "Diverse industrial opportunities, high earning potential, and extensive family inclusion benefits.",
//       processingTime: "1-3 years (varies by category)",
//       flag: "🇺🇸"
//     },
//     {
//       country: "Germany",
//       programs: [
//         "EU Blue Card for Highly Skilled Workers",
//         "Skilled Immigration Act",
//         "IT Specialist Visa",
//         "Job Seeker Visa",
//         "Freelancer Visa",
//         "Family Reunion Visa"
//       ],
//       benefits: "Strong industrial economy, unrestricted EU travel access, and excellent family social security.",
//       processingTime: "4-8 months",
//       flag: "🇩🇪"
//     },
//     {
//       country: "New Zealand",
//       programs: [
//         "Skilled Migrant Category Resident Visa",
//         "Green List Straight to Residence",
//         "Work to Residence Visa",
//         "Parent Resident Visa",
//         "Investor and Entrepreneur Visas"
//       ],
//       benefits: "Excellent work-life balance, pristine environment, and safe, family-friendly communities.",
//       processingTime: "6-12 months",
//       flag: "🇳🇿"
//     },
//     {
//       country: "UK",
//       programs: [
//         "Skilled Worker Visa",
//         "Global Talent Visa",
//         "Innovator Founder Visa",
//         "Scale-up Worker Visa",
//         "Family Visas",
//         "Ancestry Visa"
//       ],
//       benefits: "World-renowned education, access to NHS healthcare, and rich economic/cultural diversity.",
//       processingTime: "3-6 months",
//       flag: "🇬🇧"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-24 px-6 text-center relative overflow-hidden">
//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-[1px] w-8 bg-red-500"></span>
//             <span className="text-xs font-bold tracking-widest uppercase text-red-500">
//               Economic & Family Class Residency
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           >
//             Permanent Residency (PR) Visa
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//           >
//             Secure your future with Permanent Residency. Live, work, and enjoy
//             unlimited opportunities in your dream country.
//           </motion.p>
//           <motion.p
//             className="text-sm text-gray-400 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//           >
//             Getting the permanent residency application right the first time matters. Whether through economic skilled worker pathways, provincial nominations, or family classes, we structure your profile to satisfy strict government evaluation standards.
//           </motion.p>
//         </div>
//       </section>

//       {/* About PR */}
//       <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold text-red-500 mb-6">
//               Why Apply for Permanent Residency?
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               A Permanent Residency Visa allows you to live, work, and study in
//               a country of your choice without time restrictions. It grants you
//               access to social benefits, healthcare, resident education tuition rates, and establishes a stable pathway to full citizenship.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               With PR status, you secure your family's future, access
//               world-class career opportunities, and establish a permanent home with peace of mind. For those looking to bring extended family, review our <Link to="/family" className="text-red-500 hover:underline">Family & Spousal Sponsorship</Link> programs. If you have concerns about past records or medical checks, please consult our <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link>.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic">
//               Relocating permanently is one of the most vital decisions an individual or family will make. Immigration programs demand meticulous preparation and carry rigid timelines. An accidental oversight or incomplete documentation can result in immediate rejections, delaying your migration by months or years. We handle the paperwork carefully so that your transition is smooth.
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
//               src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
//               alt="Permanent Residency"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive: Documentation Complexity & Preliminary Assessments */}
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
//                 Managing Application Complexity & Admissibility
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 National PR programs carry dense evaluation criteria. Compiling employment credentials, undergoing reference audits, proving settlement assets, translating foreign records, and maintaining point balances across active pools require continuous expert administration.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Additionally, minor issues related to historical medical conditions, minor police disclosures, financial discrepancies, or clerical errors can trigger misrepresentation or inadmissibility assessments.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we closely inspect every document and construct responsive profiles to mitigate these risks. If your profile encounters obstacles like procedural fairness reviews, we assist you in drafting transparent, policy-aligned responses.
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
//               The Value of a Full Eligibility Assessment
//             </h3>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               Applying for PR requires a significant commitment of resources. Before you pay major administrative or government fees, it is vital to establish an accurate assessment of your credentials, work experience, and point calculations under current policy draws.
//             </p>
//             <p className="text-gray-300 mb-6 leading-relaxed text-sm">
//               Our consultation is designed as a deep interview to evaluate your eligibility, outline potential drawbacks, and compare different provincial nominee or federal economic pathways. We focus on recommending pathways that give you and your household the strongest possibility of success.
//             </p>
//             <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//               <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Walshken Principles</span>
//               <p className="text-xs text-gray-300">
//                 We focus on transparency. If a program does not fit your background or is unlikely to succeed under current draws, we advise you honestly and suggest alternative pathways to build up your points.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Country-wise PR Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-red-500 mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Country-Wise Permanent Residency Programs
//           </motion.h2>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {countryPRPrograms.map((country, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800/30 hover:border-red-500 transition flex flex-col justify-between"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <span className="text-3xl mr-3">{country.flag}</span>
//                     <h3 className="text-xl font-semibold text-red-400">
//                       {country.country}
//                     </h3>
//                   </div>
                  
//                   <div className="mb-4">
//                     <h4 className="text-white font-semibold text-sm mb-2">Programs Handled:</h4>
//                     <ul className="text-gray-300 text-sm space-y-1.5">
//                       {country.programs.map((program, i) => (
//                         <li key={i} className="flex items-start">
//                           <span className="text-red-500 mr-2">•</span> {program}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 pt-4 border-t border-red-950/50 space-y-2">
//                   <div>
//                     <h4 className="text-white font-medium text-xs">Path Benefits:</h4>
//                     <p className="text-gray-400 text-xs leading-relaxed">{country.benefits}</p>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-white font-medium text-xs">Estimated Processing Time:</h4>
//                     <p className="text-gray-400 text-xs">{country.processingTime}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/10">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Key Benefits of Permanent Residency
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Live & Work Freely",
//                 desc: "Unrestricted freedom to live, build a career, establish businesses, or study in your country of choice.",
//               },
//               {
//                 title: "Healthcare & Social Benefits",
//                 desc: "Full access to public healthcare systems, social security coverage, and state infrastructure support.",
//               },
//               {
//                 title: "Pathway to Citizenship",
//                 desc: "Establishes a solid, federally recognized residency status that serves as the immediate precursor to full citizenship.",
//               },
//               {
//                 title: "Complete Family Security",
//                 desc: "Enables applicants to secure concurrent permanent status for their spouses, children, and eligible dependents.",
//               },
//               {
//                 title: "Subsidized Education",
//                 desc: "Qualify for domestic tuition fees and academic grants at world-class primary, secondary, and tertiary institutions.",
//               },
//               {
//                 title: "International Mobility",
//                 desc: "Maintain robust travel freedom to enter and exit the sovereign territory without complex visa requirements.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-850 p-6 rounded-xl shadow border border-red-950 hover:border-red-900/30 transition text-left"
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
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-red-500 mb-10">
//             Who is Eligible for PR?
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {[
//               { category: "Skilled Professionals", details: "Individuals with work history, educational degrees, and language abilities evaluated under skilled worker points programs." },
//               { category: "International Graduates", details: "Students who completed qualifying foreign degrees and hold regional work experience to convert to permanent statuses." },
//               { category: "Business Investors", details: "Entrepreneurs, startup founders, and investors committing capital to boost local economic performance." },
//               { category: "Family Sponsored", details: "Eligible relatives sponsored by resident citizens, helping family reunification occur safely." }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-xl shadow border border-red-950 text-left hover:bg-gray-750 transition flex flex-col justify-between"
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   <span className="text-red-500">{item.category}</span>
//                 </h3>
//                 <p className="text-gray-300 text-xs leading-relaxed">{item.details}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PR Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
//         <div className="max-w-6xl mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-8 text-red-500">
//             Step-by-Step PR Application Process
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Thorough Profile Evaluation",
//                 desc: "We perform careful verification of your work credentials, language proficiency certificates, and education to evaluate draw score alignments.",
//               },
//               {
//                 step: "Step 2: Profile Strategy & Document Assembly",
//                 desc: "We gather necessary records—including references, financial proofs, clearances, and translations—to avoid technical discrepancies.",
//               },
//               {
//                 step: "Step 3: Portal Submission & Management",
//                 desc: "We submit your detailed residency profile, assist with invitation to apply (ITA) updates, and manage communications through to approval.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-gray-800 border border-red-950 rounded-xl text-left"
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
//                 title: "Thorough Compliance Verification",
//                 desc: "We review every detail of your PR application against immigration rules to mitigate processing risks.",
//               },
//               {
//                 title: "Honest Draw & Pool Assessments",
//                 desc: "We provide straight answers regarding pool scores and build alternative plans if criteria shift.",
//               },
//               {
//                 title: "Complete, Dedicated Care",
//                 desc: "From initial transcript evaluations up to settlement and arrival, we coordinate your relocation path with patience.",
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
//             Start Your PR Journey Today
//           </motion.h2>
//           <motion.p
//             className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={1}
//           >
//             Permanent residency paths require thorough, precise execution. Contact our consultancy team today to schedule an in-depth eligibility consultation and secure your family's future abroad.
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

// export default PermanentResidency;



import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGlobeAmericas,
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaGraduationCap,
  FaPlaneDeparture,
  FaUserCheck,
  FaFileAlt,
  FaPaperPlane,
  FaBriefcase,
  FaUserGraduate
} from "react-icons/fa";

const PermanentResidency = () => {
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

  // 1. Country-wise PR Programs (with blurred background images)
  const countryPRPrograms = [
    {
      country: "Canada",
      programs: [
        "Express Entry System (FSW, FST, CEC)",
        "Provincial Nominee Program (PNP)",
        "Quebec Skilled Worker Program",
        "Atlantic Immigration Program",
        "Rural and Northern Immigration Pilot",
        "Caregiver Programs"
      ],
      benefits: "Fast processing times, inclusive society, healthcare benefits, and pathways to citizenship.",
      processingTime: "6-12 months",
      flag: "🇨🇦",
      bgImg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "Australia",
      programs: [
        "Skilled Independent Visa (Subclass 189)",
        "Skilled Nominated Visa (Subclass 190)",
        "Skilled Work Regional Visa (Subclass 491)",
        "Global Talent Visa (Subclass 858)",
        "Employer Nomination Scheme (Subclass 186)"
      ],
      benefits: "High quality of life, strong economy, state sponsorship pathways, and public healthcare.",
      processingTime: "8-15 months",
      flag: "🇦🇺",
      bgImg: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "USA",
      programs: [
        "EB-1: Priority Workers",
        "EB-2: Professionals with Advanced Degrees",
        "EB-3: Skilled Workers",
        "EB-4: Special Immigrants",
        "EB-5: Investor Visa",
        "Diversity Visa Lottery"
      ],
      benefits: "Diverse industrial opportunities, high earning potential, and extensive family inclusion benefits.",
      processingTime: "1-3 years (varies by category)",
      flag: "🇺🇸",
      bgImg: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "Germany",
      programs: [
        "EU Blue Card for Highly Skilled Workers",
        "Skilled Immigration Act",
        "IT Specialist Visa",
        "Job Seeker Visa",
        "Freelancer Visa",
        "Family Reunion Visa"
      ],
      benefits: "Strong industrial economy, unrestricted EU travel access, and excellent family social security.",
      processingTime: "4-8 months",
      flag: "🇩🇪",
      bgImg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "New Zealand",
      programs: [
        "Skilled Migrant Category Resident Visa",
        "Green List Straight to Residence",
        "Work to Residence Visa",
        "Parent Resident Visa",
        "Investor and Entrepreneur Visas"
      ],
      benefits: "Excellent work-life balance, pristine environment, and safe, family-friendly communities.",
      processingTime: "6-12 months",
      flag: "🇳🇿",
      bgImg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "UK",
      programs: [
        "Skilled Worker Visa",
        "Global Talent Visa",
        "Innovator Founder Visa",
        "Scale-up Worker Visa",
        "Family Visas",
        "Ancestry Visa"
      ],
      benefits: "World-renowned education, access to NHS healthcare, and rich economic/cultural diversity.",
      processingTime: "3-6 months",
      flag: "🇬🇧",
      bgImg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // 2. Key Benefits of PR (with icons)
  const prBenefits = [
    {
      title: "Live & Work Freely",
      desc: "Unrestricted freedom to live, build a career, establish businesses, or study in your country of choice.",
      icon: <FaGlobeAmericas className="text-red-500 text-xl" />,
    },
    {
      title: "Healthcare & Social Benefits",
      desc: "Full access to public healthcare systems, social security coverage, and state infrastructure support.",
      icon: <FaShieldAlt className="text-red-500 text-xl" />,
    },
    {
      title: "Pathway to Citizenship",
      desc: "Establishes a solid, federally recognized residency status that serves as the immediate precursor to full citizenship.",
      icon: <FaAward className="text-red-500 text-xl" />,
    },
    {
      title: "Complete Family Security",
      desc: "Enables applicants to secure concurrent permanent status for their spouses, children, and eligible dependents.",
      icon: <FaUsers className="text-red-500 text-xl" />,
    },
    {
      title: "Subsidized Education",
      desc: "Qualify for domestic tuition fees and academic grants at world-class primary, secondary, and tertiary institutions.",
      icon: <FaGraduationCap className="text-red-500 text-xl" />,
    },
    {
      title: "International Mobility",
      desc: "Maintain robust travel freedom to enter and exit the sovereign territory without complex visa requirements.",
      icon: <FaPlaneDeparture className="text-red-500 text-xl" />,
    },
  ];

  // 3. Who is Eligible for PR (4 Cards with Images)
  const eligibilityCategories = [
    {
      category: "Skilled Professionals",
      details: "Individuals with work history, educational degrees, and language abilities evaluated under skilled worker points programs.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      icon: <FaBriefcase className="text-red-500 text-sm" />
    },
    {
      category: "International Graduates",
      details: "Students who completed qualifying foreign degrees and hold regional work experience to convert to permanent statuses.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      icon: <FaUserGraduate className="text-red-500 text-sm" />
    },
    {
      category: "Business Investors",
      details: "Entrepreneurs, startup founders, and investors committing capital to boost local economic performance.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      icon: <FaGlobeAmericas className="text-red-500 text-sm" />
    },
    {
      category: "Family Sponsored",
      details: "Eligible relatives sponsored by resident citizens, helping family reunification occur safely.",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
      icon: <FaUsers className="text-red-500 text-sm" />
    }
  ];

  // 4. Process Steps (with styled icons)
  const processSteps = [
    {
      step: "01",
      title: "Thorough Profile Evaluation",
      desc: "We perform careful verification of your work credentials, language proficiency certificates, and education to evaluate draw score alignments.",
      icon: <FaUserCheck className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Profile Strategy & Document Assembly",
      desc: "We gather necessary records—including references, financial proofs, clearances, and translations—to avoid technical discrepancies.",
      icon: <FaFileAlt className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Portal Submission & Management",
      desc: "We submit your detailed residency profile, assist with invitation to apply (ITA) updates, and manage communications through to approval.",
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
              Economic & Family Class Residency
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Permanent Residency (PR) Visa
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Secure your future with Permanent Residency. Live, work, and enjoy
            unlimited opportunities in your dream country.
          </motion.p>
          <motion.p
            className="text-sm text-gray-400 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Getting the permanent residency application right the first time matters. Whether through economic skilled worker pathways, provincial nominations, or family classes, we structure your profile to satisfy strict government evaluation standards.
          </motion.p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT PR
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
              Why Apply for Permanent Residency?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Permanent Residency Visa allows you to live, work, and study in
              a country of your choice without time restrictions. It grants you
              access to social benefits, healthcare, resident education tuition rates, and establishes a stable pathway to full citizenship.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              With PR status, you secure your family's future, access
              world-class career opportunities, and establish a permanent home with peace of mind. For those looking to bring extended family, review our <Link to="/family" className="text-red-500 hover:underline">Family & Spousal Sponsorship</Link> programs. If you have concerns about past records or medical checks, please consult our <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link>.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Relocating permanently is one of the most vital decisions an individual or family will make. Immigration programs demand meticulous preparation and carry rigid timelines. An accidental oversight or incomplete documentation can result in immediate rejections, delaying your migration by months or years. We handle the paperwork carefully so that your transition is smooth.
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
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Permanent Residency"
              className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover h-[380px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. DEEP DIVE: COMPLEXITY & ASSESSMENTS
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
                Managing Application Complexity & Admissibility
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                National PR programs carry dense evaluation criteria. Compiling employment credentials, undergoing reference audits, proving settlement assets, translating foreign records, and maintaining point balances across active pools require continuous expert administration.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Additionally, minor issues related to historical medical conditions, minor police disclosures, financial discrepancies, or clerical errors can trigger misrepresentation or inadmissibility assessments.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                At **Walshken Immigration**, we closely inspect every document and construct responsive profiles to mitigate these risks. If your profile encounters obstacles like procedural fairness reviews, we assist you in drafting transparent, policy-aligned responses.
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
              The Value of a Full Eligibility Assessment
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Applying for PR requires a significant commitment of resources. Before you pay major administrative or government fees, it is vital to establish an accurate assessment of your credentials, work experience, and point calculations under current policy draws.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Our consultation is designed as a deep interview to evaluate your eligibility, outline potential drawbacks, and compare different provincial nominee or federal economic pathways. We focus on recommending pathways that give you and your household the strongest possibility of success.
            </p>
            <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
              <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Walshken Principles</span>
              <p className="text-xs text-gray-300">
                We focus on transparency. If a program does not fit your background or is unlikely to succeed under current draws, we advise you honestly and suggest alternative pathways to build up your points.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. COUNTRY-WISE PR PROGRAMS (BLURRED BACKGROUND OVERLAY)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Global Programs</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Country-Wise <span className="text-red-500">Permanent Residency Programs</span>
          </motion.h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countryPRPrograms.map((country, index) => (
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
              {/* Blurred & Dark Background Image */}
              <img
                src={country.bgImg}
                alt={country.country}
                className="absolute inset-0 w-full h-full object-cover filter blur-[1px] opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-black/80"></div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-5 pb-3 border-b border-gray-800/60">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-bold text-red-400">
                    {country.country}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-2.5">Programs Handled:</h4>
                  <ul className="text-gray-300 text-xs space-y-1.5">
                    {country.programs.map((program, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2 font-bold">•</span> {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 mt-5 pt-4 border-t border-red-950/50 space-y-2.5">
                <div>
                  <h4 className="text-white font-medium text-xs">Path Benefits:</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{country.benefits}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium text-xs">Estimated Processing Time:</h4>
                  <p className="text-gray-300 text-xs font-semibold">{country.processingTime}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. KEY BENEFITS OF PR (WITH ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-black/40 border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Key Benefits of <span className="text-red-500">Permanent Residency</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {prBenefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-950/80 p-6 rounded-2xl border border-gray-800 shadow-xl hover:border-red-500/40 transition-all text-left flex flex-col justify-between"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.2}
              viewport={{ once: true }}
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  <span className="text-red-400">{item.title}</span>
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. WHO IS ELIGIBLE FOR PR (4 CARDS WITH IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Categories</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Who is Eligible for <span className="text-red-500">PR?</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {eligibilityCategories.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl flex flex-col justify-between hover:border-red-500/40 transition-all group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.2}
              viewport={{ once: true }}
            >
              {/* Card Image Header */}
              <div className="relative h-40 overflow-hidden bg-gray-900">
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-gray-950/90 px-3 py-1 rounded-md border border-gray-700">
                  {item.icon}
                  <span className="text-xs font-bold text-white">{item.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-gray-400 text-xs leading-relaxed">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. PR PROCESS SECTION (WITH STYLED ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Step-by-Step PR <span className="text-red-500">Application Process</span>
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
          8. WHY CHOOSE WALSHKEN IMMIGRATION?
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
              title: "Thorough Compliance Verification",
              desc: "We review every detail of your PR application against immigration rules to mitigate processing risks.",
            },
            {
              title: "Honest Draw & Pool Assessments",
              desc: "We provide straight answers regarding pool scores and build alternative plans if criteria shift.",
            },
            {
              title: "Complete, Dedicated Care",
              desc: "From initial transcript evaluations up to settlement and arrival, we coordinate your relocation path with patience.",
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
          9. CALL TO ACTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/40 via-black to-gray-950 border-t border-red-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Start Your PR Journey Today
          </motion.h2>
          <motion.p
            className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            Permanent residency paths require thorough, precise execution. Contact our consultancy team today to schedule an in-depth eligibility consultation and secure your family's future abroad.
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

export default PermanentResidency;
