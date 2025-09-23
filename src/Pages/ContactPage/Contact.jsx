import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import contactImage from "../../assets/hero/ContactImg.jpg";
import faqImage from "../../assets/hero/logo.webp";

const faqs = [
  { question: "How long does the visa process usually take?", answer: "The processing time depends on the type of visa..." },
  { question: "Do I need IELTS or language proficiency tests?", answer: "For many countries, IELTS or other language proficiency tests are required..." },
  { question: "Can I apply for PR directly?", answer: "Yes, if you meet the eligibility requirements of the country's PR program..." },
  { question: "Do you assist with post-approval support?", answer: "Yes, we provide end-to-end support — from documentation and application to post-approval settlement services." },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* HERO */}
      <div
        className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),url(${contactImage})` }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white text-center">
          Contact Us
        </h1>
      </div>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Let’s Connect with <span className="text-red-500">Walshken Immigration</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Whether you’re planning to study, work, or settle abroad — our expert consultants will guide you at every step.
          </p>

          <div className="grid gap-4">
            {[
              { icon: <FaPhoneAlt />, title: "Call", text: "+1 365-363-6067" },
              { icon: <FaEnvelope />, title: "Email", text: "walshkenco@gmail.com" },
              { icon: <FaMapMarkerAlt />, title: "Location", text: "3030 3 Ave NE #120, Calgary, AB, Canada" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/70 border border-gray-700">
                <div className="text-red-500 text-lg">{c.icon}</div>
                <div>
                  <p className="text-xs text-gray-400">{c.title}</p>
                  <p className="text-sm sm:text-base font-semibold text-white">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Request a Free Consultation</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-700 hover:to-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-700 rounded-lg bg-gray-900">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-4 py-3 flex justify-between items-center text-sm sm:text-base text-white"
                >
                  {f.question}
                  {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-3 text-gray-400 text-sm"
                    >
                      {f.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="md:col-span-5 flex justify-center">
            <img src={faqImage} alt="FAQ" className="w-full max-w-xs md:max-w-sm rounded-lg border-4 border-red-500" />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-4 sm:px-6 lg:px-10 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">Visit Our Office</h2>
          <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl">
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.173762579436!2d-113.99314792417627!3d51.05512004364403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717ad5f9ce4e89%3A0x931cb72901e313c1!2s3030%203%20Ave%20NE%20%23120%2C%20Calgary%2C%20AB%20T2A%202L5%2C%20Canada!5e1!3m2!1sen!2sin!4v1758603141221!5m2!1sen!2sin"
  width="1268"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
