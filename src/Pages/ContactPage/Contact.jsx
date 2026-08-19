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
// import faqImage from "../../assets/hero/logo1.jpg";

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

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
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

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setShowPopup(true);

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
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
//                 icon: <FaEnvelope />,
//                 title: "Email",
//                 text: "info@walshkenimmigration.com",
//               },
//               {
//                 icon: <FaMapMarkerAlt />,
//                 title: "Location",
//                 text: "12885 80 Ave Unit 201, Surrey, BC V3W 0K8",
//               },
//               {
//                 icon: <FaMapMarkerAlt />,
//                 title: "Location",
//                 text: "Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4",
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

//         {/* RIGHT FORM */}
//         <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">

//           <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
//             Request a Consultation
//           </h3>

//           {/* IMPORTANT NOTICE */}
//           <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-5">
//             <p className="text-red-400 text-sm leading-relaxed font-medium">
//               Each and every text msg and call is paid.
//               <br />
//               Someone will get back to you in 42 to 72hr.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">

//             <div className="flex flex-col sm:flex-row gap-4">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name*"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//               />

//             </div>

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
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
//             />

//             <button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300"
//             >
//               Submit Request
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


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaPhoneAlt, 
//   FaEnvelope, 
//   FaMapMarkerAlt, 
//   FaChevronDown, 
//   FaPlus, 
//   FaMinus,
//   FaCheckCircle 
// } from "react-icons/fa";

// // Image Imports
// import heroBg from "../../assets/hero/visaimg.jpg";
// import logo from "../../assets/hero/logo.webp";

// const Contact = () => {
//   // Form State
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     matter: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // FAQ Accordion State
//   const [openFaq, setOpenFaq] = useState(0);

//   const faqs = [
//     {
//       question: "How long does Canadian immigration processing take?",
//       answer:
//         "Processing times vary according to the application category, immigration program, application completeness and current government processing conditions. No specific timeline can be guaranteed.",
//     },
//     {
//       question: "Are language proficiency tests required?",
//       answer:
//         "Language requirements depend on the specific program. Most economic permanent residence programs and certain work permits require approved language tests (such as IELTS or CELPIP), while some temporary visas may not.",
//     },
//     {
//       question: "Can I apply directly for Canadian permanent residence?",
//       answer:
//         "Yes, eligible candidates who meet the criteria for programs such as Express Entry, Provincial Nominee Programs (PNP), or family sponsorship can apply directly for permanent residence.",
//     },
//     {
//       question: "Do you provide support after an application is approved?",
//       answer:
//         "Yes, we assist clients with pre-arrival preparations, landing guidance, and post-arrival settlement information to help ensure a smooth transition.",
//     },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full Name is required.";
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email Address is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsSubmitting(true);
//     // Simulate submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({ fullName: "", email: "", matter: "", message: "" });
//     }, 1200);
//   };

//   return (
//     <div className="bg-black text-white min-h-screen font-sans">
//       {/* ────────────────────────────────────────────────────────
//           HERO SECTION
//           ──────────────────────────────────────────────────────── */}
//       <section
//         className="relative w-full py-24 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url(${heroBg})`,
//         }}
//       >
//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-3">
//             Contact Us
//           </p>
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
//             Speak With the Walshken <br className="hidden sm:inline" />
//             <span className="text-red-500">Immigration Team</span>
//           </h1>
//           <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//             Contact our team to discuss your circumstances and the Canadian immigration options that may be available to you.
//           </p>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           MAIN CONTACT & FORM SECTION
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-12 gap-12 items-start">
//           {/* Left Column: Contact Info */}
//           <div className="lg:col-span-5 space-y-6">
//             <div>
//               <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">
//                 Let's Connect
//               </p>
//               <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
//                 Clear Information Starts With a Conversation
//               </h2>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Whether you are exploring temporary residence, permanent residence, family sponsorship or another Canadian immigration pathway, our team is available to discuss the next steps.
//               </p>
//             </div>

