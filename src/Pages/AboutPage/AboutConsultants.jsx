import React from "react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaRegStar,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "Professional Guidance",
    feedback:
      "Thanks to Walshken Immigration, I secured my Canadian work permit without delays. They reviewed my documents, prepared me for the interview, and ensured everything met IRCC standards. Their immigration expertise was truly remarkable.",
  },
  {
    id: 2,
    rating: 4,
    title: "Excellent Support",
    feedback:
      "Walshken Immigration made my Canadian student visa journey smooth and stress-free. Their team helped me with every step — from selecting the right college to filing my visa documents. I'm now studying in Canada, all thanks to their expert advice!",
  },
];

const AboutConsultants = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            <span className="text-white">Why People </span>
            <span className="text-red-500">Trust Us</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-28 bg-red-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition"
            >
              <div className="text-red-500 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                {testimonial.title}
              </h4>
              <div className="flex mb-4 text-red-500">
                {[...Array(5)].map((_, idx) =>
                  idx < testimonial.rating ? (
                    <FaStar key={idx} className="mr-1" />
                  ) : (
                    <FaRegStar key={idx} className="mr-1" />
                  )
                )}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                {testimonial.feedback}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Quick Info */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {[
            {
              icon: <FaPhoneAlt className="text-red-500 text-lg" />,
              label: "Call Us",
              value: "+1 365-363-6067",
            },
            {
              icon: <FaEnvelope className="text-red-500 text-lg" />,
              label: "Email",
              value: "walshkenco@gmail.com",
            },
            {
              icon: <FaMapMarkerAlt className="text-red-500 text-lg" />,
              label: "Location",
              value: "3030 3 Ave NE #120, Calgary, AB, Canada, Alberta",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 justify-center md:justify-start"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-500">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="font-bold text-lg text-white">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutConsultants;
