import { useContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ThemeContext from "../Context/ThemeContext";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const {isDark} = useContext(ThemeContext)

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  console.log(projects)
  return (
   <div className="">
     <section id="projects" className={`grid grid-cols-1 scroll-mt-[100px] gap-5  rounded-2xl ${isDark ? 'bg-gray-900': 'bg-gray-200'}  p-8 mt-6`}>
      {projects.map((project) => <ProjectCard project={project} key={project.id}></ProjectCard>)}
    </section>
   </div>
  );
};
