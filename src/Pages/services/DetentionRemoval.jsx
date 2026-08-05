import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DetentionRemoval = () => {
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
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-red-500"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-red-500">
              Urgent Regulatory Defense & Appeals
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Detention & Removal Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Secure urgent, authorized representation if you or a family member are 
            facing immigration detention, removal orders, or deportation.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            If you are facing an active removal order or are currently held in detention, 
            the timeline to secure professional consulting assistance is extremely short. 
            We act swiftly to organize hearing defenses and coordinate every available regulatory avenue.
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
              Urgent <span className="text-red-500">Detention & Removal Support</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Immigration authorities may detain foreign nationals or permanent residents 
              for identity verification, flight risk concerns, or public safety issues. Similarly, 
              removal orders (including departure, exclusion, and deportation orders) can be issued 
              following rejected asylum claims, non-compliance, or residency failures.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              During these high-pressure enforcement events, knowing your regulatory rights is 
              essential. Our authorized consulting team specializes in representing clients directly 
              before the Immigration Division (ID) and the Immigration Appeal Division (IAD) 
              of the Immigration and Refugee Board (IRB).
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              In detention and removal cases, every hour counts. We prioritize urgent file mobilization, 
              bondsman coordination, and hearing preparation to offer robust defense representation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1505664194779-8bebcb95c557?auto=format&fit=crop&w=900&q=80"
              alt="Urgent Immigration Defense"
              className="rounded-2xl shadow-2xl border border-red-950 w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-2xl border border-red-800/20">
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                Detention Reviews: Presenting a Viable Release Plan
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                By law, when the Canada Border Services Agency (CBSA) detains an individual, a formal 
                Detention Review must occur within 48 hours. Subsequent reviews take place at the 7-day 
                and 30-day marks.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                To secure release, you must present a highly structured, viable release plan to the 
                Immigration Division Member. This plan typically requires naming a suitable guarantor (bondsperson), 
                establishing a cash or supervisory bond, and agreeing to strict compliance conditions.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                At **Walshken Immigration**, we work urgently with families to identify suitable guarantors, 
                structure sound supervisory plans, and present clear, persuasive arguments at your IRB hearing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-red-800/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Responding to Removal Orders & Federal Court Stays
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                If you have been issued a removal order, it is imperative to address its regulatory consequences. 
                Certain orders carry a lifetime ban unless an Authorization to Return to Canada (ARC) is obtained.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                To challenge a removal order, we identify relevant appeal pathways through the Immigration Appeal 
                Division (IAD) for eligible permanent residents or sponsors.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Litigation Support</span>
                <p className="text-xs text-gray-300">
                  Where urgent Federal Court stays or Applications for Leave are required, our consulting team coordinates directly with trusted, specialized litigation counsel to manage your case seamlessly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Detention & Removal Services <span className="text-red-500">We Handle</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Immigration Detention Reviews",
                desc: "Representing detainees before the Immigration Division (IRB) to advocate for release under viable, structured bond and supervision plans.",
              },
              {
                title: "IAD Removal Order Appeals",
                desc: "Filing and arguing formal removal appeals before the Immigration Appeal Division for permanent residents and sponsored sponsors.",
              },
              {
                title: "Admissibility Hearing Support",
                desc: "Representing clients facing formal admissibility allegations due to security, criminality, or misrepresentation concerns.",
              },
              {
                title: "Authorizations to Return (ARC)",
                desc: "Drafting highly structured, comprehensive ARC applications for individuals seeking to re-enter Canada after past deportations.",
              },
              {
                title: "Pre-Removal Risk Assessments",
                desc: "Compiling exhaustive PRRA submissions as a final protection evaluation prior to scheduled removal orders.",
              },
              {
                title: "Judicial Review Documentation",
                desc: "Compiling the essential administrative records and coordinating with litigation counsel for Federal Court review filings.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl shadow-lg border border-red-800/40 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold text-red-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Step Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Immediate Response <span className="text-red-500">Milestones</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Rapid Profile Intake",
                desc: "We perform an immediate, exhaustive analysis of your CBSA arrest papers, removal order documents, and underlying history.",
              },
              {
                step: "Step 2: Strategy & Guarantor Setup",
                desc: "We organize critical supervisory plans, compile financial bond proofs, prepare your guarantors, and draft formal submissions.",
              },
              {
                step: "Step 3: IRB Board Representation",
                desc: "We represent you directly before the IRB tribunal member during your review, advocating thoroughly for your release or stay.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-red-950 to-black border border-red-900/20 rounded-xl text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.step}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-red-950/20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Why <span className="text-red-500">Choose Walshken Immigration?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Authorized IRB Representation",
                desc: "As Regulated Canadian Immigration Consultants, we possess full authority to represent and argue your case before the IRB tribunal.",
              },
              {
                title: "Urgent Mobilization Priority",
                desc: "We prioritize enforcement files, working outside standard business hours to meet the tight 48-hour detention review timelines.",
              },
              {
                title: "Meticulous Supervision Plans",
                desc: "We construct rigorous release packages that address flight risk concerns, significantly increasing chances of board approval.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-red-800/40 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <h3 className="text-lg font-bold text-red-500 mb-3 text-left">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-t from-red-950/20 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Secure Urgent Representation Support Now
          </h2>
          <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
            Immigration enforcement actions leave no room for delay. Contact our consulting team immediately to coordinate an urgent, priority review of your active detention or removal file.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
          >
            Initiate Urgent Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default DetentionRemoval;
