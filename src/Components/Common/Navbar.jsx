import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../assets/hero/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [intlOpen, setIntlOpen] = useState(false);
  const navigate = useNavigate();

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
    {
      label: "International Services",
      dropdown: [
        { label: "International Adoptions", path: "/adoptions" },
        {
          label: "Divorce & Family Law",
          path: "/divorce-family",
        },
        { label: "Property & Legal Disputes", path: "/property" },
      ],
    },
    { label: "Blog", path: "/blog" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-base md:text-lg font-bold">
            Walshken<span className="text-red-600">Immigration</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() =>
                  item.label === "Services"
                    ? setServicesOpen(true)
                    : setIntlOpen(true)
                }
                onMouseLeave={() =>
                  item.label === "Services"
                    ? setServicesOpen(false)
                    : setIntlOpen(false)
                }
              >
                <span className="flex items-center cursor-pointer text-[14px] font-medium text-black hover:text-red-600">
                  {item.label} <FaChevronDown className="ml-1 text-xs" />
                </span>
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 ${
                    (item.label === "Services" && servicesOpen) ||
                    (item.label === "International Services" && intlOpen)
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
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
            )
          )}
        </nav>

        {/* Buttons */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 px-4 pb-3">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <span className="block py-1.5 text-sm font-medium text-gray-800">
                  {item.label}
                </span>
                {item.dropdown.map((subItem, subIndex) => (
                  <NavLink
                    key={subIndex}
                    to={subItem.path}
                    className="block pl-4 py-1.5 text-sm text-gray-600 hover:text-red-600"
                    onClick={() => setMenuOpen(false)}
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
                  `block py-1.5 border-b text-sm ${
                    isActive ? "text-red-600 font-semibold" : "text-gray-800"
                  } hover:text-red-600`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
