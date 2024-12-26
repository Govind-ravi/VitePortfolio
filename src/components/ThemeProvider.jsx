import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("#03dac5"); // Initial color
  const color1 = "#03dac5"; // Start color
  const color2 = "#bb86fc"; // End color
  const halfCycleDuration = 60000; // Half-cycle duration (60 seconds for each direction)

  useEffect(() => {
    const updateColor = () => {
      const now = Date.now();
      const timeInCycle = now % (2 * halfCycleDuration); // Current position in the 120-second cycle
      const progress = (timeInCycle % halfCycleDuration) / halfCycleDuration; // Fraction of the half-cycle elapsed

      const isForward = timeInCycle < halfCycleDuration; // Determine direction (forward or backward)
      const startColor = isForward ? color1 : color2;
      const endColor = isForward ? color2 : color1;

      // Interpolate between startColor and endColor
      const interpolate = (start, end) =>
        Math.round(start + (end - start) * progress).toString(16).padStart(2, "0");
      const hex = (c) => parseInt(c.slice(1), 16);
      const blendedColor = `#${interpolate(
        (hex(startColor) >> 16) & 0xff,
        (hex(endColor) >> 16) & 0xff
      )}${interpolate(
        (hex(startColor) >> 8) & 0xff,
        (hex(endColor) >> 8) & 0xff
      )}${interpolate(
        hex(startColor) & 0xff,
        hex(endColor) & 0xff
      )}`;

      setThemeColor(blendedColor);
    };

    updateColor(); // Initial color update
    const interval = setInterval(updateColor, 100); // Update every 100ms for smooth transition

    return () => clearInterval(interval); // Cleanup on unmount
  }, [color1, color2, halfCycleDuration]);

  return (
    <ThemeContext.Provider value={themeColor}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
