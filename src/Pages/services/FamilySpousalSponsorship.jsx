// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const FamilySpousalSponsorship = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // Country-wise Sponsorship Programs
//   const countrySponsorshipPrograms = [
//     {
//       country: "Canada",
//       programs: [
//         "Spouse or Common-Law Partner Sponsorship",
//         "Parent and Grandparent Program (PGP)",
//         "Dependent Child Sponsorship",
//         "Super Visa for Parents and Grandparents",
//         "Other Eligible Relative Sponsorship"
//       ],
//       processingTime: "12-24 months",
//       requirements: "Proof of relationship, financial capability, medical exams, and security clearance",
//       flag: "🇨🇦"
//     },
//     {
//       country: "Australia",
//       programs: [
//         "Partner Visa (Subclass 820/801)",
//         "Prospective Marriage Visa (Subclass 300)",
//         "Parent Visa (Subclass 103, 143, 173)",
//         "Child Visa (Subclass 101, 802)",
//         "Aged Dependent Relative Visa"
//       ],
//       processingTime: "15-30 months",
//       requirements: "Genuine relationship evidence, health insurance, character requirements",
//       flag: "🇦🇺"
//     },
//     {
//       country: "USA",
//       programs: [
//         "IR-1/CR-1 Spouse Visa",
//         "K-1 Fiancé(e) Visa",
//         "IR-5 Parent Visa",
//         "F2A Family Preference Visa",
//         "Immediate Relative Petitions"
//       ],
//       processingTime: "12-36 months",
//       requirements: "Affidavit of Support, proof of bona fide marriage, medical examination",
//       flag: "🇺🇸"
//     },
//     {
//       country: "UK",
//       programs: [
//         "Spouse Visa",
//         "Fiancé(e) Visa",
//         "Parent Visa",
//         "Dependent Child Visa",
//         "Adult Dependent Relative Visa"
//       ],
//       processingTime: "12-24 months",
//       requirements: "Financial requirement, English language test, adequate accommodation",
//       flag: "🇬🇧"
//     },
//     {
//       country: "New Zealand",
//       programs: [
//         "Partnership-Based Resident Visa",
//         "Parent Resident Visa",
//         "Dependent Child Visa",
//         "Parent Retirement Resident Visa",
//         "Sibling and Adult Child Visa"
//       ],
//       processingTime: "10-20 months",
//       requirements: "Genuine and stable relationship, character requirements, health standards",
//       flag: "🇳🇿"
//     },
//     {
//       country: "Germany",
//       programs: [
//         "Family Reunion Visa for Spouses",
//         "Family Reunion for Children",
//         "Family Reunion for Parents",
//         "EUFAM Card for EU Family Members",
//         "National Visa for Family Reunion"
//       ],
//       processingTime: "6-12 months",
//       requirements: "Basic German knowledge, sufficient living space, financial stability",
//       flag: "🇩🇪"
//     }
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
//             Family & Spousal Sponsorship
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300">
//             Reunite with your loved ones and build your future together in a new
//             country with our trusted visa support.
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
//               Bringing <span className="text-red-500">Families Together</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Family and Spousal Sponsorship visas allow citizens or permanent
//               residents to sponsor their spouse, children, parents, or other
//               eligible relatives to live with them abroad. Immigration laws are
//               designed to keep families united, making this one of the most
//               common visa categories.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               Our team provides end-to-end assistance, from eligibility checks
//               to preparing applications and ensuring a smooth visa approval
//               process for your family.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=900&q=80"
//               alt="Family Sponsorship"
//               className="rounded-2xl shadow-lg w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Country-wise Sponsorship Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Country-Wise Family Sponsorship Programs
//           </motion.h2>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {countrySponsorshipPrograms.map((country, index) => (
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
//                   <h4 className="text-white font-medium mb-2">Available Programs:</h4>
//                   <ul className="text-gray-300 text-sm space-y-1">
//                     {country.programs.map((program, i) => (
//                       <li key={i} className="flex items-start">
//                         <span className="text-red-500 mr-2">•</span> {program}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="mb-3">
//                   <h4 className="text-white font-medium mb-1">Processing Time:</h4>
//                   <p className="text-gray-300 text-sm">{country.processingTime}</p>
//                 </div>
                
