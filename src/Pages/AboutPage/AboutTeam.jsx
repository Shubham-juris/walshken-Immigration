// import React from "react";
// import { motion } from "framer-motion";

// // images
// import team1 from "../../assets/hero/team1.png";
// import team2 from "../../assets/hero/team2.png";
// import team3 from "../../assets/hero/team3.png";
// import team4 from "../../assets/hero/team4.png";
// import team5 from "../../assets/hero/team5.png";
// import team6 from "../../assets/hero/team6.png";
// import team7 from "../../assets/hero/team7.png";
// import team8 from "../../assets/hero/team8.png";
// import team9 from "../../assets/hero/team9.png";

// const team = [
//   {
//     name: "Harman kaur",
//     role: "Senior RCIC",
//     desc: "Leadership is about creating opportunities, inspiring growth, and delivering excellence through every interaction.",
//     img: team1,
//   },
//   {
//     name: "Ardaman Singh",
//     role: "Senior Immigration Paralegal ",
//     desc: "Dedicated to professionalism, continuous improvement, and delivering quality results every day.",
//     img: team2,
//   },
//   {
//     name: "Arjinder Kaur",
//     role: "Immigration Paralegal",
//     desc: "Success comes from attention to detail, commitment to excellence, and a passion for helping others.",
//     img: team3,
//   },
//   {
//     name: "Harveen Kaur",
//     role: "Client Documentation Coordinator",
//     desc: "Focused on reliability, integrity, and providing exceptional support in everything I do.",
//     img: team4,
//   },
//   {
//     name: "Maphy Palles",
//     role: "Marketing & Client Relations Coordinator",
//     desc: "Building meaningful connections and creating positive experiences through collaboration and communication.",
//     img: team5,
//   },
//   {
//     name: "Navneet Kaur",
//     role: "Immigration Admin Assistant",
//     desc: "Driven by innovation, strong relationships, and a commitment to achieving meaningful results.",
//     img: team6,
//   },
//   {
//     name: "Hafiz Hunain Ahmed",
//     role: "Finance & Accounts Officer",
//     desc: "Dedicated to accuracy, accountability, and supporting excellence through effective teamwork.",
//     img: team7,
//   },
//   {
//     name: "Mariyam Mirzajani",
//     role: "Documentation & Case Management Specialist",
//     desc: "Committed to organization, efficiency, and maintaining the highest standards of professionalism.",
//     img: team8,
//   },
//   {
//     name: "Anureet Kaur",
//     role: "Accounts & Administrative Coordinator",
//     desc: "Passionate about professionalism, continuous learning, and contributing to a positive team environment.",
//     img: team9,
//   },
// ];

// const AboutTeam = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">

//       {/* Background Accent (MATCH ABOUT COMPANY) */}
//       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* HEADER (EXACT STYLE LIKE ABOUT COMPANY) */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-wide text-center">
//             Meet Our Experts
//           </p>

//           <h2 className="text-4xl lg:text-5xl text-center font-extrabold leading-snug bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Professional Immigration <br />
//             <span className="text-white">
//               Leadership Team
//             </span>
//           </h2>
//         </motion.div>

//         {/* GRID (same clean system vibe as leadership HTML) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">

//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="flex flex-col items-start"
//             >

//               {/* CIRCLE IMAGE (FIX FACE CUT ISSUE) */}
//               <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800 mb-6 border-2 border-gray-700">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-full object-cover object-top scale-105"
//                 />
//               </div>

//               {/* NAME (MATCH DESIGN SYSTEM) */}
//               <h4 className="text-xl font-semibold text-white mb-1">
//                 {member.name}
//               </h4>

//               {/* ROLE (RED ACCENT LIKE ABOUT COMPANY) */}
//               <span className="text-red-500 text-sm uppercase tracking-wider font-semibold mb-4">
//                 {member.role}
//               </span>

