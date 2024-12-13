import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { images } from "@/assets/images/Images";
import {
  Button,
  Container,
  Divider,
  Typography as Font,
  Grid2,
} from "@mui/material";
import "./home.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "805CustomBuilders | Home",
  description:
    "Born & Raised in The Great 805🇺🇸 | Hands on General Contractor Builder🛠️🪚🏘️ | Family Owned & Operated",
};

export default function Home() {
  return (
    <div>
      <Header
        title="Custom Construction"
        desc="A short message can be entered here to grab attention"
        location="Home"
        image={images["framing"]}
      />
      {/* Introduction */}
      <div className="Introduction">
        <Font align="center" variant="h2" className="Title">
          You Think It We Build It
        </Font>
        <Container component="section">
          <Grid2 container alignItems="center" component="article">
            <Grid2 container size={6} wrap="nowrap">
              <Grid2>
                <Font variant="h2">Home Sweet Home</Font>
              </Grid2>
              <Grid2>
                <Divider orientation="vertical" className="Divider" />
              </Grid2>
            </Grid2>
            <Grid2 size={6} sx={{ position: "relative" }}>
              <div className="ImageContainer">
                <Image
                  src={images["framing2"].src}
                  alt={images["framing2"].alt}
                  className="Image"
                  fill
                />
              </div>

              <Font style={{ marginTop: 426 }} variant="body2">
                Crafting houses into homes since 2020. Keep adding random text
                just for styling sake. Adding one more sentence for added
                content.
              </Font>
            </Grid2>
          </Grid2>
        </Container>
      </div>
      <section className="GalleryCTA">
        <div className="Overlay" />
        <Grid2
          container
          justifyContent={"center"}
          spacing={8}
          alignItems={"center"}
          className="Content"
          component="article"
        >
          <Grid2>
            <Font textTransform="capitalize" color="#FFF">
              Visit our residential homes gallery
            </Font>
          </Grid2>
          <Grid2>
            <div className="Button">
              <Font textTransform="capitalize" variant="body2">
                Learn More
              </Font>
            </div>
          </Grid2>
        </Grid2>
        <Image
          src={images["framing3"].src}
          alt={images["framing3"].alt}
          className="Image"
        />
      </section>
      <section className="AboutCTA">
        <Container maxWidth="xl" className="Content">
          <Grid2 container component="article" alignContent={"center"}>
            <Grid2 container wrap="nowrap" size={6} alignItems={"center"}>
              <Grid2>
                <Font variant="h2">
                  805 Custom Builders is here to make things happen
                </Font>
              </Grid2>
              <Grid2>
                <Divider orientation="vertical" className="Divider" />
              </Grid2>
            </Grid2>
            <Grid2 size={6} alignSelf={"center"}>
              <Font align="left">
                We measure our success with not only the many successful
                projects we have completed, but also for how few failures we’ve
                been challenged.
              </Font>
            </Grid2>
          </Grid2>
          <Link href="/about-us">
            <div className="Button">
              <Font>About Us</Font>
            </div>
          </Link>
        </Container>
      </section>
      <section className="ServicesCTA">
        <Grid2 container className="MediaContainer">
          <Divider className="Divider" />
          <Grid2 size={6} className="Media">
            <div className="Overlay" />
            <div className="Content">
              <Font variant="h2">From Start</Font>
            </div>
            <Image
              src={images["framing"].src}
              alt={images["framing"].alt}
              className="Image"
            />
          </Grid2>
          <Grid2 size={6} className="Media">
            <div className="Overlay" />
            <div className="Content">
              <Font variant="h2">To Finish</Font>
            </div>
            <Image
              src={images["framing2"].src}
              alt={images["framing2"].alt}
              className="Image"
            />
          </Grid2>
        </Grid2>
        <Container maxWidth="xl" className="Content">
          <Font variant="h1" align="center">
            We've Got You Covered
          </Font>
          <Font variant="body2">
            We offer a large variety of services to accommodate projects of your
            interest.
          </Font>
          <div className="Button">
            <Font>Services</Font>
          </div>
        </Container>
      </section>
    </div>
  );
}
