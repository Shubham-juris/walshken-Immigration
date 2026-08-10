import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const TheLandingPoint = () => {
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
          className="max-w-5xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-4">
            Calgary, AB • Investor & Partner Overview
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              THE LANDING POINT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Bridging international immigration practice to Canadian consulting excellence.
          </p>
          <div className="h-[2px] w-24 bg-red-600 mx-auto mb-8"></div>
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Powered by <span className="text-white font-semibold">Walshken Immigration</span> — Founding Partner
          </p>
        </motion.div>
      </section>

      {/* The Problem & The Result */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Problem details */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Deep expertise. No way to prove it here.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Internationally trained immigration practitioners arrive in Canada with years 
              of real-world practice — and hit a wall that has nothing to do with their true capability.
            </p>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "No Canadian Casework",
                  desc: "Licensing exams test theoretical knowledge, not practical, on-the-ground experience with active Canadian files."
                },
                {
                  num: "2",
                  title: "No Local Network",
                  desc: "Career-defining opportunities in this specialized field move primarily through direct relationships, not cold job boards."
                },
                {
                  num: "3",
                  title: "No Easy Way to Prove It",
                  desc: "A foreign track record does not translate to instant credibility with Canadian consulting firms or local clients."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-950 border border-red-800 text-red-500 flex items-center justify-center font-bold flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Result Card */}
          <motion.div
            className="lg:col-span-5 bg-gradient-to-br from-red-950/20 to-black p-8 rounded-2xl border border-red-850"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">The Result</span>
            <p className="text-xl font-medium text-white italic leading-relaxed mb-6">
              "A pool of highly qualified professionals, sitting outside the very system their expertise could strengthen."
            </p>
            <div className="h-[1px] w-full bg-red-950/40 my-6"></div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Meanwhile, Canada is licensing more RCICs than ever — and needs more of them to be genuinely practice-ready from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Now: Timeline */}
      <section className="bg-black/40 py-20 px-6 md:px-12 lg:px-20 border-t border-b border-red-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">Why Now</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              The regulatory door just opened wider.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                year: "2021",
                title: "CICC Established",
                desc: "The College of Immigration and Citizenship Consultants becomes the national regulator, replacing the legacy ICCRC system."
              },
              {
                year: "2023",
                title: "Barrier Removed",
                desc: "CICC drops the requirement for Canadian citizenship or permanent residence to write the licensing exam — opening pathways earlier for internationally trained specialists."
              },
              {
                year: "2026",
                title: "Enforcement Rises",
                desc: "Sweeping new regulatory parameters expand enforcement against unlicensed practitioners, significantly raising demand for verifiably licensed, trained professionals."
              }
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-950/50 p-6 rounded-xl border border-red-950/20 text-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
              >
                <div className="text-3xl font-extrabold text-red-500 mb-2">{milestone.year}</div>
                <h4 className="text-lg font-bold text-white mb-3">{milestone.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-red-950/20 border border-red-900/30 p-6 rounded-xl text-center max-w-4xl mx-auto">
            <p className="text-sm text-gray-300">
              Canada's **2026 Immigration Levels Plan** targets roughly **395,000 new permanent residents** — sustaining a steady, critical demand for professional immigration expertise on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-4">
            The Landing Point
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A supervised, internal-only program at **Walshken Immigration** — providing real casework, 
            peer mentorship, and an active professional network under one licensed, compliant roof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              num: "1",
              title: "Experience",
              desc: "Supervised client-consultation shadowing, case-note drafting, and document preparation for review — always structured directly under a licensed RCIC."
            },
            {
              num: "2",
              title: "Mentorship",
              desc: "Structured, peer-level guidance that respects the practice years participants already have — avoiding repetitive junior-intern training structures."
            },
            {
              num: "3",
              title: "Network",
              desc: "A recurring webinar series, a dedicated alumni circle, and joint guest sessions organized alongside partner organizations, active from day one."
            }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-red-950/40 text-left hover:border-red-500/50 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx}
            >
              <div className="text-sm font-bold text-red-500 mb-4 uppercase tracking-widest">Pillar 0{pillar.num}</div>
              <h4 className="text-xl font-bold text-white mb-3">{pillar.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pathway Diagram */}
        <div className="bg-gray-950/40 p-8 rounded-2xl border border-red-950/20 text-center max-w-5xl mx-auto">
          <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-6">The Pathway We Bridge</span>
          <h4 className="text-xl font-bold text-white mb-8">Licensed is not the same as practice-ready.</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            {[
              { label: "Accredited Diploma" },
              { label: "CICC Entry-to-Practice Exam" },
              { label: "Licensed RCIC" },
              { label: "The Landing Point", highlight: true },
              { label: "Practice-Ready RCIC", dark: true }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className={`p-4 rounded-lg text-xs font-semibold ${
                  step.highlight 
                    ? "bg-red-600 text-white shadow-lg border border-red-500" 
                    : step.dark 
                    ? "bg-gradient-to-r from-red-950 to-black text-white border border-red-900/40" 
                    : "bg-gray-900 text-gray-300 border border-gray-800"
                }`}>
                  {step.label}
                </div>
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-8 leading-relaxed max-w-3xl mx-auto">
            A diploma and licensing exam prove academic knowledge. **The Landing Point** demonstrates you can practice — closing the exact training gap most internationally trained practitioners are left to resolve alone.
          </p>
        </div>
      </section>

      {/* Program Model & Guardrails */}
      <section className="bg-black/40 py-20 px-6 md:px-12 lg:px-20 border-t border-b border-red-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">Program Model</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Built to add real experience — never to replace paid staff.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-950/80 p-6 rounded-xl border border-red-950/20">
              <h4 className="text-lg font-bold text-red-500 mb-2">Cadence</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Organized as structured, quarterly cohorts with internal-only placement facilitated inside our firm.
              </p>
            </div>
            <div className="bg-gray-950/80 p-6 rounded-xl border border-red-950/20">
              <h4 className="text-lg font-bold text-red-500 mb-2">Guardrails</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Participants are supernumerary to our active payroll team. All regulated consulting work is performed directly under the oversight of a licensed RCIC, per IRPA s.91(2).
              </p>
            </div>
            <div className="bg-gray-950/80 p-6 rounded-xl border border-red-950/20">
              <h4 className="text-lg font-bold text-red-500 mb-2">Experience Layer</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Direct engagement with client-consultation shadowing, narrative case-note drafting, and complete document preparation for review.
              </p>
            </div>
            <div className="bg-gray-950/80 p-6 rounded-xl border border-red-950/20">
              <h4 className="text-lg font-bold text-red-500 mb-2">Network Layer</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Webinar discussions, alumni groups, and specialized guest panels coordinated directly with active partner organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">Partner Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            One host firm. A network around it.
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { role: "Founding Partner", name: "Walshken Immigration", desc: "The only host firm — all supervised case-file drafting and client shadowing happens here." },
            { role: "Academic Partners", name: "Queen's University (GDipICL) / Université de Montréal (D.E.S.S.)", desc: "Licensing-track diploma referrals and continuous administrative co-programming." },
            { role: "Financial Partner", name: "Windmill Microlending", desc: "Up to $15,000 in low-interest loans for licensing costs, plus dedicated coaching and mentorship." },
            { role: "Referral Partners", name: "CRIEC • Centre for Newcomers • Immigrant Champions of Canada", desc: "Sourcing candidate pipelines, establishing local credibility, and assisting with co-marketing." },
            { role: "Corporate Sponsors", name: "Consulting Firms & Banks with newcomer-focused CSR budgets", desc: "Providing funding resources only — zero participant hosting obligations." }
          ].map((partner, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-4 p-5 bg-gray-950/30 rounded-lg border border-red-950/10 items-center">
              <div className="md:col-span-3 text-red-500 font-bold text-sm uppercase tracking-wider">{partner.role}</div>
              <div className="md:col-span-4 text-white font-semibold text-sm">{partner.name}</div>
              <div className="md:col-span-5 text-gray-400 text-xs leading-relaxed">{partner.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Funding Model */}
      <section className="bg-black/40 py-20 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">Funding Model</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Two lanes: the program, and the people in it.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-xl border border-red-950/30">
              <h4 className="text-lg font-bold text-red-500 uppercase tracking-wider mb-2">Lane 1 — The Program</h4>
              <p className="text-xs text-gray-400 mb-6">Funds Walshken Immigration's cost of running The Landing Point.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-red-500">•</span> Canada-Alberta Productivity Grant (CAPG) — training cost-share</li>
                <li className="flex gap-2"><span className="text-red-500">•</span> Corporate sponsors — funding support</li>
                <li className="flex gap-2"><span className="text-red-500">•</span> “Sponsor a Landing” micro-donations</li>
                <li className="flex gap-2"><span className="text-red-500">•</span> Alumni give-back once licensed and earning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-xl border border-red-950/30">
              <h4 className="text-lg font-bold text-red-500 uppercase tracking-wider mb-2">Lane 2 — The Participant</h4>
              <p className="text-xs text-gray-400 mb-6">Funds each participant's individual regulatory licensing costs.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-red-500">•</span> Windmill Microlending — up to $15,000 for tuition, exam fees, and living allowance</li>
                <li className="flex gap-2"><span className="text-red-500">•</span> Student Work Placement Program (SWPP) — wage subsidy while formally enrolled</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Year One Targets & Success Metrics */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">Year One Targets</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            What success looks like early.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "8-12", label: "Participants in Cohort 1" },
            { value: "3+", label: "Active Partner Organizations" },
            { value: "100%", label: "Regulated Work Under RCIC Supervision" },
            { value: "1", label: "Nonprofit Funding Partnership Signed" }
          ].map((target, idx) => (
            <div key={idx} className="p-6 bg-gray-950/40 rounded-xl border border-red-950/10">
              <div className="text-4xl font-extrabold text-red-500 mb-2">{target.value}</div>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">{target.label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-gray-400 max-w-4xl mx-auto mt-12 leading-relaxed">
          Tracked from Cohort 1 onward: participants, licensing/hiring rates, active partners, and cumulative supervised hours — building toward the same public trust metrics that established programs use to attract funding.
        </p>
      </section>

      {/* The Ask */}
      <section className="bg-black/40 py-20 px-6 md:px-12 lg:px-20 border-t border-red-950/40">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-red-500 font-semibold text-xs uppercase tracking-wider block mb-2">The Ask</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-12">
            Seed funding to launch Cohort 1.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Program Operations", desc: "Curriculum development, supervision capacity, and cohort administration." },
              { title: "Participant Support Fund", desc: "A bridge fund alongside Windmill Microlending for costs Lane 2 doesn't fully cover." },
              { title: "Partnerships & Outreach", desc: "Executing the nonprofit outreach roadmap and formalizing key agreements." }
            ].map((ask, idx) => (
              <div key={idx} className="bg-gray-950 p-6 rounded-xl border border-red-950/20 text-left">
                <h4 className="text-base font-bold text-red-500 mb-3 uppercase tracking-wider">{ask.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{ask.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Call to Action */}
      <section className="py-24 text-center bg-gradient-to-t from-red-950/20 to-transparent border-t border-red-950/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Let's build the door.
          </h2>
          <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
            Help us bridge international expertise to Canadian immigration consulting excellence.
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
            The Landing Point • Powered by Walshken Immigration • Calgary, AB
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-0.5"
          >
            Contact to Partner / Sponsor
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default TheLandingPoint;