//               {/* DIVIDER + DESCRIPTION (GRAY SYSTEM LIKE ABOUT COMPANY TEXT) */}
//               <div className="w-full border-t border-gray-700 pt-4">
//                 <p className="text-gray-300 text-sm leading-relaxed italic">
//                   &ldquo;{member.desc}&rdquo;
//                 </p>
//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutTeam;

// import React from "react";
// import { motion } from "framer-motion";

// // images
// import team1 from "../../assets/hero/team1.png";
// import team2 from "../../assets/hero/team2.png";
// import team3 from "../../assets/hero/team3.png";
// import team4 from "../../assets/hero/team4.png";
// import team5 from "../../assets/hero/team5.png";
// import team6 from "../../assets/hero/team6.png";
// import team7 from "../../assets/hero/team7.png";
// import team8 from "../../assets/hero/team8.png";
// import team9 from "../../assets/hero/team9.png";

// const team = [
//   {
//     name: "Harman kaur",
//     role: "Senior RCIC",
//     desc: "Harman Kaur is a Regulated Canadian Immigration Consultant (RCIC) in good standing with extensive experience in Canadian immigration policies and consulting practices. She specializes in permanent residence, work permits, study permits, visitor visas, LMIA, PNP, and citizenship pathways. Her strategic approach, in-depth regulatory knowledge, and dedication to client milestones ensure every case is managed with high professionalism, accuracy, and care.",
//     img: team1,
//   },
//   {
//     name: "Ardaman Singh",
//     role: "Senior Immigration Paralegal ",
//     desc: "Ardaman Singh is an immigration specialist focusing on immigration documentation, submission drafting, and administrative case management. He has extensive experience preparing complex applications, reviewing supporting documents, and maintaining compliance with Canadian immigration regulations. His attention to detail and professional commitment support clients as they navigate the migration process efficiently.",
//     img: team2,
//   },
//   {
//     name: "Arjinder Kaur",
//     role: "Immigration Paralegal",
//     desc: "Arjinder Kaur provides thorough support in immigration case preparation, document verification, and client communications. She is highly focused on coordinating application files, ensuring administrative accuracy, and assisting clients throughout their immigration journeys with consistent professionalism.",
//     img: team3,
//   },
//   {
//     name: "Harveen Kaur",
//     role: "Client Documentation Coordinator",
//     desc: "Harveen Kaur specializes in document coordination and client support, working to ensure every immigration file is complete, accurate, and structured systematically. Their strong organizational skills help streamline the application timeline while providing reliable, professional service to clients.",
//     img: team4,
//   },
//   {
//     name: "Maphy Palles",
//     role: "Marketing & Client Relations Coordinator",
//     desc: "Maphy Palles coordinates client relations, marketing, and brand communication. She is dedicated to building steady client relationships, managing outreach initiatives, and ensuring every client receives professional, responsive, and personalized service.",
//     img: team5,
//   },
//   {
//     name: "Navneet Kaur",
//     role: "Immigration Admin Assistant",
//     desc: "Navneet Kaur supports the consulting team through administrative coordination, schedule management, and case organization. Her clear communication and attention to detail help maintain daily operations and provide timely client support.",
//     img: team6,
//   },
//   {
//     name: "Hafiz Hunain Ahmed",
//     role: "Finance & Accounts Officer",
//     desc: "Hafiz Hunain Ahmed manages the firm’s financial operations, overseeing accounting, bookkeeping, payroll coordination, and financial reporting. His commitment to accuracy and accountability ensures structured financial management and organizational compliance.",
//     img: team7,
//   },
//   {
//     name: "Mariyam Mirzajani",
//     role: "Documentation & Case Management Specialist",
//     desc: "Mariyam Mirzajani specializes in documentation review, case management, and compliance monitoring. She coordinates immigration files from initial preparation to submission, ensuring every application is aligned with high standards of administrative accuracy.",
//     img: team8,
//   },
//   {
//     name: "Anureet Kaur",
//     role: "Accounts & Administrative Coordinator",
//     desc: "Anureet Kaur coordinates both administrative and accounting tasks to support day-to-day operations. She manages financial records, administrative processes, and general office coordination with high efficiency and client care.",
//     img: team9,
//   },
// ];

