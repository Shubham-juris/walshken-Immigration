import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import visa1 from "../assets/hero/studentVisa.webp";
import visa2 from "../assets/hero/VisaImg.jpg";

const CircleStat = ({ value, label, delay }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (inView) {
      controls.start({ progress: value });
      let start = 0;
      const duration = 1500;
      const step = 20;
      const increment = value / (duration / step);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, step);
    }
  }, [inView, value, controls]);

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <svg className="w-40 h-40 transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#374151" // gray-700
          strokeWidth="12"
          fill="transparent"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#dc2626" // red-600
          strokeWidth="12"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={controls}
          initial={{ strokeDashoffset: circumference }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          style={{
            strokeDashoffset: circumference - (count / 100) * circumference,
          }}
        />
      </svg>

      {/* Center Number */}
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-3xl font-extrabold text-red-500">{count}%</p>
        <p className="text-sm text-gray-300 font-medium">{label}</p>
      </div>
    </div>
  );
};

const AboutVisa = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-red-900 overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-14 text-white drop-shadow-lg">
        <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          About Company
        </span>
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative flex justify-center">
          <motion.img
            src={visa1}
            alt="Visa Consulting"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.img
            src={visa2}
            alt="Visa Documents"
            className="absolute bottom-[-40px] left-12 rounded-2xl shadow-2xl w-64 border-4 border-red-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Welcome To Experience <br />
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Visa Consulting Firm
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We are experts in immigration and visa consulting, offering
            personalized support for students, professionals, and families
            worldwide.
          </p>

          {/* Stats with animated circle + counter */}
          <div className="flex gap-10 mb-8">
            <CircleStat value={76} label="Business Strategy" delay={0.2} />
            <CircleStat value={69} label="Tech Solutions" delay={0.4} />
          </div>

          {/* Checklist */}
          <ul className="space-y-4">
            {[
              "Immigration & Visa Consulting",
              "Direct Online Interview",
              "99% Visa Approvals",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-gray-200 font-medium text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVisa;
