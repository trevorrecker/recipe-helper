interface ThemeColors {
  readonly background: string;
  readonly text: string;
  readonly primary: string;
}

type ThemeDetails = {
  readonly light: ThemeColors;
  readonly dark: ThemeColors;
};

const COLORS: ThemeDetails = {
  light: {
    background: "#FFF5E1",
    text: "#3D3D3D",
    primary: "#FF6F61"
  },
  dark: {
    background: "#121212",
    text: "#FFFFFF",
    primary: "#FF6F61"
  }
};

export default COLORS;
