import React from "react";

// images
import pic from "../images/head-pic.png";
import arrow from "../images/arrow.svg";

const Header = () => {
  return (
    <div className="header flex items-center justify-center gap-10 text-slate-300">
      <div className="mt-10 flex justify-center items-center">
        {/* picture & name */}
        <div className="pic-back relative -ml-20 mb-10">
          <div className="w-96">
            <img className="w-96" src={pic} alt="" />
          </div>
          <h3 className="absolute -top-4 -right-40 text-sm">
            Hello! I am{" "}
            <span className="text-indigo-500 text-lg font-semibold">
              shahyad karimi
            </span>
          </h3>
          <img className="absolute top-0 right-16" src={arrow} alt="" />
        </div>
        {/* description */}
        <div className="desc flex flex-col gap-2 -ml-5">
          <span className="text-sm">A Front-End Developer Who</span>
          <p className="text-5xl w-96 font-semibold leading-[60px] ">
            Judges a book by its{" "}
            <span className="circle relative text-indigo-500">cover</span>...
          </p>
          <span className="text-sm">
            because if the cover does not impress you what else can?
          </span>
        </div>
      </div>
      {/* about me */}
      <div className="about-me">
        <h2 className="text-4xl font-semibold relative">About Me</h2>
        <p className="text-xl mt-5 w-[400px] text-justify leading-8">
          I am a creative front-end developer who is interested in progress and
          growth in this field & learn new tech, team working and the challenges
          I face and solve in my work.
        </p>
      </div>
    </div>
  );
};

export default Header;
