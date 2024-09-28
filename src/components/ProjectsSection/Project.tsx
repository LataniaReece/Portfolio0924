import { FC } from "react";
import { ProjectType } from "../../types/Project";
import styled from "styled-components";

const StyledProjectImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 20% 50%, 0 100%, 100% 100%, 100% 0);
`;

const ImageContainer = styled.div<{
  darkerShade: string;
  lighterShade: string;
}>`
  position: relative;
  width: 40%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${(props) => props.darkerShade} 50%,
      ${(props) => props.lighterShade} 50%
    ); /* Red on top, Yellow on bottom */
    clip-path: polygon(
      0 0,
      20% 50%,
      0 100%,
      40% 100%,
      20% 50%,
      35% 0
    ); /* Purple hourglass shape */

    z-index: 20; /* Positioned behind the image */
    opacity: 0.7; /* Ensure full opacity */
  }
`;

interface ProjectProps {
  project: ProjectType;
  index: number;
}

const Project: FC<ProjectProps> = ({ project, index }) => {
  const isEvenIndex = index % 2 === 0;

  const darkerShade = "#6C7A89";
  const lighterShade = "#95A5A6";

  return (
    <div
      className="relative border border-gray-300 shadow-white rounded-lg overflow-hidden max-w-4xl mx-auto flex h-[325px]"
      style={{ backgroundColor: isEvenIndex ? "#E0E0E0" : "#D8E4DC" }}
    >
      {/* Left Side Content */}
      <div className="w-8/12 p-6 flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-2 text-black">{project.title}</h3>
        <p className="text-gray-500 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-500 text-black px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            View Source
          </a>
        </div>
      </div>
      {/* Right Side Image */}
      <ImageContainer darkerShade={darkerShade} lighterShade={lighterShade}>
        <StyledProjectImage src={project.image} alt={project.title} />

        {/* Overlay on top of the image */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 z-10"
          style={{
            clipPath: "polygon(0 0, 20% 50%, 0 100%, 100% 100%, 100% 0)",
          }}
        ></div>
      </ImageContainer>
    </div>
  );
};

export default Project;
