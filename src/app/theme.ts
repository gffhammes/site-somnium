"use client";
import { createTheme } from "@mui/material/styles";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: rajdhani.style.fontFamily,
    fontWeightRegular: 500,
    h1: {
      fontSize: 16,
      fontWeight: 500,
      "@media (min-width:600px)": {
        fontSize: 32,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,

      "@media (min-width:600px)": {
        fontSize: 48,
      },
    },
    button: {
      fontWeight: 700,

      "@media (min-width:600px)": {
        fontSize: 24,
      },
    },
  },
  palette: {
    primary: {
      main: "#0E4E58",
    },
    secondary: {
      main: "#F6A131",
    },
    error: {
      main: "#fc7272",
    },
  },
});

export default theme;
