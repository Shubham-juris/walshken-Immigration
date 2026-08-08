import React from "react";
import { useNavigate , Link} from "react-router-dom";
import { motion } from "framer-motion";

const RefugeeClaims = () => {
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
              Protection & Humanitarian Pathways
            </span>
            <span className="h-[1px] w-8 bg-red-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Refugee Claims & Protection
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Navigate the Canadian refugee protection system with dedicated, professional 
            consulting support during one of the most critical times of your life.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            A refugee claim is not merely a set of forms; it directly concerns your safety, 
            well-being, and future. We assist you in presenting your narrative accurately and 
            completely to the Immigration and Refugee Board of Canada (IRB).
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
              Understanding Refugee <span className="text-red-500">Protection in Canada</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In Canada, you have the right to seek professional consulting representation to assist 
              you with your refugee claim. Because the refugee determination process is highly structured, 
              carries strict procedural timelines, and often takes considerable time to finalize, 
              having professional advisors is strongly recommended.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The application journey is complex and demands thorough preparation, patience, and 
              accurate decision-making. We stand by you to offer clear regulatory strategy, 
              patience, and detailed attention to your personal file. If your claim encounters complications, 
              we also provide specialized <Link to="/inadmissibility" className="text-red-500 hover:underline">Inadmissibility Services</Link> and represent 
              clients facing <Link to="/detention-removal" className="text-red-500 hover:underline">Detention & Removal</Link> challenges.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-red-700 pl-4 py-1 italic text-sm">
              We help make sure your story is communicated truthfully, comprehensively, and 
              with absolute administrative precision, avoiding clerical errors that could delay 
              your protection hearing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
              alt="Refugee Support"
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
                What Our Consulting Representation Ensures
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Navigating a claim before the Refugee Protection Division (RPD) requires compiling 
                objective country condition documentation alongside your personal narrative. We provide 
                comprehensive support to ensure:
              </p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1.5">•</span>
                  <span>Personal documents are securely collected, verified, and organized systematically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1.5">•</span>
                  <span>Basis of Claim (BOC) narratives are drafted with absolute care, aligning with objective facts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1.5">•</span>
                  <span>Relevant, verified international country conditions are thoroughly researched and presented.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1.5">•</span>
                  <span>All immigration portals, forms, and updates are managed within strict regulatory deadlines.</span>
                </li>
              </ul>
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
                Immediate Action block: Arrival in Canada
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                If you have recently arrived in Canada and intend to seek asylum or refugee protection, 
                it is critical to understand the immediate administrative steps. 
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                How and where you make your claim, what documentation must be produced, and when your initial 
                eligibility interview will take place are key elements to organize as early as possible.
              </p>
              <div className="bg-red-950/30 border border-red-800/20 p-4 rounded-lg">
                <span className="font-semibold text-red-400 block text-xs tracking-widest uppercase mb-1">Consult Early</span>
                <p className="text-xs text-gray-300">
                  Securing professional advisory support early in your arrival helps ensure your initial declarations are consistent and complete.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Refugee Program Sub-categories */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-black/40">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Refugee Services <span className="text-red-500">We Support</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Basis of Claim (BOC) Preparation",
                desc: "Assistance with structuring and drafting your primary narrative, which serves as the core foundation for your entire claim.",
              },
              {
                title: "RPD Hearing Prep",
                desc: "Complete simulation and structural preparation for your hearing before the Refugee Protection Division.",
              },
              {
                title: "RAD Appeal Support",
                desc: "Advising and preparing administrative submissions to the Refugee Appeal Division if your primary claim is rejected.",
              },
              {
                title: "Humanitarian & Compassionate (H&C)",
                desc: "Formulating detailed residency applications based on domestic establishment and best interests of affected children.",
              },
              {
                title: "Pre-Removal Risk Assessments",
                desc: "Guiding you through PRRA submissions to demonstrate risk of persecution if returned to your home country.",
              },
              {
                title: "Resettlement Sponsorships",
                desc: "Assisting family groups and organizations with private sponsorships of refugees from outside Canadian borders.",
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
            Refugee Claim <span className="text-red-500">Milestones</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "Step 1: Intake & BOC Strategy",
                desc: "We perform a thorough review of your narrative, highlight core protection grounds, and draft your Basis of Claim form.",
              },
              {
                step: "Step 2: Document Collection & Research",
                desc: "Gathering supporting proof of identity, incident records, medical assessments, and relevant objective country data.",
              },
              {
                step: "Step 3: Board Representation Support",
                desc: "Comprehensive hearing preparation and guidance throughout the process to ensure your claim is communicated clearly.",
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
                title: "Thorough Compliance & Care",
                desc: "We approach your protection case with high attention to detail, verifying your supporting proof meticulously.",
              },
              {
                title: "Objective Policy Focus",
                desc: "We verify your narrative directly against domestic laws and current international country guidelines.",
              },
              {
                title: "Dedicated Client Communication",
                desc: "We prioritize regular updates and clarify every milestone of your claim with clear, supportive language.",
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
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Secure Experienced Protection Guidance
          </h2>
          <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
            Refugee claim timelines are rigid and demand structured preparation from day one. Contact our consulting team today to coordinate an initial assessment of your file.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
          >
            Book Your Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default RefugeeClaims;
