import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTools } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import { AiFillProject } from "react-icons/ai";
import { FaPersonBiking } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "./ThemeProvider";

const menuItems = [
  {
    name: "Welcome",
    link: "/",
    symbol: <FaHome />,
  },
  {
    name: "My Academia",
    link: "/education",
    symbol: <PiGraduationCapFill />,
  },
  {
    name: "The Dev Deck",
    link: "/tools",
    symbol: <FaTools />,
  },
  {
    name: "My Code Canvas",
    link: "/projects",
    symbol: <AiFillProject />,
  },
  {
    name: "Career Chronics",
    link: "/career",
    symbol: <FaPersonBiking />,
  },
];

const socials = [
  {
    symbol: <MdEmail />,
    link: "",
  },
  {
    symbol: <FaInstagram />,
    link: "",
  },
  {
    symbol: <FaLinkedin />,
    link: "",
  },
  {
    symbol: <FaXTwitter />,
    link: "",
  },
  {
    symbol: <IoLogoWhatsapp />,
    link: "",
  },
];

function Menu() {
  const themeColor = useContext(ThemeContext);
  const [isEnter, setIsEnter] = useState(false);
  const [isMenu, setisMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
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
              <div className="w-[0px] group-hover:w-[150px] group-hover:h-[100px] h-0 bg-gray-600 rounded-lg transition-all duration-500"></div>
              <h1 className="text-2xl font-semibold group-hover:text-base menu-headline duration-200">
                {item.name}
              </h1>
            </div>
          </NavLink>
        ))}
        <div className="flex justify-evenly">
          {socials.map((item, i) => (
            <div
              key={i}
              className="text-4xl transition-all duration-200 hover:scale-90 cursor-pointer"
            >
              {item.symbol}
            </div>
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
        onClick={() => setIsMobileMenu((prev) => !prev)}
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
                transform: `translate(${x}px, ${y}px)`
              }}
              className={`absolute text-secondaryText text-3xl xs:text-4xl transition-all duration-500 ${
                isMobileMenu ? "opacity-100" : "opacity-0"
              } bg-[#1c1c1c] p-2 rounded-full`}
            >
              {menu.symbol}
            </NavLink>
          );
        })}
        {/* Overlay */}
      </div>
      <div
        onClick={() => setIsMobileMenu(false)}
        className={`md:hidden fixed top-0 left-0 z-[90] ${
          isMobileMenu ? "opacity-100 w-screen h-screen" : "opacity-0 w-0 h-0"
        } transition-opacity delay-200`}
      ></div>
    </>
  );
}

export default Menu;
