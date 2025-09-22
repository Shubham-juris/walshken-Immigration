import React from "react";
import { motion } from "framer-motion";
import Studentvisa from "../../assets/hero/studentVisa.webp";
import BusinessVisa from "../../assets/hero/BusinessVisa.webp";
import WorkVisa from "../../assets/hero/WorkVisa.webp";
import TouristVisa from "../../assets/hero/TouristVisa.webp";

const services = [
  {
    title: "Business Visa",
    description:
      "We assist entrepreneurs and investors in obtaining business visas to explore global opportunities. Our experts help with legal documentation, eligibility assessment, and embassy interview preparation.",
    image: BusinessVisa,
  },
  {
    title: "Student Visa",
    description:
      "Get complete support for your dream of studying abroad. From university selection to visa filing, we help students at every step to secure admissions and approvals with confidence.",
    image: Studentvisa,
  },
  {
    title: "Work Visa",
    description:
      "We guide skilled professionals in obtaining work visas for countries like Canada, UK, Australia, and more. Our team supports job matching, application paperwork, and embassy processes.",
    image: WorkVisa,
  },
  {
    title: "Tourist Visa",
    description:
      "Planning to travel abroad? Our Tourist Visa services ensure you have all documents ready and assist in smooth visa filing, so you can focus on enjoying your journey.",
    image: TouristVisa,
  },
];

const AboutServices = () => {
  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.4)_0%,transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-red-500 font-semibold text-sm uppercase mb-2 tracking-wide"
          >
            Services We Provide
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-12"
          >
            <span className="text-white">Explore Our</span>{" "}
            <span className="text-red-500">Visa, Citizenship</span>{" "}
            <br />
            <span className="text-white"> & Immigration </span>
            <span className="text-red-500">Services</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 w-32 bg-red-500 mx-auto mt-3 rounded-full"
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    <span className="text-white">{service.title.split(" ")[0]}</span>{" "}
                    <span className="text-red-500">
                      {service.title.split(" ")[1] || ""}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </div>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mt-6 border-2 border-red-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.4)_0%,transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-white">Most Trusted</span>{" "}
              <span className="text-red-500">Walshken Immigration</span>{" "}
              <br />
              <span className="text-white">Service</span>{" "}
              <span className="text-red-500">Provider</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-1 w-40 bg-red-500 mt-4 rounded-full"
              />
            </h2>
            <p className="text-base text-gray-300 max-w-md">
              With 6+ years of experience, we have successfully helped thousands
              of individuals and families obtain visas, work permits, and
              residency around the world.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {[
              { icon: "🌍", value: "35+", label: "Countries Represented" },
              { icon: "🎓", value: "25K+", label: "Successful Visas Delivered" },
              { icon: "✅", value: "99%", label: "Approval Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center text-center py-6 px-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl"
              >
                <div className="bg-white text-red-600 rounded-full p-5 mb-4 text-2xl font-bold shadow-md">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold">
                  <span className="text-white">{stat.value}</span>
                </h3>
                <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutServices;
