// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const DetentionRemoval = () => {
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
//               Urgent Regulatory Defense & Appeals
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Detention & Removal Services
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Secure urgent, authorized representation if you or a family member are 
//             facing immigration detention, removal orders, or deportation.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             If you are facing an active removal order or are currently held in detention, 
//             the timeline to secure professional consulting assistance is extremely short. 
//             We act swiftly to organize hearing defenses and coordinate every available regulatory avenue.
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
//               Urgent <span className="text-red-500">Detention & Removal Support</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Immigration authorities may detain foreign nationals or permanent residents 
//               for identity verification, flight risk concerns, or public safety issues. Similarly, 
//               removal orders (including departure, exclusion, and deportation orders) can be issued 
//               following rejected asylum claims, non-compliance, or residency failures.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               During these high-pressure enforcement events, knowing your regulatory rights is 
//               essential. Our authorized consulting team specializes in representing clients directly 
//               before the Immigration Division (ID) and the Immigration Appeal Division (IAD) 
//               of the Immigration and Refugee Board (IRB). If your case is linked to asylum, we provide 
//               full <Link to="/refugee" className="text-red-500 hover:underline">Refugee Claims Support</Link>. We also assist with resolving 
//               underlying factors under our <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link>.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               In detention and removal cases, every hour counts. We prioritize urgent file mobilization, 
//               bondsman coordination, and hearing preparation to offer robust defense representation.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1505664194779-8bebcb95c557?auto=format&fit=crop&w=900&q=80"
//               alt="Urgent Immigration Defense"
//               className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Deep Dive Section */}
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
//                 Detention Reviews: Presenting a Viable Release Plan
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 By law, when the Canada Border Services Agency (CBSA) detains an individual, a formal 
//                 Detention Review must occur within 48 hours. Subsequent reviews take place at the 7-day 
//                 and 30-day marks.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 To secure release, you must present a highly structured, viable release plan to the 
//                 Immigration Division Member. This plan typically requires naming a suitable guarantor (bondsperson), 
//                 establishing a cash or supervisory bond, and agreeing to strict compliance conditions.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we work urgently with families to identify suitable guarantors, 
//                 structure sound supervisory plans, and present clear, persuasive arguments at your IRB hearing.
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
//                 Responding to Removal Orders & Federal Court Stays
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 If you have been issued a removal order, it is imperative to address its regulatory consequences. 
//                 Certain orders carry a lifetime ban unless an Authorization to Return to Canada (ARC) is obtained.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 To challenge a removal order, we identify relevant appeal pathways through the Immigration Appeal 
//                 Division (IAD) for eligible permanent residents or sponsors.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Litigation Support</span>
//                 <p className="text-xs text-gray-300">
//                   Where urgent Federal Court stays or Applications for Leave are required, our consulting team coordinates directly with trusted, specialized litigation counsel to manage your case seamlessly.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Detention & Removal Services <span className="text-red-500">We Handle</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Immigration Detention Reviews",
//                 desc: "Representing detainees before the Immigration Division (IRB) to advocate for release under viable, structured bond and supervision plans.",
//               },
//               {
//                 title: "IAD Removal Order Appeals",
//                 desc: "Filing and arguing formal removal appeals before the Immigration Appeal Division for permanent residents and sponsored sponsors.",
//               },
//               {
//                 title: "Admissibility Hearing Support",
//                 desc: "Representing clients facing formal admissibility allegations due to security, criminality, or misrepresentation concerns.",
//               },
//               {
//                 title: "Authorizations to Return (ARC)",
//                 desc: "Drafting highly structured, comprehensive ARC applications for individuals seeking to re-enter Canada after past deportations.",
//               },
//               {
//                 title: "Pre-Removal Risk Assessments",
//                 desc: "Compiling exhaustive PRRA submissions as a final protection evaluation prior to scheduled removal orders.",
//               },
//               {
//                 title: "Judicial Review Documentation",
//                 desc: "Compiling the essential administrative records and coordinating with litigation counsel for Federal Court review filings.",
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

