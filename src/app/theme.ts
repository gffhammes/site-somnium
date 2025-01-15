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
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#0E4E58",
    },
    secondary: {
      main: "#F6A131",
    },
  },
});

export default theme;
