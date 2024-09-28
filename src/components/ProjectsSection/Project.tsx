import { FC } from "react";
import { ProjectType } from "../../types/Project";
import styles from "./Project.module.css";

interface ProjectProps {
  project: ProjectType;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="relative border-2 border-secondaryColorDark shadow-white rounded-xl overflow-hidden mx-auto flex flex-col md:flex-row">
      {/* Left Side Content */}
      <div className="w-full md:w-8/12 py-2 px-3 md:py-6 md:px-6 flex flex-col order-2 md:order-1">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-slate-50">
            {project.title}
          </h3>
          <p className="text-slate-300 tracking-wide mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#BFBFD9] text-gray-800 text-xs font-medium px-3 py-1 rounded-full border border-[#BFBFD9]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-2 mb-2 md:mt-8 md:mb-0 flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-500 text-slate-100 px-4 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900 transition shadow-whiteLight"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-100 text-black px-4 py-2 rounded-lg hover:bg-slate-400 hover:text-white transition shadow-whiteLight"
          >
            View Source
          </a>
        </div>
      </div>
      {/* Right Side Image */}
      <div
        className={`${styles.imageContainer} relative w-full h-48 md:h-auto md:w-[40%] order-1 md:order-2`}
      >
        <img className={styles.image} src={project.image} alt={project.title} />

        {/* Overlay on top of the image */}
        <div
          className={`${styles.imageOverlay} absolute inset-0 bg-black bg-opacity-50 z-10`}
        ></div>
      </div>
    </div>
  );
};

export default Project;
