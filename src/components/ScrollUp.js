import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 200 ? setShowBtn(true) : setShowBtn(false);
    });
  }, [showBtn]);

  const scrollHandler = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      {showBtn && (
        <button
          onClick={scrollHandler}
          className="scroll-up w-12 h-12 flex bottom-12 justify-center items-center fixed rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            className="w-6 h-6 stroke-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollUp;
