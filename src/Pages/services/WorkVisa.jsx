import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WorkVisa = () => {
  const navigate = useNavigate();

  // Framer Motion Variants
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
            Work Visa Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Unlock global career opportunities with our comprehensive work visa solutions. 
            From skill assessment to job placement, we guide you through every step of your international career journey.
          </motion.p>
        </div>
      </section>

      {/* About Work Visa */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              What is a Work Visa?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Work Visa allows individuals to live and work in a foreign
              country legally. Depending on the visa type, you may be sponsored
              by an employer, apply independently, or qualify for skilled
              migration programs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We provide end-to-end support including skill assessment, document preparation, 
              interview training, and job placement assistance to ensure your successful transition 
              to working abroad.
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
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=80"
              alt="Work Abroad"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Comprehensive Work Visa Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Skill Assessment & WES Services",
                desc: "We assist with educational credential assessment (WES, IQAS, etc.) required for visa applications.",
                icon: "📋"
              },
              {
                title: "Language Proficiency Training",
                desc: "IELTS/TOEFL preparation classes to help you achieve the required scores for visa eligibility.",
                icon: "🌐"
              },
              {
                title: "Candidate Screening & Profiling",
                desc: "Comprehensive evaluation of your skills, experience, and qualifications for optimal job matching.",
                icon: "🔍"
              },
              {
                title: "Skill Enhancement Training",
                desc: "Specialized training programs to bridge skill gaps and meet international employer requirements.",
                icon: "📚"
              },
              {
                title: "Interview Preparation",
                desc: "Mock interviews and coaching to help you excel in international job interviews.",
                icon: "💼"
              },
              {
                title: "Job Placement Assistance",
                desc: "Access to our network of international employers and recruitment partners.",
                icon: "🤝"
              },
            ].map((service, index) => (
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
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Recruitment Process with Third-Party Supervision
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                How Our Supervised Recruitment Works
              </h3>
              <p className="text-gray-300 mb-6">
                We partner with reputable recruitment agencies and employers worldwide, 
                maintaining oversight throughout the process to ensure transparency and 
                protect your interests.
              </p>
              <ul className="space-y-4 text-gray-300">
                {[
                  "We identify legitimate job opportunities with verified employers",
                  "Our team screens and shortlists candidates based on employer requirements",
                  "We facilitate communication between candidates and employers",
                  "Provide continuous support during interview and selection process",
                  "Ensure compliance with all immigration and employment regulations",
                  "Monitor the entire process until successful placement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl shadow"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Benefits of Our Supervised Approach
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Reduced Fraud Risk",
                    desc: "We vet all employers and opportunities to prevent scams"
                  },
                  {
                    title: "Better Job Matching",
                    desc: "Our expertise ensures alignment between your skills and job requirements"
                  },
                  {
                    title: "Continuous Support",
                    desc: "We remain involved throughout your employment transition"
                  },
                  {
                    title: "Legal Compliance",
                    desc: "All processes adhere to international employment and immigration laws"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-1">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Benefits of a Work Visa
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Opportunities",
                desc: "Expand your career in top international markets.",
              },
              {
                title: "Higher Income",
                desc: "Earn competitive salaries abroad with better perks.",
              },
              {
                title: "Permanent Residency Path",
                desc: "Many work visas lead to permanent residency options.",
              },
              {
                title: "Skill Development",
                desc: "Gain international exposure and professional growth.",
              },
              {
                title: "Family Sponsorship",
                desc: "Bring your spouse and children on dependent visas.",
              },
              {
                title: "Networking",
                desc: "Build professional connections worldwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-red-800"
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
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-black to-red-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-8 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Visa Eligibility
          </motion.h2>
          <ul className="grid gap-6 md:grid-cols-2 text-gray-300">
            {[
              "✔ Valid job offer or employer sponsorship",
              "✔ Educational qualifications or relevant work experience",
              "✔ Proof of financial stability",
              "✔ Health and character certificates",
              "✔ Language proficiency (IELTS/TOEFL where required)",
              "✔ Skill assessment report (WES or equivalent)",
              "✔ Relevant professional certifications/licenses",
              "✔ Meeting points-based system requirements (where applicable)",
            ].map((req, index) => (
              <motion.li
                key={index}
                className="p-5 bg-gray-800 rounded-xl shadow"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                {req}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Visa Application Process
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                step: "Step 1: Consultation & Assessment",
                desc: "We evaluate your qualifications and suggest the best visa options.",
              },
              {
                step: "Step 2: Documentation & Skill Training",
                desc: "Prepare necessary paperwork and enhance skills for better opportunities.",
              },
              {
                step: "Step 3: Job Matching & Interviews",
                desc: "Connect with employers and prepare for interviews with our coaching.",
              },
              {
                step: "Step 4: Visa Submission & Relocation",
                desc: "Submit your application and receive support for relocation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-red-800"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <div className="text-white bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
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
          <motion.h2 
            className="text-3xl font-bold text-red-500 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "End-to-End Solutions",
                desc: "From skill assessment to relocation, we handle everything for your work visa journey.",
              },
              {
                title: "Industry Partnerships",
                desc: "Strong network with employers and recruitment agencies worldwide.",
              },
              {
                title: "Proven Success Rate",
                desc: "Thousands of successful placements with high client satisfaction.",
              },
              {
                title: "Personalized Approach",
                desc: "Customized strategies based on your qualifications and career goals.",
              },
              {
                title: "Transparent Processes",
                desc: "Clear communication and regular updates throughout your application.",
              },
              {
                title: "Post-Arrival Support",
                desc: "Assistance with accommodation, banking, and settlement in your new country.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-red-800 hover:border-red-500 transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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
          Begin Your International Career Journey Today
        </motion.h2>
        <motion.p
          className="mb-6 text-lg text-gray-300"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          Contact us now to explore work visa opportunities and build your
          future overseas with our comprehensive support services.
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

export default WorkVisa;