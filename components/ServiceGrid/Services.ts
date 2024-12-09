import { Image, images } from "@/assets/images/Images";

const Services: ServiceType[] = [
  {
    title: "Custom Builds",
    services: ["Custom Homes", "ADU'S", "Additions"],
    image: images.framing,
  },
  {
    title: "Exterior",
    services: [
      "Block Walls",
      "Concrete",
      "Decking",
      "Siding",
      "Patio Cover",
      "Landscaping",
    ],
    image: images.framing2,
  },
  {
    title: "Interior",
    services: [
      "Block Walls",
      "Concrete",
      "Decking",
      "Siding",
      "Patio Cover",
      "Landscaping",
    ],
    image: images.framing3,
  },
];
export default Services;

export type ServiceType = {
  title: string;
  services: string[];
  image: Image;
};