//                 <div>
//                   <h4 className="text-white font-medium mb-1">Key Requirements:</h4>
//                   <p className="text-gray-300 text-sm">{country.requirements}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
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
//             Benefits of <span className="text-red-500">Family Sponsorship</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Family Reunification",
//                 desc: "Live with your spouse, children, or parents without long separations.",
//               },
//               {
//                 title: "Permanent Residency",
//                 desc: "Sponsored family members often qualify for permanent residency.",
//               },
//               {
//                 title: "Work & Study Rights",
//                 desc: "Dependents can access work permits and study opportunities.",
//               },
//               {
//                 title: "Healthcare & Benefits",
//                 desc: "Access healthcare, social security, and other resident benefits.",
//               },
//               {
//                 title: "Path to Citizenship",
//                 desc: "Sponsorship often provides a pathway to citizenship in many countries.",
//               },
//               {
//                 title: "Stronger Family Bonds",
//                 desc: "Share important life moments together without immigration barriers.",
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

//       {/* Sponsorship Categories */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Who Can You <span className="text-red-500">Sponsor?</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-4">
//             {[
//               "Spouse / Partner",
//               "Children (Dependent)",
//               "Parents & Grandparents",
//               "Other Relatives (case-specific)",
//             ].map((category, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-lg border border-red-700 hover:bg-red-900 hover:text-white transition"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-xl font-semibold text-red-500">
//                   {category}
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
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Sponsorship <span className="text-red-500">Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Eligibility Check",
//                 desc: "We review your profile to confirm eligibility for sponsorship.",
//               },
//               {
//                 step: "Step 2: Documentation",
//                 desc: "Assistance with preparing proof of relationship, identity, and financial support.",
//               },
//               {
//                 step: "Step 3: Application & Approval",
//                 desc: "Submission of your application and support until final approval.",
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
//                 title: "Experienced Team",
//                 desc: "Years of expertise in handling family and spousal sponsorships worldwide.",
//               },
//               {
//                 title: "Personalized Guidance",
//                 desc: "Every family is unique — we provide tailored solutions for your needs.",
//               },
//               {
//                 title: "High Success Rate",
//                 desc: "A proven track record of reuniting families through visa approvals.",
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
//             Ready to <span className="text-red-500">Reunite</span> with Your
//             Family?
//           </h2>
//           <p className="mb-6 text-lg text-gray-300">
//             Contact our immigration experts today and start the sponsorship
//             process with confidence.
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

