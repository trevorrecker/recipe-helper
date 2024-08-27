"use client";

import COLORS from "@/settings/colors";
import {
  experimental_extendTheme as extendTheme,
  ThemeOptions,
  Theme,
  createTheme
} from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// Shared typography options
const typography: TypographyOptions = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: { fontSize: "2rem", fontWeight: 700 },
  h2: { fontSize: "1.75rem", fontWeight: 700 },
  h3: { fontSize: "1.5rem", fontWeight: 600 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
  body2: { fontSize: "0.875rem", lineHeight: 1.5 }
};

// Define the light theme
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: COLORS.light.primary,
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#F4A261",
      contrastText: "#3D3D3D"
    },
    background: {
      default: COLORS.light.background,
      paper: "#FFFFFF"
    },
    text: {
      primary: COLORS.light.text,
      secondary: "#5A5A5A"
    },
    error: {
      main: "#E63946"
    },
    success: {
      main: "#28A745"
    },
    warning: {
      main: "#FFA500"
    },
    info: {
      main: "#17A2B8"
    }
  }
};

// Define the dark theme
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.dark.primary,
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#F4A261",
      contrastText: "#121212"
    },
    background: {
      default: COLORS.dark.background,
      paper: "#1E1E1E"
    },
    text: {
      primary: COLORS.dark.text,
      secondary: "#CCCCCC"
    },
    error: {
      main: "#E63946"
    },
    success: {
      main: "#28A745"
    },
    warning: {
      main: "#FFA500"
    },
    info: {
      main: "#17A2B8"
    }
  }
};

// Create the themes
export const lightTheme: Theme = createTheme(lightThemeOptions);
export const darkTheme: Theme = createTheme(darkThemeOptions);

export default extendTheme({
  cssVarPrefix: "rh",
  colorSchemes: {
    light: lightThemeOptions,
    dark: darkThemeOptions
  },
  typography,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true
      }
    }
  },
  shape: {
    borderRadius: 6
  }
});
