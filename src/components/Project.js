import React from "react";

import pic from "../images/site.PNG";

const Project = ({descPos}) => {
  return (
    <div className="project flex flex-row-reverse relative">
      <div className="pic w-[665px] relative h-[335px] bg-[#250053] rounded-3xl">
        <img
          className={`w-[630px] absolute ${descPos === "left" ? "right-0 rounded-br-3xl rounded-tl-3xl" : "left-0 rounded-bl-3xl rounded-tr-3xl"} bottom-0`}
          src={pic}
          alt=""
        />
        <div className="shadow-pic w-72 h-72 absolute left-2/4 -z-20 -translate-x-2/4 top-2/4 -translate-y-2/4  rounded-full bg-red-600"></div>
      </div>
      <div className={`project-desc flex flex-col gap-5 absolute top-2/4 -translate-y-2/4 ${descPos}-0`}>
        <h2 className={`project-name text-2xl font-semibold text-slate-300 ${descPos === "right" && "text-right"}`}>
          SPA Shopping Cart
        </h2>
        <div className="desc-box p-5">
          <p className="w-[565px] text-slate-300">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>
        <a
          href="https://google.com"
          className={`live-btn w-24 py-3 text-center text-lg text-slate-300 rounded-lg font-semibold ${descPos === "right" && "self-end"}`}
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default Project;
