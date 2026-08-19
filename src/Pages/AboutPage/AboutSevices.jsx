// import React from "react";
// import { motion } from "framer-motion";
// import Studentvisa from "../../assets/hero/studentVisa.webp";
// import BusinessVisa from "../../assets/hero/BusinessVisa.webp";
// import WorkVisa from "../../assets/hero/WorkVisa.webp";
// import TouristVisa from "../../assets/hero/TouristVisa.webp";

// const services = [
//   {
//     title: "Business Visa",
//     description:
//       "We assist entrepreneurs and investors in obtaining business visas to explore global opportunities. Our experts help with legal documentation, eligibility assessment, and embassy interview preparation.",
//     image: BusinessVisa,
//   },
//   {
//     title: "Student Visa",
//     description:
//       "Get complete support for your dream of studying abroad. From university selection to visa filing, we help students at every step to secure admissions and approvals with confidence.",
//     image: Studentvisa,
//   },
//   {
//     title: "Work Visa",
//     description:
//       "We guide skilled professionals in obtaining work visas for countries like Canada, UK, Australia, and more. Our team supports job matching, application paperwork, and embassy processes.",
//     image: WorkVisa,
//   },
//   {
//     title: "Tourist Visa",
//     description:
//       "Planning to travel abroad? Our Tourist Visa services ensure you have all documents ready and assist in smooth visa filing, so you can focus on enjoying your journey.",
//     image: TouristVisa,
//   },
// ];

// const AboutServices = () => {
//   return (
//     <>
//       {/* Services Section */}
//       <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.4)_0%,transparent_70%)]"></div>

//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-red-500 font-semibold text-sm uppercase mb-2 tracking-wide"
//           >
//             Services We Provide
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl font-extrabold mb-12"
//           >
//             <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Explore Our</span>{" "}
//             <span className="text-red-500">Visa, Citizenship</span>{" "}
//             <br />
//             <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"> & Immigration </span>
//             <span className="text-red-500">Services</span>
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="h-1 w-32 bg-red-500 mx-auto mt-3 rounded-full"
//             />
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//               >
//                 <div>
//                   <h3 className="text-xl font-bold mb-3">
//                     <span className="text-white">{service.title.split(" ")[0]}</span>{" "}
//                     <span className="text-red-500">
//                       {service.title.split(" ")[1] || ""}
//                     </span>
//                   </h3>
//                   <p className="text-sm text-gray-300">{service.description}</p>
//                 </div>
//                 <motion.img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-40 object-cover rounded-lg mt-6 border-2 border-red-600"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trusted Section */}
//       <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.4)_0%,transparent_70%)]"></div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
//               <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Most Trusted</span>{" "}
//               <span className="text-red-500">Walshken Immigration</span>{" "}
//               <br />
//               <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Service</span>{" "}
//               <span className="text-red-500">Provider</span>
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="h-1 w-40 bg-red-500 mt-4 rounded-full"
//               />
//             </h2>
//             <p className="text-base text-gray-300 max-w-md">
//               With 6+ years of experience, we have successfully helped thousands
//               of individuals and families obtain visas, work permits, and
//               residency around the world.
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-8"
//           >
//             {[
//               { icon: "🌍", value: "35+", label: "Countries Represented" },
//               { icon: "🎓", value: "25K+", label: "Successful Visas Delivered" },
//               { icon: "✅", value: "99%", label: "Approval Rate" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.1 }}
//                 className="flex flex-col items-center text-center py-6 px-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl"
//               >
//                 <div className="bg-white text-red-600 rounded-full p-5 mb-4 text-2xl font-bold shadow-md">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold">
//                   <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">{stat.value}</span>
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutServices;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Studentvisa from "../../assets/hero/studentVisa.webp";
// import BusinessVisa from "../../assets/hero/BusinessVisa.webp";
// import WorkVisa from "../../assets/hero/WorkVisa.webp";
// import TouristVisa from "../../assets/hero/TouristVisa.webp";

// const services = [
//   {
//     title: "Business Visa",
//     description:
//       "We assist entrepreneurs and investors in obtaining business visas to explore global opportunities. Our experts help with regulatory documentation, eligibility assessment, and embassy interview preparation.",
//     image: BusinessVisa,
//     path: "/business-visa",
//   },
//   {
//     title: "Student Visa",
//     description:
//       "Get complete support for your dream of studying abroad. From university selection to visa filing, we help students at every step to secure admissions and approvals with confidence.",
//     image: Studentvisa,
//     path: "/study-visa",
//   },
//   {
//     title: "Work Visa",
//     description:
//       "We guide skilled professionals in obtaining work visas for countries like Canada, UK, Australia, and more. Our team supports job matching, application paperwork, and embassy processes.",
//     image: WorkVisa,
//     path: "/work-visa",
//   },
//   {
//     title: "Tourist Visa",
//     description:
//       "Planning to travel abroad? Our Tourist Visa services ensure you have all documents ready and assist in smooth visa filing, so you can focus on enjoying your journey.",
//     image: TouristVisa,
//     path: "/visitor-visa",
//   },
// ];

