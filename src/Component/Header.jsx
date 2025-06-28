import React, { use } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import mainImg from "../assets/mainImg.png";
import ThemeContext from "../Context/ThemeContext";

const Header = () => {
  const { isDark } = use(ThemeContext);

  const headingColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-700";
  const btnColor = isDark
    ? "bg-amber-400 hover:bg-amber-500 text-black"
    : "bg-teal-500 hover:bg-teal-600 text-white";
  const socialText = isDark ? "text-white" : "text-black";

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row items-center justify-between p-8  ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className={`text-2xl ${subTextColor}`}>Hello!</h2>
        <h1 className={`text-5xl font-bold ${headingColor}`}>
          I'm{" "}
          <span className={isDark ? "text-amber-500" : "text-teal-500"}>Asha</span>,<br />
          <span className={headingColor}>Product Designer</span>
        </h1>

        <p className={`max-w-md ${subTextColor}`}>
          Hey, are you looking for a product designer to build your brand and
          grow your business? Let’s shake hands with me.
        </p>

        <button className={`btn w-fit ${btnColor}`}>Let’s Talk</button>

        {/* Developer Info */}
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full ring-2 ring-orange-500"
            src="/your-image.jpg"
            alt="Profile"
          />
          <div>
            <p className={`text-sm ${subTextColor}`}>
              Based in 🇧🇩 <span className="font-bold text-white">Bangladesh</span>
            </p>
            <p className={`text-sm ${subTextColor}`}>
              I’m also{" "}
              <span className="text-primary font-semibold">webflow</span> developer.
            </p>
          </div>
        </div>

        <button
          className={`px-5 py-2 rounded-full font-semibold mt-6 ${btnColor}`}
        >
          Hire Me
        </button>

        <a
          href="https://dribbble.com/tazrin"
          className={`text-sm underline ${
            isDark ? "text-pink-300" : "text-pink-600"
          }`}
        >
          www.dribbble.com/tazrin
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col items-center justify-center relative mt-10 md:mt-0">
        <div className="relative z-10">
          <img
            src={mainImg}
            alt="Hero"
            className="rounded-full w-72 h-72 object-cover ring-4 ring-offset-2 ring-teal-400 dark:ring-amber-400"
          />
        </div>

        <div className={`absolute bottom-5 text-center`}>
          <p className={`text-xl font-bold ${headingColor}`}>10 Years</p>
          <p className={`text-sm ${subTextColor}`}>Expert</p>
        </div>

        <div
          className={`absolute bottom-5 right-10 flex gap-3 ${socialText}`}
        >
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Header;