//       {/* Step Process Section */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Immediate Response <span className="text-red-500">Milestones</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Rapid Profile Intake",
//                 desc: "We perform an immediate, exhaustive analysis of your CBSA arrest papers, removal order documents, and underlying history.",
//               },
//               {
//                 step: "Step 2: Strategy & Guarantor Setup",
//                 desc: "We organize critical supervisory plans, compile financial bond proofs, prepare your guarantors, and draft formal submissions.",
//               },
//               {
//                 step: "Step 3: IRB Board Representation",
//                 desc: "We represent you directly before the IRB tribunal member during your review, advocating thoroughly for your release or stay.",
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
//                 title: "Authorized IRB Representation",
//                 desc: "As Regulated Canadian Immigration Consultants, we possess full authority to represent and argue your case before the IRB tribunal.",
//               },
//               {
//                 title: "Urgent Mobilization Priority",
//                 desc: "We prioritize enforcement files, working outside standard business hours to meet the tight 48-hour detention review timelines.",
//               },
//               {
//                 title: "Meticulous Supervision Plans",
//                 desc: "We construct rigorous release packages that address flight risk concerns, significantly increasing chances of board approval.",
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
//           className="max-w-4xl mx-auto px-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Secure Urgent Representation Support Now
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Immigration enforcement actions leave no room for delay. Contact our consulting team immediately to coordinate an urgent, priority review of your active detention or removal file.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Initiate Urgent Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default DetentionRemoval;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaGavel,
  FaFileAlt,
  FaPassport,
  FaExclamationTriangle,
  FaLandmark,
  FaSearch,
  FaUsers
} from "react-icons/fa";