// export default FamilySpousalSponsorship;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const FamilySpousalSponsorship = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // Country-wise Sponsorship Programs
//   const countrySponsorshipPrograms = [
//     {
//       country: "Canada",
//       programs: [
//         "Spouse or Common-Law Partner Sponsorship",
//         "Parent and Grandparent Program (PGP)",
//         "Dependent Child Sponsorship",
//         "Super Visa for Parents and Grandparents",
//         "Other Eligible Relative Sponsorship"
//       ],
//       processingTime: "12-24 months",
//       requirements: "Proof of genuine relationship, financial capability, medical exams, and security clearance",
//       flag: "🇨🇦"
//     },
//     {
//       country: "Australia",
//       programs: [
//         "Partner Visa (Subclass 820/801)",
//         "Prospective Marriage Visa (Subclass 300)",
//         "Parent Visa (Subclass 103, 143, 173)",
//         "Child Visa (Subclass 101, 802)",
//         "Aged Dependent Relative Visa"
//       ],
//       processingTime: "15-30 months",
//       requirements: "Genuine relationship evidence, health insurance, character requirements",
//       flag: "🇦🇺"
//     },
//     {
//       country: "USA",
//       programs: [
//         "IR-1/CR-1 Spouse Visa",
//         "K-1 Fiancé(e) Visa",
//         "IR-5 Parent Visa",
//         "F2A Family Preference Visa",
//         "Immediate Relative Petitions"
//       ],
//       processingTime: "12-36 months",
//       requirements: "Affidavit of Support, proof of bona fide marriage, medical examination",
//       flag: "🇺🇸"
//     },
//     {
//       country: "UK",
//       programs: [
//         "Spouse Visa",
//         "Fiancé(e) Visa",
//         "Parent Visa",
//         "Dependent Child Visa",
//         "Adult Dependent Relative Visa"
//       ],
//       processingTime: "12-24 months",
//       requirements: "Financial requirement, English language test, adequate accommodation",
//       flag: "🇬🇧"
//     },
//     {
//       country: "New Zealand",
//       programs: [
//         "Partnership-Based Resident Visa",
//         "Parent Resident Visa",
//         "Dependent Child Visa",
//         "Parent Retirement Resident Visa",
//         "Sibling and Adult Child Visa"
//       ],
//       processingTime: "10-20 months",
//       requirements: "Genuine and stable relationship, character requirements, health standards",
//       flag: "🇳🇿"
//     },
//     {
//       country: "Germany",
//       programs: [
//         "Family Reunion Visa for Spouses",
//         "Family Reunion for Children",
//         "Family Reunion for Parents",
//         "EUFAM Card for EU Family Members",
//         "National Visa for Family Reunion"
//       ],
//       processingTime: "6-12 months",
//       requirements: "Basic German knowledge, sufficient living space, financial stability",
//       flag: "🇩🇪"
//     }
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
//               Family Reunification Pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Family & Spousal Sponsorship
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Reunite with your loved ones and build your future together in a new
//             country with our trusted visa support.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             Spousal sponsorships, parent/grandparent applications, and dependent child files require both consulting precision and genuine patience. We handle the complexity so you can focus on welcoming your family home.
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
//               Bringing <span className="text-red-500">Families Together</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Family and Spousal Sponsorship programs allow citizens or permanent
//               residents to sponsor their spouse, partner, children, parents, or other
//               eligible relatives to live with them abroad. While immigration frameworks are
//               designed to keep families united, these pathways are subject to extensive regulatory checks. Upon landing, sponsored relatives are granted <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Our team provides end-to-end assistance, from verifying sponsor eligibility and financial thresholds to assembling relationship records and managing visa processing.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               Sponsorship applications require exhaustive documentation with unforgiving timelines. A single administrative mismatch or incomplete relationship history can delay your application for months, extending your separation. We focus on building a robust, complete file from the start.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=900&q=80"
//               alt="Family Sponsorship"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section: Relationship Authenticity & PGP Precision */}
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
//                 Demonstrating Relationship Authenticity
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Spousal and partner applications face high scrutiny from consular officers, who are trained to evaluate the genuineness of relationship portfolios. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Sponsors must provide consistent proof of cohabitation, mutual financial interdependency, shared property, communication logs, and verified family recognitions. 
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we help you systematically organize your personal documents, tax files, and relationship timelines into a clear, detailed, and professional portfolio that directly addresses the evaluation criteria of immigration departments.
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
//                 Structured Planning for Parents & Dependents
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Sponsoring parents and grandparents under programs like Canada's PGP or regional parent streams involves navigating strict quota intakes and income evaluation thresholds over multiple tax years.
//               </p>
//              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Additionally, Super Visas and dependent child applications require careful alignment with age limits and medical health standards. We manage these multi-layered details patiently to safeguard your family's residency transition. For parents and grandparents seeking temporary visits, we also manage these options through standard <Link to="/visitor-visa" className="text-red-500 hover:underline">Visitor Visa</Link> pathways.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg mt-4">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Our Approach</span>
//                 <p className="text-xs text-gray-300">
//                   Every family situation is unique. We provide an honest eligibility assessment of your income files and relationship records before initiating your file.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Country-wise Sponsorship Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Country-Wise Family Sponsorship Programs
//           </motion.h2>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {countrySponsorshipPrograms.map((country, index) => (
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
//                     <h4 className="text-white font-semibold text-sm mb-2">Available Programs:</h4>
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
//                     <h4 className="text-white font-semibold text-xs">Estimated Processing:</h4>
//                     <p className="text-gray-400 text-xs">{country.processingTime}</p>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-white font-semibold text-xs">Key Requirements:</h4>
//                     <p className="text-gray-400 text-xs leading-relaxed">{country.requirements}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/10">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Benefits of <span className="text-red-500">Family Sponsorship</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Family Reunification",
//                 desc: "Live, reside, and establish a household with your spouse, children, or parents without long separations.",
//               },
//               {
//                 title: "Permanent Residency Status",
//                 desc: "Sponsored family members generally receive immediate permanent resident status with full security.",
//               },
//               {
//                 title: "Work & Study Authorization",
//                 desc: "Dependents can acquire open work permits or study in public institutions at resident tuition rates.",
//               },
//               {
//                 title: "Healthcare Coverage",
//                 desc: "Gain immediate access to domestic public healthcare coverage, social insurance, and resident welfare.",
//               },
//               {
//                 title: "Direct Citizenship Path",
//                 desc: "Sponsorship establishes a clear residency record required to apply for full naturalization and passport privileges.",
//               },
//               {
//                 title: "Stable Household Security",
//                 desc: "Establish your household safely and plan your long-term future without temporary residency anxieties.",
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

