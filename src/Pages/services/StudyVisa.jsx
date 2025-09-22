import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StudyVisa = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Expanded list of study destinations
  const studyDestinations = [
    "Canada", "USA", "UK", "Australia", "New Zealand", "Germany",
    "France", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland",
    "Ireland", "Denmark", "Norway", "Austria", "Belgium", "Finland",
    "Mexico", "United Arab Emirates", "Saudi Arabia", "Qatar", "Singapore",
    "Japan", "South Korea", "China", "Malaysia"
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-red-500">
            Study Visa Assistance
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Begin your international education journey with our expert study
            visa services. Unlock global opportunities for learning and career
            growth.
          </p>
        </motion.div>
      </section>

      {/* About Study Visa */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Choose a{" "}
              <span className="text-red-500">Study Visa?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Study Visa allows international students to pursue education in
              top universities across the world. It opens doors to high-quality
              education, international exposure, and global career
              opportunities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With the right guidance, you can secure admission to your dream
              university, experience cultural diversity, and set the foundation
              for a successful career abroad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
              alt="Study Abroad"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 text-white">
            Benefits of a <span className="text-red-500">Study Visa</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Education",
                desc: "Access world-class universities and advanced learning systems.",
              },
              {
                title: "Cultural Exposure",
                desc: "Experience diversity and build global connections.",
              },
              {
                title: "Work Opportunities",
                desc: "Part-time job options while studying to support living expenses.",
              },
              {
                title: "Post-Study Options",
                desc: "Opportunity to extend stay with post-study work visas.",
              },
              {
                title: "Permanent Residency Pathway",
                desc: "Study visas often lead to PR options in many countries.",
              },
              {
                title: "Skill Development",
                desc: "Enhance personal, academic, and professional skills abroad.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold mb-2 text-red-500">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Top Study Destinations */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 text-white">
            Global <span className="text-red-500">Study Destinations</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {studyDestinations.map((country, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow-lg border border-red-700 hover:bg-red-900 hover:text-white transition cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-sm font-semibold text-red-500 hover:text-white">
                  {country}
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
          <h2 className="text-3xl font-bold mb-8 text-white">
            Study Visa <span className="text-red-500">Application Process</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: University Admission",
                desc: "Get accepted by a recognized university or college abroad.",
              },
              {
                step: "Step 2: Documentation",
                desc: "Prepare financial proofs, language test scores, and academic records.",
              },
              {
                step: "Step 3: Visa Approval",
                desc: "Submit your application and get your study visa approved.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-red-900 to-black rounded-xl shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.step}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 text-white">
            Why <span className="text-red-500">Choose Us?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Expert Counsellors",
                desc: "Our team provides the best university and visa guidance.",
              },
              {
                title: "High Success Rate",
                desc: "Thousands of successful student visas processed globally.",
              },
              {
                title: "Complete Assistance",
                desc: "From admissions to visa approval, we guide you at every step.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow border border-red-700"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold mb-3 text-red-500">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-14 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Your{" "}
            <span className="text-red-500">Study Abroad Journey</span> Today
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            Contact us now for expert guidance on study visas and admissions.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default StudyVisa;