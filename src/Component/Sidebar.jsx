import React, { use } from "react";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import myImg from "../assets/afroja.png.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { isDark } = use(ThemeContext);

  const bgColor = isDark ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-800";
  const borderColor = isDark ? "border-amber-500" : "border-teal-600";
  const iconColor = isDark ? "text-amber-500" : "text-teal-700";
  const shadowColor = isDark ? "shadow-amber-500" : "shadow-teal-800";
  const cvTextColor = isDark ? "text-amber-400" : "text-teal-800";
  const socialBg = isDark
    ? "bg-amber-100 text-amber-950"
    : "bg-teal-100 text-teal-950";

  // Progress bar color variants based on theme
  const skillBars = isDark
    ? [
        "bg-amber-700",
        "bg-amber-600",
        "bg-amber-900",
        "bg-amber-700",
        "bg-amber-800",
        "bg-amber-500",
        "bg-amber-400",
      ]
    : [
        "bg-teal-700",
        "bg-teal-600",
        "bg-teal-900",
        "bg-teal-700",
        "bg-teal-800",
        "bg-teal-500",
        "bg-teal-400",
      ];

  const skills = [
    { skill: "Html", percent: 85 },
    { skill: "Css", percent: 65 },
    { skill: "Tailwind", percent: 95 },
    { skill: "JavaScript", percent: 85 },
    { skill: "React", percent: 90 },
    { skill: "MongoDB", percent: 55 },
    { skill: "Node Js", percent: 45 },
  ];

  return (
    <div
      className={`rounded-4xl  overflow-hidden flex flex-col h-full ${bgColor} p-4`}
    >
      {/* Sticky Profile Section */}
      <div
        className={`flex flex-col items-center sticky top-0 ${bgColor} z-10 pb-4  ${borderColor}`}
      >
        <img
          src={myImg}
          alt="Profile"
          className={`w-28 h-28 rounded-full shadow-md ${shadowColor} object-cover`}
        />
        <h2 className={`mt-4 text-xl font-bold ${textColor}`}>AfrojaCrafts</h2>
        <p className={`text-sm ${subTextColor} text-center leading-tight`}>
          Front-end Developer <br /> UI/UX Designer
        </p>
      </div>

      {/* Scrollable Section */}
      <div className="overflow-y-auto flex-grow scrollbar-hide mt-4">
        {/* Address */}
        <div
          className={`flex flex-col justify-center items-start border ${borderColor} rounded-2xl p-5 mb-4`}
        >
          <h1 className={`${textColor}`}>
            <span className="font-semibold">Name : </span>
            <span className={subTextColor}>Afroja Akter</span>
          </h1>
          <h1 className={`${textColor}`}>
            <span className="font-semibold">Country : </span>
            <span className={subTextColor}>Bangladesh</span>
          </h1>
          <h1 className={`${textColor}`}>
            <span className="font-semibold">Age : </span>
            <span className={subTextColor}>18</span>
          </h1>
        </div>

        {/* Skills */}
        <div className="space-y-4 ">
          {skills.map((item, i) => (
            <div key={i}>
              <div className={`flex justify-between text-sm ${subTextColor}`}>
                <span>{item.skill}</span>
                <span>{item.percent}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percent}%` }}
                  transition={{
                    duration: 4,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  className={`${skillBars[i]} h-2 rounded-full`}
                />
              </div>
            </div>
          ))}

          {/* Skill list */}
          <div className={`space-y-2 text-sm my-6 ${subTextColor}`}>
            {[
              "Bootstrap, Tailwind",
              "Html, Css, Js",
              "Firebase",
              "GIT knowledge",
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-2">
                <BsCheck2Circle className={iconColor} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
          {/* Sticky Footer / Social Section */}
          <div
            className={`px-6  ${bgColor} z-10  ${borderColor}`}
          >
            <div
              className={`text-sm font-semibold text-center mb-3 ${cvTextColor}`}
            >
              DOWNLOAD CV <span className="ml-1">📄</span>
            </div>

            <div className="flex justify-center gap-4 text-xl">
              {[FaLinkedinIn, FaWhatsapp, FaGithub, FaSquareFacebook].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className={`${socialBg} w-8 h-8 flex justify-center items-center rounded-full p-2`}
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