// const AboutTeam = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">

//       {/* Background Accent (MATCH ABOUT COMPANY) */}
//       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* HEADER (EXACT STYLE LIKE ABOUT COMPANY) */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-wide text-center">
//             Meet Our Experts
//           </p>

//           <h2 className="text-4xl lg:text-5xl text-center font-extrabold leading-snug bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Professional Immigration <br />
//             <span className="text-white">
//               Leadership Team
//             </span>
//           </h2>
//         </motion.div>

//         {/* GRID (same clean system vibe as leadership HTML) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">

//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="flex flex-col items-start"
//             >

//               {/* CIRCLE IMAGE (FIX FACE CUT ISSUE) */}
//               <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800 mb-6 border-2 border-gray-700">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-full object-cover object-top scale-105"
//                 />
//               </div>

//               {/* NAME (MATCH DESIGN SYSTEM) */}
//               <h4 className="text-xl font-semibold text-white mb-1">
//                 {member.name}
//               </h4>

//               {/* ROLE (RED ACCENT LIKE ABOUT COMPANY) */}
//               <span className="text-red-500 text-sm uppercase tracking-wider font-semibold mb-4">
//                 {member.role}
//               </span>

//               {/* DIVIDER + DESCRIPTION (GRAY SYSTEM LIKE ABOUT COMPANY TEXT) */}
//               <div className="w-full border-t border-gray-700 pt-4">
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {member.desc}
//                 </p>
//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutTeam;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// // images
// import team1 from "../../assets/hero/team1.png";
// import team2 from "../../assets/hero/team2.png";
// import team3 from "../../assets/hero/team3.png";
// import team4 from "../../assets/hero/team4.png";
// import team5 from "../../assets/hero/team5.png";
// import team6 from "../../assets/hero/team6.png";
// import team7 from "../../assets/hero/team7.png";
// import team8 from "../../assets/hero/team8.png";
// import team9 from "../../assets/hero/team9.png";

// const team = [
//   {
//     name: "Harman kaur",
//     role: "Senior RCIC",
//     desc: (
//       <span>
//         Harman Kaur is a Regulated Canadian Immigration Consultant (RCIC) in good standing with extensive experience in Canadian immigration policies and consulting practices. She specializes in{" "}
//         <Link to="/pr" className="text-red-500 hover:underline">permanent residence</Link>,{" "}
//         <Link to="/work-visa" className="text-red-500 hover:underline">work permits</Link>,{" "}
//         <Link to="/study-visa" className="text-red-500 hover:underline">study permits</Link>, and{" "}
//         <Link to="/visitor-visa" className="text-red-500 hover:underline">visitor visas</Link>, LMIA, PNP, and citizenship pathways. Her strategic approach, in-depth regulatory knowledge, and dedication to client milestones ensure every case is managed with high professionalism, accuracy, and care.
//       </span>
//     ),
//     img: team1,
//   },
//   {
//     name: "Ardaman Singh",
//     role: "Senior Immigration Paralegal ",
//     desc: "Ardaman Singh is an immigration specialist focusing on immigration documentation, submission drafting, and administrative case management. He has extensive experience preparing complex applications, reviewing supporting documents, and maintaining compliance with Canadian immigration regulations. His attention to detail and professional commitment support clients as they navigate the migration process efficiently.",
//     img: team2,
//   },
//   {
//     name: "Arjinder Kaur",
//     role: "Immigration Paralegal",
//     desc: "Arjinder Kaur provides thorough support in immigration case preparation, document verification, and client communications. She is highly focused on coordinating application files, ensuring administrative accuracy, and assisting clients throughout their immigration journeys with consistent professionalism.",
//     img: team3,
//   },
//   {
//     name: "Harveen Kaur",
//     role: "Client Documentation Coordinator",
//     desc: "Harveen Kaur specializes in document coordination and client support, working to ensure every immigration file is complete, accurate, and structured systematically. Their strong organizational skills help streamline the application timeline while providing reliable, professional service to clients.",
//     img: team4,
//   },
//   {
//     name: "Maphy Palles",
//     role: "Marketing & Client Relations Coordinator",
//     desc: "Maphy Palles coordinates client relations, marketing, and brand communication. She is dedicated to building steady client relationships, managing outreach initiatives, and ensuring every client receives professional, responsive, and personalized service.",
//     img: team5,
//   },
//   {
//     name: "Navneet Kaur",
//     role: "Immigration Admin Assistant",
//     desc: "Navneet Kaur supports the consulting team through administrative coordination, schedule management, and case organization. Her clear communication and attention to detail help maintain daily operations and provide timely client support.",
//     img: team6,
//   },
//   {
//     name: "Hafiz Hunain Ahmed",
//     role: "Finance & Accounts Officer",
//     desc: "Hafiz Hunain Ahmed manages the firm’s financial operations, overseeing accounting, bookkeeping, payroll coordination, and financial reporting. His commitment to accuracy and accountability ensures structured financial management and organizational compliance.",
//     img: team7,
//   },
//   {
//     name: "Mariyam Mirzajani",
//     role: "Documentation & Case Management Specialist",
//     desc: "Mariyam Mirzajani specializes in documentation review, case management, and compliance monitoring. She coordinates immigration files from initial preparation to submission, ensuring every application is aligned with high standards of administrative accuracy.",
//     img: team8,
//   },
//   {
//     name: "Anureet Kaur",
//     role: "Accounts & Administrative Coordinator",
//     desc: "Anureet Kaur coordinates both administrative and accounting tasks to support day-to-day operations. She manages financial records, administrative processes, and general office coordination with high efficiency and client care.",
//     img: team9,
//   },
// ];

