/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        darktheme: "#1c1c1c",
        secondaryText: "#fff",
      },
      screens: {
        ls: "320px",
        xxs: "380px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        xlmd: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4k": "2560px",
      },
    },
  },
  plugins: [],
};
