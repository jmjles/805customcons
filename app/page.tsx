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
      <div className="GalleryCTA">
        <div className="Shade" />
        <Grid2
          container
          justifyContent={"center"}
          spacing={8}
          alignItems={"center"}
          className="Content"
        >
          <Grid2>
            <Font textTransform="capitalize" color="#FFF">
              Visit our residential homes gallery
            </Font>
          </Grid2>
          <Grid2>
            <div className="Button">
              <Font textTransform="capitalize" color="#FFF">
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
      </div>
    </div>
  );
}
