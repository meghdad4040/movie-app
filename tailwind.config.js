/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: "class",
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   boxShadow: {
    "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
   },
   backgroundImage: {
    "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    "gradient-conic":
     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
   },
   spacing: {
    128: "32rem",
    144: "36rem",
   },
   borderRadius: {
    "4xl": "2rem",
   },
   screens: {
    mobile: "480px",
    tablet: "640px",
    laptop: "1024px",
    desktop: "1280px",
   },
   boxShadow: {
    glass: "inset 0 2px 22px 0 rgba(255,255,255,0.6);",
   },
   container: {
    center: true,
    padding: "2rem",
    screens: {
     "2xl": "1400px",
    },
   },
   aspectRatio: {
    auto: "auto",
    square: "1 / 1",
    video: "16 / 9",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
   },
   colors: {
    darkBest: "#f97316",
    best: "#7c3aed",
    transparent: "transparent",
    current: "currentColor",
    white: "#ffffff",
    purple: "#3f3cbb",
    midnight: "#121063",
    metal: "#565584",
    tahiti: "#3ab7bf",
    silver: "#ecebff",
    "bubble-gum": "#ff77e9",
    bermuda: "#78dcca",
    LightPrimary: "#f4f7fe",
    DarkPrimary: "#b0bbd5",
    GreenPrimary: "#01b574",
    BluePrimary: "#2b3674",
    BrandLinear: "#868cff",
    tahiti: {
     100: "#cffafe",
     200: "#a5f3fc",
     300: "#67e8f9",
     400: "#22d3ee",
     500: "#06b6d4",
     600: "#0891b2",
     700: "#0e7490",
     800: "#155e75",
     900: "#164e63",
    },
    brown: {
     50: "#fdf8f6",
     100: "#f2e8e5",
     200: "#eaddd7",
     300: "#e0cec7",
     400: "#d2bab0",
     500: "#bfa094",
     600: "#a18072",
     700: "#977669",
     800: "#846358",
     900: "#43302b",
    },
    Brand: {
     50: "#e9e3ff",
     100: "#c0b8fe",
     200: "#a195fd",
     300: "#8171fc",
     400: "#7551ff",
     500: "#422afb",
     600: "#3311db",
     700: "#2111a5",
     800: "#190793",
     900: "#11047a",
    },
    Navy: {
     50: "#d0dcfb",
     100: "#aac0fe",
     200: "#a3b9f8",
     300: "#728fea",
     400: "#3652ba",
     500: "#1b3bbb",
     600: "#24388a",
     700: "#1b254b",
     800: "#111c44",
     900: "#0b1437",
    },
   },
  },
 },
 plugins: [],
};