// const AboutServices = () => {
//   return (
//     <>
//       {/* Services Section */}
//       <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.4)_0%,transparent_70%)]"></div>

//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-red-500 font-semibold text-sm uppercase mb-2 tracking-wide"
//           >
//             Services We Provide
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl font-extrabold mb-12"
//           >
//             <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Explore Our</span>{" "}
//             <span className="text-red-500">Visa, Citizenship</span>{" "}
//             <br />
//             <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"> & Immigration </span>
//             <span className="text-red-500">Services</span>
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="h-1 w-32 bg-red-500 mx-auto mt-3 rounded-full"
//             />
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//               >
//                 <div>
//                   <Link to={service.path} className="group">
//                     <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
//                       <span className="text-white group-hover:text-white">{service.title.split(" ")[0]}</span>{" "}
//                       <span className="text-red-500">
//                         {service.title.split(" ")[1] || ""}
//                       </span>
//                     </h3>
//                   </Link>
//                   <p className="text-sm text-gray-300">{service.description}</p>
//                 </div>
//                 <Link to={service.path} className="block mt-6 overflow-hidden rounded-lg">
//                   <motion.img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-40 object-cover rounded-lg border-2 border-red-600"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trusted Section */}
//       <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.4)_0%,transparent_70%)]"></div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
//               <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Most Trusted</span>{" "}
//               <span className="text-red-500">Walshken Immigration</span>{" "}
//               <br />
//               <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Service</span>{" "}
//               <span className="text-red-500">Provider</span>
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="h-1 w-40 bg-red-500 mt-4 rounded-full"
//               />
//             </h2>
//             <p className="text-base text-gray-300 max-w-md">
//               With 6+ years of experience, we have successfully helped thousands
//               of individuals and families obtain visas, work permits, and
//               residency around the world.
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-8"
//           >
//             {[
//               { icon: "🌍", value: "35+", label: "Countries Represented" },
//               { icon: "🎓", value: "25K+", label: "Successful Visas Delivered" },
//               { icon: "✅", value: "99%", label: "Approval Rate" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.1 }}
//                 className="flex flex-col items-center text-center py-6 px-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl"
//               >
//                 <div className="bg-white text-red-600 rounded-full p-5 mb-4 text-2xl font-bold shadow-md">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold">
//                   <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">{stat.value}</span>
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutServices;



import React from "react"; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaCheckCircle, 
  FaClock, 
  FaComments, 
  FaCompass, 
  FaGlobeAmericas, 
  FaBuilding, 
  FaStar, 
  FaGraduationCap 
} from "react-icons/fa";

// Image Imports
import Studentvisa from "../../assets/hero/studypermit1.jpg";
import BusinessVisa from "../../assets/hero/businessimmigration1.jpg";
import WorkVisa from "../../assets/hero/workpermit1.jpg";
import TouristVisa from "../../assets/hero/visitorvisa1.jpg";
import photo1 from "../../assets/hero/countriesrepresented.jpg";
import photo2 from "../../assets/hero/applicationprepared.jpg"; 
import photo3 from "../../assets/hero/documentapproval1.jpg";

const services = [
  {
    title: "Business Immigration",
    description:
      "Guidance for eligible entrepreneurs, investors and business applicants exploring your immigration programs. We explain applicable requirements and help organize supporting documentation.",
    image: BusinessVisa,
    path: "/business-visa",
  },
  {
    title: "Study Permits",
    description:
      "Support for your study permit applications, including document review, purpose-of-study presentation and careful application organization.",
    image: Studentvisa,
    path: "/study-visa",
  },
  {
    title: "Work Permits",
    description:
      "Assistance with eligible work permit applications, extensions and related documentation, with employer-side support where included in the service offered.",
    image: WorkVisa,
    path: "/work-visa",
  },
  {
    title: "Visitor Visas & Super Visas",
    description:
      "Support with visitor visa and Super Visa applications, including purpose-of-travel documents, invitation evidence and proof of temporary intent.",
    image: TouristVisa,
    path: "/visitor-visa",
  },
];