//       {/* Sponsorship Categories */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Who Can You <span className="text-red-500">Sponsor?</span>
//           </h2>
//           <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
//             {[
//               "Spouse / Partner",
//               "Children (Dependent)",
//               "Parents & Grandparents",
//               "Other Relatives (case-specific)",
//             ].map((category, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow border border-red-800/40 hover:bg-red-900 hover:text-white transition"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-sm font-semibold text-red-500 hover:text-white">
//                   {category}
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
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Sponsorship <span className="text-red-500">Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Sponsor & Candidate Eligibility Verification",
//                 desc: "We review your household income files, sponsorship credentials, and relationship history to confirm eligibility.",
//               },
//               {
//                 step: "Step 2: Documentation & Portfolio Assembly",
//                 desc: "We coordinate the collection of relationship proof, identity files, clearances, civil certificates, and translations.",
//               },
//               {
//                 step: "Step 3: Portal Submission & Processing Support",
//                 desc: "Our consulting team files the application packages, coordinates biometric steps, and manages communications until approval.",
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
//                 title: "Thorough Relationship Review",
//                 desc: "We evaluate your civil certificates, cohabitation proof, and relationship proof carefully to prevent consular rejections.",
//               },
//               {
//                 title: "Personalized Support",
//                 desc: "Every family situation is unique. We provide tailored document strategies designed to respect your privacy and history.",
//               },
//               {
//                 title: "Complete, Patient Guidance",
//                 desc: "From initial multi-year tax checks to coordinates for local medicals, our consultants guide you through every process.",
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
//                 <h3 className="text-xl font-bold text-red-500 mb-3 text-left">
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
//             Ready to <span className="text-red-500">Reunite</span> with Your Family?
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Structuring family sponsorship portfolios requires thorough administrative planning. Contact our consulting team today to set up an intake assessment and begin the process with confidence.
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

