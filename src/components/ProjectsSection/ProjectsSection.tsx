import projects from "../../utils/projects";
import SectionHeader from "../SectionHeader";
import SectionSubHeading from "../SectionSubHeading";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-defaultBg">
      <div className="container mx-auto">
        <SectionHeader heading="My Projects" />
        <SectionSubHeading subHeading="A collection of projects I've worked on" />
        <div className="flex flex-col space-y-10">
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
