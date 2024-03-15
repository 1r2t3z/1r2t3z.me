import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 mt-[-400px]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects:
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="NajduPraxi"
          description="Having hard time finding an internship? NajduPraxi is here to help everyone find the best internship with no stress!"
          link="https://najdupraxi.cz"
          showlink="najdupraxi.cz"
        />
        <ProjectCard
          src="/AxisLogo.png"
          title="The-Axis"
          description="Small team of people who are developing software and hardware that is helping people in challenging environments and everyday life."
          link="https://the-axis.eu"
          showlink="the-axis.eu"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Coming Soon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="#"
          showlink="Coming Soon"
        />
      </div>
    </div>
  );
};

export default Projects;
