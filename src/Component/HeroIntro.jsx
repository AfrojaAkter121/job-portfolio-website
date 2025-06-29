import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const HeroIntro = () => {
  const { isDark } = useContext(ThemeContext);
  const headingColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-700";
  const btnColor = isDark
    ? "bg-amber-400 hover:bg-amber-500 text-black"
    : "bg-teal-500 hover:bg-teal-600 text-white";
  const commonClass = `p-2 rounded-full text-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-110`;

  const iconStyle = isDark
    ? "bg-amber-400 text-gray-900"
    : "bg-teal-400 text-gray-900";

  return (
    <motion.div
      className=" space-y-6 mt-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className={`text-2xl ${subTextColor}`}>Hello!</h2>

      <h1 className={`text-3xl font-semibold leading-snug  ${headingColor}`}>
        I'm{" "}
        <span className={isDark ? "text-amber-500" : "text-teal-500"}>
          Afroja
        </span>
        ,<br />
       <span className={`${headingColor}`}>
       <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "Frontend Enthusiast",
            2000,
            "React.js Lover",
            2000,
            "JavaScript Explorer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className={`block mt-2`}
           
        />
       </span>
      </h1>

      <p className={`max-w-md ${subTextColor}`}>
        I'm a passionate developer who crafts full-stack web applications using
        the MERN stack. I love turning complex problems into simple, beautiful,
        and intuitive interfaces.
      </p>

      <div className="flex gap-4 items-center justify-start">
        <div className={`${commonClass} ${iconStyle}`}>
          <FaFacebook />
        </div>
        <div className={`${commonClass} ${iconStyle}`}>
          <FaWhatsapp />
        </div>
        <div className={`${commonClass} ${iconStyle}`}>
          <FaGithub />
        </div>
        <div className={`${commonClass} ${iconStyle}`}>
          <FaLinkedin />
        </div>
      </div>

      <motion.a
        href="/Afroja-CV.pdf" // তোমার CV এর path এখানে দাও
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`btn w-fit flex items-center gap-2 px-5 py-2 rounded-md font-semibold shadow-md ${btnColor} transition-all duration-300`}
      >
        <FaDownload className="text-lg" />
        Download CV
      </motion.a>
    </motion.div>
  );
};

export default HeroIntro;
