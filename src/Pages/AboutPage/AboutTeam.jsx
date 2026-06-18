import React from "react";
import { motion } from "framer-motion";

// images
import team1 from "../../assets/hero/team1.png";
import team2 from "../../assets/hero/team2.png";
import team3 from "../../assets/hero/team3.png";
import team4 from "../../assets/hero/team4.png";
import team5 from "../../assets/hero/team5.png";
import team6 from "../../assets/hero/team6.png";
import team7 from "../../assets/hero/team7.png";
import team8 from "../../assets/hero/team8.png";
import team9 from "../../assets/hero/team9.png";

const team = [
  {
    name: "Harman",
    role: "Founder & Managing Director",
    desc: "Driven by integrity, excellence, and client success.",
    img: team1,
  },
  {
    name: "Ardaman",
    role: "Immigration Documentation Specialist",
    desc: "Ensuring accuracy and efficiency in every application.",
    img: team2,
  },
  {
    name: "Arjinder",
    role: "Case Processing Specialist",
    desc: "Supporting clients with precision and care.",
    img: team3,
  },
  {
    name: "Harveen",
    role: "Client Documentation Coordinator",
    desc: "Maintaining structured and reliable case records.",
    img: team4,
  },
  {
    name: "Maphy",
    role: "Marketing & Client Relations",
    desc: "Building strong client relationships globally.",
    img: team5,
  },
  {
    name: "Navneet",
    role: "Business Development Executive",
    desc: "Connecting clients with trusted immigration solutions.",
    img: team6,
  },
  {
    name: "Ahmed",
    role: "Finance & Accounts Officer",
    desc: "Ensuring financial transparency and accuracy.",
    img: team7,
  },
  {
    name: "Mariyam",
    role: "Immigration Case Coordinator",
    desc: "Managing client files with detail and structure.",
    img: team8,
  },
  {
    name: "Anureet",
    role: "Accounts & Admin Coordinator",
    desc: "Supporting smooth administrative operations.",
    img: team9,
  },
];

const AboutTeam = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* Background Accent (MATCH ABOUT COMPANY) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER (EXACT STYLE LIKE ABOUT COMPANY) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red-500 font-semibold uppercase tracking-wide">
            Meet Our Experts
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Professional Immigration <br />
            <span className="text-white">
              Leadership Team
            </span>
          </h2>
        </motion.div>

        {/* GRID (same clean system vibe as leadership HTML) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >

              {/* CIRCLE IMAGE (FIX FACE CUT ISSUE) */}
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-800 mb-6 border-2 border-gray-700">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>

              {/* NAME (MATCH DESIGN SYSTEM) */}
              <h4 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h4>

              {/* ROLE (RED ACCENT LIKE ABOUT COMPANY) */}
              <span className="text-red-500 text-sm uppercase tracking-wider font-semibold mb-4">
                {member.role}
              </span>

              {/* DIVIDER + DESCRIPTION (GRAY SYSTEM LIKE ABOUT COMPANY TEXT) */}
              <div className="w-full border-t border-gray-700 pt-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
