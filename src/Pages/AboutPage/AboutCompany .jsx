import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import mainImage from "../../assets/hero/TouristVisa.webp";
import smallImage from "../../assets/hero/home3.webp";

const AboutCompany = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Side Images */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2"
        >
          <img
            src={mainImage}
            alt="Main"
            className="rounded-2xl w-full h-auto object-cover shadow-2xl"
          />
          <motion.img
            src={smallImage}
            alt="Small"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-12 left-10 w-2/3 rounded-xl shadow-2xl border-4 border-gray-900"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <p className="text-red-500 font-semibold uppercase tracking-wide">
            About Company
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            Welcome To Experience <br />
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Visa Consulting Firm
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We are experts in immigration and visa consulting, offering
            personalized support for students, professionals, and families
            worldwide. With a proven track record and 99% success rate, we make
            your global journey smoother.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full border-4 border-red-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                68%
              </div>
              <p className="mt-2 font-semibold text-gray-300">
                Business Strategy
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full border-4 border-red-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                93%
              </div>
              <p className="mt-2 font-semibold text-gray-300">
                Real Tech Solutions
              </p>
            </motion.div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-300 font-medium">
            <motion.li
              whileHover={{ x: 10 }}
              className="flex items-center"
            >
              <FaCheckCircle className="text-red-500 mr-2" />
              Immigration & Visa Consulting
            </motion.li>
            <motion.li
              whileHover={{ x: 10 }}
              className="flex items-center"
            >
              <FaCheckCircle className="text-red-500 mr-2" />
              Direct Online Interview
            </motion.li>
            <motion.li
              whileHover={{ x: 10 }}
              className="flex items-center"
            >
              <FaCheckCircle className="text-red-500 mr-2" />
              99% Visa Approvals
            </motion.li>
          </ul>

          {/* Extra Highlight Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              Why Choose Us?
            </h3>
            <p className="text-gray-300">
              Our experienced team provides personalized consultations, reliable
              strategies, and complete end-to-end visa assistance. We ensure
              your application is smooth, fast, and stress-free.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