// export default FamilySpousalSponsorship;

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const FamilySpousalSponsorship = () => {
//   const navigate = useNavigate();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   // Country-wise Sponsorship Programs
//   const countrySponsorshipPrograms = [
//     {
//       country: "Canada",
//       programs: [
//         "Spouse or Common-Law Partner Sponsorship",
//         "Parent and Grandparent Program (PGP)",
//         "Dependent Child Sponsorship",
//         "Super Visa for Parents and Grandparents",
//         "Other Eligible Relative Sponsorship"
//       ],
//       processingTime: "12-24 months",
//       requirements: "Proof of genuine relationship, financial capability, medical exams, and security clearance",
//       flag: "🇨🇦"
//     },
//     {
//       country: "Australia",
//       programs: [
//         "Partner Visa (Subclass 820/801)",
//         "Prospective Marriage Visa (Subclass 300)",
//         "Parent Visa (Subclass 103, 143, 173)",
//         "Child Visa (Subclass 101, 802)",
//         "Aged Dependent Relative Visa"
//       ],
//       processingTime: "15-30 months",
//       requirements: "Genuine relationship evidence, health insurance, character requirements",
//       flag: "🇦🇺"
//     },
//     {
//       country: "USA",
//       programs: [
//         "IR-1/CR-1 Spouse Visa",
//         "K-1 Fiancé(e) Visa",
//         "IR-5 Parent Visa",
//         "F2A Family Preference Visa",
//         "Immediate Relative Petitions"
//       ],
//       processingTime: "12-36 months",
//       requirements: "Affidavit of Support, proof of bona fide marriage, medical examination",
//       flag: "🇺🇸"
//     },
//     {
//       country: "UK",
//       programs: [
//         "Spouse Visa",
//         "Fiancé(e) Visa",
//         "Parent Visa",
//         "Dependent Child Visa",
//         "Adult Dependent Relative Visa"
//       ],
//       processingTime: "12-24 months",
//       requirements: "Financial requirement, English language test, adequate accommodation",
//       flag: "🇬🇧"
//     },
//     {
//       country: "New Zealand",
//       programs: [
//         "Partnership-Based Resident Visa",
//         "Parent Resident Visa",
//         "Dependent Child Visa",
//         "Parent Retirement Resident Visa",
//         "Sibling and Adult Child Visa"
//       ],
//       processingTime: "10-20 months",
//       requirements: "Genuine and stable relationship, character requirements, health standards",
//       flag: "🇳🇿"
//     },
//     {
//       country: "Germany",
//       programs: [
//         "Family Reunion Visa for Spouses",
//         "Family Reunion for Children",
//         "Family Reunion for Parents",
//         "EUFAM Card for EU Family Members",
//         "National Visa for Family Reunion"
//       ],
//       processingTime: "6-12 months",
//       requirements: "Basic German knowledge, sufficient living space, financial stability",
//       flag: "🇩🇪"
//     }
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
//               Family Reunification Pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Family & Spousal Sponsorship
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Reunite with your loved ones and build your future together in a new
//             country with our trusted visa support.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             Spousal sponsorships, parent/grandparent applications, and dependent child files require both consulting precision and genuine patience. We handle the complexity so you can focus on welcoming your family home.
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
//               Bringing <span className="text-red-500">Families Together</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Family and Spousal Sponsorship programs allow citizens or permanent
//               residents to sponsor their spouse, partner, children, parents, or other
//               eligible relatives to live with them abroad. While immigration frameworks are
//               designed to keep families united, these pathways are subject to extensive regulatory checks. Upon landing, sponsored relatives are granted <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Our team provides end-to-end assistance, from verifying sponsor eligibility and financial thresholds to assembling relationship records and managing visa processing.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               Sponsorship applications require exhaustive documentation with unforgiving timelines. A single administrative mismatch or incomplete relationship history can delay your application for months, extending your separation. We focus on building a robust, complete file from the start.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=900&q=80"
//               alt="Family Sponsorship"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section: Relationship Authenticity & PGP Precision */}
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
//                 Demonstrating Relationship Authenticity
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Spousal and partner applications face high scrutiny from consular officers, who are trained to evaluate the genuineness of relationship portfolios. 
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Sponsors must provide consistent proof of cohabitation, mutual financial interdependency, shared property, communication logs, and verified family recognitions. 
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we help you systematically organize your personal documents, tax files, and relationship timelines into a clear, detailed, and professional portfolio that directly addresses the evaluation criteria of immigration departments.
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
//                 Structured Planning for Parents & Dependents
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Sponsoring parents and grandparents under programs like Canada's PGP or regional parent streams involves navigating strict quota intakes and income evaluation thresholds over multiple tax years.
//               </p>
//              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Additionally, Super Visas and dependent child applications require careful alignment with age limits and medical health standards. We manage these multi-layered details patiently to safeguard your family's residency transition. For parents and grandparents seeking temporary visits, we also manage these options through standard <Link to="/visitor-visa" className="text-red-500 hover:underline">Visitor Visa</Link> pathways.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg mt-4">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Our Approach</span>
//                 <p className="text-xs text-gray-300">
//                   Every family situation is unique. We provide an honest eligibility assessment of your income files and relationship records before initiating your file.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Country-wise Sponsorship Programs Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-10 text-center"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Country-Wise Family Sponsorship Programs
//           </motion.h2>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {countrySponsorshipPrograms.map((country, index) => (
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
//                     <h4 className="text-white font-semibold text-sm mb-2">Available Programs:</h4>
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
//                     <h4 className="text-white font-semibold text-xs">Estimated Processing:</h4>
//                     <p className="text-gray-400 text-xs">{country.processingTime}</p>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-white font-semibold text-xs">Key Requirements:</h4>
//                     <p className="text-gray-400 text-xs leading-relaxed">{country.requirements}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/10">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Benefits of <span className="text-red-500">Family Sponsorship</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Family Reunification",
//                 desc: "Live, reside, and establish a household with your spouse, children, or parents without long separations.",
//               },
//               {
//                 title: "Permanent Residency Status",
//                 desc: "Sponsored family members generally receive immediate permanent resident status with full security.",
//               },
//               {
//                 title: "Work & Study Authorization",
//                 desc: "Dependents can acquire open work permits or study in public institutions at resident tuition rates.",
//               },
//               {
//                 title: "Healthcare Coverage",
//                 desc: "Gain immediate access to domestic public healthcare coverage, social insurance, and resident welfare.",
//               },
//               {
//                 title: "Direct Citizenship Path",
//                 desc: "Sponsorship establishes a clear residency record required to apply for full naturalization and passport privileges.",
//               },
//               {
//                 title: "Stable Household Security",
//                 desc: "Establish your household safely and plan your long-term future without temporary residency anxieties.",
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

//       {/* Sponsorship Categories */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Who Can You <span className="text-red-500">Sponsor?</span>
//           </h2>
//           <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
//             {[
//               "Spouse / Partner",
//               "Children (Dependent)",
//               "Parents & Grandparents",
//               "Other Relatives (case-specific)",
//             ].map((category, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow border border-red-800/40 hover:bg-red-900 hover:text-white transition"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 variants={fadeUp}
//               >
//                 <h3 className="text-sm font-semibold text-red-500 hover:text-white">
//                   {category}
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
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Sponsorship <span className="text-red-500">Process</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Sponsor & Candidate Eligibility Verification",
//                 desc: "We review your household income files, sponsorship credentials, and relationship history to confirm eligibility.",
//               },
//               {
//                 step: "Step 2: Documentation & Portfolio Assembly",
//                 desc: "We coordinate the collection of relationship proof, identity files, clearances, civil certificates, and translations.",
//               },
//               {
//                 step: "Step 3: Portal Submission & Processing Support",
//                 desc: "Our consulting team files the application packages, coordinates biometric steps, and manages communications until approval.",
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
//                 title: "Thorough Relationship Review",
//                 desc: "We evaluate your civil certificates, cohabitation proof, and relationship proof carefully to prevent consular rejections.",
//               },
//               {
//                 title: "Personalized Support",
//                 desc: "Every family situation is unique. We provide tailored document strategies designed to respect your privacy and history.",
//               },
//               {
//                 title: "Complete, Patient Guidance",
//                 desc: "From initial multi-year tax checks to coordinates for local medicals, our consultants guide you through every process.",
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
//                 <h3 className="text-xl font-bold text-red-500 mb-3 text-left">
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
//             Ready to <span className="text-red-500">Reunite</span> with Your Family?
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Structuring family sponsorship portfolios requires thorough administrative planning. Contact our consulting team today to set up an intake assessment and begin the process with confidence.
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

// export default FamilySpousalSponsorship;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaAward,
  FaBriefcase,
  FaShieldAlt,
  FaPassport,
  FaHeart,
  FaUserCheck,
  FaFileAlt,
  FaPaperPlane
} from "react-icons/fa";

