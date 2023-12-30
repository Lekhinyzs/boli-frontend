/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05597B",
        secondary: "#077CAC",
        success: "#057B62",
        danger: "#7B2705",
        info: "#62057B",
        secondary_light: "#848688",
        nav: "rgba(25, 25, 25, .98)",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/food1.jpeg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    screens: {
      xxs: "250px",
      xs: "400px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1500px",
    },
  },

  plugins: [],
  darkMode: "class",
};
