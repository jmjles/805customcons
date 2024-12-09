import Services from "@/components/ServiceGrid/Services";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import React from "react";
import { Container } from "@mui/material";

const ServicesC = () => {
  return (
    <Container>
      <ServiceGrid services={Services} />
    </Container>
  );
};

export default ServicesC;
