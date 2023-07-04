/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  // Theme
  interface Theme {
    brand: {
      blue: CSSProperties["color"];
      green: CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    brand: {
      blue: CSSProperties["color"];
      green: CSSProperties["color"];
    };
  }
  interface TypeBackgroundOptions {
    secondary: string;
  }
  interface TypeBackground {
    secondary: string;
  }

  // Typography
  interface TypographyVariants {
    title1: CSSProperties;
    title2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    title1?: CSSProperties;
    title2?: CSSProperties;
  }

  // Breakpoints
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// Typography
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    body1: true;
    body2: false;
    button: false;
  }
}
