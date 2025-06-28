import React, { use, useState } from "react";
import { FaCode, FaHome, FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import ThemeContext from "../Context/ThemeContext";
import CustomNavLink from "./CustomNavlink";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { toggleTheme, isDark } = use(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navBg = isDark ? "bg-gray-900" : "bg-gray-100";
  const navText = isDark ? "text-white" : "text-black";
  const toggleBg = isDark ? "hover:text-amber-400" : "hover:text-teal-600";

  const links = (
    <div className="flex flex-col md:flex-row gap-3 text-lg px-8 py-2">
      <CustomNavLink address="/" icon={FaHome} />
      <CustomNavLink address="about" icon={FaUserAlt} />
      <CustomNavLink address="skill" icon={GiSkills} />
      <CustomNavLink address="project" icon={FaCode} />
    </div>
  );

  return (
    <nav className={`px-8 py-2 -mt-1 rounded-2xl shadow-sm ${navBg}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
      className="flex items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1
        className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-700"
        }`}
      >
        <span className={`${isDark?'text-amber-500': 'text-teal-600'}`}>{`<`}</span>
        Afroja<span className={`${isDark ? 'text-amber-400': 'text-teal-600'}`}>|Crafts</span>
        <span className={`${isDark?'text-white': 'text-gray-900'}`}>{`/>`}</span>
      </h1>
    </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links}

          {/* Dark Mode Toggle with Icon */}
          <button
            onClick={toggleTheme}
            className={`text-2xl p-2 rounded-full border transition-colors duration-300 ${
              isDark
                ? "bg-amber-400 text-black border-amber-300 hover:bg-amber-500"
                : "bg-teal-500 text-white border-teal-300 hover:bg-teal-600"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            className={`transition-colors ${toggleBg}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={`md:hidden font-semibold mt-4 ${navText}`}>
          {links}
          <div className="pl-8 mt-2">
            <button className={`text-xl ${toggleBg}`} onClick={toggleTheme}>
              {isDark ? "🌞" : "🌜"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
