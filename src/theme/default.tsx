const COLORS = {
  primaryColor: "#1ea7fd",

  whiteColor: "#fff",
  blackColor: "#333",
  redColor: "#FF0000",

  // Gray Color Shades
  grayColor: "#999",
  grayColor2: "#ccc",
  grayColor3: "#f8f8f8",
};

export const Theme = {
  colors: COLORS,
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof COLORS;
  }
}