//             {/* Info Cards */}
//             <div className="space-y-4 pt-2">
//               <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
//                 <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
//                   <FaPhoneAlt className="text-sm" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Call Our Office</p>
//                   <a href="tel:+13653636067" className="text-white font-semibold text-sm hover:text-red-500 transition">
//                     +1 365-363-6067
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
//                 <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
//                   <FaEnvelope className="text-sm" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Email Our Team</p>
//                   <a href="mailto:walshkenco@gmail.com" className="block text-white font-semibold text-sm hover:text-red-500 transition">
//                     walshkenco@gmail.com
//                   </a>
//                   <a href="mailto:info@walshkenimmigration.com" className="block text-white font-semibold text-sm hover:text-red-500 transition">
//                     info@walshkenimmigration.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
//                 <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
//                   <FaMapMarkerAlt className="text-sm" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Surrey Office</p>
//                   <p className="text-white font-semibold text-xs leading-relaxed">
//                     12885 80 Ave Unit 201, Surrey, BC V3W 0K8
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
//                 <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
//                   <FaMapMarkerAlt className="text-sm" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Calgary Office</p>
//                   <p className="text-white font-semibold text-xs leading-relaxed">
//                     Unit-304, 3016 5 Ave NE, Calgary, AB T2A 6K4
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Consultation Form */}
//           <div className="lg:col-span-7 bg-gray-950 p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl">
//             <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-1">
//               Consultation Request
//             </p>
//             <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
//               Request a Consultation
//             </h2>

//             {/* LOCKED FORM NOTE */}
//             <div className="p-4 bg-red-950/20 border-l-4 border-red-600 rounded-r-lg mb-8 text-xs text-gray-300 leading-relaxed">
//               Telephone and text consultations are paid professional services. Any applicable fee will be confirmed before the consultation begins. Our team aims to respond to submitted inquiries within <strong className="text-white">1–3 business days</strong>.
//             </div>

//             {isSubmitted ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="p-8 text-center bg-gray-900 rounded-xl border border-green-600/40 space-y-3"
//               >
//                 <FaCheckCircle className="text-green-500 text-4xl mx-auto" />
//                 <h4 className="text-xl font-bold text-white">Inquiry Submitted Successfully</h4>
//                 <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
//                   Thank you for reaching out. Our team has received your information and will review your inquiry within 1–3 business days.
//                 </p>
//                 <button
//                   onClick={() => setIsSubmitted(false)}
//                   className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-white rounded-lg transition"
//                 >
//                   Send Another Inquiry
//                 </button>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5" noValidate>
//                 {/* Full Name */}
//                 <div>
//                   <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     placeholder="Enter your full name"
//                     className={`w-full bg-gray-900 border ${
//                       errors.fullName ? "border-red-500" : "border-gray-800"
//                     } rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition`}
//                   />
//                   {errors.fullName && (
//                     <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
//                   )}
//                 </div>

//                 {/* Email Address */}
//                 <div>
//                   <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
//                     Email Address <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter your email address"
//                     className={`w-full bg-gray-900 border ${
//                       errors.email ? "border-red-500" : "border-gray-800"
//                     } rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition`}
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* Immigration Matter (Optional) */}
//                 <div>
//                   <label htmlFor="matter" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
//                     Immigration Matter
//                   </label>
//                   <input
//                     type="text"
//                     id="matter"
//                     name="matter"
//                     value={formData.matter}
//                     onChange={handleInputChange}
//                     placeholder="What would you like to discuss?"
//                     className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
//                   />
//                 </div>

//                 {/* Message (Optional) */}
//                 <div>
//                   <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
//                     Tell Us How We Can Assist
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Provide a brief overview of your inquiry"
//                     className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition resize-none"
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg transition transform hover:-translate-y-0.5 disabled:opacity-50"
//                 >
//                   {isSubmitting ? "Submitting Inquiry..." : "Request a Consultation"}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           FREQUENTLY ASKED QUESTIONS SECTION (ACCORDION)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-900">
//         <div className="grid lg:grid-cols-12 gap-12 items-start">
//           {/* Left Side: Visual Brand Card */}
//           <div className="lg:col-span-5 bg-gray-950 p-10 rounded-2xl border border-gray-800 text-center flex flex-col items-center justify-center min-h-[380px]">
//             <div className="w-24 h-24 rounded-full border-2 border-red-500 p-2 mb-6 flex items-center justify-center bg-black shadow-lg shadow-red-900/20">
//               <img src={logo} alt="Walshken Immigration" className="w-16 h-16 object-contain" />
//             </div>
//             <h3 className="text-lg font-extrabold text-white uppercase tracking-wider leading-snug">
//               Canadian Immigration <br />
//               Questions, Answered Clearly.
//             </h3>
//           </div>