// const AboutTeam = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">

//       {/* Background Accent (MATCH ABOUT COMPANY) */}
//       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* HEADER (EXACT STYLE LIKE ABOUT COMPANY) */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <p className="text-red-500 font-semibold uppercase tracking-wide text-center">
//             Meet Our Experts
//           </p>

//           <h2 className="text-4xl lg:text-5xl text-center font-extrabold leading-snug bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
//             Professional Immigration <br />
//             <span className="text-white">
//               Leadership Team
//             </span>
//           </h2>
//         </motion.div>

//         {/* GRID (same clean system vibe as leadership HTML) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">

//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="flex flex-col items-start"
//             >

//               {/* CIRCLE IMAGE (FIX FACE CUT ISSUE) */}
//               <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800 mb-6 border-2 border-gray-700">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-full object-cover object-top scale-105"
//                 />
//               </div>

//               {/* NAME (MATCH DESIGN SYSTEM) */}
//               <h4 className="text-xl font-semibold text-white mb-1">
//                 {member.name}
//               </h4>

//               {/* ROLE (RED ACCENT LIKE ABOUT COMPANY) */}
//               <span className="text-red-500 text-sm uppercase tracking-wider font-semibold mb-4">
//                 {member.role}
//               </span>

//               {/* DIVIDER + DESCRIPTION (GRAY SYSTEM LIKE ABOUT COMPANY TEXT) */}
//               <div className="w-full border-t border-gray-700 pt-4">
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {member.desc}
//                 </p>
//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutTeam;



import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// images
import team1 from "../../assets/hero/team1.png";
import team2 from "../../assets/hero/team2.png";
import team3 from "../../assets/hero/team3.png";
import team4 from "../../assets/hero/team4.png";
import team5 from "../../assets/hero/team5.png";
import team6 from "../../assets/hero/team6.png";
import team7 from "../../assets/hero/team7.png";
import team8 from "../../assets/hero/team8.png";
import team9 from "../../assets/hero/team9.png";

