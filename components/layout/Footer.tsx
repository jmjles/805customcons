import { Grid2, Typography as Font, Button, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import WhiteLogo from "@/assets/images/805 Custom Builder Logo White.webp";
import { Mail, Phone, Place } from "@mui/icons-material";
import { Links } from "./Links";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#FFF",
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <Container>
        <Grid2 container justifyContent="space-between">
          <Grid2 container direction="column" maxWidth="400px">
            <Image
              alt="805 Custom Construction Logo"
              width={350}
              src={WhiteLogo}
            />
            <Font variant="body1">
              Born & Raised in The Great 805🇺🇸Hands on General Contractor
              Builder🛠️🪚🏘️Family Owned & Operated
            </Font>
          </Grid2>
          <Grid2 container spacing={1} direction="column">
            <Font variant="h3">Quick Links</Font>
            {Links.map((l) => (
              <Grid2>
                <Button variant="text">
                  <Link href={l.link}>{l.text}</Link>
                </Button>
              </Grid2>
            ))}
          </Grid2>
          <Grid2 container spacing={1} direction="column">
            <Font variant="h3">Contact Us</Font>
            <Grid2 container spacing={1} alignItems="center">
              <Grid2>
                <Place />
              </Grid2>
              <Grid2>
                <Font variant="body1">Moorpark, Ca</Font>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={1} alignItems="center">
              <Grid2>
                <Phone />
              </Grid2>
              <Grid2>
                <Font component="a" href="tel:8057963635">
                  805-796-3635
                </Font>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={1} alignItems="center">
              <Grid2>
                <Mail />
              </Grid2>
              <Grid2>
                <Font component="a" href="mailto:805custombuilders.com">
                  805CustomBuilders@gmail.com
                </Font>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};

export default Footer;
