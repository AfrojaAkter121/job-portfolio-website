import { FaExternalLinkAlt, FaCode, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="bg-slate-900 rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6 items-start hover:shadow-indigo-600/10 transition"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full md:w-1/3 lg:flex-1 h-60 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold text-indigo-300">{project.name}</h3>
        <p className="text-gray-300 text-sm">{project.description}</p>

        {/* Feature list (if exists) */}
        {project.features && project.features.length > 0 && (
          <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Technology Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech_stack?.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-700 text-white text-xs px-3 py-1 rounded-full"
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
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm transition flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
          <a
            href={project.code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm transition flex items-center gap-2"
          >
            <FaCode /> GitHub
          </a>
          <Link
            to={`/project/${project.id}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm transition flex items-center gap-2"
          >
            <FaInfoCircle /> Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
