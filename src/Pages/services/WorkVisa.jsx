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


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WorkVisa = () => {
  const navigate = useNavigate();

  // Framer Motion Variants
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
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
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

      {/* About Work Visa */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
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
              to working abroad.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 italic">
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
              className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Business & Employer Strategy Deep Dive */}
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
              <p className="text-gray-300 mb-4 leading-relaxed">
                Labour shortages in competitive sectors are often a long-term operational hurdle. For organizations that rely on global talent, workforce planning is a critical operational strategy.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We work directly with corporate teams and employers to build immigration strategies covering LMIAs, intra-company transfers, compliance audits, and long-term retention pathways through permanent residency.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm italic">
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
            <p className="text-gray-300 mb-6 leading-relaxed">
              Employer-sponsored applications can be complex and challenging. Preparing detailed job descriptions, demonstrating recruitment compliance, organizing educational evaluations, and coordinating with immigration bodies requires weeks of systematic administrative effort.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At **Walshken Immigration**, we understand that every individual career move and corporate transfer represents a major transition. We manage these administrative steps for you so your transition is structured smoothly.
            </p>
            <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
              <span className="font-semibold text-red-400 block text-sm mb-1">Our Focus</span>
              <p className="text-xs text-gray-300">
                To build customized files that address every policy requirement, helping you demonstrate the absolute legitimacy and value of your foreign worker profile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Comprehensive Work Visa Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Labour Market Impact Assessments (LMIAs)",
                desc: "Full support for employers navigating the LMIA application process, demonstrating recruitment compliance and labor market shortages.",
                icon: "🏢"
              },
              {
                title: "Intra-Company Transfers (ICT)",
                desc: "Facilitating key personnel transfers, including executives and specialized knowledge staff, to branches and affiliates.",
                icon: "🔄"
              },
              {
                title: "Tech Sector Fast-Track Options",
                desc: "Advising technology firms and skilled professionals on fast-tracked pathways structured for highly competitive technical markets.",
                icon: "💻"
              },
              {
                title: "Skill Assessment & Credential Services",
                desc: "We assist with educational credential assessment (WES, IQAS, etc.) required to satisfy regulatory equivalency guidelines.",
                icon: "📋"
              },
              {
                title: "Language Proficiency Support",
                desc: "Guided guidance for exam preparations (IELTS, CELPIP, TOEFL) to secure the target eligibility points.",
                icon: "🌐"
              },
              {
                title: "Candidate Profile Audits",
                desc: "Comprehensive assessment of your skills, background, and certifications to position you optimally for visas or employer sponsorships.",
                icon: "🔍"
              },
              {
                title: "Skill Gaps & Training Guidance",
                desc: "Specialized advisory resources to target skill gaps and satisfy compliance parameters for specific international markets.",
                icon: "📚"
              },
              {
                title: "Interview Preparation Coaching",
                desc: "Practice sessions and administrative preparation to support you during complex assessment interviews.",
                icon: "💼"
              },
              {
                title: "Recruitment Coordination Support",
                desc: "Collaboration with international recruitment circles to bridge individual talent directly with active vacancies.",
                icon: "🤝"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800/40 hover:border-red-500 transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Recruitment Process with Third-Party Supervision
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                How Our Supervised Recruitment Works
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We partner with reputable recruitment agencies and employers worldwide, 
                maintaining oversight throughout the process to ensure transparency and 
                protect your interests.
              </p>
              <ul className="space-y-4 text-gray-300">
                {[
                  "We identify legitimate job opportunities with verified employers",
                  "Our team screens and shortlists candidates based on employer requirements",
                  "We facilitate communication between candidates and employers",
                  "Provide continuous support during interview and selection process",
                  "Ensure compliance with all immigration and employment regulations",
                  "Monitor the entire process until successful placement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-red-500 mr-2">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="bg-gray-850 p-6 rounded-xl shadow border border-red-950"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Benefits of Our Supervised Approach
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Reduced Fraud Risk",
                    desc: "We vet all employers and opportunities to prevent scams"
                  },
                  {
                    title: "Better Job Matching",
                    desc: "Our expertise ensures alignment between your skills and job requirements"
                  },
                  {
                    title: "Continuous Support",
                    desc: "We remain involved throughout your employment transition"
                  },
                  {
                    title: "Regulatory Compliance",
                    desc: "All processes adhere to international employment and immigration rules"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg border border-red-900/10">
                    <h4 className="font-semibold text-red-400 mb-1">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Benefits of a Work Visa
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Opportunities",
                desc: "Expand your career in top international markets.",
              },
              {
                title: "Higher Income",
                desc: "Earn competitive salaries abroad with better perks.",
              },
              {
                title: "Permanent Residency Path",
                desc: "Many work visas lead to permanent residency options.",
              },
              {
                title: "Skill Development",
                desc: "Gain international exposure and professional growth.",
              },
              {
                title: "Family Sponsorship",
                desc: "Bring your spouse and children on dependent visas.",
              },
              {
                title: "Networking",
                desc: "Build professional connections worldwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800/40"
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

      {/* Eligibility Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-8 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Visa Eligibility
          </motion.h2>
          <ul className="grid gap-6 md:grid-cols-2 text-gray-300">
            {[
              "✔ Valid job offer or LMIA-supported employer sponsorship",
              "✔ Educational qualifications or relevant work experience",
              "✔ Proof of financial stability to support migration",
              "✔ Cleared health assessment and police character certificates",
              "✔ Language proficiency (IELTS/CELPIP where required)",
              "✔ Skill assessment report (WES or equivalent equivalent)",
              "✔ Professional certifications, licenses, or portfolio proof",
              "✔ Meeting points-based profile requirements (where applicable)",
            ].map((req, index) => (
              <motion.li
                key={index}
                className="p-5 bg-gray-800 rounded-xl shadow border border-red-900/10 text-sm font-medium"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                {req}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Visa Application Process
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                step: "Step 1: Consultation & Assessment",
                desc: "We evaluate your qualifications, assess your employer sponsorship status, and suggest optimal pathways.",
              },
              {
                step: "Step 2: Documentation & Strategy",
                desc: "Prepare compliant paperwork, run LMIA checks, and verify credential evaluation documents.",
              },
              {
                step: "Step 3: Submission Coordination",
                desc: "Liaise with sponsoring bodies, complete regulatory forms, and manage procedural requirements.",
              },
              {
                step: "Step 4: Visa Submission & Resettlement",
                desc: "Submit your final package to authorities and receive comprehensive support for post-arrival transition.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-red-800/40"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <div className="text-white bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
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
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Walshken Immigration?
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
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
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-900 rounded-xl shadow-lg border border-red-800/40 hover:border-red-500 transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Begin Your International Career Journey Today
          </motion.h2>
          <motion.p
            className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            Navigating work permit programs requires careful strategic planning. Contact us to coordinate an eligibility assessment and discuss how to secure your global career transition safely.
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-0.5"
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
