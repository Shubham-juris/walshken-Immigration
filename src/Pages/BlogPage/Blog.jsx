// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// import BlogImage from "../../assets/hero/BlogImage.webp";
// import BlogImage1 from "../../assets/hero/BlogImage1.webp";
// import BlogImage2 from "../../assets/hero/BlogImage2.webp";
// import BlogImage3 from "../../assets/hero/BlogImage3.webp";
// import BlogImage4 from "../../assets/hero/BlogImage4.webp";
// import BlogImage5 from "../../assets/hero/BlogImage5.webp";
// import ImageVisa from "../../assets/hero/VisaImg.jpg";
// import faqImage from "../../assets/hero/logo.webp";

// const Blog = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const blogPosts = [
//     {
//       id: 1,
//       date: "07 Jul",
//       author: "Admin",
//       comments: 0,
//       category: "Consulting",
//       title: "Journeys Of Discovery: Uncovering Hidden Treasures",
//       excerpt:
//         "With global digital ad spending exceeding $325B annually, the quest for visibility has never been more intense. Discover how consulting uncovers hidden opportunities for businesses worldwide",
//       image: BlogImage,
//     },
//     {
//       id: 2,
//       date: "17 Jun",
//       author: "Admin",
//       comments: 0,
//       category: "Immigration",
//       title: "Unlocking Opportunities: The Visa Journey Unveiled",
//       excerpt:
//         "Navigating the visa process can be complex, but it opens doors to life-changing opportunities. Explore how proper guidance makes immigration a journey worth taking",
//       image: BlogImage1,
//     },
//     {
//       id: 3,
//       date: "12 May",
//       author: "Admin",
//       comments: 0,
//       category: "Business",
//       title: "Navigating Borders: Ultimate Guide To Visa Success",
//       excerpt:
//         "Borders aren’t barriers—they’re opportunities. This guide walks you through essential steps for visa approval, with expert tips and common pitfalls to avoid",
//       image: BlogImage2,
//     },
//     {
//       id: 4,
//       date: "09 Nov",
//       author: "Admin",
//       comments: 0,
//       category: "Green Card",
//       title: "Citizenship Process: How To Become A UK Resident",
//       excerpt:
//         "Dreaming of settling in the UK? From eligibility to applications, this article explains the residency and citizenship process step by step...",
//       image: BlogImage3,
//     },
//     {
//       id: 5,
//       date: "16 Sep",
//       author: "Admin",
//       comments: 0,
//       category: "Culture",
//       title: "Exploring Ancient Civilizations: The Wonders Of Egypt",
//       excerpt:
//         "Step back in time and explore the architectural wonders of ancient Egypt. Learn how cultural immersion can enhance your global mobility journey",
//       image: BlogImage4,
//     },
//     {
//       id: 6,
//       date: "15 Sep",
//       author: "Admin",
//       comments: 2,
//       category: "Business",
//       title: "The Road To Adventure: Embarking On New Horizons",
//       excerpt:
//         "Stepping into the unknown can be daunting, but it's where growth begins. Discover how business visas open doors to new markets and opportunities worldwide",
//       image: BlogImage5,
//     },
//   ];

//   const faqs = [
//     { question: "How long does the visa process usually take?", answer: "The processing time depends on the type of visa and the country’s immigration policies. Typically, it ranges from a few weeks to several months." },
//     { question: "Do I need IELTS or language proficiency tests?", answer: "For many countries, IELTS or other language proficiency tests are required to prove eligibility for study, work, or permanent residency visas." },
//     { question: "Can I apply for PR directly?", answer: "Yes, if you meet the eligibility requirements of the country’s permanent residency program, you can apply directly without first holding a temporary visa." },
//     { question: "Do you assist with post-approval support?", answer: "Yes, we provide end-to-end support — from documentation and application to settlement services after approval." },
//   ];

//   const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

//   // Animation variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${ImageVisa})`,
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center px-4"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 drop-shadow-lg">
//             Our Blog
//           </h1>
//           <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//             Stay updated with the latest immigration tips, visa success stories,
//             and global opportunities.
//           </p>
//         </motion.div>
//       </div>

//       {/* Blog Section */}
//       <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
//           >
//             Latest <span className="text-red-500">Articles</span>
//           </motion.h2>

