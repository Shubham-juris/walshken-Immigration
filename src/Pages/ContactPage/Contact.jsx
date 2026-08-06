// import React, { useState } from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaUser,
//   FaPaperPlane,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import contactImage from "../../assets/hero/ContactImg.jpg";
// import faqImage from "../../assets/hero/logo.webp";

// const faqs = [
//   {
//     question: "How long does the visa process usually take?",
//     answer: "The processing time depends on the type of visa...",
//   },
//   {
//     question: "Do I need IELTS or language proficiency tests?",
//     answer:
//       "For many countries, IELTS or other language proficiency tests are required...",
//   },
//   {
//     question: "Can I apply for PR directly?",
//     answer:
//       "Yes, if you meet the eligibility requirements of the country's PR program...",
//   },
//   {
//     question: "Do you assist with post-approval support?",
//     answer:
//       "Yes, we provide end-to-end support — from documentation and application to post-approval settlement services.",
//   },
// ];

// const Contact = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent!");
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <>
//       {/* HERO */}
//       <div
//         className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),url(${contactImage})`,
//         }}
//       >
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white text-center">
//           Contact Us
//         </h1>
//       </div>

//       {/* CONTACT GRID */}
//       <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* LEFT */}
//         <div className="space-y-6">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//             Let’s Connect with{" "}
//             <span className="text-red-500">Walshken Immigration</span>
//           </h2>
//           <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//             Whether you’re planning to study, work, or settle abroad — our
//             expert consultants will guide you at every step.
//           </p>

//           <div className="grid gap-4">
//             {[
//               { icon: <FaPhoneAlt />, title: "Call", text: "+1 365-363-6067" },
//               {
//                 icon: <FaEnvelope />,
//                 title: "Email",
//                 text: "walshkenco@gmail.com",
//               },
//               {
//                 icon: <FaMapMarkerAlt />,
//                 title: "Location",
//                 text: "12885 80 Ave Unit 201, Surrey, BC V3W 0K8",
//               },
//             ].map((c, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/70 border border-gray-700"
//               >
//                 <div className="text-red-500 text-lg">{c.icon}</div>
//                 <div>
//                   <p className="text-xs text-gray-400">{c.title}</p>
//                   <p className="text-sm sm:text-base font-semibold text-white">
//                     {c.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">
//           <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
//             Request a Free Consultation
//           </h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name*"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-3 py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base border border-gray-700 focus:border-red-500"
//             />
//             <button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-700 hover:to-red-600"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-black py-12 px-4 sm:px-6 lg:px-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
//           <div className="md:col-span-7 space-y-4">
//             <h2 className="text-2xl sm:text-3xl font-bold text-white">
//               Frequently Asked Questions
//             </h2>
//             {faqs.map((f, i) => (
//               <div
//                 key={i}
//                 className="border border-gray-700 rounded-lg bg-gray-900"
//               >
//                 <button
//                   onClick={() => toggleFAQ(i)}
//                   className="w-full px-4 py-3 flex justify-between items-center text-sm sm:text-base text-white"
//                 >
//                   {f.question}
//                   {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
//                 </button>
//                 <AnimatePresence>
//                   {openIndex === i && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="px-4 pb-3 text-gray-400 text-sm"
//                     >
//                       {f.answer}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//           <div className="md:col-span-5 flex justify-center">
//             <img
//               src={faqImage}
//               alt="FAQ"
//               className="w-full max-w-xs md:max-w-sm rounded-lg border-4 border-red-500"
//             />
//           </div>
//         </div>
//       </section>

//       {/* MAP */}
//       <section className="px-4 sm:px-6 lg:px-10 pb-12">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
//             Visit Our Office
//           </h2>
//           <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl">
//            <iframe
//   src="https://www.google.com/maps?q=12885+80+Ave+Unit+201,+Surrey,+BC+V3W+0K8&output=embed"
//   width="1268"
//   height="450"
//   style={{ border: 0 }}
//   allowFullScreen=""
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
// ></iframe>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;



// import React, { useState } from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaChevronDown,
//   FaChevronUp,
//   FaTimes,
// } from "react-icons/fa";

// import { motion, AnimatePresence } from "framer-motion";

// import contactImage from "../../assets/hero/ContactImg.jpg";
// import faqImage from "../../assets/hero/logo.webp";

// const faqs = [
//   {
//     question: "How long does the visa process usually take?",
//     answer: "The processing time depends on the type of visa.",
//   },
//   {
//     question: "Do I need IELTS or language proficiency tests?",
//     answer:
//       "For many countries, IELTS or other language proficiency tests are required.",
//   },
//   {
//     question: "Can I apply for PR directly?",
//     answer:
//       "Yes, if you meet the eligibility requirements of the country's PR program.",
//   },
//   {
//     question: "Do you assist with post-approval support?",
//     answer:
//       "Yes, we provide end-to-end support from documentation to settlement services.",
//   },
// ];

// const Contact = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const [showPopup, setShowPopup] = useState(false);

//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     const object = {
//       access_key: "6773f316-f11e-42b2-b595-5fd786bb03dc",

