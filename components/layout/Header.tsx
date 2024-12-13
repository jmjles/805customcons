"use client";
import { Container, Grid2, Typography as Font, Divider } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Logo from "@/assets/images/805 Custom Builder Logo.webp";
import { Links } from "./Links";
import { LocationOn, Phone } from "@mui/icons-material";
import { socials } from "./Footer";
import { Image as ImageType } from "@/assets/images/Images";
import Image from "next/image";
import "./header.css";
const logoWidth = 175.9;
const Header = (props: headerProps) => {
  const header = useRef<HTMLElement>(null);
  const placeholder = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const navPos = () => {
      const hasClass = header.current?.classList.contains("Fixed");
      const addClass = window.scrollY >= 51;
      if (addClass && !hasClass) {
        header.current?.classList.add("Fixed");
        placeholder.current?.classList.add("Placeholder");
      }
      if (!addClass && hasClass) {
        header.current?.classList.remove("Fixed");
        placeholder.current?.classList.remove("Placeholder");
      }
    };
    window.addEventListener("scroll", navPos);
    return () => {
      window.removeEventListener("scroll", navPos);
    };
  }, []);
  return (
    <header style={{ fontSize: 24 }}>
      <div style={{ backgroundColor: "yellow", width: "100%", padding: 6 }}>
        <Container>
          <Grid2 justifyContent="space-between" container>
            <Grid2 container spacing={2}>
              {socials.map((s) => (
                <Grid2 component={"a"} href={s.link} height={35}>
                  <s.icon fontSize="large" />
                </Grid2>
              ))}
            </Grid2>
            <Grid2 container spacing={3}>
              <Grid2 container spacing={0} alignItems="center">
                <LocationOn fontSize="large" />
                <Font sx={{ fontSize: 26 }}>Moorpark,Ca</Font>
              </Grid2>
              <Grid2
                container
                component="a"
                href="tel:888-888-8888"
                spacing={1}
                alignItems="center"
              >
                <Phone fontSize="large" />
                <Font sx={{ fontSize: 26 }}>888-888-8888</Font>
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </div>
      <nav
        style={{
          backgroundColor: "#FFF",
          zIndex: 99,
        }}
        className="Nav"
        ref={header}
      >
        <Container sx={{ top: "0px", padding: 1 }}>
          <Grid2 container justifyContent="space-between">
            <Image src={Logo} alt="805 Custom Builder Logo" width={logoWidth} />
            <Grid2
              container
              wrap="nowrap"
              component="nav"
              spacing={4}
              alignItems={"center"}
              justifyContent="center"
            >
              {Links.map((n) => (
                <Grid2 key={n.link}>
                  <div
                    className={
                      props.location == n.text ? "NavActive" : "NavLink"
                    }
                  >
                    <Link href={n.link}>{n.text}</Link>
                  </div>
                </Grid2>
              ))}
            </Grid2>
            <Grid2 sx={{ width: logoWidth }}></Grid2>
          </Grid2>
        </Container>
      </nav>
      <div ref={placeholder} />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -999,
          top: 0,
          minHeight: 780 + 199,
        }}
      >
        <Image src={props.image.src} alt={props.image.alt} fill />
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.30)",
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: 0,
            minHeight: 780 + 199,
          }}
        ></div>
        <Container
          sx={{
            marginTop: "50vh",
            zIndex: 9999,
            position: "absolute",
            maxWidth: "1200",
            width: "100%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div style={{ maxWidth: 700 }}>
            <Font variant="h1" sx={{ color: "#FFF" }}>
              {props.title}
            </Font>
            <Divider
              sx={{
                borderBottom: "5px solid white",
                width: "85%",
                margin: "auto",
              }}
            />
            <Font variant="h3" component="p" sx={{ color: "#FFF" }}>
              {props.desc}
            </Font>
          </div>
        </Container>
      </div>
      <div className="HomepageSpacer"></div>
    </header>
  );
};
type headerProps = {
  image: ImageType;
  title: string;
  desc: string;
  location: string;
  quote?: boolean;
};
export default Header;
