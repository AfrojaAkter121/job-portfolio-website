import React, { useContext, useState } from "react";
import { FaCode, FaFileContract, FaHome, FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import ThemeContext from "../Context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsMenuButton, BsMenuButtonFill } from "react-icons/bs";
import { RiMenuFold2Fill } from "react-icons/ri";
import { SiSkillshare } from "react-icons/si";

const Navbar = () => {
  const { toggleTheme, isDark,sidebar,  toggleSidebar } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const baseClass = `p-3 rounded-full transition duration-300 ease-in-out ${
    isDark ? "text-white" : "text-gray-800"
  }`;

  const activeClass = isDark ? "bg-amber-500 text-gray-800" : "bg-teal-300";
  const toggleBg = isDark ? "hover:text-amber-400" : "hover:text-teal-600";
  
  const navBg = isDark ? "bg-gray-900" : "bg-gray-200";
  const navText = isDark ? "text-white" : "text-black";

  // সব লিঙ্কেই icon থাকছে, name দিতে হবে যদি icon না থাকে
  const navItems = [
    { icon: FaHome, to: "home", label: "Home" },
    { icon: FaUserAlt, to: "about", label: "About" },
    { icon: SiSkillshare, to: "skills", label: "Skills" },
    { icon: FaCode, to: "projects", label: "Projects" },
    { icon: FaFileContract, to: "contact", label: "Contact" },
  ];

  return (
    <div className="animated-border2 rounded-2xl p-[1px] sticky top-0 z-50">
       <nav  className={`px-8  py-3 rounded-[0.9rem] shadow-sm -mt-2 ${
      navBg
    }`}>
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
            <span className={`${isDark ? "text-amber-500" : "text-teal-600"}`}>
              {"<"}
            </span>
            Afroja
            <span className={`${isDark ? "text-amber-400" : "text-teal-600"}`}>
              |Crafts
            </span>
            <span className={`${isDark ? "text-white" : "text-gray-900"}`}>
              {"/>"}
            </span>
          </h1>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(({ icon: Icon, to }) => (
            <a href={`#${to}`}
              activeClass={activeClass}
              className={baseClass}
            >
              <Icon className="text-2xl" />
            </a>
          ))}

          {/* Dark Mode Toggle */}
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
          <button onClick={toggleSidebar}>
          <RiMenuFold2Fill size={25} />
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
        <div className={`md:hidden font-semibold mt-4 ${navText} flex flex-col gap-3`}>
          {navItems.map(({ icon: Icon, to }) => (
            <a href={`#${to}`}
              activeClass={activeClass}
              className={baseClass}
            >
              <Icon className="text-2xl" />
            </a>
          ))}
          <div className="pl-8 mt-2">
            <button className={`text-xl ${toggleBg}`} onClick={toggleTheme}>
              {isDark ? "🌞" : "🌜"}
            </button>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
