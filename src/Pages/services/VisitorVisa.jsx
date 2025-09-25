import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const VisitorVisa = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Visitor Visa Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Travel across the globe with ease. We simplify your visitor visa
            process, ensuring a smooth and stress-free journey.
          </motion.p>
        </div>
      </section>

      {/* About Visitor Visa */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              What is a Visitor Visa?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Visitor Visa allows you to enter another country temporarily for
              tourism, visiting family/friends, attending events, or short-term
              business trips. Each country has specific requirements and
              conditions for granting visitor visas.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our expert consultants help you prepare the right documentation,
              meet eligibility requirements, and secure approvals quickly so you
              can travel stress-free.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=900&q=80"
              alt="Visitor Visa"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-10">
            Benefits of a Visitor Visa
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Tourism",
                desc: "Explore new cultures, traditions, and breathtaking destinations.",
              },
              {
                title: "Family Visits",
                desc: "Reconnect with your loved ones across borders.",
              },
              {
                title: "Business Trips",
                desc: "Attend meetings, conferences, and expand global networks.",
              },
              {
                title: "Short-Term Study",
                desc: "Participate in short training or certificate programs.",
              },
              {
                title: "Events & Exhibitions",
                desc: "Attend global events, fairs, or cultural festivals.",
              },
              {
                title: "Multiple Entry Options",
                desc: "Choose single-entry or multiple-entry visas as per your needs.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  <span className="text-red-500">{item.title}</span>
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-10 text-red-500">
            Visitor Visa Application Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Consultation",
                desc: "We assess your purpose of visit and suggest the best visa option.",
              },
              {
                step: "Step 2: Documentation",
                desc: "Our experts help you prepare financial proofs, invitation letters, and other required documents.",
              },
              {
                step: "Step 3: Visa Approval",
                desc: "We submit your application and guide you until your visa is approved.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  {item.step}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Trusted Expertise",
                desc: "Years of experience in processing visitor visas for top countries.",
              },
              {
                title: "Fast & Hassle-Free",
                desc: "Quick and simplified process with minimal stress for applicants.",
              },
              {
                title: "End-to-End Guidance",
                desc: "From application submission to approval, we are with you at every step.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  <span className="text-red-500">{item.title}</span>
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 text-center bg-gradient-to-r from-red-900 via-black to-gray-900">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Plan Your Next Trip with Ease
        </motion.h2>
        <motion.p
          className="mb-6 text-lg text-gray-300"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          Contact us today for expert assistance in securing your visitor visa.
        </motion.p>
        <motion.button
          onClick={() => navigate("/contact")}
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
        >
          Get Free Consultation
        </motion.button>
      </section>
    </div>
  );
};

export default VisitorVisa;
