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
    desc: "Driven by a commitment to integrity, excellence, and client success, leading our team in helping individuals and families achieve their immigration goals with confidence.",
    img: team1,
  },
  {
    name: "Ardaman",
    role: "Immigration Documentation Specialist",
    desc: "Committed to accuracy and efficiency, ensuring every application is prepared with meticulous attention to detail.",
    img: team2,
  },
  {
    name: "Arjinder",
    role: "Case Processing Specialist",
    desc: "Dedicated to supporting clients throughout the application process with professionalism, precision, and care.",
    img: team3,
  },
  {
    name: "Harveen",
    role: "Client Documentation Coordinator",
    desc: "Focused on maintaining organized case records and delivering reliable support at every stage of the immigration journey.",
    img: team4,
  },
  {
    name: "Maphy",
    role: "Marketing & Client Relations Coordinator",
    desc: "Building strong client relationships and helping individuals discover the right pathway toward their immigration goals.",
    img: team5,
  },
  {
    name: "Navneet",
    role: "Business Development & Marketing Executive",
    desc: "Passionate about connecting clients with trusted immigration solutions through meaningful engagement and outreach.",
    img: team6,
  },
  {
    name: "Ahmed",
    role: "Finance & Accounts Officer",
    desc: "Ensuring financial accuracy, transparency, and efficient operational support for both clients and the organization.",
    img: team7,
  },
  {
    name: "Mariyam",
    role: "Immigration Case Coordinator",
    desc: "Dedicated to ensuring every client file is managed with accuracy, organization, and attention to detail throughout the application process.",
    img: team8,
  },
  {
    name: "Anureet",
    role: "Accounts & Administrative Coordinator",
    desc: "Committed to maintaining efficient financial processes and providing reliable administrative support for a seamless client experience.",
    img: team9,
  },
];

const AboutTeam = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold uppercase tracking-wide">
            Meet Our Experts
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
            Our Professional Immigration Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-red-500/20 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="text-red-400 text-sm font-semibold mt-1">
                  {member.role}
                </p>

                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
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
