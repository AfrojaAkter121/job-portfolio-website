import React, { use } from "react";
import mainImg from "../assets/mainImg.png";
import ThemeContext from "../Context/ThemeContext";
import HeroIntro from "./HeroIntro";

const Header = () => {
  const { isDark } = use(ThemeContext);


  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row justify-between  mt-6 rounded-2xl pt-8 ${
        isDark ? "bg-gray-900 px-14" : "bg-gray-100 px-14"
      }`}
    >
      {/* Left Section */}
      <HeroIntro></HeroIntro>
      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col items-center justify-between relative mt-10  ">
        <div className="relative z-10">
          <img
            src={mainImg}
            alt="Hero"
            className={`rounded-full w-72 h-72 object-cover shadow-2xl ${isDark ? 'shadow-amber-500':'shadow-teal-800'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
