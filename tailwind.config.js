export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        main: "#F2F2F2",
        blueBlue: "#0071E3",
        gray50: "rgba(229, 229, 230, 0.50)",
        gray100: "#E5E5E6",
        gray200: "#CACBCC",
        gray300: "#B0B1B3",
        gray400: "#96979A",
        gray800: "#313233",
        gray900: "#313233",
        neutral300: "#D4D4D4",
        descText: "#1D2129",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        transparent: "transparent",
        white: "#FFF",
        black: "#121723",
      },
      boxShadow: {
        cards: "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
        notificationCard: "0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04);",
        inputShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
      },
      dropShadow: {
        headingShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
    },
  },
  plugins: [],
}