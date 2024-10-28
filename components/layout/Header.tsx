import { Button, Container, Grid2 } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/images/805 Custom Builder Logo.webp";
import homepageHome from "@/assets/images/homepage house.webp";
import { Links } from "./Links";
const logoWidth = 165;
const Header = () => {
  return (
    <header>
      <div style={{ backgroundColor: "#FFF" }}>
        <Container>
          <Grid2 container justifyContent="space-between">
            <Grid2>
              <Image
                src={Logo}
                alt="805 Custom Builder Logo"
                width={logoWidth}
              />
            </Grid2>
            <Grid2
              container
              wrap="nowrap"
              component="nav"
              spacing={4}
              alignItems={"center"}
              justifyContent="center"
            >
              {Links.map((n) => (
                <Grid2>
                  <Button variant="text">
                    <Link href={n.link}>{n.text}</Link>
                  </Button>
                </Grid2>
              ))}
            </Grid2>
            <Grid2 sx={{ width: logoWidth }}></Grid2>
          </Grid2>
        </Container>
      </div>
      <div
        style={{
          aspectRatio: "16/9",
          maxHeight: "500px",
          width: "100%",
          maxWidth: 1200,
          position: "relative",
          left: "50%",
            transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            aspectRatio: "16/9",
            maxHeight: "500px",
            position: "absolute",
            width: "100%",
            maxWidth: 1200,
            zIndex: -999,
          }}
        >
          <Image src={homepageHome} alt="test" fill />
        </div>
      </div>
    </header>
  );
};

export default Header;
