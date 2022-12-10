/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        green1: "#22DACB",
        green2: "#e9fbf9",
        green3: "rgba(34, 218, 203, 0.15)",
        green4: "rgba(34, 218, 203, 0.25)",
        white1: "#FDFDFD",
        red1: "#D72F44",
      },
      boxShadow: {
        shadow1: "2px 6px 10px rgba(34, 218, 203, 0.25)",
        shadow2: "4px 0px 15px rgba(0, 0, 0, 0.15)",
        shadow3: "0px 1px 20px rgba(0, 0, 0, 0.15)",
        shadow4: "2px 2px 20px rgba(0, 0, 0, 0.2)",
        shadow5: "2px 4px 15px rgba(34, 218, 203, 0.5)",
      },
    },
  },
  plugins: [],
};
