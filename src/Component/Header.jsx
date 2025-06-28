import React, { use } from "react";
import mainImg from "../assets/afroja.png.jpg";
import ThemeContext from "../Context/ThemeContext";
import HeroIntro from "./HeroIntro";
import { motion } from "framer-motion";

const Header = () => {
  const { isDark } = use(ThemeContext);
 // Tailwind color hex equivalents
 const shadowColor = isDark ? "#f59e0b" : "#0f766e"; // amber-500 or teal-800

  return (
    <div
      className={` flex flex-col md:flex-row justify-between  mt-6 rounded-2xl py-8 ${
        isDark ? "bg-gray-900 px-14" : "bg-gray-200 px-14"
      }`}
    >
      {/* Left Section */}
      <HeroIntro></HeroIntro>
      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col items-center justify-center relative mt-10">
      <motion.img
        src={mainImg}
        alt="Hero"
        className="rounded-full w-72 h-72 object-cover"
        style={{
          // initial static shadow
          boxShadow: `0px 0px 20px ${shadowColor}80`, // 80 for opacity
        }}
        animate={{
          // animate between small and large shadow
          boxShadow: [
            `0px 0px 20px ${shadowColor}40`,
            `0px 0px 40px ${shadowColor}80`,
            `0px 0px 20px ${shadowColor}40`,
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
    </div>
  );
};

export default Header;
