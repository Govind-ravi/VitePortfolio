import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

function ExpandingComponent({ tag }) {
  const themeColor = useContext(ThemeContext);
  const [isEnter, setIsEnter] = useState(false);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsEnter(true);
    }, 100);

    setTimeout(() => {
      setIsExit(true);
    }, 2000);
  }, []);
  return (
    <div
      style={{ backgroundColor: themeColor }}
      className={`${
        isEnter
          ? `${
              isExit
                ? "-top-full w-[50vw] rounded-b-full"
                : "top-0 w-[200vw] rounded-none"
            }`
          : "top-full w-[50vw] rounded-t-full"
      } h-screen fixed left-1/2 -translate-x-1/2 transition-all overflow-hidden duration-[1s] z-[110]`}
    >
      <h1 className="text-4xl md:text-5xl font-semibold absolute w-[80vw] text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {tag}
      </h1>
    </div>
  );
}

export default ExpandingComponent;
