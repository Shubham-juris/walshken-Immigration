import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/hero/logo.webp"; // ✅ Import logo

const Footer = () => {
  const services = [
    { name: "Study Visa", path: "/study-visa" },
    { name: "Work Visa", path: "/work-visa" },
    { name: "Permanent Residency", path: "/pr" },
    { name: "Family & Spousal Sponsorship", path: "/family" },
    { name: "Business & Investor Visa", path: "/business-visa" },
    { name: "Visitor Visa", path: "/visitor-visa" },
    // { name: "Divorce & Family Law", path: "/divorce-family" },
    // { name: "International Adoptions", path: "/adoptions" },
    // { name: "Property Legal Disputes", path: "/property" },
  ];

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        {/* Logo & About */}
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center mb-5">
            <NavLink to="/" className="flex flex-col items-center space-y-2">
              {/* ✅ Logo centered above text */}
              <img
                src={logo}
                alt="Walshken Immigration"
                className="w-16 h-16 object-contain"
              />
              <h1 className="text-xl font-bold tracking-wide text-center">
                Walshken <span className="text-gray-400">Immigration</span>
              </h1>
            </NavLink>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center md:text-left">
            {/* We specialize in IELTS, PTE, and TOEFL coaching, along with
            Citizenship Test preparation — guiding you step by step toward
            success abroad. */}
            {/* Walshken Immigration provides Canadian immigration guidance and
            test-preparation support for individuals, families and employers. */}
            Dedicated to providing quality education and fostering holistic growth.
            We strive to create a supportive environment where every student learns and grows.
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-start space-x-3">
            {[
              {
                href: "https://www.facebook.com/p/Walshken-Immigration-100092211439380/",
                icon: <FaFacebookF />,
              },
              {
                href: "https://instagram.com/walshkenimmigration",
                icon: <FaInstagram />,
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full w-10 h-10 flex items-center justify-center transition transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-5">Services</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            {services.map((service, index) => (
              <li key={index}>
                <NavLink
                  to={service.path}
                  className="flex justify-center md:justify-start items-center space-x-2 hover:text-white font-medium transition"
                >
                  <span className="text-gray-500">›</span>
                  <span>{service.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

       {/* Contact */}
        <div>
          <h2 className="text-lg font-bold mb-5 text-white">Contact</h2>
        
          {/* Phone */}
          <div className="mb-4">
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="text-white font-medium">+1 365-363-6067</p>
          </div>
        
          <hr className="border-gray-700 mb-4" />
        
          {/* Emails */}
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-1">Email</p>
            <p className="text-white font-medium">walshkenco@gmail.com</p>
            <p className="text-white font-medium">info@walshkenimmigration.com</p>
          </div>
        
          <hr className="border-gray-700 mb-4" />
        
          {/* Addresses */}
          <div>
            <p className="text-gray-400 text-sm mb-1">Address</p>
            <p className="text-white font-medium mb-2">
              12885 80 Ave Unit 201, Surrey, BC V3W 0K8
            </p>
            <p className="text-white font-medium">
              Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-5">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-4">
            {/* Sign up to get updates & exclusive offers directly to your inbox. */}
            Receive practical immigration updates, service information and study tips from Walshken Immigration.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-md font-semibold text-white text-sm transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Walshken Immigration. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