const FamilySpousalSponsorship = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Country-wise Sponsorship Programs (with blurred background images)
  const countrySponsorshipPrograms = [
    {
      country: "Canada",
      programs: [
        "Spouse or Common-Law Partner Sponsorship",
        "Parent and Grandparent Program (PGP)",
        "Dependent Child Sponsorship",
        "Super Visa for Parents and Grandparents",
        "Other Eligible Relative Sponsorship"
      ],
      processingTime: "12-24 months",
      requirements: "Proof of genuine relationship, financial capability, medical exams, and security clearance",
      flag: "🇨🇦",
      bgImg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "Australia",
      programs: [
        "Partner Visa (Subclass 820/801)",
        "Prospective Marriage Visa (Subclass 300)",
        "Parent Visa (Subclass 103, 143, 173)",
        "Child Visa (Subclass 101, 802)",
        "Aged Dependent Relative Visa"
      ],
      processingTime: "15-30 months",
      requirements: "Genuine relationship evidence, health insurance, character requirements",
      flag: "🇦🇺",
      bgImg: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "USA",
      programs: [
        "IR-1/CR-1 Spouse Visa",
        "K-1 Fiancé(e) Visa",
        "IR-5 Parent Visa",
        "F2A Family Preference Visa",
        "Immediate Relative Petitions"
      ],
      processingTime: "12-36 months",
      requirements: "Affidavit of Support, proof of bona fide marriage, medical examination",
      flag: "🇺🇸",
      bgImg: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "UK",
      programs: [
        "Spouse Visa",
        "Fiancé(e) Visa",
        "Parent Visa",
        "Dependent Child Visa",
        "Adult Dependent Relative Visa"
      ],
      processingTime: "12-24 months",
      requirements: "Financial requirement, English language test, adequate accommodation",
      flag: "🇬🇧",
      bgImg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "New Zealand",
      programs: [
        "Partnership-Based Resident Visa",
        "Parent Resident Visa",
        "Dependent Child Visa",
        "Parent Retirement Resident Visa",
        "Sibling and Adult Child Visa"
      ],
      processingTime: "10-20 months",
      requirements: "Genuine and stable relationship, character requirements, health standards",
      flag: "🇳🇿",
      bgImg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    },
    {
      country: "Germany",
      programs: [
        "Family Reunion Visa for Spouses",
        "Family Reunion for Children",
        "Family Reunion for Parents",
        "EUFAM Card for EU Family Members",
        "National Visa for Family Reunion"
      ],
      processingTime: "6-12 months",
      requirements: "Basic German knowledge, sufficient living space, financial stability",
      flag: "🇩🇪",
      bgImg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // 2. Benefits of Family Sponsorship (6 Cards with Clear Images)
  const sponsorshipBenefits = [
    {
      title: "Family Reunification",
      desc: "Live, reside, and establish a household with your spouse, children, or parents without long separations.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-KF9Wm9NJ-1BHpZQZQpDmxczgY9meigRdXeW646lqA&s=10",
      icon: <FaUsers className="text-red-500" />,
    },
    {
      title: "Permanent Residency Status",
      desc: "Sponsored family members generally receive immediate permanent resident status with full security.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnfLaFnpOadACs3Lf4KlREHEW56mzojA2qSChM99uMw&s=10",
      icon: <FaAward className="text-red-500" />,
    },
    {
      title: "Work & Study Authorization",
      desc: "Dependents can acquire open work permits or study in public institutions at resident tuition rates.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjPI8ZePhm4PxX7HVHbXqH_Bn1crgR5gt88kl9qlKbA&s=10",
      icon: <FaBriefcase className="text-red-500" />,
    },
    {
      title: "Healthcare Coverage",
      desc: "Gain immediate access to domestic public healthcare coverage, social insurance, and resident welfare.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwBbLsWhmJELiySpG_-jd4y_sz6H1SjB6CQ-9x8Z1bA&s=10",
      icon: <FaShieldAlt className="text-red-500" />,
    },
    {
      title: "Direct Citizenship Path",
      desc: "Sponsorship establishes a clear residency record required to apply for full naturalization and passport privileges.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtPFlrmEXz7SF-s5CHgFG9TohSbR0CkNwl2vsEQw6Hw&s=10",
      icon: <FaPassport className="text-red-500" />,
    },
    {
      title: "Stable Household Security",
      desc: "Establish your household safely and plan your long-term future without temporary residency anxieties.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2na7RxdVtIifo5B9kVqLpFZpY21xe1XUKDyBa5VY2Q&s=10",
      icon: <FaHeart className="text-red-500" />,
    },
  ];

  // 3. Process Steps (with styled icons)
  const processSteps = [
    {
      step: "01",
      title: "Sponsor & Candidate Eligibility Verification",
      desc: "We review your household income files, sponsorship credentials, and relationship history to confirm eligibility.",
      icon: <FaUserCheck className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Documentation & Portfolio Assembly",
      desc: "We coordinate the collection of relationship proof, identity files, clearances, civil certificates, and translations.",
      icon: <FaFileAlt className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Portal Submission & Processing Support",
      desc: "Our consulting team files the application packages, coordinates biometric steps, and manages communications until approval.",
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
              Family Reunification Pathways
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Family & Spousal Sponsorship
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Reunite with your loved ones and build your future together in a new
            country with our trusted visa support.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Spousal sponsorships, parent/grandparent applications, and dependent child files require both consulting precision and genuine patience. We handle the complexity so you can focus on welcoming your family home.
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
              Bringing <span className="text-red-500">Families Together</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Family and Spousal Sponsorship programs allow citizens or permanent
              residents to sponsor their spouse, partner, children, parents, or other
              eligible relatives to live with them abroad. While immigration frameworks are
              designed to keep families united, these pathways are subject to extensive regulatory checks. Upon landing, sponsored relatives are granted <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our team provides end-to-end assistance, from verifying sponsor eligibility and financial thresholds to assembling relationship records and managing visa processing.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              Sponsorship applications require exhaustive documentation with unforgiving timelines. A single administrative mismatch or incomplete relationship history can delay your application for months, extending your separation. We focus on building a robust, complete file from the start.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=900&q=80"
              alt="Family Sponsorship"
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
                Demonstrating Relationship Authenticity
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Spousal and partner applications face high scrutiny from consular officers, who are trained to evaluate the genuineness of relationship portfolios. 
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Sponsors must provide consistent proof of cohabitation, mutual financial interdependency, shared property, communication logs, and verified family recognitions. 
              </p>
              {/* Cleaned bold tags without raw asterisks */}
              <p className="text-gray-300 leading-relaxed text-sm">
                At <span className="text-white font-bold">Walshken Immigration</span>, we help you systematically organize your personal documents, tax files, and relationship timelines into a clear, detailed, and professional portfolio that directly addresses the evaluation criteria of immigration departments.
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
                Structured Planning for Parents & Dependents
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Sponsoring parents and grandparents under programs like Canada's PGP or regional parent streams involves navigating strict quota intakes and income evaluation thresholds over multiple tax years.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Additionally, Super Visas and dependent child applications require careful alignment with age limits and medical health standards. We manage these multi-layered details patiently to safeguard your family's residency transition. For parents and grandparents seeking temporary visits, we also manage these options through standard <Link to="/visitor-visa" className="text-red-500 hover:underline">Visitor Visa</Link> pathways.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg mt-4">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Our Approach</span>
                <p className="text-xs text-gray-300">
                  Every family situation is unique. We provide an honest eligibility assessment of your income files and relationship records before initiating your file.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. COUNTRY-WISE PROGRAMS (BLURRED BACKGROUND OVERLAY)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Global Programs</p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Country-Wise <span className="text-red-500">Family Sponsorship Programs</span>
          </motion.h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {countrySponsorshipPrograms.map((country, index) => (
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
                className="absolute inset-0 w-full h-full object-cover filter blur-[1px] opacity-75 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
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
                  <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-2.5">Available Programs:</h4>
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
                  <h4 className="text-white font-semibold text-xs">Estimated Processing:</h4>
                  <p className="text-gray-300 text-xs font-semibold">{country.processingTime}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold text-xs">Key Requirements:</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{country.requirements}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. BENEFITS OF FAMILY SPONSORSHIP (6 CARDS WITH IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-black/40 border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Advantages</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Benefits of <span className="text-red-500">Family Sponsorship</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {sponsorshipBenefits.map((item, index) => (
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
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. SPONSORSHIP CATEGORIES
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Eligibility</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Who Can You <span className="text-red-500">Sponsor?</span>
            </h2>
          </div>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
            {[
              "Spouse / Partner",
              "Children (Dependent)",
              "Parents & Grandparents",
              "Other Relatives (case-specific)",
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-950 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-red-500/50 hover:bg-gray-900 transition-all cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.2}
                variants={fadeUp}
              >
                <h3 className="text-base font-bold text-red-500 hover:text-white transition-colors">
                  {category}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. SPONSORSHIP PROCESS (WITH STYLED ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Roadmap</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Sponsorship <span className="text-red-500">Process</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {processSteps.map((item, index) => (
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
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8. WHY CHOOSE WALSHKEN IMMIGRATION?
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-16">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Why Walshken</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Why <span className="text-red-500">Choose Walshken Immigration?</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: "Thorough Relationship Review",
                desc: "We evaluate your civil certificates, cohabitation proof, and relationship proof carefully to prevent consular rejections.",
              },
              {
                title: "Personalized Support",
                desc: "Every family situation is unique. We provide tailored document strategies designed to respect your privacy and history.",
              },
              {
                title: "Complete, Patient Guidance",
                desc: "From initial multi-year tax checks to coordinates for local medicals, our consultants guide you through every process.",
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
        </motion.div>
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
            Ready to <span className="text-red-500">Reunite</span> with Your Family?
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Structuring family sponsorship portfolios requires thorough administrative planning. Contact our consulting team today to set up an intake assessment and begin the process with confidence.
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

export default FamilySpousalSponsorship;

