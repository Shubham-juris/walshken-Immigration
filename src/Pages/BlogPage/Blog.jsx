import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import BlogImage from "../../assets/hero/BlogImage.webp";
import BlogImage1 from "../../assets/hero/BlogImage1.webp";
import BlogImage2 from "../../assets/hero/BlogImage2.webp";
import BlogImage3 from "../../assets/hero/BlogImage3.webp";
import BlogImage4 from "../../assets/hero/BlogImage4.webp";
import BlogImage5 from "../../assets/hero/BlogImage5.webp";
import ImageVisa from "../../assets/hero/VisaImg.jpg";
import faqImage from "../../assets/hero/logo.webp";

const Blog = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const blogPosts = [
    {
      id: 1,
      date: "07 Jul",
      author: "Admin",
      comments: 0,
      category: "Consulting",
      title: "Journeys Of Discovery: Uncovering Hidden Treasures",
      excerpt:
        "With global digital ad spending exceeding $325B annually, the quest for visibility has never been more intense. Discover how consulting uncovers hidden opportunities for businesses worldwide",
      image: BlogImage,
    },
    {
      id: 2,
      date: "17 Jun",
      author: "Admin",
      comments: 0,
      category: "Immigration",
      title: "Unlocking Opportunities: The Visa Journey Unveiled",
      excerpt:
        "Navigating the visa process can be complex, but it opens doors to life-changing opportunities. Explore how proper guidance makes immigration a journey worth taking",
      image: BlogImage1,
    },
    {
      id: 3,
      date: "12 May",
      author: "Admin",
      comments: 0,
      category: "Business",
      title: "Navigating Borders: Ultimate Guide To Visa Success",
      excerpt:
        "Borders aren’t barriers—they’re opportunities. This guide walks you through essential steps for visa approval, with expert tips and common pitfalls to avoid",
      image: BlogImage2,
    },
    {
      id: 4,
      date: "09 Nov",
      author: "Admin",
      comments: 0,
      category: "Green Card",
      title: "Citizenship Process: How To Become A UK Resident",
      excerpt:
        "Dreaming of settling in the UK? From eligibility to applications, this article explains the residency and citizenship process step by step...",
      image: BlogImage3,
    },
    {
      id: 5,
      date: "16 Sep",
      author: "Admin",
      comments: 0,
      category: "Culture",
      title: "Exploring Ancient Civilizations: The Wonders Of Egypt",
      excerpt:
        "Step back in time and explore the architectural wonders of ancient Egypt. Learn how cultural immersion can enhance your global mobility journey",
      image: BlogImage4,
    },
    {
      id: 6,
      date: "15 Sep",
      author: "Admin",
      comments: 2,
      category: "Business",
      title: "The Road To Adventure: Embarking On New Horizons",
      excerpt:
        "Stepping into the unknown can be daunting, but it's where growth begins. Discover how business visas open doors to new markets and opportunities worldwide",
      image: BlogImage5,
    },
  ];

  const faqs = [
    { question: "How long does the visa process usually take?", answer: "The processing time depends on the type of visa and the country’s immigration policies. Typically, it ranges from a few weeks to several months." },
    { question: "Do I need IELTS or language proficiency tests?", answer: "For many countries, IELTS or other language proficiency tests are required to prove eligibility for study, work, or permanent residency visas." },
    { question: "Can I apply for PR directly?", answer: "Yes, if you meet the eligibility requirements of the country’s permanent residency program, you can apply directly without first holding a temporary visa." },
    { question: "Do you assist with post-approval support?", answer: "Yes, we provide end-to-end support — from documentation and application to settlement services after approval." },
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${ImageVisa})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 drop-shadow-lg">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest immigration tips, visa success stories,
            and global opportunities.
          </p>
        </motion.div>
      </div>

      {/* Blog Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Latest <span className="text-red-500">Articles</span>
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-500 flex flex-col hover:shadow-red-600/40"
              >
                {/* Image with hover animation */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-black/40"
                  ></motion.div>
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg shadow-md text-center">
                    <p className="text-lg font-bold leading-none">
                      {post.date.split(" ")[0]}
                    </p>
                    <p className="text-xs uppercase">
                      {post.date.split(" ")[1]}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-400 flex flex-wrap gap-4 mb-3">
                    <span>👤 {post.author}</span>
                    <span>💬 {post.comments} Comments</span>
                    <span>🏷️ {post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-500 transition duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* FAQ Content */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-lg bg-gray-900 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-4 py-3 flex justify-between items-center text-left text-sm sm:text-base font-medium text-white hover:text-red-500"
                >
                  {f.question}
                  {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-3 text-gray-400 text-sm"
                    >
                      {f.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* FAQ Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex justify-center"
          >
            <img
              src={faqImage}
              alt="FAQ"
              className="w-full max-w-xs md:max-w-sm rounded-lg border-4 border-red-500 shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
