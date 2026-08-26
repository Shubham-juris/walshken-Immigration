// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const TechImmigration = () => {
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
//               Fast-Track Technical Pathways
//             </span>
//             <span className="h-[1px] w-8 bg-red-500"></span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Tech Immigration Pathways
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
//             Access fast-tracked federal and provincial programs specifically structured 
//             for software engineers, IT specialists, and high-growth technology companies.
//           </p>
//           <p className="text-sm text-gray-400 max-w-2xl mx-auto">
//             Technical sector pathways move exceptionally quickly and carry precise eligibility 
//             criteria. We provide specialized consulting to help both internationally trained 
//             professionals and technology employers align their profiles to active fast-track streams.
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
//               Immigration for a <span className="text-red-500">Fast-Moving Sector</span>
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               To address global software and engineering shortages, immigration bodies have designed 
//               highly targeted streams for the technology sector. These pathways, including dedicated provincial 
//               nomination draws and federal STEM-targeted Express Entry selections, prioritize candidates 
//               with verified technical experience.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               For tech companies looking to hire, programs like the Global Talent Stream (GTS) offer expedited 
//               LMIA processing inside of ten business days. However, navigating the employer compliance plans 
//               and salary thresholds requires meticulous attention to detail.
//             </p>
//             <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
//               In a sector where opportunities evolve rapidly, a minor delay in your work permit 
//               or nominee application can impact project timelines. We design technical files with the 
//               efficiency and precision required by rapid-growth tech firms. If your firm needs fast-track LMIAs, 
//               read about the Global Talent Stream under our <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Options</Link>, 
//               or explore points-based conversions to <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
//               alt="Technology Team"
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
//                 The Global Talent Stream (GTS): 10-Day Work Permits
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 The Global Talent Stream allows eligible technology employers to hire specialized foreign 
//                 workers on fast-tracked timelines, bypassing standard LMIA delays.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 To utilize the GTS, employers must draft a customized Labour Market Benefits Plan (LMBP) 
//                 committing to specific activities that support the local labor market—such as job creation, 
//                 co-op placements, or technical skill transfers.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm">
//                 At **Walshken Immigration**, we assist technology businesses in structuring compliant LMBPs, 
//                 meeting required salary thresholds, and filing complete, fast-tracked employer submissions.
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
//                 Provincial Tech Nominee Programs (PNP)
//               </h3>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Many provinces prioritize key tech occupations through accelerated nominee programs (such as 
//                 the BC PNP Tech stream or Alberta’s Accelerated Tech Pathway).
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//                 Candidates with a valid job offer in an eligible tech occupation receive prioritized processing, 
//                 frequent invitation draws, and simplified work permit support letters.
//               </p>
//               <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
//                 <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Targeted STEM Draws</span>
//                 <p className="text-xs text-gray-300">
//                   Federal Express Entry systems routinely conduct category-based selection draws targeting STEM candidates with strong language and education credentials.
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
//             Technical Pathways <span className="text-red-500">We Support</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Global Talent Stream (GTS)",
//                 desc: "Expedited LMIA and work permit processing for highly skilled technical experts and key executive hires in technology.",
//               },
//               {
//                 title: "Provincial Tech Nominations",
//                 desc: "Strategic guidance for tech workers utilizing priority nominee pathways in British Columbia, Alberta, and Ontario.",
//               },
//               {
//                 title: "Express Entry STEM Selection",
//                 desc: "Optimizing points-based profiles to leverage federal Express Entry draws targeting science and technology backgrounds.",
//               },
//               {
//                 title: "Intra-Company Transfers (ICT)",
//                 desc: "Assisting foreign tech firms with transferring key executives, senior managers, or specialized knowledge staff to domestic locations.",
//               },
//               {
//                 title: "Start-Up Visa Program",
//                 desc: "Supporting technical entrepreneurs with permanent residency applications supported by designated venture capital or angel funds.",
//               },
//               {
//                 title: "Employer Compliance Reviews",
//                 desc: "Pre-audit verification and reporting to ensure tech employers adhere to Labour Market Benefit Plan (LMBP) obligations.",
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
//             Our Strategy <span className="text-red-500">For Tech Profiles</span>
//           </h2>
//           <div className="grid gap-10 md:grid-cols-3">
//             {[
//               {
//                 step: "Step 1: Code & Job Match",
//                 desc: "We perform an immediate mapping of your technical occupation to National Occupational Classification (NOC) and provincial tech list profiles.",
//               },
//               {
//                 step: "Step 2: Expedited Document Assembly",
//                 desc: "Collecting credentials, corporate background documents, employment contract specifics, and employer commitment details rapidly.",
//               },
//               {
//                 step: "Step 3: Fast-Track Portal Submission",
//                 desc: "Filing through dedicated fast-track portals and managing communications closely to keep processing timelines inside target weeks.",
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
//                 title: "Tech Sector Specialization",
//                 desc: "We understand technology roles and salary index requirements, helping you classify technical files with absolute precision.",
//               },
//               {
//                 title: "Rapid Execution Standards",
//                 desc: "We prioritize tech industry speed, utilizing dedicated workflows to assemble corporate packages in minimal timeframes.",
//               },
//               {
//                 title: "Employer and Talent Alignment",
//                 desc: "We manage both sides of the immigration file, ensuring seamless, unified processing for technology companies and hires.",
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
//             Accelerate Your Technical Relocation
//           </h2>
//           <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
//             Tech sector draws move quickly and waitlists fill fast. Contact our consulting team today to schedule a fast-track profile evaluation for you or your engineering hires.
//           </p>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
//           >
//             Schedule Fast-Track Consultation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default TechImmigration;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMapMarkedAlt,
  FaMicrochip,
  FaExchangeAlt,
  FaRocket,
  FaClipboardCheck,
  FaCodeBranch,
  FaFileCode,
  FaBolt
} from "react-icons/fa";

