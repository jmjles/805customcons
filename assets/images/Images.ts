import framingImg from "./framing.webp";
import framing2Img from "./framing 2.webp";
import framing3Img from "./framing 3.webp";
import { StaticImageData } from "next/image";

export const images: Record<string, Image> = {
  framing: { src: framingImg, alt: "Framing job in thousand oaks" },
  framing2: { src: framing2Img, alt: "Framing job in thousand oaks" },
  framing3: { src: framing3Img, alt: "Framing job in thousand oaks" },
};

export type Image = {
  src: StaticImageData;
  alt: string;
  desc?: string;
  title?: string;
};
