import React from "react";

import Project from "./Project"

const Projects = () => {
  return (
    <div className="projects relative my-20 flex flex-col gap-16">
      <h2 className="project-title text-4xl relative self-center text-slate-300 font-semibold ">Projects</h2>
      <Project descPos={"left"} />
      <Project descPos={"right"} />
      <Project descPos={"left"} />
      <Project descPos={"right"} />
    </div>
  );
};

export default Projects;
