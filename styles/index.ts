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
      main: "blue",
      background: "#f7f7f7",

      white: "#ffffff"
    }
  }
});