// const secondaryStats = [
//   { figure: "2,975+", label: "Positive Decisions Documented", icon: <FaCheckCircle className="text-red-500" /> },
//   { figure: "9+", label: "Years of Immigration Experience", icon: <FaClock className="text-red-500" /> },
//   { figure: "6,000+", label: "Consultations Completed", icon: <FaComments className="text-red-500" /> },
//   { figure: "20+", label: "Immigration Pathways Supported", icon: <FaCompass className="text-red-500" /> },
//   { figure: "10+", label: "Languages Available", icon: <FaGlobeAmericas className="text-red-500" /> },
//   { figure: "3", label: "Canadian Office Locations", icon: <FaBuilding className="text-red-500" /> },
//   { figure: "300+", label: "Verified Public Reviews", icon: <FaStar className="text-red-500" /> },
//   { figure: "1,000+", label: "Coaching Enrolments Completed", icon: <FaGraduationCap className="text-red-500" /> },
// ];
const secondaryStats = [
  { figure: "2,975+", label: "Positive Decisions Documented", icon: <FaCheckCircle /> },
  { figure: "9+", label: "Years of Immigration Experience", icon: <FaClock /> },
  { figure: "6,000+", label: "Consultations Completed", icon: <FaComments /> },
  { figure: "20+", label: "Immigration Pathways Supported", icon: <FaCompass /> },
  { figure: "10+", label: "Languages Available", icon: <FaGlobeAmericas /> },
  { figure: "3", label: "your Office Locations", icon: <FaBuilding /> },
  { figure: "300+", label: "Verified Public Reviews", icon: <FaStar /> },
  { figure: "1,000+", label: "Coaching Enrolments Completed", icon: <FaGraduationCap /> },
];

const AboutServices = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* ────────────────────────────────────────────────────────
          PART 1: 4 CANADIAN IMMIGRATION SERVICE CARDS
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold text-xs uppercase mb-2 tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Explore Our Immigration
            </span>{" "}
            <br />
            <span className="text-red-500">& Citizenship Services</span>
          </h2>
          <div className="h-1 w-32 bg-red-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300"
            >
              <div>
                <Link to={service.path} className="group">
                  <h3 className="text-xl font-bold mb-3 text-red-400 group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-xs text-gray-300 leading-relaxed">{service.description}</p>
              </div>
              <Link to={service.path} className="block mt-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover rounded-lg border-2 border-red-600/80 hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          PART 2: EXPERIENCE YOU CAN VERIFY (MOCKUP PLATE 2)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/30">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Experience You Can <br />
              <span className="text-red-500">Verify</span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              With 9+ years of immigration experience, Walshken Immigration has supported your immigration
              matters across a broad range of programs. These figures reflect the practice’s recorded work and service
              activity. They describe past work—not guaranteed outcomes.
            </p>
            <p className="text-xs text-gray-400 border-l-2 border-red-600 pl-3 py-1 italic leading-relaxed">
              Approval rate calculated from 2,975 documented positive decisions across 3,500 applications. Past results do not guarantee future outcomes.
            </p>
          </div>

          {/* Right 3 Photo-Stat Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { figure: "35+", label: "Countries Represented", img: photo1 },
              { figure: "3,500+", label: "Applications Prepared", img: photo2 },
              { figure: "85%", label: "Documented Approval Rate", img: photo3 }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-950 rounded-xl overflow-hidden border border-gray-800 shadow-xl flex flex-col">
                <img src={stat.img} alt={stat.label} className="w-full h-28 object-cover opacity-80" />
                <div className="p-4 text-center bg-gray-900/90 flex-1 flex flex-col justify-center">
                  <div className="text-2xl font-extrabold text-white mb-1">{stat.figure}</div>
                  <p className="text-[11px] text-gray-300 font-medium leading-tight">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────
            PART 3: PRACTICE AT A GLANCE - THE PRACTICE IN NUMBERS
            ──────────────────────────────────────────────────────── */}
        <div className="bg-gray-950/60 border border-red-950/40 p-8 rounded-2xl">
          <div className="mb-6">
            <span className="text-red-500 font-semibold text-[11px] uppercase tracking-wider block">PRACTICE AT A GLANCE</span>
            <h3 className="text-xl font-bold text-white">The Practice in Numbers</h3>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {secondaryStats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 p-4 bg-gray-900/40 rounded-xl border border-gray-800/60">
                <div className="text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-lg font-extrabold text-white">{item.figure}</div>
                  <p className="text-[11px] text-gray-400 font-medium leading-tight">{item.label}</p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {secondaryStats.map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      viewport={{ once: true }}
      className="group relative flex items-center gap-4 p-5 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 rounded-2xl border border-gray-800/80 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(220,38,38,0.12)]"
    >
      {/* Icon */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-red-600/20 rounded-xl blur-md group-hover:bg-red-500/30 transition-all duration-300" />

        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/40 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:text-red-400 group-hover:border-red-500/60 group-hover:scale-105 transition-all duration-300">
          <span className="text-xl">
            {item.icon}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="text-xl font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
          {item.figure}
        </div>

        <p className="text-[11px] text-gray-400 font-medium leading-snug mt-0.5">
          {item.label}
        </p>
      </div>

      {/* Decorative accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-7 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
};

export default AboutServices;
