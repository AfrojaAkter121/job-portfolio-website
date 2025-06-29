import React, { useContext } from "react";
import { FaExternalLinkAlt, FaCode, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";
import ThemeContext from "../Context/ThemeContext";

const ProjectCard = ({ project }) => {
  const { isDark } = useContext(ThemeContext);

  // Background and text colors based on theme
  const bgColor = isDark ? "bg-gray-900" : "bg-gray-200";
  const textColor = isDark ? "text-white" : "text-gray-900";

  // For smaller text, lighter/darker accordingly
  const subTextColor = isDark ? "text-white" : "text-gray-900";

  // Badge colors
  const badgeBg = isDark ? "bg-amber-500" : "bg-teal-800";
  const badgeText = isDark ? "text-black" : "text-gray-100";

  // Button colors
  const liveBtnBg = isDark ? "bg-indigo-800 hover:bg-amber-600" : "bg-indigo-800  hover:bg-teal-600";
  const codeBtnBg = isDark ? "bg-rose-500 hover:bg-amber-600" : "bg-rose-500 hover:bg-teal-600";
  const detailsBtnBg = isDark ? "bg-cyan-400 text-black hover:bg-amber-600" : "bg-cyan-400 hover:bg-teal-600";

  return (
    <div className="animated-border2 p-[2px] ">
          <div
      key={project.id}
      className={`${bgColor} rounded-xl  mx-auto shadow-lg shadow-gray-700 p-6 flex flex-col md:flex-row gap-6 items-start transition`}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full md:w-1/3 lg:flex-1 h-60 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1 space-y-4">
        <h3 className={`text-2xl font-bold ${textColor}`}>{project.project_name}</h3>
        <p className={`text-sm ${subTextColor}`}>{project.description}</p>


        {/* Technology Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech_stack?.map((tech, index) => (
            <span
              key={index}
              className={`${badgeBg} ${badgeText}  text-xs px-3 py-1 rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${liveBtnBg} text-white px-4 py-1.5 rounded-md text-sm transition flex items-center gap-2`}
          >
            <FaExternalLinkAlt /> Live Site
          </a>
          <a
            href={project.code_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${codeBtnBg} text-white px-4 py-1.5 rounded-md text-sm transition flex items-center gap-2`}
          >
            <FaCode /> GitHub
          </a>
          <Link
            to={`/project/${project.id}`}
            className={`${detailsBtnBg} px-4 py-1.5 rounded-md text-sm transition flex items-center gap-2`}
          >
            <FaInfoCircle /> Details
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
