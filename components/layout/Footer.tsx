import {
  Grid2,
  Typography as Font,
  Button,
  Container,
  SvgIconTypeMap,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import WhiteLogo from "@/assets/images/805 Custom Builder Logo White.webp";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Place,
  Twitter,
} from "@mui/icons-material";
import { Links } from "./Links";
export const socials: socialType[] = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/profile.php/?id=100086492271477",
  },
  {
    icon: Twitter,
    link: "",
  },
  {
    icon: Instagram,
    link: "",
  },
];
import Link from "next/link";
import { OverridableComponent } from "@mui/material/OverridableComponent";
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
        <Grid2 container justifyContent="space-between" spacing={2}>
          <Grid2 container direction="column" maxWidth="325px">
            <Grid2>
              <Image
                alt="805 Custom Construction Logo"
                width={325}
                src={WhiteLogo}
              />
            </Grid2>
            <Grid2>
              <Font variant="body1">
                Born & Raised in The Great 805🇺🇸Hands on General Contractor
                Builder🛠️🪚🏘️Family Owned & Operated
              </Font>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={1} direction="column">
            <Font variant="h4">Quick Links</Font>
            {Links.map((l) => (
              <Grid2>
                <Button variant="text">
                  <Link href={l.link}>{l.text}</Link>
                </Button>
              </Grid2>
            ))}
          </Grid2>
          <Grid2 container spacing={1} direction="column">
            <Font variant="h4">Contact Us</Font>
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
          <Grid2>
            <Font variant="h4" align="center">
              Follow Us
            </Font>
            <Grid2 container justifyContent={"center"} spacing={3}>
              {socials.map((m) => (
                <a href={m.link} referrerPolicy="no-referrer" target="_blank">
                  <m.icon fontSize="large" />
                </a>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};

type socialType = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  link: string;
};
export default Footer;
