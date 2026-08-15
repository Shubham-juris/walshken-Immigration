// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaQuoteLeft,
//   FaStar,
//   FaRegStar,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     rating: 5,
//     title: "Professional Guidance",
//     feedback:
//       "Thanks to Walshken Immigration, I secured my Canadian work permit without delays. They reviewed my documents, prepared me for the interview, and ensured everything met IRCC standards. Their immigration expertise was truly remarkable.",
//   },
//   {
//     id: 2,
//     rating: 4,
//     title: "Excellent Support",
//     feedback:
//       "Walshken Immigration made my Canadian student visa journey smooth and stress-free. Their team helped me with every step — from selecting the right college to filing my visa documents. I'm now studying in Canada, all thanks to their expert advice!",
//   },
// ];

// const AboutConsultants = () => {
//   return (
//     <>
//       {/* Testimonials Section */}
//       <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-black via-gray-900 to-black text-white">
//         <div className="text-center mb-14">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-extrabold leading-tight"
//           >
//             <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">Why People </span>
//             <span className="text-red-500">Trust Us</span>
//           </motion.h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="h-1 w-28 bg-red-500 mx-auto mt-4 rounded-full"
//           />
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//           {testimonials.map((testimonial, i) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: i * 0.3 }}
//               viewport={{ once: true }}
//               className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition"
//             >
//               <div className="text-red-500 text-4xl mb-4">
//                 <FaQuoteLeft />
//               </div>
//               <h4 className="text-xl font-bold mb-2 text-white">
//                 {testimonial.title}
//               </h4>
//               <div className="flex mb-4 text-red-500">
//                 {[...Array(5)].map((_, idx) =>
//                   idx < testimonial.rating ? (
//                     <FaStar key={idx} className="mr-1" />
//                   ) : (
//                     <FaRegStar key={idx} className="mr-1" />
//                   )
//                 )}
//               </div>
//               <p className="text-gray-300 text-base leading-relaxed">
//                 {testimonial.feedback}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Quick Info */}
//       <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
//         {[
//     {
//       icon: <FaPhoneAlt className="text-red-500 text-lg" />,
//       label: "Call Us",
//       value: "+1 365-363-6067",
//     },
//     {
//       icon: <FaEnvelope className="text-red-500 text-lg" />,
//       label: "Email",
//       value: (
//         <>
//           <div>walshkenco@gmail.com</div>
//           <div>info@walshkenimmigration.com</div>
//         </>
//       ),
//     },
//     {
//       icon: <FaMapMarkerAlt className="text-red-500 text-lg" />,
//       label: "Locations",
//       value: (
//         <>
//           <div>12885 80 Ave Unit 201, Surrey, BC V3W 0K8</div>
//           <div className="mt-1">
//             Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4
//           </div>
//         </>
//       ),
//     },
//   ].map((item, i) => (
//     <motion.div
//       key={i}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: i * 0.3 }}
//       viewport={{ once: true }}
//       className="flex items-center gap-5 justify-center md:justify-start"
//     >
//       <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-500">
//         {item.icon}
//       </div>
  
//       <div>
//         <p className="text-gray-400 text-sm">{item.label}</p>
//         <div className="font-bold text-lg text-white">
//           {item.value}
//         </div>
//       </div>
//     </motion.div>
//   ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutConsultants;



import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Image Imports
import expectPhoto1 from "../../assets/hero/pexels-joshsorenson-1716826.jpg";
import expectPhoto2 from "../../assets/hero/pexels-cottonbro-5137969.jpg";
import valuePhoto1 from "../../assets/hero/AboutImage1.webp";
import valuePhoto2 from "../../assets/hero/AboutImage2.webp";
import valuePhoto3 from "../../assets/hero/AboutImage3.webp";

const expectations = [
  {
    title: "Clear Communication",
    desc: "We explain requirements and next steps clearly, and identify when further information is needed.",
    img: expectPhoto1,
  },
  {
    title: "Careful Preparation",
    desc: "We organize the information and supporting documents required for the service included in your agreement.",
    img: expectPhoto2,
  },
];

const valuesStrip = [
  {
    title: "Clear Communication",
    desc: "Straightforward explanations and timely updates",
    img: valuePhoto1,
  },
  {
    title: "Organized Preparation",
    desc: "Documents and next steps kept on track",
    img: valuePhoto2,
  },
  {
    title: "Professional Support",
    desc: "Service delivered within the agreed scope",
    img: valuePhoto3,
  },
];

const AboutConsultants = () => {
  return (
    <div className="bg-black text-white">
      {/* ────────────────────────────────────────────────────────
          1. WHAT CLIENTS CAN EXPECT (MOCKUP PLATE 4)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-red-950/20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            What Clients Can <span className="text-red-500">Expect</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expectations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full sm:w-48 h-48 sm:h-auto object-cover flex-shrink-0"
              />
              <div className="p-6 flex flex-col justify-center bg-gradient-to-b from-gray-900 to-gray-950">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. PRACTICE VALUES STRIP (MOCKUP PLATE 5)
          ──────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 max-w-7xl mx-auto border-t border-red-950/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuesStrip.map((val, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-gray-950/80 p-4 rounded-xl border border-gray-800 shadow-lg"
            >
              <img
                src={val.img}
                alt={val.title}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border border-red-600/40"
              />
              <div>
                <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider block mb-1">
                  {val.title}
                </span>
                <p className="text-xs text-gray-300 leading-snug font-medium">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. CONTACT QUICK INFO (SURREY & CALGARY ONLY)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6 md:px-16 border-t border-gray-800">
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
              value: (
                <>
                  <div>walshkenco@gmail.com</div>
                  <div>info@walshkenimmigration.com</div>
                </>
              ),
            },
            {
              icon: <FaMapMarkerAlt className="text-red-500 text-lg" />,
              label: "Locations",
              value: (
                <>
                  <div>12885 80 Ave Unit 201, Surrey, BC V3W 0K8</div>
                  <div className="mt-1">
                    Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4
                  </div>
                </>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 justify-center md:justify-start"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-500 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-gray-400 text-xs tracking-wider uppercase mb-0.5">{item.label}</p>
                <div className="font-bold text-sm text-white leading-snug">
                  {item.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutConsultants;
