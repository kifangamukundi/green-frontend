/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        sans: ["Sans", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2': {
              color: theme('colors.emerald.700'),
              fontWeight: 'bold',
              fontFamily: theme('fontFamily.serif').join(", ")
            },
            'p': {
              marginTop: "1.25rem",
              color: "#1F2937",
              fontFamily: {
                sans: ["Sans", "sans-serif"],
              },
              fontSize: "1rem",
              lineHeight: "1.5rem",
              lineHeight: "1.625",
            },
            'ul, ol': {
              color: "#111827",
              justifyContent: "center",
              width: "24rem",
              borderWidth: "1px",
              borderColor: "#E5E7EB",

            },
            'li': {
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              width: "100%",
              borderBottomWidth: "1px",
              borderColor: "#E5E7EB",
            }
          },
        },
      }),
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
