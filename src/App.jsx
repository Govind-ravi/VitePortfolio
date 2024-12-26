import { useEffect, useState } from "react";
import ExpandingComponent from "./components/ExpandingComponent";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";
import "aos/dist/aos.css"; // Import the AOS styles
import AOS from "aos";
import Menu from "./components/Menu";
import Education from "./components/Education";
import TeckStack from "./components/TeckStack";
import ThemeProvider from "./components/ThemeProvider";
import ParticlesBackground from "./components/ParticlesBackground";
import Projects from "./components/Projects";
import Job from "./components/Job";
import ReactGA from "react-ga";

const TRACKING_ID = "G-PN0BYK4ETM";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [showExtend, setShowExtend] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const location = useLocation();
  const [tag, setTag] = useState("");

  // Track page views for analytics
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleExtend = () => {
    setShowExtend(true);
    setTimeout(() => {
      setShowExtend(false);
    }, 3000);
  };
  useEffect(() => {
    setTimeout(() => {
      setTag("Welcome to my Creative Space");
      handleExtend();
    }, 100);
    setTimeout(() => {
      setIsAnimated(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setIsAnimated(false);
    setTimeout(() => {
      if (location.pathname === "/") {
        setTag("Welcome to my Creative Space");
      } else if (location.pathname === "/education") {
        setTag("Explore my learning journey.");
      } else if (location.pathname === "/projects") {
        setTag("Lets dive into my creations.");
      } else if (location.pathname === "/tools") {
        setTag("The tech stacks I mastered.");
      } else if (location.pathname === "/career") {
        setTag("The Beginning of My Journey.");
      }
      handleExtend();
    }, 100);
    setTimeout(() => {
      setIsAnimated(true);
    }, 3000);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      {location.pathname === "/" && isAnimated && <ParticlesBackground />}
      {showExtend && <ExpandingComponent tag={tag} />}
      {isAnimated && <Menu />}
      <Routes>
        <Route path="/" element={isAnimated && <Homepage />} />
        <Route
          path="/education"
          element={isAnimated && <Education />}
        />
        <Route path="/tools" element={isAnimated && <TeckStack />} />
        <Route
          path="/projects"
          element={isAnimated && <Projects />}
        />
        <Route path="/career" element={isAnimated && <Job />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
