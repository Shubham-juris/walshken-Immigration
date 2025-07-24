import {
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#15161a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo and Description */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <h1 className="text-xl font-bold">
                Walshken<span className="text-red-600">Immigration</span>
              </h1>
            </NavLink>
          </div>
          <p className="text-gray-400 mb-6">
            We specialize in IELTS, PTE, and TOEFL coaching, as well as
            Citizenship Test preparation — supporting you every step toward
            global success.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            {[
              {
                href: "https://www.facebook.com/p/Walshken-Immigration-100092211439380/",
                icon: <FaFacebookF />,
              },
              {
                href: "https://www.instagram.com/walshkenimmigration/?hl=en",
                icon: <FaInstagram />,
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-lg bg-gray-800 hover:bg-blue-600 p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-200 ease-in-out">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-3 text-gray-400">
            {[
              "Canada Visa",
              "Japan Visa",
              "Spain Visa",
              "Germany Visa",
              "Italy Visa",
            ].map((service, index) => (
              <li
                key={index}
                className="flex justify-center md:justify-start items-center space-x-2 hover:text-red-600 cursor-pointer"
              >
                <span>»</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-gray-400 mb-2">
            Phone: <br /> +1 365-363-6067
          </p>
          <p className="text-gray-400 mb-2">
            Email: <br /> walshkenco@gmail.com
          </p>
          <p className="text-gray-400">
            Address: <br />
            3030 3 Ave NE #120, Calgary, AB, Canada, Alberta
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Newsletters</h2>
          <p className="text-gray-400 mb-4">
            Sign Up For News & Get 30% Off Your Next Course.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-3 rounded bg-gray-100 text-black mb-4 focus:outline-none"
          />
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded font-semibold">
            Subscribe Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