//           {/* Right Side: Accordion Questions */}
//           <div className="lg:col-span-7 space-y-4">
//             <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-1">
//               Common Questions
//             </p>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
//               Frequently Asked <span className="text-red-500">Questions</span>
//             </h2>

//             <div className="space-y-3">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden transition"
//                 >
//                   <button
//                     onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                     className="w-full p-5 text-left flex items-center justify-between text-sm md:text-base font-bold text-white hover:text-red-400 transition"
//                   >
//                     <span>{faq.question}</span>
//                     <span className="text-red-500 flex-shrink-0 ml-4">
//                       {openFaq === index ? <FaMinus /> : <FaPlus />}
//                     </span>
//                   </button>
//                   <AnimatePresence>
//                     {openFaq === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="px-5 pb-5 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-gray-900 pt-3"
//                       >
//                         {faq.answer}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ────────────────────────────────────────────────────────
//           OFFICE LOCATIONS & MAP (SURREY & CALGARY ONLY)
//           ──────────────────────────────────────────────────────── */}
//       <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-900">
//         <div className="text-center mb-14">
//           <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">
//             Office Locations
//           </p>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
//             Visit Walshken Immigration
//           </h2>
//           <p className="text-xs text-gray-400 max-w-xl mx-auto">
//             The map below identifies the Surrey office. Calgary office details are provided alongside it for reference.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-8 items-start">
//           {/* Map Embed (Surrey Office) */}
//           <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-gray-800 h-[380px] bg-gray-900">
//             <iframe
//               title="Walshken Surrey Office"
//               src="https://maps.google.com/maps?q=12885%2080%20Ave%20Unit%20201,%20Surrey,%20BC%20V3W%200K8&t=&z=14&ie=UTF8&iwloc=&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Location Cards */}
//           <div className="lg:col-span-4 space-y-4">
//             <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
//               <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-1">Surrey Office</span>
//               <h4 className="text-base font-bold text-white mb-2">Surrey, British Columbia</h4>
//               <p className="text-xs text-gray-400 leading-relaxed">
//                 12885 80 Ave Unit 201 <br />
//                 Surrey, BC V3W 0K8
//               </p>
//             </div>

//             <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
//               <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-1">Calgary Office</span>
//               <h4 className="text-base font-bold text-white mb-2">Calgary, Alberta</h4>
//               <p className="text-xs text-gray-400 leading-relaxed">
//                 Unit-304, 3016 5 Ave NE <br />
//                 Calgary, AB T2A 6K4
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaChevronDown, 
  FaPlus, 
  FaMinus,
  FaCheckCircle 
} from "react-icons/fa";

