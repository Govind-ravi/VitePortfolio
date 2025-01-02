import React, { useContext, useEffect, useRef, useState } from "react";
import ECommerceMain from "../assets/E-commerce-main.mp4";
import ECommerceProduct from "../assets/E-commerce-product.mp4";
import ECommerceAdminpannel from "../assets/E-commerce-adminpannel.mp4";
import EblitzMain from "../assets/Eblitz-main.mp4";
import EblitzGallery from "../assets/Eblitzcreations-gallery.mp4";
import realestate from "../assets/realestate.mp4";
import OldPortfolio from "../assets/OldPortfolio.mp4";
import { ThemeContext } from "./ThemeProvider";
import { GiBottomRight3dArrow } from "react-icons/gi";

const myProjects = [
  {
    image: "",
    video: ECommerceMain,
    name: "Govind Hub",
    info: "An e-commerce platform (Govind Hub) built using the MERN stack. It features a user-friendly cart and wishlist system, enabling customers to save and purchase their favorite products effortlessly. With a powerful search functionality and robust user authentication, the platform ensures a seamless shopping experience. Designed with responsiveness in mind, Govind Hub delivers an engaging and dynamic interface across all devices.",
  },
  {
    image: "",
    video: ECommerceProduct,
    name: "Interactive Product Page",
    info: "A visually engaging product page with dynamic mouse interactions to enhance the shopping experience. Smooth animations respond to mouse movements, creating an immersive and interactive environment. With seamless transitions and responsive design, the page highlights product features innovatively, offering a captivating experience across all devices.",
  },
  {
    image: "",
    video: ECommerceAdminpannel,
    name: "Admin Panel for Collection Management",
    info: "An intuitive admin panel for managing homepage product collections. It allows administrators to add, update, or delete collections and assign products to them. With a user-friendly interface, admins can organize products into categories and control which collections appear on the homepage, ensuring a dynamic and engaging display.",
  },
  {
    image: "",
    video: EblitzMain,
    name: "Eblitz Creations Website",
    info: "A dynamic, visually engaging website for Eblitz Creations, showcasing their company and services with a modern design. Built entirely with React, it features smooth animations and transitions for an interactive user experience. Thoughtfully crafted to reflect the brand identity, the site offers seamless navigation, responsiveness across all devices, and a captivating, functional design.",
  },
  {
    image: "",
    video: EblitzGallery,
    name: "Govind Hub",
    info: "A visually engaging gallery page with smooth auto-scrolling, designed to showcase Eblitz Creations' portfolio. The page features seamless transitions and animations, providing an interactive experience that allows users to effortlessly explore the content in a dynamic, responsive layout.",
  },
  {
    image: "",
    video: realestate,
    name: "Real Estate Platform",
    info: "A comprehensive real estate platform featuring user authentication, property listings, and advanced search functionality using MERN Stack. The platform allows users to browse and filter property listings, contact landlords directly, and manage their profiles with ease. With a focus on usability, it offers a seamless experience for both prospective buyers and renters, making it easier to find and connect with properties that meet their needs.",
  },
  {
    image: "",
    video: OldPortfolio,
    name: "Old Portfolio",
    info: "An earlier version of my personal portfolio, built entirely with React. This project highlights my earlier work and design approach, showcasing my skills in web development. It features a clean, interactive design with a responsive layout, making it easy for visitors to explore my past projects and technical abilities. Though simpler than my current portfolio, this project demonstrates my growth and evolution as a developer.",
  },
];

