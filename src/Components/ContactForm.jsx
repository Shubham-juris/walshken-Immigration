import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.type === "textarea"
        ? "message"
        : e.target.type === "email"
        ? "email"
        : "name"]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill out all fields before sending.",
        confirmButtonColor: "#dc2626", // red-600
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: `Thank you, ${formData.name}!`,
      text: "Your message has been sent successfully. We will get back to you shortly.",
      confirmButtonColor: "#dc2626",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-red-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-14 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent">
              Connect with Us
            </span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Get In Touch <br />
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              We’d Love To Hear From You
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Have questions about our visa consulting services? Fill out the form
            and our team will get back to you as soon as possible.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-200 font-medium text-lg">
              <Mail className="w-6 h-6 text-red-500" /> walshkenco@gmail.com
            </li>
            <li className="flex items-center gap-3 text-gray-200 font-medium text-lg">
              <Phone className="w-6 h-6 text-red-500" /> +1 365-363-6067
            </li>
            <li className="flex items-center gap-3 text-gray-200 font-medium text-lg">
              <MapPin className="w-6 h-6 text-red-500" /> 3030 3 Ave NE #120, Calgary, AB, Canada, Alberta
            </li>
          </ul>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl shadow-2xl p-8 space-y-6 border border-red-700"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              Request a Free Immigration Consultation
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Have a question about your visa or immigration plan? Fill out this
              form and our experts will reach out to you shortly. Required fields
              are marked <span className="text-red-500">*</span>
            </p>
            <label className="block text-gray-200 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-600 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-600 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-600 outline-none transition resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
