import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
import logo from "../../assets/hero/logo.webp";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Visa", path: "/visa" },
    { label: "Pages", path: "/page" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    
  ];

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="" className="text-red-600 text-2xl" />
          <h1 className="text-xl font-bold">
            Walshken<span className="text-red-600">Immigration</span>
          </h1>
        </NavLink>

        <nav className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-red-600 font-semibold" : "text-black"
                  } hover:text-red-600`
                }
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/contact")}
            className="hidden lg:flex bg-red-600 hover:bg-gray-700 text-white font-semibold text-sm px-5 py-3 rounded-md items-center space-x-2"
          >
            <span>Get A Quote</span>
          </button>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 px-4 pb-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block py-2 border-b text-sm ${
                  isActive ? "text-red-600 font-semibold" : "text-gray-800"
                } hover:text-red-600`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