function Projects() {
  const themeColor = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(-1);
  const projectRefs = useRef([]);
  const containerRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [isIndexChange, setIsIndexChange] = useState(false);
  const [isBlink, setIsBlink] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isDeviceTouch = () =>
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isDeviceTouch()) setIsTouchDevice(true);
    else setIsTouchDevice(false);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    if (projectRefs.current[index]) {
      projectRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    if (isTouchDevice) return;
    const handleKeyDown = (event) => {
      if (activeIndex === -1) return; // Prevent key handling if no active item

      if (event.key === "Escape") {
        setActiveIndex(-1); // Close the active view if Escape is pressed
        return;
      }

      // Prevent default scrolling behavior for arrow keys
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        setIsBlink(false);
      }

      let newIndex = activeIndex;

      if (event.key === "ArrowRight") {
        newIndex = Math.min(activeIndex + 1, myProjects.length - 1);
      } else if (event.key === "ArrowLeft") {
        newIndex = Math.max(activeIndex - 1, 0);
      }

      handleItemClick(newIndex);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  useEffect(() => {
    setIsIndexChange(true);
    setTimeout(() => {
      setIsIndexChange(false);
    }, 200);
    setTimeout(() => {
      setVisibleIndex(activeIndex);
    }, 400);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === -1 && containerRef.current) {
      const scrollInterval = setInterval(() => {
        containerRef.current.scrollBy({
          left: 1,
        });
      }, 10);

      return () => clearInterval(scrollInterval);
    }
  }, [activeIndex]);

  return (
    <div style={{ height: window.innerHeight }} className="-z-10">
      <div
        ref={containerRef}
        className={`flex absolute ml-4 md:ml-12 mr-4 overflow-scroll transition-all duration-500 ${
          activeIndex !== -1
            ? "w-[95vw] md:w-[50vw] gap-4 top-[80%] right-0 translate-y-0 translate-x-0"
            : "w-[95vw] gap-4 xs:gap-6 md:gap-8 top-1/2 -translate-y-1/2 -right-2 sm:-right-10"
        } z-10`}
      >
        {myProjects.map((project, i) => (
          <div
            ref={(el) => (projectRefs.current[i] = el)}
            onClick={() => handleItemClick(i)}
            key={i}
            style={{
              border: activeIndex === i && `2px solid ${themeColor}`,
              padding: activeIndex === i && "2px",
            }}
            className={`${
              activeIndex != -1
                ? "w-[150px] h-[100px]"
                : "w-[300px] xxs:w-[350px] xs:w-[400px] sm:w-[500px] xl:w-[600px] aspect-[3/2] 2xl:w-[700px] 3xl:w-[900px]"
            } flex-shrink-0 transition-all duration-500 rounded-lg cursor-pointer`}
          >
            {project.image && (
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            {project.video && (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="rounded-lg w-full h-full object-cover"
              ></video>
            )}
          </div>
        ))}
      </div>
      <div
        onClick={() => setActiveIndex(-1)}
        className={`group fixed top-4 right-4 text-secondaryText cursor-pointer ${
          activeIndex !== -1 ? "opacity-100" : "opacity-0"
        }`}
      >
        CLOSE
        <p className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 shadow shadow-black rounded-lg py-1 px-2">
          Esc
        </p>
      </div>
      <div
        className={`fixed flex top-10 lg:top-1/2 lg:-translate-y-1/2 left-1/2 -translate-x-1/2 ${
          activeIndex !== -1
            ? `${
                isIndexChange
                  ? "w-0 h-0 opacity-0"
                  : "w-[97vw] sm:w-[92vw] md:w-[90vw] mx-auto lg:h-[80vh] opacity-100"
              }`
            : "w-0 h-0"
        } transition-all duration-500`}
      >
        {myProjects[visibleIndex] && (
          <div className="h-[80%] flex flex-col lg:flex-row gap-2 md:gap-4">
            <div className="w-auto h-[40vh] lg:h-auto lg:w-fit max-h-[500px]">
              {myProjects[visibleIndex].image && (
                <img
                  src={myProjects[visibleIndex].image}
                  alt=""
                  className="w-full h-auto object-contain rounded-lg"
                />
              )}
              {myProjects[visibleIndex].video && (
                <video
                  src={myProjects[visibleIndex].video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="cursor-pointer w-fit h-full object-bottom lg:object-top"
                ></video>
              )}
            </div>
            <div
              className={`lg:w-[30%] sm:space-y-2 md:space-y-4 ${
                !isIndexChange && visibleIndex === activeIndex
                  ? "visible"
                  : "invisible"
              } transition-opacity duration-1000 flex-grow`}
            >
              <p className="text-secondaryText text-2xl xs:text-3xl md:text-4xl">
                {myProjects[visibleIndex].name}
              </p>
              <p className="text-secondaryText text-sm md:text-base">
                {myProjects[visibleIndex].info}
              </p>
            </div>
          </div>
        )}
      </div>
      {activeIndex !== -1 && isBlink && !isTouchDevice && (
        <div className="absolute bottom-10 left-[30%] -translate-x-1/2 text-2xl text-secondaryText flex items-center gap-4 transition-all duration-1000 blink">
          <GiBottomRight3dArrow className="rotate-[135deg] text-4xl" />
          Use Arrow Keys
          <GiBottomRight3dArrow className="-rotate-45 text-4xl" />
        </div>
      )}
      {isTouchDevice && activeIndex !== -1 && (
        <div className="absolute bottom-1 md:bottom-10 left-1/2 md:left-[30%] -translate-x-1/2 text-2xl text-secondaryText flex items-center gap-24 z-[50]">
          <GiBottomRight3dArrow
            onClick={() => handleItemClick(Math.max(activeIndex - 1, 0))}
            className="rotate-[135deg] text-4xl"
          />
          <GiBottomRight3dArrow
            onClick={() =>
              handleItemClick(Math.min(activeIndex + 1, myProjects.length - 1))
            }
            className="-rotate-45 text-4xl"
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
