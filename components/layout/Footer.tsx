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
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container justifyContent={"space-between"}>
          <Grid2 container direction="column" maxWidth="500px">
            <Grid2>
              <Image
                alt="805 Custom Construction Logo"
                width={325}
                src={WhiteLogo}
              />
            </Grid2>
            <Grid2>
              <Font variant="body2">
                Born & Raised in The Great 805🇺🇸Hands on General Contractor
                Builder🛠️🪚🏘️Family Owned & Operated
              </Font>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={3} direction="column">
            <Font variant="h3">Quick Links</Font>
            {Links.map((l) => (
              <Grid2>
                <Link href={l.link}>
                  <div className="NavLink" style={{ color: "#FFF" }}>
                    {l.text}
                  </div>
                </Link>
              </Grid2>
            ))}
          </Grid2>
          <Grid2 container spacing={0} direction="column">
            <Font variant="h3">Contact Us</Font>
            <Grid2 container spacing={1} alignItems="center">
              <Grid2>
                <Place />
              </Grid2>
              <Grid2>
                <Font variant="body2">Moorpark, Ca</Font>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={1} alignItems="center">
              <Grid2>
                <Phone />
              </Grid2>
              <Grid2>
                <Font component="a" href="tel:8057963635" variant="body2">
                  805-796-3635
                </Font>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={1} alignItems="center" wrap="nowrap">
              <Grid2>
                <Mail />
              </Grid2>
              <Grid2>
                <Font
                  component="a"
                  href="mailto:805custombuilders.com"
                  variant="body2"
                >
                  805CustomBuilders@gmail.com
                </Font>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={3}>
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
