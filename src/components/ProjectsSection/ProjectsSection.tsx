import projects from "../../utils/projects";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-defaultBg">
      <div className="containermx-auto px-4">
        <h2 className="text-center text-4xl font-semibold text-slate-50 tracking-wider mb-4">
          My Projects
        </h2>
        <p className="text-center text-lg font-light text-slate-200 tracking-wide mb-16">
          A collection of projects I've worked on
        </p>

        <div className="flex flex-col space-y-8">
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
