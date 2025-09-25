import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BusinessInvestorVisa = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Business & Investor Visa
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Unlock global opportunities by investing abroad and expanding your
            business internationally.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Why Choose a{" "}
              <span className="text-red-500">Business Investor Visa?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Business or Investor Visa provides individuals and companies the
              opportunity to invest, establish, or expand their businesses in a
              foreign country. This visa opens doors to permanent residency,
              global trade, and new markets.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our expert visa consultants help you navigate the process with
              ease, ensuring compliance with immigration laws while maximizing
              your business potential abroad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
              alt="Business Investor Visa"
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
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Key Benefits of{" "}
            <span className="text-red-500">Business & Investor Visas</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Expansion",
                desc: "Access international markets and grow your business presence globally.",
              },
              {
                title: "Residency Options",
                desc: "Many countries offer permanent residency and citizenship pathways.",
              },
              {
                title: "Tax Advantages",
                desc: "Benefit from favorable tax regimes and business incentives abroad.",
              },
              {
                title: "Family Inclusion",
                desc: "Bring your spouse and children with dependent visa options.",
              },
              {
                title: "Investment Opportunities",
                desc: "Invest in real estate, startups, or government bonds for visa eligibility.",
              },
              {
                title: "Networking & Trade",
                desc: "Expand professional networks and trade partnerships worldwide.",
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
                <h3 className="text-xl font-semibold text-red-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
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
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Our <span className="text-red-500">Application Process</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Consultation",
                desc: "We assess your eligibility and recommend the best visa options for your business goals.",
              },
              {
                step: "Step 2: Documentation",
                desc: "Assistance with preparing financial records, investment proofs, and legal documents.",
              },
              {
                step: "Step 3: Submission",
                desc: "We file your visa application and provide guidance until you receive approval.",
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

      {/* Popular Countries Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Popular Destinations for{" "}
            <span className="text-red-500">Business & Investor Visas</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              "USA",
              "Canada",
              "UK",
              "Australia",
              "Portugal",
              "UAE",
              "Singapore",
              "New Zealand",
            ].map((country, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-lg border border-red-700 hover:bg-red-900 hover:text-white transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-lg font-semibold text-red-500">
                  {country}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Country-wise Programs Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Country-wise <span className="text-red-500">Business Visa Programs</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                country: "USA",
                program: "EB-5 Immigrant Investor Program",
                desc: "Invest $800,000+ in U.S. commercial enterprises to obtain Green Card eligibility.",
              },
              {
                country: "Canada",
                program: "Start-Up Visa & Provincial Nominee Programs",
                desc: "Launch innovative businesses or invest in provincial business streams with PR pathways.",
              },
              {
                country: "UK",
                program: "Innovator Founder Visa",
                desc: "Invest in innovative business ideas with approval from UK endorsing bodies.",
              },
              {
                country: "Australia",
                program: "Business Innovation & Investment Visa (Subclass 188/888)",
                desc: "Multiple streams for investors, entrepreneurs, and significant investors.",
              },
              {
                country: "Portugal",
                program: "Golden Visa",
                desc: "Invest in real estate, funds, or job creation to secure residency in the EU.",
              },
              {
                country: "UAE",
                program: "Investor & Golden Visa",
                desc: "Long-term residency options for entrepreneurs and investors in UAE free zones.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg border border-red-700 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold text-red-500 mb-2">
                  {item.country}
                </h3>
                <p className="text-white font-medium mb-1">{item.program}</p>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Why <span className="text-red-500">Choose Us?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Expert Guidance",
                desc: "Years of experience in immigration and business consultancy.",
              },
              {
                title: "Tailored Solutions",
                desc: "Customized visa plans based on your investment and goals.",
              },
              {
                title: "High Success Rate",
                desc: "Trusted track record with successful visa approvals worldwide.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Ready to{" "}
            <span className="text-red-500">Expand Your Business</span> Globally?
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            Contact our experts today to explore the right Business & Investor
            Visa options for you.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition"
          >
            Get Free Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default BusinessInvestorVisa;