const team = [
  {
    name: "Harman kaur",
    role: "Senior RCIC",
    desc: (
      <span>
        Harman Kaur is a Regulated Canadian Immigration Consultant (RCIC) in good standing with extensive experience in Canadian immigration policies and consulting practices. She specializes in{" "}
        <Link to="/pr" className="text-red-500 hover:underline">permanent residence</Link>,{" "}
        <Link to="/work-visa" className="text-red-500 hover:underline">work permits</Link>,{" "}
        <Link to="/study-visa" className="text-red-500 hover:underline">study permits</Link>, and{" "}
        <Link to="/visitor-visa" className="text-red-500 hover:underline">visitor visas</Link>, LMIA, PNP, and citizenship pathways. Her strategic approach, in-depth regulatory knowledge, and dedication to client milestones ensure every case is managed with high professionalism, accuracy, and care.
      </span>
    ),
    img: team1,
  },
  {
    name: "Ardaman Singh",
    role: "Senior Immigration Paralegal ",
    desc: "Ardaman Singh is an immigration specialist focusing on immigration documentation, submission drafting, and administrative case management. He has extensive experience preparing complex applications, reviewing supporting documents, and maintaining compliance with Canadian immigration regulations. His attention to detail and professional commitment support clients as they navigate the migration process efficiently.",
    img: team2,
  },
  {
    name: "Arjinder Kaur",
    role: "Immigration Paralegal",
    desc: "Arjinder Kaur provides thorough support in immigration case preparation, document verification, and client communications. She is highly focused on coordinating application files, ensuring administrative accuracy, and assisting clients throughout their immigration journeys with consistent professionalism.",
    img: team3,
  },
  {
    name: "Harveen Kaur",
    role: "Client Documentation Coordinator",
    desc: "Harveen Kaur specializes in document coordination and client support, working to ensure every immigration file is complete, accurate, and structured systematically. Their strong organizational skills help streamline the application timeline while providing reliable, professional service to clients.",
    img: team4,
  },
  {
    name: "Maphy Palles",
    role: "Marketing & Client Relations Coordinator",
    desc: "Maphy Palles coordinates client relations, marketing, and brand communication. She is dedicated to building steady client relationships, managing outreach initiatives, and ensuring every client receives professional, responsive, and personalized service.",
    img: team5,
  },
  {
    name: "Navneet Kaur",
    role: "Immigration Admin Assistant",
    desc: "Navneet Kaur supports the consulting team through administrative coordination, schedule management, and case organization. Her clear communication and attention to detail help maintain daily operations and provide timely client support.",
    img: team6,
  },
  {
    name: "Hafiz Hunain Ahmed",
    role: "Finance & Accounts Officer",
    desc: "Hafiz Hunain Ahmed manages the firm’s financial operations, overseeing accounting, bookkeeping, payroll coordination, and financial reporting. His commitment to accuracy and accountability ensures structured financial management and organizational compliance.",
    img: team7,
  },
  {
    name: "Mariyam Mirzajani",
    role: "Documentation & Case Management Specialist",
    desc: "Mariyam Mirzajani specializes in documentation review, case management, and compliance monitoring. She coordinates immigration files from initial preparation to submission, ensuring every application is aligned with high standards of administrative accuracy.",
    img: team8,
  },
  {
    name: "Anureet Kaur",
    role: "Accounts & Administrative Coordinator",
    desc: "Anureet Kaur coordinates both administrative and accounting tasks to support day-to-day operations. She manages financial records, administrative processes, and general office coordination with high efficiency and client care.",
    img: team9,
  },
];

const AboutTeam = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden border-t border-red-950/20">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-red-500 font-semibold uppercase tracking-wide text-xs mb-2">
            Meet Our Team
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Specialized Roles. <br />
            <span className="text-white">
              One Disciplined Standard.
            </span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto mt-6">
            Walshken integrates licensed immigration consulting, paralegal support, document coordination, case management, client relations, finance and administration in one connected practice. Defined ownership, rigorous preparation and consistent follow-through guide every file from intake through follow-up.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800 mb-6 border-2 border-gray-700">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>

              <h4 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h4>

              <span className="text-red-500 text-sm uppercase tracking-wider font-semibold mb-4">
                {member.role}
              </span>

              <div className="w-full border-t border-gray-700 pt-4">
                <p className="text-gray-300 text-xs leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
