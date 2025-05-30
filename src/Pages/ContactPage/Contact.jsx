import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";
import contactImage from "../../assets/hero/ContactImg.jpg";
const Contact = () => {
  return (
    <>
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1.2)),url(${contactImage})`,
        }}

      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white text-center md:text-left lg:px-20">
            Contact
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h4 className="text-red-600 font-bold uppercase">Get in Touch</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We denounce with righteous indignation...
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-red-600 text-xl mt-1" />
              <div>
                <p className="text-sm text-red-600">Call For Inquiry</p>
                <p className="text-lg font-semibold text-gray-900">
               +1-888-227-0899
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-red-600 text-xl mt-1" />
              <div>
                <p className="text-sm text-red-600">Send Us Email</p>
                <p className="text-lg font-semibold text-gray-900">
                  info@walshkenimmigration.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-red-600 text-xl mt-1" />
              <div>
                <p className="text-sm text-red-600">Location</p>
                <p className="text-lg font-semibold text-gray-900">
                  Unit120 3030 3rd Avenue,NE,Calgary,AB
                </p>
              </div>
            </div>
          </div>

          
        </div>
        <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Fill Up The Form
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-red-600">*</span>
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex items-center w-full border rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full outline-none text-sm"
                  required
                />
              </div>
              <div className="flex items-center w-full border rounded px-3 py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full outline-none text-sm"
                  required
                />
              </div>
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded px-4 py-2 text-sm"
            />
            <textarea
              placeholder="Write Your Message"
              rows={5}
              className="w-full border rounded px-4 py-2 text-sm"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md flex items-center hover:bg-red-700 transition"
            >
              Send Us Message <FaPaperPlane className="ml-2" />
            </button>
          </form>
        </div>
      </div>

     
    </>
  );
};

export default Contact;
