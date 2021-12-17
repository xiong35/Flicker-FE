type Color = {
  name: string;
  className: string;
  bg: string;
  onBg: string;
  primary: string;
  secondary: string;
};

export const colors: Color[] = [
  {
    name: "Turquoise",
    className: "turquoise",
    bg: "#f6f7fb",
    onBg: "#14161a",
    primary: "#0f4c3a",
    secondary: "#ebb471",
  },
  {
    name: "Lazurite",
    className: "lazurite",
    bg: "#f6f6e9",
    onBg: "#13334c",
    primary: "#005792",
    secondary: "#ebb471",
  },
  {
    name: "Promare",
    className: "promare",
    bg: "#2C2C2C",
    onBg: "#FCFCFC",
    primary: "#FF5F5F",
    secondary: "#83FFE6",
  },
];
