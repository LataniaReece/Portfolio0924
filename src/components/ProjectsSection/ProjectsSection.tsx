import { motion } from "framer-motion";
import projects from "../../utils/projects";
import SectionHeader from "../SectionHeader";
import SectionSubHeading from "../SectionSubHeading";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-defaultBg">
      <div className="container mx-auto">
        <SectionHeader heading="Selected Projects" />
        <SectionSubHeading subHeading="Projects that show how I think through product, engineering, and user experience" />
        <div className="flex flex-col space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Project project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
