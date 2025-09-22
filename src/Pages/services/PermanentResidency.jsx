import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PermanentResidency = () => {
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

  // Country-wise PR Programs
  const countryPRPrograms = [
    {
      country: "Canada",
      programs: [
        "Express Entry System (FSW, FST, CEC)",
        "Provincial Nominee Program (PNP)",
        "Quebec Skilled Worker Program",
        "Atlantic Immigration Program",
        "Rural and Northern Immigration Pilot",
        "Caregiver Programs"
      ],
      benefits: "Fast processing times, inclusive society, healthcare benefits",
      processingTime: "6-12 months",
      flag: "🇨🇦"
    },
    {
      country: "Australia",
      programs: [
        "Skilled Independent Visa (Subclass 189)",
        "Skilled Nominated Visa (Subclass 190)",
        "Skilled Work Regional Visa (Subclass 491)",
        "Global Talent Visa (Subclass 858)",
        "Employer Nomination Scheme (Subclass 186)"
      ],
      benefits: "High quality of life, strong economy, pathway to citizenship",
      processingTime: "8-15 months",
      flag: "🇦🇺"
    },
    {
      country: "USA",
      programs: [
        "EB-1: Priority Workers",
        "EB-2: Professionals with Advanced Degrees",
        "EB-3: Skilled Workers",
        "EB-4: Special Immigrants",
        "EB-5: Investor Visa",
        "Diversity Visa Lottery"
      ],
      benefits: "Diverse opportunities, high earning potential, family inclusion",
      processingTime: "1-3 years (varies by category)",
      flag: "🇺🇸"
    },
    {
      country: "Germany",
      programs: [
        "EU Blue Card for Highly Skilled Workers",
        "Skilled Immigration Act",
        "IT Specialist Visa",
        "Job Seeker Visa",
        "Freelancer Visa",
        "Family Reunion Visa"
      ],
      benefits: "Strong economy, EU access, excellent social benefits",
      processingTime: "4-8 months",
      flag: "🇩🇪"
    },
    {
      country: "New Zealand",
      programs: [
        "Skilled Migrant Category Resident Visa",
        "Green List Straight to Residence",
        "Work to Residence Visa",
        "Parent Resident Visa",
        "Investor and Entrepreneur Visas"
      ],
      benefits: "Work-life balance, beautiful environment, family-friendly",
      processingTime: "6-12 months",
      flag: "🇳🇿"
    },
    {
      country: "UK",
      programs: [
        "Skilled Worker Visa",
        "Global Talent Visa",
        "Innovator Founder Visa",
        "Scale-up Worker Visa",
        "Family Visas",
        "Ancestry Visa"
      ],
      benefits: "World-class education, healthcare system, cultural diversity",
      processingTime: "3-6 months",
      flag: "🇬🇧"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Permanent Residency (PR) Visa
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Secure your future with Permanent Residency. Live, work, and enjoy
            unlimited opportunities in your dream country.
          </motion.p>
        </div>
      </section>

      {/* About PR */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              Why Apply for Permanent Residency?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Permanent Residency Visa allows you to live, work, and study in
              a country of your choice without time restrictions. It gives you
              access to social benefits, healthcare, and the pathway to
              citizenship.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With PR status, you can secure your family's future, access
              world-class opportunities, and enjoy a better quality of life.
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
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Permanent Residency"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Country-wise PR Programs Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Country-Wise Permanent Residency Programs
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {countryPRPrograms.map((country, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800 hover:border-red-500 transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-semibold text-red-400">
                    {country.country}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Programs:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {country.programs.map((program, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span> {program}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-white font-medium mb-1">Benefits:</h4>
                  <p className="text-gray-300 text-sm">{country.benefits}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-1">Processing Time:</h4>
                  <p className="text-gray-300 text-sm">{country.processingTime}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-10">
            Key Benefits of Permanent Residency
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Live & Work Freely",
                desc: "Freedom to live, work, or study in the country without restrictions.",
              },
              {
                title: "Healthcare Access",
                desc: "Enjoy public healthcare and social security benefits.",
              },
              {
                title: "Pathway to Citizenship",
                desc: "PR is often the first step towards full citizenship.",
              },
              {
                title: "Family Security",
                desc: "Include your spouse and children in your PR application.",
              },
              {
                title: "Education Opportunities",
                desc: "Access top universities and schools at resident tuition fees.",
              },
              {
                title: "Travel Flexibility",
                desc: "Travel in and out of the country freely with PR status.",
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

      {/* Eligibility Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-10">
            Who is Eligible for PR?
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Skilled Professionals",
              "International Students",
              "Business Investors",
              "Family Sponsorship Applicants",
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white">
                  <span className="text-red-500">{category}</span>
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PR Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8 text-red-500">
            Step-by-Step PR Application Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Eligibility Check",
                desc: "We assess your qualifications, work experience, and language skills.",
              },
              {
                step: "Step 2: Documentation",
                desc: "We assist in gathering required documents like proof of funds, ID, and medical tests.",
              },
              {
                step: "Step 3: Application & Approval",
                desc: "Submit your PR application and receive support until approval.",
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
                title: "Expert Guidance",
                desc: "Our experts provide personalized PR strategies for maximum success.",
              },
              {
                title: "High Success Rate",
                desc: "Hundreds of successful PR applications handled by our team.",
              },
              {
                title: "End-to-End Support",
                desc: "From eligibility to approval, we're with you every step of the way.",
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
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Start Your PR Journey Today
        </motion.h2>
        <motion.p
          className="mb-6 text-lg text-gray-300"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          Secure your future with Permanent Residency. Contact us for a free
          consultation and personalized guidance.
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

export default PermanentResidency;