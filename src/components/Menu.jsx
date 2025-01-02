import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaGithub,
  FaCaretDown,
  FaChevronDown,
} from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import { AiFillProject } from "react-icons/ai";
import { FaPersonBiking } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "./ThemeProvider";
import Home from "../assets/Home.png";
import Education from "../assets/Education.png";
import Skills from "../assets/Skills.png";
import Projects from "../assets/Projects.png";
import Career from "../assets/Career.png";

const menuItems = [
  {
    name: "Welcome",
    link: "/",
    symbol: <FaHome />,
    image: Home,
  },
  {
    name: "My Academia",
    link: "/education",
    symbol: <PiGraduationCapFill />,
    image: Education,
  },
  {
    name: "The Dev Deck",
    link: "/tools",
    symbol: <FaTools />,
    image: Skills,
  },
  {
    name: "My Code Canvas",
    link: "/projects",
    symbol: <AiFillProject />,
    image: Projects,
  },
  {
    name: "Career Chronics",
    link: "/career",
    symbol: <FaPersonBiking />,
    image: Career,
  },
];

const socials = [
  {
    symbol: <MdEmail />,
    link: "mailto:govindnr20122001@gmail.com",
  },
  {
    symbol: <FaInstagram />,
    link: "https://www.instagram.com/govind.govu.2012",
  },
  {
    symbol: <FaLinkedin />,
    link: "https://linkedin.com/in/govind-ravi",
  },
  {
    symbol: <FaXTwitter />,
    link: "https://x.com/GovindR20122001",
  },
  {
    symbol: <IoLogoWhatsapp />,
    link: "https://wa.me/+918792589747",
  },
  {
    symbol: <FaGithub />,
    link: "https://github.com/Govind-ravi",
  },
];

function Menu() {
  const themeColor = useContext(ThemeContext);
  const [isEnter, setIsEnter] = useState(false);
  const [isMenu, setisMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMobileSocial, setIsMobileSocial] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsEnter(true);
    }, 1500);
  }, []);
  return (
    <>
      {/* Menu for large screens */}
      <div
        style={{ backgroundColor: themeColor }}
        onMouseEnter={() => setisMenu(true)}
        className={`hidden md:block fixed ${
          isEnter ? "translate-x-1/2" : "translate-x-0"
        } ${
          isMenu ? "opacity-0" : "opacity-100"
        } w-[70px] 3xl:w-[100px] 4k:w-[150px] right-full rounded-[50%] h-[60vh] top-1/2 -translate-y-1/2 menu cursor-pointer z-10 transition-all duration-500`}
      >
        <p className="absolute -right-2 inline top-1/2 -translate-y-1/2 -rotate-90 text-xl font-semibold text-scondaryText uppecase">
          Menu
        </p>
      </div>
      <div
        className={`hidden fixed h-screen navigator top-0 ${
          isMenu ? " left-0  z-[100]" : " -left-full  -z-10"
        } transition-all duration-1000 md:flex flex-col justify-evenly text-secondaryText backdrop-blur-md`}
      >
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            onClick={() => setisMenu(false)}
            style={{ color: themeColor }}
            className="group z-10 flex items-center gap-2 ml-[5vw] mr-10"
          >
            <div className="text-5xl text-secondaryText">{item.symbol}</div>
            <div>
              <div className="w-[0px] group-hover:w-[150px] group-hover:h-[100px] h-0 transition-all duration-500 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h1 className="text-2xl font-semibold group-hover:text-base menu-headline duration-200">
                {item.name}
              </h1>
            </div>
          </NavLink>
        ))}
        <div className="flex justify-evenly">
          {socials.map((item, i) => (
            <a href={item.link} target="_blank">
              <div
                key={i}
                className="text-4xl transition-all duration-200 hover:scale-90 cursor-pointer"
              >
                {item.symbol}
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Menu Overlay */}
      {isMenu && (
        <div
          onMouseEnter={() => setisMenu(false)}
          className="fixed w-[75vw] h-screen top-0 right-0 z-[90]"
        ></div>
      )}

      {/* Menu for small screens */}
      <div
        onClick={() => {
          setIsMobileMenu((prev) => !prev), setIsMobileSocial(false);
        }}
        style={{ backgroundColor: themeColor }}
        className="md:hidden fixed w-16 h-16 xs:w-24 xs:h-24 rounded-full left-1/2 -translate-x-1/2 bottom-12 flex items-center justify-center z-[100] xs:text-xl font-semibold"
      >
        <p>Menu</p>
        {menuItems.map((menu, i) => {
          const angle =
            (360 / menuItems.length) * (isMobileMenu ? i - 1 : i - 0.5);
          const radius = isMobileMenu
            ? window.innerWidth >= 480
              ? 75
              : 60
            : window.innerWidth >= 480
            ? 50
            : 40;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          return (
            <NavLink
              to={isMobileMenu && menu.link}
              key={i}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className={`absolute text-secondaryText text-3xl xs:text-4xl transition-all duration-500 ${
                isMobileMenu ? "opacity-100" : "opacity-0"
              } bg-[#1c1c1c] p-2 rounded-full`}
            >
              {menu.symbol}
            </NavLink>
          );
        })}
      </div>
      {/* Socials for Mobile Screens */}
      <div
        className={`fixed top-4 right-4 w-10 ${
          isMobileSocial ? " max-h-80" : "max-h-10"
        } pb-2 overflow-hidden rounded-full text-secondaryText md:hidden z-[100] flex flex-col items-center transition-all duration-500 ease-in-out gap-5`}
      >
        <div
          onClick={() => {
            setIsMobileSocial((prev) => !prev), setIsMobileMenu(false);
          }}
          className={`flex flex-col ${
            isMobileSocial ? "rotate-180" : "rotate-0"
          } items-center justify-center mt-1 transition-all duration-500 ease-in-out`}
        >
          <FaCaretDown className="text-2xl" />
          <FaChevronDown className=" -mt-3" />
        </div>
        {socials.map((item, i) => (
          <a href={item.link} target="_blank">
            <div
              key={i}
              className="text-2xl transition-all duration-200 hover:scale-90 cursor-pointer"
              style={{
                animation: isMobileSocial
                  ? `fadeDown 0.5s ease-in-out`
                  : "none",
                animationDelay: `${i * 0.05}s`,
                animationFillMode: "both",
              }}
            >
              {item.symbol}
            </div>
          </a>
        ))}
      </div>
      {/* Overlay */}
      <div
        onClick={() => {
          setIsMobileMenu(false), setIsMobileSocial(false);
        }}
        className={`md:hidden fixed top-0 left-0 z-[90] ${
          isMobileMenu || isMobileSocial
            ? "opacity-100 w-screen h-screen"
            : "opacity-0 w-0 h-0"
        } transition-opacity delay-200`}
      ></div>
    </>
  );
}

export default Menu;