//           <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//             {blogPosts.map((post, i) => (
//               <motion.div
//                 key={post.id}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={i}
//                 className="group bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-500 flex flex-col hover:shadow-red-600/40"
//               >
//                 {/* Image with hover animation */}
//                 <div className="relative overflow-hidden">
//                   <motion.img
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-60 object-cover"
//                   />
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute inset-0 bg-black/40"
//                   ></motion.div>
//                   <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg shadow-md text-center">
//                     <p className="text-lg font-bold leading-none">
//                       {post.date.split(" ")[0]}
//                     </p>
//                     <p className="text-xs uppercase">
//                       {post.date.split(" ")[1]}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 flex flex-col flex-grow">
//                   <div className="text-xs text-gray-400 flex flex-wrap gap-4 mb-3">
//                     <span>👤 {post.author}</span>
//                     <span>💬 {post.comments} Comments</span>
//                     <span>🏷️ {post.category}</span>
//                   </div>
//                   <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-500 transition duration-300">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-400 mb-4 flex-grow">
//                     {post.excerpt}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="bg-black py-14 px-4 sm:px-6 lg:px-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
//           {/* FAQ Content */}
//           <div className="md:col-span-7 space-y-4">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//               Frequently Asked <span className="text-red-500">Questions</span>
//             </h2>
//             {faqs.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="border border-gray-700 rounded-lg bg-gray-900 overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFAQ(i)}
//                   className="w-full px-4 py-3 flex justify-between items-center text-left text-sm sm:text-base font-medium text-white hover:text-red-500"
//                 >
//                   {f.question}
//                   {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
//                 </button>
//                 <AnimatePresence>
//                   {openIndex === i && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="px-4 pb-3 text-gray-400 text-sm"
//                     >
//                       {f.answer}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>

//           {/* FAQ Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="md:col-span-5 flex justify-center"
//           >
//             <img
//               src={faqImage}
//               alt="FAQ"
//               className="w-full max-w-xs md:max-w-sm rounded-lg border-4 border-red-500 shadow-xl"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTimes, 
  FaClock, 
  FaUser, 
  FaExternalLinkAlt, 
  FaBookOpen,
  FaQuoteLeft 
} from "react-icons/fa";

// Image Imports (Using verified available assets)
import heroBg from "../../assets/hero/WorkVisa.webp";
import imgArjun from "../../assets/hero/pexels-cottonbro-5137969.jpg";
import imgEmily from "../../assets/hero/pexels-ekrulila-2305114.jpg";
import imgDavid from "../../assets/hero/pexels-joshsorenson-1716826.jpg";
import imgMaria from "../../assets/hero/pexels-freestockpro-1008155.jpg";
import imgResource1 from "../../assets/hero/studentVisa.webp";
import imgResource2 from "../../assets/hero/TouristVisa.webp";

