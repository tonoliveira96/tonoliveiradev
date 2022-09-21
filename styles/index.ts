import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      mainDark: "#3a0ca3",
      main: "#4361ee",
      mainLight:"#4cc9f0",
      background: "#f7f7f7",

      white: "#ffffff",
      text: "#222222",
      subtitle: "#5F6F81"
    }
  }
});