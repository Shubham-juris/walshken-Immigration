import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ImmigrationCareerPathway = () => {
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
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>
        <motion.div
          className="max-w-4xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-4">
            Professional Development & Training
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Building a Career in <br />
            <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Canadian Immigration Consulting
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Understand how professional practitioners operate, discover the path to becoming a licensed consultant, and gain practical shadowing experience with our team.
          </p>
          <div className="h-[2px] w-24 bg-red-600 mx-auto mb-8"></div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-12">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
            Connecting Theory to Actual Practice
          </h2>
          <p className="text-gray-300 leading-relaxed text-base max-w-4xl mx-auto mb-6">
            For individuals who are new to Canada or exploring a career in immigration, entering the system can seem challenging. While educational courses teach the regulatory frameworks, understanding the day-to-day realities of consulting is where genuine professional readiness is built.
          </p>
          <p className="text-gray-300 leading-relaxed text-base max-w-4xl mx-auto">
            At Walshken Immigration, we believe in opening our doors to aspiring practitioners. We offer structured opportunities to observe how professional consultants work, manage clients, and process files in a compliant, real-world setting.
          </p>
        </motion.div>
      </section>

      {/* Section 1: How to Become an RCIC */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">The Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            How to Become a Regulated Consultant (RCIC)
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto mt-4">
            If you are a newcomer to Canada or looking to change careers, these are the primary steps you must take to enter the field of immigration consulting:
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "Step 1",
              title: "Academic Prerequisite",
              desc: "Complete an accredited Graduate Diploma in Canadian Immigration Education through an authorized university pathway."
            },
            {
              step: "Step 2",
              title: "Language Standard",
              desc: "Achieve the required score on an approved English or French language assessment (such as IELTS or CELPIP) to verify communication competencies."
            },
            {
              step: "Step 3",
              title: "Licensing Examination",
              desc: "Successfully write and pass the Entry-to-Practice Exam administered by the College of Immigration and Citizenship Consultants (CICC)."
            },
            {
              step: "Step 4",
              title: "RCIC Licensing",
              desc: "Acquire your active license in good standing, obtain professional liability insurance, and establish your regulatory practice."
            }
          ].map((milestone, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-950/60 p-6 rounded-xl border border-red-950/20 text-left relative flex flex-col justify-between hover:border-red-500/30 transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx}
            >
              <div>
                <div className="text-sm font-bold text-red-500 mb-3 uppercase tracking-widest">{milestone.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            For more details on approved educational programs or exam timelines, consult the official portal of the{" "}
           College of Immigration and Citizenship Consultants (CICC)
          </p>
        </div>
      </section>

      {/* Section 2: Practical Shadowing & Volunteering */}
      <section className="bg-black/40 py-20 px-6 md:px-12 lg:px-20 border-t border-b border-red-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Details */}
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">Supervised Exposure</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
                Observe & Learn: Our Volunteer Shadowing Program
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passing licensing exams demonstrates your theoretical knowledge, but real practice is learned on the ground. We provide a structured environment where aspiring consultants can volunteer, observe our workflow, and gain essential hands-on insight.
              </p>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✔</span>
                  <p><strong>Professional Shadowing:</strong> Spend time alongside licensed consultants and shadow actual client intakes to understand assessment procedures.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✔</span>
                  <p><strong>Administrative & Case Support:</strong> Observe the preparation of case files, learn compliance organization, and draft mock case-notes for internal evaluation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✔</span>
                  <p><strong>Direct RCIC Supervision:</strong> All volunteering tasks are supervised by a licensed RCIC, ensuring complete compliance with regulatory standards under IRPA s.91(2).</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Side Card */}
            <motion.div
              className="lg:col-span-5 bg-gradient-to-br from-red-950/20 to-black p-8 rounded-2xl border border-red-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">Practice Ready</span>
              <h4 className="text-lg font-bold text-white mb-4">Gaining Practical Confidence</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                "Aspiring practitioners frequently tell us that although they passed their entry exams, they felt unprepared to manage their first case. By shadowing active consultants, you see exactly how the job is performed day-to-day."
              </p>
              <p className="text-xs text-gray-400">
                — Walshken Immigration Consulting Team
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action / Volunteer Application */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/20 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Apply to Shadow Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Are you currently enrolled in an immigration diploma, newly licensed, or simply looking to understand the day-to-day operations of an active consulting practice? 
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-10">
            We regularly welcome volunteers to shadow our licensed RCICs and gain invaluable practical experience in our Calgary or Surrey offices.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
          >
            Submit a Volunteer Inquiry
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ImmigrationCareerPathway;
