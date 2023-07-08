/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        appear: "appear 1s ease-in-out 5s",
      },
      animationDelay: {
        2: "5s",
      },
      colors: {
        coral: "#ee6c4d",
        baseColor: "#0f1527",
        grey: "#949494",
        darkgrey: "#515456",
        blue: "#65b6de",
        lightblue: "#6688a1",
        purple: "#a85488",
        compliment1: "#56657b80",
      },
    },
  },
  plugins: [],
};
