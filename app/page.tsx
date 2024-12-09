import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { images } from "@/assets/images/Images";
import { Typography as Font, Grid2 } from "@mui/material";

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
      <div>
        <Font>You Think It We Build It</Font>
        <Grid2 container>
          <Grid2 size={6}>
            <Font>Home Sweet Home</Font>
          </Grid2>
          <Grid2 size={6}>
            <Font>
              Crafting houses into homes since 2020. Keep adding random text
              just for styling sake. Adding one more sentence for added content.
            </Font>
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
}
