import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const brandColors = {
  wi: {
    brown: {
      500: "#4D342F",
    },
    red: {
      50: "#FFE9E3",
      100: "#FADBD3",
      600: "#CC3816",
    },
    black: {
      50: "#F1F1F1",
    },
  },
};

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
        baloo: ["Baloo", "Times New Roman", "serif"],
      },
      colors: {
        ...brandColors,
      },
    },
  },
  plugins: [],
} satisfies Config;