const DetentionRemoval = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Services Handled (6 Cards with Full Images & Icons)
  const detentionServices = [
    {
      title: "Immigration Detention Reviews",
      desc: "Representing detainees before the Immigration Division (IRB) to advocate for release under viable, structured bond and supervision plans.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmXVnF4rIJtkL5cCyIiKkpt5SKztIYz_I3ElHWK0S4w&s=10",
      icon: <FaShieldAlt className="text-red-500" />,
    },
    {
      title: "IAD Removal Order Appeals",
      desc: "Filing and arguing formal removal appeals before the Immigration Appeal Division for permanent residents and sponsored sponsors.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHH6lduGk7HEkQYJq8GX42QLQgqBAcYXuXIJVZcchiA&s=10",
      icon: <FaGavel className="text-red-500" />,
    },
    {
      title: "Admissibility Hearing Support",
      desc: "Representing clients facing formal admissibility allegations due to security, criminality, or misrepresentation concerns.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfrgqddoQPuApjhhA9os3hXx8qxin3Ecp_OXTcnkO-w&s=10",
      icon: <FaFileAlt className="text-red-500" />,
    },
    {
      title: "Authorizations to Return (ARC)",
      desc: "Drafting highly structured, comprehensive ARC applications for individuals seeking to re-enter Canada after past deportations.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQePRHsMHaDYr7qI6IZuvBb1iE01bLDss6pDF6bV6ZFg&s=10",
      icon: <FaPassport className="text-red-500" />,
    },
    {
      title: "Pre-Removal Risk Assessments",
      desc: "Compiling exhaustive PRRA submissions as a final protection evaluation prior to scheduled removal orders.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrzuGvrOLK9B6rwU-r77CC50NUcDb8zCz7B2ujmDO-g&s=10",
      icon: <FaExclamationTriangle className="text-red-500" />,
    },
    {
      title: "Judicial Review Documentation",
      desc: "Compiling the essential administrative records and coordinating with litigation counsel for Federal Court review filings.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkPuBhyeEyaczR6LouWmpbNTcaAygSRXX4_5RgGLnmg&s=10",
      icon: <FaLandmark className="text-red-500" />,
    },
  ];

  // 2. Immediate Response Milestones (with Styled Icons)
  const responseMilestones = [
    {
      step: "01",
      title: "Rapid Profile Intake",
      desc: "We perform an immediate, exhaustive analysis of your CBSA arrest papers, removal order documents, and underlying history.",
      icon: <FaSearch className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Strategy & Guarantor Setup",
      desc: "We organize critical supervisory plans, compile financial bond proofs, prepare your guarantors, and draft formal submissions.",
      icon: <FaUsers className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "IRB Board Representation",
      desc: "We represent you directly before the IRB tribunal member during your review, advocating thoroughly for your release or stay.",
      icon: <FaLandmark className="text-white text-2xl" />,
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
              Urgent Regulatory Defense & Appeals
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Detention & Removal Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Secure urgent, authorized representation if you or a family member are 
            facing immigration detention, removal orders, or deportation.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            If you are facing an active removal order or are currently held in detention, 
            the timeline to secure professional consulting assistance is extremely short. 
            We act swiftly to organize hearing defenses and coordinate every available regulatory avenue.
          </p>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT SECTION (WITH RIGHT-SIDE IMAGE)
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
              Urgent <span className="text-red-500">Detention & Removal Support</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Immigration authorities may detain foreign nationals or permanent residents 
              for identity verification, flight risk concerns, or public safety issues. Similarly, 
              removal orders (including departure, exclusion, and deportation orders) can be issued 
              following rejected asylum claims, non-compliance, or residency failures.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              During these high-pressure enforcement events, knowing your regulatory rights is 
              essential. Our authorized consulting team specializes in representing clients directly 
              before the Immigration Division (ID) and the Immigration Appeal Division (IAD) 
              of the Immigration and Refugee Board (IRB). If your case is linked to asylum, we provide 
              full <Link to="/refugee" className="text-red-500 hover:underline">Refugee Claims Support</Link>. We also assist with resolving 
              underlying factors under our <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link>.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              In detention and removal cases, every hour counts. We prioritize urgent file mobilization, 
              bondsman coordination, and hearing preparation to offer robust defense representation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfCQBo4kd47vzmNdhVvt6U7veLfEOOBa6O-ZLzgs4yA&s=10"
              alt="Urgent Immigration Defense"
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
                Detention Reviews: Presenting a Viable Release Plan
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                By law, when the Canada Border Services Agency (CBSA) detains an individual, a formal 
                Detention Review must occur within 48 hours. Subsequent reviews take place at the 7-day 
                and 30-day marks.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                To secure release, you must present a highly structured, viable release plan to the 
                Immigration Division Member. This plan typically requires naming a suitable guarantor (bondsperson), 
                establishing a cash or supervisory bond, and agreeing to strict compliance conditions.
              </p>
              {/* Cleaned bold tags without raw asterisks */}
              <p className="text-gray-300 leading-relaxed text-sm">
                At <span className="text-white font-bold">Walshken Immigration</span>, we work urgently with families to identify suitable guarantors, 
                structure sound supervisory plans, and present clear, persuasive arguments at your IRB hearing.
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
                Responding to Removal Orders & Stays
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                If you have been issued a removal order, it is imperative to address its regulatory consequences. 
                Certain orders carry a lifetime ban unless an Authorization to Return to Canada (ARC) is obtained.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                To challenge a removal order, we identify relevant appeal pathways through the Immigration Appeal 
                Division (IAD) for eligible permanent residents or sponsors.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Review Support</span>
                <p className="text-xs text-gray-300">
                  Where urgent Federal Court stays or Applications for Leave are required, our consulting team coordinates directly with trusted, specialized litigation counsel to manage your case seamlessly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. SERVICES WE HANDLE (6 CARDS WITH FULL IMAGES & ICONS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Our Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Detention & Removal Services <span className="text-red-500">We Handle</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {detentionServices.map((item, index) => (
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
          5. IMMEDIATE RESPONSE MILESTONES (WITH STYLED ICONS)
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
            Immediate Response <span className="text-red-500">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {responseMilestones.map((item, index) => (
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
          {[
            {
              title: "Authorized IRB Representation",
              desc: "As Regulated Canadian Immigration Consultants, we possess full authority to represent and argue your case before the IRB tribunal.",
            },
            {
              title: "Urgent Mobilization Priority",
              desc: "We prioritize enforcement files, working outside standard business hours to meet the tight 48-hour detention review timelines.",
            },
            {
              title: "Meticulous Supervision Plans",
              desc: "We construct rigorous release packages that address flight risk concerns, significantly increasing chances of board approval.",
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
      </section>

      {/* ────────────────────────────────────────────────────────
          7. CALL TO ACTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/40 via-black to-gray-950 border-t border-red-950/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent leading-tight">
            Secure Urgent Representation Support Now
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Immigration enforcement actions leave no room for delay. Contact our consulting team immediately to coordinate an urgent, priority review of your active detention or removal file.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Initiate Urgent Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default DetentionRemoval;
