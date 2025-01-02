import React, { useEffect, useState, useRef, useContext } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { ThemeContext } from "./ThemeProvider";
import { GiBottomRight3dArrow } from "react-icons/gi";

const tools = [
  {
    name: "React",
    symbol: <FaReact />,
    info: "The heart of modern websites, serving as my go-to library for building interactive frontends.",
  },
  {
    name: "Node.js",
    symbol: <FaNodeJs />,
    info: "A lightning-fast JavaScript runtime, powering the backend logic of my web applications.",
  },
  {
    name: "Express.js",
    symbol: <SiExpress />,
    info: "A minimal yet powerful framework, essential for crafting efficient RESTful APIs.",
  },
  {
    name: "MongoDB",
    symbol: <SiMongodb />,
    info: "A flexible and scalable NoSQL database, perfect for storing and managing app data.",
  },
  {
    name: "HTML",
    symbol: <FaHtml5 />,
    info: "The backbone of every webpage, used to structure content and layouts.",
  },
  {
    name: "CSS",
    symbol: <FaCss3 />,
    info: "The styling tool for web pages, shaping designs into visually appealing interfaces.",
  },
  {
    name: "JavaScript",
    symbol: <FaJs />,
    info: "The language of the web, bringing interactivity and logic to my projects.",
  },
  {
    name: "Redux",
    symbol: <SiRedux />,
    info: "A reliable state management library, used for organizing complex application states.",
  },
  {
    name: "Git",
    symbol: <FaGitAlt />,
    info: "The trusted version control system that keeps my codebase organized and collaborative.",
  },
  {
    name: "GitHub",
    symbol: <FaGithub />,
    info: "A platform for hosting and sharing code, enabling seamless project collaboration.",
  },
  {
    name: "Tailwind CSS",
    symbol: <RiTailwindCssFill />,
    info: "A utility-first framework that makes crafting responsive and modern designs a breeze.",
  },
  {
    name: "Python",
    symbol: <FaPython />,
    info: "A versatile programming language, great for scripting and backend development.",
  },
];

function TeckStack() {
  const themeColor = useContext(ThemeContext);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);
  const quantity = tools.length;
  const [snaps, setSnaps] = useState(quantity);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    let scrollInterval;
    if (container) {
      scrollInterval = setInterval(() => {
        // Increment scrollLeft value
        container.scrollLeft += container.clientWidth; // Adjust speed as needed

        // Reset scrollLeft when reaching the end
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, 10000); // Adjust interval duration for speed
    }

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;

        // Calculate the index of the snapped item
        const currentIndex = Math.round(
          container.scrollLeft / container.clientWidth
        );

        // Rotate based on snapped item index
        const angle = (currentIndex / quantity) * 360;
        setRotation(angle);

        // Check if scrolled more than 90%
        const scrolledPercentage =
          (container.scrollLeft + container.clientWidth) /
          container.scrollWidth;

        if (scrolledPercentage > 0.9) {
          setSnaps((prev) => prev + 1);
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [quantity]);

  useEffect(() => {
    setIsScroll(true);
    setTimeout(() => {
      setIsScroll(false);
    }, 5000);
  }, []);

  // Calculate the index of the item currently in the center
  const currentCenterIndex = Math.round(
    (rotation / (360 / quantity)) % quantity
  );

  return (
    <>
      {/* Horizontal scrollable container */}
      <div
        ref={containerRef}
        className="w-screen flex snap-x overflow-x-scroll"
        style={{ scrollSnapType: "x mandatory", height: window.innerHeight }}
      >
        {[...Array(snaps)].map((_, index) => (
          <div
            key={index}
            className="w-screen h-full flex-shrink-0 snap-start"
          />
        ))}
      </div>

      {/* Fixed circular slider */}
      <div
        data-aos="zoom-out"
        className="fixed inset-0 top-[40%] -translate-y-1/2 -z-10"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="relative w-28 sm:w-32 h-36 sm:h-40 mx-auto"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(-${rotation}deg)`,
            transition: "transform 1s ease",
          }}
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className="absolute inset-0"
              style={{
                transform: `rotateY(${
                  (index * 360) / quantity
                }deg) translateZ(${
                  window.innerWidth < 640
                    ? window.innerWidth < 380
                      ? 250
                      : 300
                    : 400
                }px)`, // radius
              }}
            >
              <div
                style={{ backgroundColor: themeColor }}
                className={`w-full h-full ${
                  currentCenterIndex === index
                    ? "p-[3px]"
                    : "p-[2px] blur-[2px]"
                } rounded-lg`}
              >
                <div
                  style={{ color: themeColor }}
                  className={`w-full h-full bg-[#1c1c1c] rounded-lg flex items-center justify-center text-6xl relative transition-transform duration-300`}
                >
                  <p
                    style={{
                      transform: `${
                        currentCenterIndex === index
                          ? "rotateY(0deg)"
                          : "rotateY(180deg)"
                      }`,
                    }}
                    className={`text-base xs:text-lg absolute ${
                      currentCenterIndex === index
                        ? "bottom-[110%] opacity-100"
                        : "bottom-[80%] opacity-0"
                    } text-secondaryText transition-all duration-500 -z-10`}
                  >
                    {tool.name}
                  </p>
                  <p
                    style={{
                      transform: `${
                        currentCenterIndex === index
                          ? "rotateY(0deg)"
                          : "rotateY(180deg)"
                      }`,
                    }}
                    className={`text-[10px] xs:text-xs leading-3 xs:leading-4 tracking-wide font-light w-[200%] sm:w-[150%] text-center absolute ${
                      currentCenterIndex === index
                        ? "top-[110%] opacity-100"
                        : "top-[80%] opacity-0"
                    } text-secondaryText transition-all duration-500 -z-10`}
                  >
                    {tool.info}
                  </p>
                  {tool.symbol}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isScroll && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-2xl text-secondaryText flex items-center gap-4 transition-all duration-1000 blink">
          <GiBottomRight3dArrow className="rotate-[135deg] text-4xl" />
          Scroll
          <GiBottomRight3dArrow className="-rotate-45 text-4xl" />
        </div>
      )}
    </>
  );
}

export default TeckStack;
