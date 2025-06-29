import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  console.log(projects)
  return (
    <section id="projects" className="grid grid-cols-1 mt-6 scroll-mt-[100px] gap-5">
      {projects.map((project) => <ProjectCard project={project} key={project.id}></ProjectCard>)}
    </section>
  );
};
