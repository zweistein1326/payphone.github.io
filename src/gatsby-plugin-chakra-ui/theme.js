import { theme } from "@chakra-ui/core";

const { colors } = theme;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: "#ffffff",
    secondary: "#cccccc",
    text: "#000",
    navItem: "#A0AEC0",
    transparent: "transparent",
    blue: "#1B2F86",
  },
  fonts: {
    body: "Tahoma, Geneva, sans-serif",
    heading: "Tahoma, Geneva, sans-serif",
    mono: "Menlo, monospace",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
};
