import { FC } from "react";
import { ProjectType } from "../../types/Project";
import styles from "./Project.module.css";

interface ProjectProps {
  project: ProjectType;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <article
      className={`soft-panel relative mx-auto overflow-hidden rounded-[30px] ${
        project.featured
          ? "grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_460px]"
          : "flex flex-col md:flex-row"
      }`}
    >
      {/* Left Side Content */}
      <div
        className={`flex flex-col order-2 ${
          project.featured
            ? "w-full px-5 py-6 md:px-8 md:py-8 lg:order-1"
            : "w-full md:w-8/12 px-4 py-5 md:px-6 md:py-6 md:order-1"
        }`}
      >
        <div>
          {project.featured && (
            <p className="mb-4 inline-flex w-fit rounded-full border border-primaryColor/40 bg-primaryColor/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primaryColorLight">
              Featured Project
            </p>
          )}
          <h3
            className={`mb-3 text-slate-50 ${
              project.featured
                ? "font-display text-4xl md:text-5xl"
                : "text-2xl md:text-3xl font-semibold"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mb-5 tracking-wide text-slate-300 ${
              project.featured ? "max-w-2xl text-lg leading-8" : "leading-7"
            }`}
          >
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-3 mb-2 flex flex-wrap gap-4 md:mt-8 md:mb-0">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primaryColor px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#241e20] transition hover:bg-primaryColorLight"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:bg-white/10"
          >
            View Source
          </a>
        </div>
      </div>
      {/* Right Side Image */}
      <div
        className={`${styles.imageContainer} relative order-1 ${
          project.featured
            ? "min-h-[300px] lg:order-2 lg:min-h-full"
            : "h-56 w-full md:h-auto md:w-[40%] md:order-2"
        }`}
      >
        <img className={styles.image} src={project.image} alt={project.title} />

        {/* Overlay on top of the image */}
        <div
          className={`${styles.imageOverlay} absolute z-10`}
        ></div>
      </div>
    </article>
  );
};

export default Project;