// Image Imports
import heroBg from "../../assets/hero/visaimg.jpg";
import logo from "../../assets/hero/logo.webp";

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    matter: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How long does immigration processing take?",
      answer:
        "Processing times vary according to the application category, immigration program, application completeness and current government processing conditions. No specific timeline can be guaranteed.",
    },
    {
      question: "Are language proficiency tests required?",
      answer:
        "Language requirements depend on the specific program. Most economic permanent residence programs and certain work permits require approved language tests (such as IELTS or CELPIP), while some temporary visas may not.",
    },
    {
      question: "Can I apply directly for permanent residence?",
      answer:
        "Yes, eligible candidates who meet the criteria for programs such as Express Entry, Provincial Nominee Programs (PNP), or family sponsorship can apply directly for permanent residence.",
    },
    {
      question: "Do you provide support after an application is approved?",
      answer:
        "Yes, we assist clients with pre-arrival preparations, landing guidance, and post-arrival settlement information to help ensure a smooth transition.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", matter: "", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section
        className="relative w-full py-24 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url(${heroBg})`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Speak With the Walshken <br className="hidden sm:inline" />
            <span className="text-red-500">Immigration Team</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact our team to discuss your circumstances and the immigration options that may be available to you.
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          MAIN CONTACT & FORM SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">
                Let's Connect
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Clear Information Starts With a Conversation
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you are exploring temporary residence, permanent residence, family sponsorship or another immigration pathway, our team is available to discuss the next steps.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Call Our Office</p>
                  <a href="tel:+13653636067" className="text-white font-semibold text-sm hover:text-red-500 transition">
                    +1 365-363-6067
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Email Our Team</p>
                  <a href="mailto:walshkenco@gmail.com" className="block text-white font-semibold text-sm hover:text-red-500 transition">
                    walshkenco@gmail.com
                  </a>
                  <a href="mailto:info@walshkenimmigration.com" className="block text-white font-semibold text-sm hover:text-red-500 transition">
                    info@walshkenimmigration.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Surrey Office</p>
                  <p className="text-white font-semibold text-xs leading-relaxed">
                    12885 80 Ave Unit 201, Surrey, BC V3W 0K8
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-950 rounded-xl border border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Calgary Office</p>
                  <p className="text-white font-semibold text-xs leading-relaxed">
                    Unit-304, 3016 5 Ave NE, Calgary, AB T2A 6K4
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7 bg-gray-950 p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-1">
              Consultation Request
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Request a Consultation
            </h2>

            {/* LOCKED FORM NOTE */}
            <div className="p-4 bg-red-950/20 border-l-4 border-red-600 rounded-r-lg mb-8 text-xs text-gray-300 leading-relaxed">
              Telephone and text consultations are paid professional services. Any applicable fee will be confirmed before the consultation begins. Our team aims to respond to submitted inquiries within <strong className="text-white">1–3 business days</strong>.
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-gray-900 rounded-xl border border-green-600/40 space-y-3"
              >
                <FaCheckCircle className="text-green-500 text-4xl mx-auto" />
                <h4 className="text-xl font-bold text-white">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Our team has received your information and will review your inquiry within 1–3 business days.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-white rounded-lg transition"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full bg-gray-900 border ${
                      errors.fullName ? "border-red-500" : "border-gray-800"
                    } rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={`w-full bg-gray-900 border ${
                      errors.email ? "border-red-500" : "border-gray-800"
                    } rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Immigration Matter (Optional) */}
                <div>
                  <label htmlFor="matter" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    Immigration Matter
                  </label>
                  <input
                    type="text"
                    id="matter"
                    name="matter"
                    value={formData.matter}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>

                {/* Message (Optional) */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    Tell Us How We Can Assist
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide a brief overview of your inquiry"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg transition transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Request a Consultation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          FREQUENTLY ASKED QUESTIONS SECTION (ACCORDION)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-900">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Visual Brand Card */}
          <div className="lg:col-span-5 bg-gray-950 p-10 rounded-2xl border border-gray-800 text-center flex flex-col items-center justify-center min-h-[380px]">
            <div className="w-24 h-24 rounded-full border-2 border-red-500 p-2 mb-6 flex items-center justify-center bg-black shadow-lg shadow-red-900/20">
              <img src={logo} alt="Walshken Immigration" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-lg font-extrabold text-white uppercase tracking-wider leading-snug">
              Global Immigration <br />
              Questions, Answered Clearly.
            </h3>
          </div>

          {/* Right Side: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-1">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm md:text-base font-bold text-white hover:text-red-400 transition"
                  >
                    <span>{faq.question}</span>
                    <span className="text-red-500 flex-shrink-0 ml-4">
                      {openFaq === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-gray-900 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          OFFICE LOCATIONS & MAP (SURREY & CALGARY ONLY)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-900">
        <div className="text-center mb-14">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-2">
            Office Locations
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Visit Walshken Immigration
          </h2>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            The map below identifies the Surrey office. Calgary office details are provided alongside it for reference.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Map Embed (Surrey Office) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-gray-800 h-[380px] bg-gray-900">
            <iframe
              title="Walshken Surrey Office"
              src="https://maps.google.com/maps?q=12885%2080%20Ave%20Unit%20201,%20Surrey,%20BC%20V3W%200K8&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Location Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-1">Surrey Office</span>
              <h4 className="text-base font-bold text-white mb-2">Surrey, British Columbia</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                12885 80 Ave Unit 201 <br />
                Surrey, BC V3W 0K8
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-1">Calgary Office</span>
              <h4 className="text-base font-bold text-white mb-2">Calgary, Alberta</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unit-304, 3016 5 Ave NE <br />
                Calgary, AB T2A 6K4
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
