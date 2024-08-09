/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-gradient":
          "linear-gradient(59deg, rgba(0, 0, 0, 0.76) 11.67%, rgba(0, 0, 0, 0.00) 107.91%)",
      },
      colors: {
        "thanh-Minh-duc-tax-xm": "#F4F4F5",
      },
      fontFeatureSettings: {
        "no-liga-clig": "'liga' off, 'clig' off",
      },
      fontFamily: {
        lexend_Deca: ["var(--font-lexend-Deca)"],
      },
      gridTemplateColumns: {
        17: "repeat(17, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".font-no-liga-clig": {
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
