import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/hero/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Visa", path: "/visa" },
    { label: "Contact", path: "/contact" },
          ];

  return (
    <header className="bg-white shadow-md py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-base md:text-lg font-bold">
            Walshken<span className="text-red-600">Immigration</span>
          </h1>
        </NavLink>

        <nav className="hidden lg:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-[14px] font-medium ${
                  isActive ? "text-red-600 font-semibold" : "text-black"
                } hover:text-red-600`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate("/contact")}
            className="hidden lg:flex bg-red-600 hover:bg-gray-700 text-white text-xs font-medium px-3 py-1.5 rounded"
          >
            Get A Quote
          </button>

          <button
            className="lg:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 px-4 pb-3">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block py-1.5 border-b text-sm ${
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
