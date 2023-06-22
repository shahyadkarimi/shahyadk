import React, { useEffect, useState } from "react";

// components
import Progressbar from "./Progressbar";

import skills from "../images/Skills.svg"

const Skills = () => {
  return (
    <div className="skills mb-10 text-slate-300 flex flex-col items-center -mt-7">
      <h2 className="text-4xl font-semibold relative">My Skills</h2>
      <div className="my-skills flex gap-7 mt-10">
        {/* html & css */}
        <div className="skill-box html-css w-44 h-48 rounded-xl flex justify-center items-center">
          <Progressbar value={95} skill={"HTML & CSS"} />
        </div>
        {/* tailwind css */}
        <div className="skill-box tailwindcss w-44 h-48 rounded-xl flex justify-center items-center">
        <Progressbar value={95} skill={"TailwindCSS"} />
        </div>

        {/* javascript */}
        <div className="skill-box javascript w-44 h-48 rounded-xl flex justify-center items-center">
        <Progressbar value={90} skill={"Javascript"} />
        </div>

        {/* react js */}
        <div className="skill-box react w-44 h-48 rounded-xl flex justify-center items-center">
        <Progressbar value={90} skill={"React JS"} />
        </div>

        {/* wordpress */}
        <div className="skill-box wordpress w-44 h-48 rounded-xl flex justify-center items-center">
        <Progressbar value={90} skill={"Wordpress"} />
        </div>
        {/* Github */}
        <div className="skill-box wordpress w-44 h-48 rounded-xl flex justify-center items-center">
        <Progressbar value={85} skill={"Git/Github"} />
        </div>
      </div>
      <img src={skills} className="w-[1024px] mt-10" alt="" />
    </div>
  );
};

export default Skills;
