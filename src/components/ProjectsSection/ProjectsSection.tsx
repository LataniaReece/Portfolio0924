import projects from "../../utils/projects";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-defaultBg py-12">
      <div className="containermx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-black mb-10">
          My Work
        </h2>
        <p className="text-center text-lg text-gray-400 mb-16">
          A collection of projects I've worked on.
        </p>

        <div className="flex flex-col space-y-8">
          {projects.map((project, index) => (
            <Project project={project} key={project.title} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
