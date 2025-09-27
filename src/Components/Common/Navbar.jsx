// ✅ Final 100% Working Navbar Component with Full Mobile Support

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/hero/logo.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
      label: "Services",
      dropdown: [
        { label: "Study Visa", path: "/study-visa" },
        { label: "Work Visa", path: "/work-visa" },
        { label: "Permanent Residency (PR)", path: "/pr" },
        { label: "Visitor Visa", path: "/visitor-visa" },
        { label: "Business/Investor Visa", path: "/business-visa" },
        { label: "Family & Spousal Sponsorship", path: "/family" },
      ],
    },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "Immigration Form", path: "/form" },
  ];

  const isDropdownActive = (dropdown) =>
    dropdown?.some((item) => location.pathname === item.path);

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // 🚫 Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Close menu or dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black shadow-md sticky top-0 z-[999]"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <motion.img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <h1 className="text-base md:text-lg font-bold text-white tracking-wide">
            Walshken <span className="text-gray-400">Immigration</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 items-center" ref={navRef}>
          {menuItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="relative">
                <span
                  className={`flex items-center cursor-pointer text-[15px] font-semibold ${
                    isDropdownActive(item.dropdown)
                      ? "text-red-500"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => handleDropdownToggle(item.label)}
                >
                  {item.label}
                  <FaChevronDown className="ml-1 text-xs" />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: openDropdown === item.label ? 1 : 0,
                    y: openDropdown === item.label ? 0 : 10,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`absolute left-0 mt-2 w-56 bg-gray-900 shadow-lg rounded-lg py-2 border border-gray-700 z-50 ${
                    openDropdown === item.label ? "block" : "hidden"
                  }`}
                >
                  {item.dropdown.map((sub, si) => (
                    <NavLink
                      key={si}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm rounded-md ${
                          isActive
                            ? "text-red-500 bg-gray-800"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`
                      }
                      onClick={() => setOpenDropdown(null)}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </motion.div>
              </div>
            ) : (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[15px] font-semibold transition-colors ${
                    isActive ? "text-red-500" : "text-white hover:text-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setOpenDropdown(null);
            }}
            className="text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-gray-900 shadow-md mt-2 px-4 pb-3 rounded-b-lg border-t border-gray-800 z-50"
          ref={navRef}
        >
          {menuItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx}>
                <span
                  className="flex justify-between items-center py-2 text-sm font-semibold text-white cursor-pointer"
                  onClick={() => handleDropdownToggle(item.label)}
                >
                  {item.label}
                  <FaChevronDown
                    className={`ml-1 text-xs transform transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </span>
                {openDropdown === item.label &&
                  item.dropdown.map((sub, si) => (
                    <NavLink
                      key={si}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block pl-4 py-1.5 text-sm rounded-md ${
                          isActive
                            ? "text-red-500 bg-gray-800"
                            : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`
                      }
                      onClick={() => {
                        setMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
              </div>
            ) : (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 text-sm font-semibold rounded-md ${
                    isActive
                      ? "text-red-500 bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          )}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
