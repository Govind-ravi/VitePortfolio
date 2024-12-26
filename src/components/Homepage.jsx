import React, { useContext, useEffect, useState } from "react";
import Hero from "../assets/Hero.png";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { ThemeContext } from "./ThemeProvider";

function Homepage() {
  const themeColor = useContext(ThemeContext);
  const [isHeroImage, setIsHeroImage] = useState(false);
  const [mernContent, setMernContent] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsHeroImage(true);
    }, 1500);
  }, []);

  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Code is not just a skill; It's my passion to bring ideas to life",
    "Striving for simplicity, elegance,; and efficiency in every project I touch.",
    "The best way to predict the future; is to build it. - Alan Kay",
    "Success in development isn't just about writing code; It's about creating solutions.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-screen h-screen flex items-end justify-between relative overflow-hidden">
      <div className="w-full lg:w-[70%] h-screen self-center text-center cursor-default relative">
        {/* Text Content */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[45%] md:top-1/2 -translate-y-1/2 space-y-2 w-full">
          <h1
            style={{ color: themeColor }}
            className="headline text-4xl xxs:text-5xl sm:text-6xl xl:text-7xl font-bold"
          >
            Hey, I'm Govind
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-secondaryText text-xl xxs:text-2xl sm:text-3xl font-semibold"
          >
            A Full Stack Developer
          </p>
        </div>
        {/* Quotes */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-[65%] md:top-[80%] bg-gradient-to-r ${
            isHeroImage
              ? "w-full xs:w-[90%] sm:w-[70%] xl:w-[50%] p-2"
              : "p-0 w-0"
          } mx-auto text-secondaryText from-transparent via-secondaryText/10 to-transparent flex overflow-hidden transition-all duration-500`}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentQuote * 100}%)`,
            }}
          >
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="min-w-full text-sm xxs:text-base sm:text-lg"
              >
                <span className="relative">
                  <RiDoubleQuotesL className="inline absolute -translate-x-full" />{" "}
                  {quote.split(";")[0]}
                </span>
                <p>{quote.split(";")[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Picture */}
      <div className="xs:w-[70%] sm:w-1/2 right-0 max-h-screen lg:w-[25%] lg:min-w-[350px] max-w-[400px] xl:max-w-max absolute lg:relative block -z-[1] lg:z-0 opacity-70 lg:opacity-100">
        <img
          src={Hero}
          alt=""
          className={`hero w-full h-full object-contain ${
            isHeroImage ? "translate-x-0" : "translate-x-full"
          } transition-all duration-1000`}
        />
      </div>
      {/* MERN */}
      <div className="absolute top-2 left-2 ">
        <div className="flex gap-[1px] items-center text-xl xxs:text-2xl sm:text-3xl text-secondaryText cursor-pointer relative">
          <div
            onMouseEnter={() =>
              setMernContent(
                "MongoDB - The NoSQL Database that powers modern apps with a dynamic schema"
              )
            }
            onMouseLeave={() => setMernContent("")}
            data-aos="zoom-out"
            data-aos-delay="500"
            className="text-[#47A248] mongo relative"
          >
            <SiMongodb />
          </div>
          <div
            onMouseEnter={() =>
              setMernContent(
                "Express.js - A minimal and flexible Node.js web application framework."
              )
            }
            onMouseLeave={() => setMernContent("")}
            data-aos="zoom-out"
            data-aos-delay="600"
            className="text-secondaryText text-xl sm:text-2xl bg-[#333333] p-[3px] sm:p-[5px] rounded-full"
          >
            <SiExpress />
          </div>
          <div
            onMouseEnter={() =>
              setMernContent(
                "React - The heart of modern front-end development for dynamic web apps."
              )
            }
            onMouseLeave={() => setMernContent("")}
            data-aos="zoom-out"
            data-aos-delay="700"
            className="text-[#61DAFB]"
          >
            <IoLogoReact />
          </div>
          <div
            onMouseEnter={() =>
              setMernContent(
                "Node.js - The engine that powers backend systems with JavaScript"
              )
            }
            onMouseLeave={() => setMernContent("")}
            data-aos="zoom-out"
            data-aos-delay="800"
            className="text-[#339933]"
          >
            <FaNodeJs />
          </div>
          <div
            onMouseEnter={() =>
              setMernContent(
                "MERN - The dynamic quartet I use to build modern, responsive, and scalable web applications."
              )
            }
            onMouseLeave={() => setMernContent("")}
            className="ml-2 text-secondaryText/50"
          >
            <span data-aos="zoom-out" data-aos-delay="1000">
              S
            </span>
            <span data-aos="zoom-out" data-aos-delay="1100">
              t
            </span>
            <span data-aos="zoom-out" data-aos-delay="1200">
              a
            </span>
            <span data-aos="zoom-out" data-aos-delay="1300">
              c
            </span>
            <span data-aos="zoom-out" data-aos-delay="1400">
              k
            </span>
            <span data-aos="zoom-out" data-aos-delay="1500">
              {" "}
            </span>
            <span data-aos="zoom-out" data-aos-delay="1600">
              D
            </span>
            <span data-aos="zoom-out" data-aos-delay="1700">
              e
            </span>
            <span data-aos="zoom-out" data-aos-delay="1800">
              v
            </span>
            <span data-aos="zoom-out" data-aos-delay="1900">
              e
            </span>
            <span data-aos="zoom-out" data-aos-delay="2000">
              l
            </span>
            <span data-aos="zoom-out" data-aos-delay="2100">
              o
            </span>
            <span data-aos="zoom-out" data-aos-delay="2200">
              p
            </span>
            <span data-aos="zoom-out" data-aos-delay="2300">
              e
            </span>
            <span data-aos="zoom-out" data-aos-delay="2400">
              r
            </span>
          </div>

          <div className="absolute top-[120%] left-2 w-[300px] h-[50px] text-white text-sm p-1">
            {mernContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