//       from_name: "Walshken Immigration",

//       subject: `New Appointment Request From ${formData.name}`,

//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       user_subject: formData.subject,
//       message: formData.message,

//       replyto: formData.email,

//       html: `
//         <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:30px;">
          
//           <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e5e5;">
            
//             <div style="background:#b91c1c;padding:25px;text-align:center;">
//               <h1 style="color:#ffffff;margin:0;font-size:28px;">
//                 New Appointment Request
//               </h1>
//             </div>

//             <div style="padding:30px;">

//               <h2 style="color:#111827;margin-bottom:25px;">
//                 Client Information
//               </h2>

//               <table style="width:100%;border-collapse:collapse;">
                
//                 <tr>
//                   <td style="padding:14px;border-bottom:1px solid #eee;font-weight:bold;width:180px;">
//                     Full Name
//                   </td>

//                   <td style="padding:14px;border-bottom:1px solid #eee;">
//                     ${formData.name}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:14px;border-bottom:1px solid #eee;font-weight:bold;">
//                     Email Address
//                   </td>

//                   <td style="padding:14px;border-bottom:1px solid #eee;">
//                     ${formData.email}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:14px;border-bottom:1px solid #eee;font-weight:bold;">
//                     Phone Number
//                   </td>

//                   <td style="padding:14px;border-bottom:1px solid #eee;">
//                     ${formData.phone}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:14px;border-bottom:1px solid #eee;font-weight:bold;">
//                     Subject
//                   </td>

//                   <td style="padding:14px;border-bottom:1px solid #eee;">
//                     ${formData.subject}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:14px;font-weight:bold;vertical-align:top;">
//                     Message
//                   </td>

//                   <td style="padding:14px;">
//                     ${formData.message}
//                   </td>
//                 </tr>

//               </table>

//               <div style="margin-top:35px;padding:20px;background:#fef2f2;border-left:4px solid #dc2626;border-radius:8px;">
                
//                 <p style="margin:0;color:#991b1b;font-weight:bold;">
//                   Important Notice
//                 </p>

//                 <p style="margin-top:10px;color:#374151;line-height:1.7;">
//                   Each and every text message and call is paid.
//                   Someone should contact this client within 42 to 72 hours.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>
//       `,
//     };

//     try {
//       const response = await fetch(
//         "https://api.web3forms.com/submit",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify(object),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         setShowPopup(true);

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         alert("Something went wrong.");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Failed to submit form.");
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       {/* HERO */}
//       <div
//         className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),url(${contactImage})`,
//         }}
//       >
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white text-center">
//           Contact Us
//         </h1>
//       </div>

//       {/* CONTACT SECTION */}
//       <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">

//         {/* LEFT SIDE */}
//         <div className="space-y-6">

//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//             Let’s Connect with{" "}
//             <span className="text-red-500">
//               Walshken Immigration
//             </span>
//           </h2>

//           <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//             Whether you’re planning to study, work, or settle abroad —
//             our expert consultants will guide you at every step.
//           </p>

//           <div className="grid gap-4">

//             {[
//               {
//                 icon: <FaPhoneAlt />,
//                 title: "Call",
//                 text: "+1 365-363-6067",
//               },

//               {
//                 icon: <FaEnvelope />,
//                 title: "Email",
//                 text: "walshkenco@gmail.com",
//               },

//               {
//                 icon: <FaMapMarkerAlt />,
//                 title: "Location",
//                 text: "12885 80 Ave Unit 201, Surrey, BC V3W 0K8",
//               },

//             ].map((c, i) => (

//               <div
//                 key={i}
//                 className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/70 border border-gray-700"
//               >
//                 <div className="text-red-500 text-lg">
//                   {c.icon}
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-400">
//                     {c.title}
//                   </p>

//                   <p className="text-sm sm:text-base font-semibold text-white">
//                     {c.text}
//                   </p>
//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//         {/* FORM */}
//         <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">

//           <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
//             Request a Consultation
//           </h3>

//           <form onSubmit={handleSubmit} className="space-y-4">

//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name*"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address*"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//             />

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number*"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//             />

//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//             />

//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Write your message..."
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300"
//             >
//               {loading ? "Submitting..." : "Book Appointment"}
//             </button>

//           </form>

//         </div>

//       </section>

//       {/* FAQ */}
//       <section className="bg-black py-12 px-4 sm:px-6 lg:px-10">

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

//           <div className="md:col-span-7 space-y-4">

//             <h2 className="text-2xl sm:text-3xl font-bold text-white">
//               Frequently Asked Questions
//             </h2>

//             {faqs.map((f, i) => (

//               <div
//                 key={i}
//                 className="border border-gray-700 rounded-lg bg-gray-900"
//               >

//                 <button
//                   onClick={() => toggleFAQ(i)}
//                   className="w-full px-4 py-3 flex justify-between items-center text-sm sm:text-base text-white"
//                 >
//                   {f.question}

//                   {openIndex === i ? (
//                     <FaChevronUp />
//                   ) : (
//                     <FaChevronDown />
//                   )}

