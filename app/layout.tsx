"use client";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "@fontsource/orelega-one";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    typography: {
      fontFamily: "Orelega One",
      h1: {
        fontSize: 128,
      },
      h2: {
        fontSize: 96,
      },
      body1: {
        fontSize: 48,
      },
      body2: {
        fontSize: 32,
      },
      button: {
        fontSize: 48,
      },
    },
  });
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <MobileMenu />
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
