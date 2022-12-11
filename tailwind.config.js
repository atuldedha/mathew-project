/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nova: ["Nova Cut", "cursive"],
      },
      colors: {
        green1: "#22DACB",
        green2: "#E4FAF7",
        green3: "rgba(34, 218, 203, 0.15)",
        green4: "rgba(34, 218, 203, 0.25)",
        white1: "#FDFDFD",
        gray1: "#8A97A6",
        gray2: "#e8e8e8",
        gray3: "#BFC5CE",
        red1: "#D72F44",
        blue1: "#001B3C",
        lightBlue: "#44BFC7",
        black1: "#363535",
      },
      boxShadow: {
        shadow1: "2px 6px 10px rgba(34, 218, 203, 0.25)",
        shadow2: "4px 0px 15px rgba(0, 0, 0, 0.15)",
        shadow3: "0px 1px 20px rgba(0, 0, 0, 0.15)",
        shadow4: "2px 2px 20px rgba(0, 0, 0, 0.2)",
        shadow5: "2px 4px 15px rgba(34, 218, 203, 0.5)",
        shadow6: "2px 4px 15px rgba(68, 191, 199, 0.5)",
      },
    },
  },
  plugins: [],
};
