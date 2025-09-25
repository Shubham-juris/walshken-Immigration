import React from "react";
import { motion, useAnimation } from "framer-motion";
import citizen from "../../assets/hero/citizentest.jpg";
import ielts from "../../assets/hero/ielts.jpg";
import toefl from "../../assets/hero/coaching.jpg";
import oet from "../../assets/hero/oet.jpg";

const services = [
  {
    title: "IELTS Courses",
    description:
      "Expert-led IELTS coaching covering all four modules with mock tests & personalized feedback.",
    image: ielts,
  },
  {
    title: "Citizenship Test",
    description:
      "Structured coaching for Citizenship Test with practice sessions and key concepts.",
    image: citizen,
  },
  {
    title: "TOEFL Coaching",
    description:
      "Focused TOEFL coaching with expert strategies and individual guidance.",
    image: toefl,
  },
  {
    title: "OET Coaching",
    description:
      "Special OET coaching for healthcare professionals with real-life scenarios.",
    image: oet,
  },
];

// Marquee scroll variants
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        duration: 35,
        ease: "linear",
      },
    },
  },
};

const CoachingMarquee = () => {
  const controls = useAnimation();

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-red-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative mb-2">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-14 text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Our Coaching Services
          </span>
        </h2>

        <div
          className="relative flex overflow-hidden w-full"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => controls.start("animate")}
        >
          {/* Track 1 */}
          <motion.div
            className="flex gap-12 flex-shrink-0 pr-12"
            variants={marqueeVariants}
            animate={controls}
            initial="animate"
          >
            {services.map((service, index) => (
              <div
                key={`track1-${index}`}
                className="flex items-center gap-6 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl p-8 w-[360px] border border-gray-800 hover:border-red-500 hover:shadow-red-600/40 cursor-pointer transition-all"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 rounded-full object-cover border-4 border-red-500 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Track 2 (duplicate) */}
          <motion.div
            className="flex gap-12 flex-shrink-0"
            variants={marqueeVariants}
            animate={controls}
            initial="animate"
          >
            {services.map((service, index) => (
              <div
                key={`track2-${index}`}
                className="flex items-center gap-6 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl p-8 w-[360px] border border-gray-800 hover:border-red-500 hover:shadow-red-600/40 cursor-pointer transition-all"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 rounded-full object-cover border-4 border-red-500 shadow-lg"
                />
                <div>
                  <h3 className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachingMarquee;
