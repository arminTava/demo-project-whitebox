import { colors, createTheme } from "@mui/material";

const customFontFamily = "'Roboto', 'Helvetica', 'Arial', sans-serif";

export const theme = createTheme({
  // Theme
  brand: {
    blue: colors.blue[100],
    green: colors.green[400],
  },

  // Palette
  palette: {
    primary: { main: "#2ad8b1" },

    background: {
      default: "#F5F5F5",
      secondary: "#004A72",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(0, 0, 0, 0.87)",
    },
    error: {
      main: "#FF4A4A",
    },
  },

  // Typography
  typography: {
    fontFamily: customFontFamily,
    fontSize: 16,

    body1: {
      fontSize: 16,
      fontWeight: 400,
    },

    title1: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "23px",
    },
    title2: {
      fontSize: 32,
      fontWeight: 800,
      lineHeight: "38px",
    },
  },

  // Breakpoints
  breakpoints: {
    values: {
      // default
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.87)",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.11);",
        },
      },
    },
  },
});
