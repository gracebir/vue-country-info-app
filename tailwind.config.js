/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 1px 5px 0px hsl(0, 0%, 52%)",
        "2xl": "0px 1px 5px 0px hsl(207, 26%, 17%)",
        xl: "-1px 0px 5px 0px rgba(0,0,0,0.75)",
      },
      colors: {
        textLight: "var(--color-text-light)",
        textDark: "var(--color-text-dark)",
        textInputdark: "var(--color-text-dark)",
      },
      backgroundColor: {
        bgLight: "var(--color-bg-light)",
        bgDark: "var(--color-bg-dark)",
        bgDarlElt: "var(--color-element-dark)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
