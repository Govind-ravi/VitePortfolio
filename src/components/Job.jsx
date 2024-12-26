import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const job = {
  role: [
    "J",
    "r",
    ".",
    ";",
    "F",
    "u",
    "l",
    "l",
    ";",
    "S",
    "t",
    "a",
    "c",
    "k",
    ";",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ],
  name: [
    "C",
    "o",
    "n",
    "n",
    "e",
    "c",
    "t",
    "i",
    "n",
    "g",
    ";",
    "D",
    "o",
    "t",
    "s",
    " ",
  ],
  duration: [
    "(",
    "O",
    "c",
    "t",
    ";",
    "2",
    "0",
    "2",
    "4",
    ";",
    "-",
    ";",
    "D",
    "e",
    "c",
    ";",
    "2",
    "0",
    "2",
    "4",
    ")",
  ],
  info1: [
    "Independently;",
    "spearheaded;",
    "web;",
    "development;",
    "efforts;",
    "in;",
    "a;",
    "dynamic;",
    "startup;",
    "environment.",
  ],
  point1: [
    "Designed;",
    "and;",
    "developed;",
    "a;",
    "fully;",
    "functional;",
    "web;",
    "platform;",
    "using;",
    "the;",
    "MERN;",
    "stack.",
  ],
  point2: [
    "Handled;",
    "end-to-end;",
    "development,;",
    "from;",
    "ideation;",
    "to;",
    "deployment,;",
    "without;",
    "a;",
    "team.",
  ],
  point3: [
    "Collaborated;",
    "directly;",
    "with;",
    "stakeholders;",
    "to;",
    "align;",
    "technical;",
    "solutions;",
    "with;",
    "business;",
    "goals.",
  ],
  quote: [
    "“Being;",
    "the;",
    "sole;",
    "web;",
    "developer,;",
    "I;",
    "took;",
    "full;",
    "ownership;",
    "of;",
    "the;",
    "project,;",
    "showcasing;",
    "my;",
    "ability;",
    "to;",
    "adapt,;",
    "learn,;",
    "and;",
    "deliver;",
    "under;",
    "minimal;",
    "supervision.”",
  ],
};

function Job() {
  const themeColor = useContext(ThemeContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsText(true);
    }, 500);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#2c2c2c]/50">
      <div
        style={{
          backgroundColor: themeColor,
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: 0.7,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl z-0"
      ></div>
      <div className="grid-container">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`flex -mt-4 ${i % 2 === 0 ? "-ml-12" : "-ml-[16px]"}`}
          >
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="hex w-[60px] flex-shrink-0 h-[70px] m-[1px]"
              ></div>
            ))}
          </div>
        ))}
      </div>
      {isText && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-secondaryText space-y-1 xxs:space-y-2 xs:space-y-4 mb-40 w-[97%] sm:w-[90%] lg:w-1/2">
          <h1 className="text-2xl xxs:text-3xl xs:text-4xl md:text-5xl font-semibold flex">
            {job.role.map((char, i) => (
              <span
                className="custom-span"
                style={{ "--i": i }}
                data-delay
                key={i}
              >
                {char.replace(";", "\u00A0")}
              </span>
            ))}
          </h1>
          <div>
            <h2 className="text-xl xxs:text-2xl sm:text-3xl font-semibold flex">
              {job.name.map((char, i) => (
                <span
                  className="custom-span"
                  style={{ "--i": i }}
                  data-delay
                  key={i}
                >
                  {char.replace(";", "\u00A0")}
                </span>
              ))}
            </h2>
            <p className="text-sm xxs:text-lg sm:text-xl flex">
              {job.duration.map((char, i) => (
                <span
                  className="custom-span"
                  style={{ "--i": i }}
                  data-delay
                  key={i}
                >
                  {char.replace(";", "\u00A0")}
                </span>
              ))}
            </p>
          </div>
          <p className="text-lg leading-5">
            {job.info1.map((char, i) => (
              <span
                className="custom-span"
                style={{ "--i": i }}
                data-delay
                key={i}
              >
                {char.replace(";", "\u00A0")}
              </span>
            ))}
          </p>
          <ol className="list-disc ml-4">
            <li className="">
              {job.point1.map((char, i) => (
                <span
                  className="custom-span"
                  style={{ "--i": i }}
                  data-delay
                  key={i}
                >
                  {char.replace(";", "\u00A0")}
                </span>
              ))}
            </li>
            <li className="">
              {job.point2.map((char, i) => (
                <span
                  className="custom-span"
                  style={{ "--i": i }}
                  data-delay
                  key={i}
                >
                  {char.replace(";", "\u00A0")}
                </span>
              ))}
            </li>
            <li className="">
              {job.point3.map((char, i) => (
                <span
                  className="custom-span"
                  style={{ "--i": i }}
                  data-delay
                  key={i}
                >
                  {char.replace(";", "\u00A0")}
                </span>
              ))}
            </li>
          </ol>
          <p className="italic ">
            {job.quote.map((char, i) => (
              <span
                className="custom-span"
                style={{ "--i": i }}
                data-delay
                key={i}
              >
                {char.replace(";", "\u00A0")}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default Job;