//                 </button>

//                 <AnimatePresence>

//                   {openIndex === i && (

//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="px-4 pb-3 text-gray-400 text-sm"
//                     >
//                       {f.answer}
//                     </motion.div>

//                   )}

//                 </AnimatePresence>

//               </div>

//             ))}

//           </div>

//           <div className="md:col-span-5 flex justify-center">

//             <img
//               src={faqImage}
//               alt="FAQ"
//               className="w-full max-w-xs md:max-w-sm rounded-lg border-4 border-red-500"
//             />

//           </div>

//         </div>

//       </section>

//       {/* MAP */}
//       <section className="px-4 sm:px-6 lg:px-10 pb-12">

//         <div className="max-w-7xl mx-auto">

//           <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
//             Visit Our Office
//           </h2>

//           <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl">

//             <iframe
//               src="https://www.google.com/maps?q=12885+80+Ave+Unit+201,+Surrey,+BC+V3W+0K8&output=embed"
//               width="1268"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>

//           </div>

//         </div>

//       </section>

//       {/* SUCCESS POPUP */}

//       <AnimatePresence>

//         {showPopup && (

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
//           >

//             <motion.div
//               initial={{ scale: 0.7, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.7, opacity: 0 }}
//               className="bg-gray-900 border border-red-500 rounded-2xl p-8 max-w-md w-full text-center relative shadow-2xl"
//             >

//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="absolute top-4 right-4 text-white text-xl"
//               >
//                 <FaTimes />
//               </button>

//               <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-5">

//                 <span className="text-4xl text-white">
//                   ✓
//                 </span>

//               </div>

//               <h2 className="text-3xl font-bold text-white mb-4">
//                 Submitted Successfully
//               </h2>

//               <p className="text-gray-300 leading-relaxed text-base">

//                 Each and every text msg and call is paid.

//                 <br />
//                 <br />

//                 Someone will get back to you in
//                 <span className="text-red-500 font-semibold">
//                   {" "}42 to 72hr
//                 </span>

//               </p>

//             </motion.div>

//           </motion.div>

//         )}

//       </AnimatePresence>

//     </>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

import contactImage from "../../assets/hero/ContactImg.jpg";
import faqImage from "../../assets/hero/logo1.jpg";

const faqs = [
  {
    question: "How long does the visa process usually take?",
    answer: "The processing time depends on the type of visa.",
  },
  {
    question: "Do I need IELTS or language proficiency tests?",
    answer:
      "For many countries, IELTS or other language proficiency tests are required.",
  },
  {
    question: "Can I apply for PR directly?",
    answer:
      "Yes, if you meet the eligibility requirements of the country's PR program.",
  },
  {
    question: "Do you assist with post-approval support?",
    answer:
      "Yes, we provide end-to-end support from documentation to settlement services.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* HERO */}
      <div
        className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),url(${contactImage})`,
        }}
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
            Let’s Connect with{" "}
            <span className="text-red-500">
              Walshken Immigration
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Whether you’re planning to study, work, or settle abroad —
            our expert consultants will guide you at every step.
          </p>

          <div className="grid gap-4">
            {[
              {
                icon: <FaPhoneAlt />,
                title: "Call",
                text: "+1 365-363-6067",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "walshkenco@gmail.com",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "info@walshkenimmigration.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                text: "12885 80 Ave Unit 201, Surrey, BC V3W 0K8",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                text: "Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/70 border border-gray-700"
              >
                <div className="text-red-500 text-lg">
                  {c.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    {c.title}
                  </p>

                  <p className="text-sm sm:text-base font-semibold text-white">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Request a Consultation
          </h3>

          {/* IMPORTANT NOTICE */}
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-5">
            <p className="text-red-400 text-sm leading-relaxed font-medium">
              Each and every text msg and call is paid.
              <br />
              Someone will get back to you in 42 to 72hr.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300"
            >
              Submit Request
            </button>

          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

          <div className="md:col-span-7 space-y-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>

            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-lg bg-gray-900"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-4 py-3 flex justify-between items-center text-sm sm:text-base text-white"
                >
                  {f.question}

                  {openIndex === i ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
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
            <img
              src={faqImage}
              alt="FAQ"
              className="w-full max-w-xs md:max-w-sm rounded-lg border-4 border-red-500"
            />
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="px-4 sm:px-6 lg:px-10 pb-12">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
            Visit Our Office
          </h2>

          <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=12885+80+Ave+Unit+201,+Surrey,+BC+V3W+0K8&output=embed"
              width="1268"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>

        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          >

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-gray-900 border border-red-500 rounded-2xl p-8 max-w-md w-full text-center relative shadow-2xl"
            >

              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                <FaTimes />
              </button>

              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-4xl text-white">
                  ✓
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                Submitted Successfully
              </h2>

              <p className="text-gray-300 leading-relaxed text-base">
                Each and every text msg and call is paid.
                <br />
                <br />
                Someone will get back to you in
                <span className="text-red-500 font-semibold">
                  {" "}42 to 72hr
                </span>
              </p>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </>
  );
};

export default Contact;


