import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/hero/logo.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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
   { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const isDropdownActive = (dropdown) =>
    dropdown?.some((item) => location.pathname === item.path);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black shadow-md sticky top-0 z-50"
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
        <nav className="hidden lg:flex space-x-8 items-center">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span
                  className={`flex items-center cursor-pointer text-[15px] font-semibold relative ${
                    isDropdownActive(item.dropdown)
                      ? "text-red-500"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.label}
                  <FaChevronDown className="ml-1 text-xs" />
                  {/* Animated underline for active dropdown */}
                  {isDropdownActive(item.dropdown) && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 to-white rounded-full"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </span>
                {/* Dropdown Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: openDropdown === item.label ? 1 : 0,
                    y: openDropdown === item.label ? 0 : 10,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`absolute left-0 mt-2 w-56 bg-gray-900 shadow-lg rounded-lg py-2 border border-gray-700 ${
                    openDropdown === item.label ? "block" : "hidden"
                  }`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm font-medium rounded-md relative ${
                          isActive
                            ? "text-red-500 bg-gray-800"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`
                      }
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </motion.div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[15px] font-semibold transition-colors ${
                    isActive
                      ? "text-red-500"
                      : "text-white hover:text-gray-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-underline"
                        className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 to-white rounded-full"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="hidden lg:flex bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold px-4 py-2 rounded-md transition-colors"
          >
            Get A Quote
          </motion.button>

          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
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
          className="lg:hidden bg-gray-900 shadow-md mt-2 px-4 pb-3 rounded-b-lg border-t border-gray-800"
        >
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <span
                  className="flex justify-between items-center py-2 text-sm font-semibold text-white cursor-pointer"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                >
                  {item.label}
                  <FaChevronDown
                    className={`ml-1 text-xs transform transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </span>
                {openDropdown === item.label &&
                  item.dropdown.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={({ isActive }) =>
                        `block pl-4 py-1.5 text-sm rounded-md relative ${
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
                      {subItem.label}
                    </NavLink>
                  ))}
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 text-sm font-semibold rounded-md relative ${
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
