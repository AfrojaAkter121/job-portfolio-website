// src/pages/ProjectDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const ProjectDetails = () => {
    const [projectData, setProjectData] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center">Project not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <img src={project.image} alt={project.name} className="w-full rounded-xl" />
      <h2 className="text-3xl font-bold">{project.name}</h2>
      <p className="text-lg">{project.description}</p>
      <div>
        <h3 className="font-semibold mt-4">Future Ideas</h3>
        <p>{project.future_idea}</p>
      </div>
      <div>
        <h3 className="font-semibold mt-4">Problems Faced & Solutions</h3>
        <ul className="list-disc list-inside space-y-2">
          {project.problems_faced.map((item, idx) => (
            <li key={idx}>
              <strong>Problem:</strong> {item.problem} <br />
              <strong>Solution:</strong> {item.solution}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mt-4">Tech Stack</h3>
        <ul className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech, idx) => (
            <li key={idx} className="bg-gray-200 text-sm px-2 py-1 rounded">{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 mt-6">
        <a href={project.live_link} target="_blank" className="btn btn-primary">Live Site</a>
        <a href={project.code_link} target="_blank" className="btn btn-secondary">Code</a>
        <a href={"/"} target="_blank" className="btn btn-primary">Back</a>
      </div>
    </div>
  );
};

export default ProjectDetails;