const TechImmigration = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // 1. Technical Pathways (6 Cards with Full Images & Icons)
  const techPathways = [
    {
      title: "Global Talent Stream (GTS)",
      desc: "Expedited LMIA and work permit processing for highly skilled technical experts and key executive hires in technology.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVZ8eivN0SY23A6bwjkwZ7AKdpgZjT2a-IW1u6F9cJg&s=10",
      icon: <FaLaptopCode className="text-red-500" />,
    },
    {
      title: "Provincial Tech Nominations",
      desc: "Strategic guidance for tech workers utilizing priority nominee pathways in British Columbia, Alberta, and Ontario.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAk0xntneLl_p7csOcWvlOY31sCh0uh0-IeMgONJfZjw&s=10",
      icon: <FaMapMarkedAlt className="text-red-500" />,
    },
    {
      title: "Express Entry STEM Selection",
      desc: "Optimizing points-based profiles to leverage federal Express Entry draws targeting science and technology backgrounds.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqfKfLDO7wCK72Lbaq2a4R38LiR4vOapDNgYgIfaIqQ&s=10",
      icon: <FaMicrochip className="text-red-500" />,
    },
    {
      title: "Intra-Company Transfers (ICT)",
      desc: "Assisting foreign tech firms with transferring key executives, senior managers, or specialized knowledge staff to domestic locations.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsrqYybCdCUbNnLlyvB_xEtZC1WcY0ZFwyKjKOFeQIw&s=10",
      icon: <FaExchangeAlt className="text-red-500" />,
    },
    {
      title: "Start-Up Visa Program",
      desc: "Supporting technical entrepreneurs with permanent residency applications supported by designated venture capital or angel funds.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbB1g2lxBTMaT_M_lq-yBv8HE6UEZ1lW0FEloH0sk4Q&s=10",
      icon: <FaRocket className="text-red-500" />,
    },
    {
      title: "Employer Compliance Reviews",
      desc: "Pre-audit verification and reporting to ensure tech employers adhere to Labour Market Benefit Plan (LMBP) obligations.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPvre50V319sRwpVHnPMJTQpwrsTkpi3wi7nMVe_eCw&s=10",
      icon: <FaClipboardCheck className="text-red-500" />,
    },
  ];

  // 2. Strategy Steps (with Styled Icons)
  const strategySteps = [
    {
      step: "01",
      title: "Code & Job Match",
      desc: "We perform an immediate mapping of your technical occupation to National Occupational Classification (NOC) and provincial tech list profiles.",
      icon: <FaCodeBranch className="text-white text-2xl" />,
    },
    {
      step: "02",
      title: "Expedited Document Assembly",
      desc: "Collecting credentials, corporate background documents, employment contract specifics, and employer commitment details rapidly.",
      icon: <FaFileCode className="text-white text-2xl" />,
    },
    {
      step: "03",
      title: "Fast-Track Portal Submission",
      desc: "Filing through dedicated fast-track portals and managing communications closely to keep processing timelines inside target weeks.",
      icon: <FaBolt className="text-white text-2xl" />,
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
              Fast-Track Technical Pathways
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r pb-2 leading-[1.2] from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent overflow-visible">
            Tech Immigration Pathways
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Access fast-tracked federal and provincial programs specifically structured 
            for software engineers, IT specialists, and high-growth technology companies.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Technical sector pathways move exceptionally quickly and carry precise eligibility 
            criteria. We provide specialized consulting to help both internationally trained 
            professionals and technology employers align their profiles to active fast-track streams.
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
              Immigration for a <span className="text-red-500">Fast-Moving Sector</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To address global software and engineering shortages, immigration bodies have designed 
              highly targeted streams for the technology sector. These pathways, including dedicated provincial 
              nomination draws and federal STEM-targeted Express Entry selections, prioritize candidates 
              with verified technical experience.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For tech companies looking to hire, programs like the Global Talent Stream (GTS) offer expedited 
              LMIA processing inside of ten business days. However, navigating the employer compliance plans 
              and salary thresholds requires meticulous attention to detail.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              In a sector where opportunities evolve rapidly, a minor delay in your work permit 
              or nominee application can impact project timelines. We design technical files with the 
              efficiency and precision required by rapid-growth tech firms. If your firm needs fast-track LMIAs, 
              read about the Global Talent Stream under our <Link to="/work-visa" className="text-red-500 hover:underline">Work Visa Options</Link>, 
              or explore points-based conversions to <Link to="/pr" className="text-red-500 hover:underline">Permanent Residency</Link>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
              alt="Technology Team"
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
                The Global Talent Stream (GTS): 10-Day Work Permits
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                The Global Talent Stream allows eligible technology employers to hire specialized foreign 
                workers on fast-tracked timelines, bypassing standard LMIA delays.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                To utilize the GTS, employers must draft a customized Labour Market Benefits Plan (LMBP) 
                committing to specific activities that support the local labor market—such as job creation, 
                co-op placements, or technical skill transfers.
              </p>
              {/* Cleaned bold tags without raw asterisks */}
              <p className="text-gray-300 leading-relaxed text-sm">
                At <span className="text-white font-bold">Walshken Immigration</span>, we assist technology businesses in structuring compliant LMBPs, 
                meeting required salary thresholds, and filing complete, fast-tracked employer submissions.
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
                Provincial Tech Nominee Programs (PNP)
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Many provinces prioritize key tech occupations through accelerated nominee programs (such as 
                the BC PNP Tech stream or Alberta’s Accelerated Tech Pathway).
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Candidates with a valid job offer in an eligible tech occupation receive prioritized processing, 
                frequent invitation draws, and simplified work permit support letters.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Targeted STEM Draws</span>
                <p className="text-xs text-gray-300">
                  Federal Express Entry systems routinely conduct category-based selection draws targeting STEM candidates with strong language and education credentials.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. TECHNICAL PATHWAYS (6 CARDS WITH FULL IMAGES)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/40">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">Accelerated Streams</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Technical Pathways <span className="text-red-500">We Support</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {techPathways.map((item, index) => (
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
          5. OUR STRATEGY (WITH STYLED ICONS)
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
            Our Strategy <span className="text-red-500">For Tech Profiles</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {strategySteps.map((item, index) => (
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
              title: "Tech Sector Specialization",
              desc: "We understand technology roles and salary index requirements, helping you classify technical files with absolute precision.",
            },
            {
              title: "Rapid Execution Standards",
              desc: "We prioritize tech industry speed, utilizing dedicated workflows to assemble corporate packages in minimal timeframes.",
            },
            {
              title: "Employer and Talent Alignment",
              desc: "We manage both sides of the immigration file, ensuring seamless, unified processing for technology companies and hires.",
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
            Accelerate Your Technical Relocation
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tech sector draws move quickly and waitlists fill fast. Contact our consulting team today to schedule a fast-track profile evaluation for you or your engineering hires.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/40 transition transform hover:-translate-y-0.5"
          >
            Schedule Fast-Track Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default TechImmigration;
