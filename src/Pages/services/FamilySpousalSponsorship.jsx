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

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const FamilySpousalSponsorship = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Country-wise Sponsorship Programs
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
      flag: "🇨🇦"
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
      flag: "🇦🇺"
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
      flag: "🇺🇸"
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
      flag: "🇬🇧"
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
      flag: "🇳🇿"
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
      flag: "🇩🇪"
    }
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
              Family Reunification Pathways
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Family & Spousal Sponsorship
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Reunite with your loved ones and build your future together in a new
            country with our trusted visa support.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Spousal sponsorships, parent/grandparent applications, and dependent child files require both consulting precision and genuine patience. We handle the complexity so you can focus on welcoming your family home.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
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
              className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Section: Relationship Authenticity & PGP Precision */}
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
              <p className="text-gray-300 leading-relaxed text-sm">
                At **Walshken Immigration**, we help you systematically organize your personal documents, tax files, and relationship timelines into a clear, detailed, and professional portfolio that directly addresses the evaluation criteria of immigration departments.
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

      {/* Country-wise Sponsorship Programs Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Country-Wise Family Sponsorship Programs
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {countrySponsorshipPrograms.map((country, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800/30 hover:border-red-500 transition flex flex-col justify-between"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{country.flag}</span>
                    <h3 className="text-xl font-semibold text-red-400">
                      {country.country}
                    </h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold text-sm mb-2">Available Programs:</h4>
                    <ul className="text-gray-300 text-sm space-y-1.5">
                      {country.programs.map((program, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-red-950/50 space-y-2">
                  <div>
                    <h4 className="text-white font-semibold text-xs">Estimated Processing:</h4>
                    <p className="text-gray-400 text-xs">{country.processingTime}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold text-xs">Key Requirements:</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{country.requirements}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Benefits of <span className="text-red-500">Family Sponsorship</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Family Reunification",
                desc: "Live, reside, and establish a household with your spouse, children, or parents without long separations.",
              },
              {
                title: "Permanent Residency Status",
                desc: "Sponsored family members generally receive immediate permanent resident status with full security.",
              },
              {
                title: "Work & Study Authorization",
                desc: "Dependents can acquire open work permits or study in public institutions at resident tuition rates.",
              },
              {
                title: "Healthcare Coverage",
                desc: "Gain immediate access to domestic public healthcare coverage, social insurance, and resident welfare.",
              },
              {
                title: "Direct Citizenship Path",
                desc: "Sponsorship establishes a clear residency record required to apply for full naturalization and passport privileges.",
              },
              {
                title: "Stable Household Security",
                desc: "Establish your household safely and plan your long-term future without temporary residency anxieties.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800/40 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold text-red-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sponsorship Categories */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Who Can You <span className="text-red-500">Sponsor?</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {[
              "Spouse / Partner",
              "Children (Dependent)",
              "Parents & Grandparents",
              "Other Relatives (case-specific)",
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow border border-red-800/40 hover:bg-red-900 hover:text-white transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-sm font-semibold text-red-500 hover:text-white">
                  {category}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Sponsorship <span className="text-red-500">Process</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Sponsor & Candidate Eligibility Verification",
                desc: "We review your household income files, sponsorship credentials, and relationship history to confirm eligibility.",
              },
              {
                step: "Step 2: Documentation & Portfolio Assembly",
                desc: "We coordinate the collection of relationship proof, identity files, clearances, civil certificates, and translations.",
              },
              {
                step: "Step 3: Portal Submission & Processing Support",
                desc: "Our consulting team files the application packages, coordinates biometric steps, and manages communications until approval.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-red-950 to-black border border-red-900/20 rounded-xl text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.step}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Why <span className="text-red-500">Choose Walshken Immigration?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-red-800/40 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-bold text-red-500 mb-3 text-left">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Ready to <span className="text-red-500">Reunite</span> with Your Family?
          </h2>
          <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
            Structuring family sponsorship portfolios requires thorough administrative planning. Contact our consulting team today to set up an intake assessment and begin the process with confidence.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
          >
            Request Your Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default FamilySpousalSponsorship;
