import React from "react";
import ProgressAnime from "./ProgressAnime";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progressbar = ({ value, skill }) => {
  const path = "#4a00a5";
  const trail = "#2c0060";
  const text = "#cbd5e1";

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="w-28">
        <ProgressAnime valueStart={0} valueEnd={value}>
          {(value) => (
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              styles={buildStyles({
                pathTransitionDuration: 1,
                pathColor: path,
                textColor: text,
                trailColor: trail,
                backgroundColor: "",
              })}
            />
          )}
        </ProgressAnime>
      </div>
      <span className="font-semibold">{skill}</span>
    </div>
  );
};

export default Progressbar;