const Blog = () => {
  // Modal State for Client Stories
  const [activeStory, setActiveStory] = useState(null);

  // Close modal on Escape key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setActiveStory(null);
    }
  }, []);

  useEffect(() => {
    if (activeStory) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStory, handleKeyDown]);

  // 1. Client Journeys Data (4 Cards)
  const clientJourneys = [
    {
      id: 1,
      name: "Arjun Mehta",
      category: "Work Visa",
      readTime: "2 min read",
      title: "My Journey to Canada with Walshken Immigration",
      excerpt:
        "Arjun shares how clear explanations, organized preparation and ongoing support helped him move confidently through his Canadian work visa application.",
      image: imgArjun,
      fullStory:
        "When I first considered applying for a Canadian work visa, the amount of information available online was overwhelming. Navigating employer requirements, Labour Market Impact Assessments, and procedural timelines required clear guidance. The consultants at Walshken Immigration provided a structured, step-by-step roadmap. They reviewed every employment document, verified compliance criteria, and kept me informed throughout the process. Their continuous support gave me confidence from initial document gathering to final visa issuance.",
    },
    {
      id: 2,
      name: "Emily Richardson",
      category: "Work Permit",
      readTime: "2 min read",
      title: "From an Employment Opportunity to Working in Canada",
      excerpt:
        "Emily describes how professional guidance made the documentation and work permit requirements easier to understand and manage.",
      image: imgEmily,
      fullStory:
        "Securing an eligible job offer in Canada was an exciting milestone, but organizing the required work permit documentation was complex. Walshken Immigration worked closely with both myself and my prospective employer. They explained the specific regulatory criteria in plain language and ensured that our submission package was complete, organized, and compliant with current immigration rules. Having dedicated professionals manage the administrative details made the entire relocation process smooth and manageable.",
    },
    {
      id: 3,
      name: "David Chen",
      category: "Visitor Visa",
      readTime: "2 min read",
      title: "A Special Trip to Canada Made Possible",
      excerpt:
        "David explains how patient guidance and carefully organized supporting documents helped him approach his Canadian visitor visa application.",
      image: imgDavid,
      fullStory:
        "I was planning an extended trip to visit my family and attend key milestone events in Canada. Temporary resident applications require a strong demonstration of ties to your home country, financial readiness, and clear travel itineraries. Walshken Immigration conducted a thorough review of my personal documentation and helped me arrange a complete application that addressed all consular evaluation criteria. Their patient approach ensured my file was prepared accurately on the first submission.",
    },
    {
      id: 4,
      name: "Maria Santos",
      category: "Permanent Residence",
      readTime: "2 min read",
      title: "My Journey Toward Canadian Permanent Residence",
      excerpt:
        "Maria reflects on understanding her options, preparing her documentation and feeling supported throughout her permanent residence journey.",
      image: imgMaria,
      fullStory:
        "Transitioning to permanent residence was one of the most important decisions of my life. Understanding the various economic classes and provincial streams required personalized attention. Walshken Immigration evaluated my work experience, credential evaluations, and language points to determine the strongest pathway for my profile. Their team handled the complex paperwork with meticulous care, guiding me through each stage until my permanent residency was approved.",
    },
  ];

  // 2. Immigration Resources Data (2 Cards)
  const immigrationResources = [
    {
      id: 1,
      author: "Walshken Team",
      category: "Skilled Immigration",
      readTime: "5 min read",
      title: "How Data Scientists Can Explore Canadian Immigration Pathways",
      excerpt:
        "Explore pathways that may be relevant to data professionals and the experience, language and documentation factors commonly considered.",
      image: imgResource1,
      link: "/tech-immigration",
    },
    {
      id: 2,
      author: "Walshken Team",
      category: "Employer Immigration",
      readTime: "5 min read",
      title: "A Step-by-Step Guide to the LMIA Process in Canada",
      excerpt:
        "Understand the employer-side process, required preparation and key documentation involved in an LMIA application.",
      image: imgResource2,
      link: "/work-visa",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section
        className="relative w-full py-24 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.92)), url(${heroBg})`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            <span className="text-red-500">Canadian Immigration</span> <br />
            Insights
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Practical Canadian immigration guidance and client experiences to help individuals, 
            families and employers make informed decisions.
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 1: CLIENT JOURNEYS (4 CARDS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Client <span className="text-red-500">Journeys</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {clientJourneys.map((story) => (
            <motion.div
              key={story.id}
              onClick={() => setActiveStory(story)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl cursor-pointer hover:border-red-500/50 transition-all flex flex-col justify-between"
            >
              {/* Card Image with Tag */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded shadow">
                  Client Story
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="font-semibold text-gray-300">{story.name}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                    <span>•</span>
                    <span className="text-red-400 font-medium">{story.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-900 flex items-center justify-between text-xs text-red-500 font-semibold">
                  <span>Read Full Experience</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 2: IMMIGRATION RESOURCES (2 CARDS)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Immigration <span className="text-red-500">Resources</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {immigrationResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className="group bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:border-red-500/50 transition-all flex flex-col justify-between"
            >
              {/* Resource Image with Tag */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded shadow">
                  Practical Guide
                </div>
              </div>

              {/* Resource Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="font-semibold text-gray-300">{resource.author}</span>
                    <span>•</span>
                    <span>{resource.readTime}</span>
                    <span>•</span>
                    <span className="text-red-400 font-medium">{resource.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {resource.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-900 flex items-center justify-between text-xs text-red-500 font-semibold">
                  <span>Explore Guide</span>
                  <FaExternalLinkAlt className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          ACCESSIBLE CLIENT STORY MODAL
          ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStory(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto text-left"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white bg-gray-900 p-2 rounded-full border border-gray-800 transition"
                aria-label="Close client story modal"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* Category & Meta */}
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span className="bg-red-600/20 text-red-400 font-bold uppercase tracking-wider px-2.5 py-0.5 rounded text-[10px]">
                  {activeStory.category}
                </span>
                <span>•</span>
                <span>{activeStory.name}</span>
                <span>•</span>
                <span>{activeStory.readTime}</span>
              </div>

              {/* Modal Title */}
              <h3 id="modal-title" className="text-2xl font-extrabold text-white mb-6 leading-snug">
                {activeStory.title}
              </h3>

              {/* Quote Icon & Narrative */}
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <FaQuoteLeft className="text-red-500/40 text-3xl mb-2" />
                <p className="whitespace-pre-line">{activeStory.fullStory}</p>
              </div>

              {/* MANDATORY DISCLAIMER */}
              <div className="mt-8 p-4 bg-red-950/20 border-l-4 border-red-600 rounded-r-lg text-xs text-gray-400 leading-relaxed italic">
                “Client experiences are individual. Past results do not guarantee future outcomes.”
              </div>

              {/* Modal Bottom Action */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold rounded-lg transition"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
