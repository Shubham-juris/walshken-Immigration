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
    desc: "Driven by a commitment to integrity, excellence, and client success.",
    img: team1,
  },
  {
    name: "Ardaman",
    role: "Immigration Documentation Specialist",
    desc: "Committed to accuracy and efficiency in every application.",
    img: team2,
  },
  {
    name: "Arjinder",
    role: "Case Processing Specialist",
    desc: "Supporting clients with professionalism and care.",
    img: team3,
  },
  {
    name: "Harveen",
    role: "Client Documentation Coordinator",
    desc: "Maintaining organized case records at every stage.",
    img: team4,
  },
  {
    name: "Maphy",
    role: "Marketing & Client Relations Coordinator",
    desc: "Building strong client relationships and trust.",
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
    desc: "Ensuring financial accuracy and transparency.",
    img: team7,
  },
  {
    name: "Mariyam",
    role: "Immigration Case Coordinator",
    desc: "Managing client files with precision and care.",
    img: team8,
  },
  {
    name: "Anureet",
    role: "Accounts & Admin Coordinator",
    desc: "Ensuring smooth administrative operations.",
    img: team9,
  },
];

const AboutTeam = () => {
  return (
    <section id="leadership" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER (MATCH YOUR HTML STYLE) */}
        <div className="border-t border-gray-300 pt-10 mb-20">
          <h2 className="text-3xl font-semibold text-center md:text-left">
            Meet Our Experts
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >

              {/* CIRCLE IMAGE (FIX FACE CUT ISSUE) */}
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 mb-6 border border-gray-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>

              {/* NAME */}
              <h4 className="text-xl font-semibold text-[#007396] mb-1">
                {member.name}
              </h4>

              {/* ROLE */}
              <span className="text-sm uppercase tracking-wider text-gray-600 font-semibold mb-4">
                {member.role}
              </span>

              {/* DIVIDER (like your CSS border-top) */}
              <div className="w-full border-t border-gray-200 pt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
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
