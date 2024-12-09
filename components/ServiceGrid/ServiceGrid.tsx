import { Grid2 } from "@mui/material";
import React from "react";
import { ServiceType } from "./Services";
import Service from "./Service";

const ServiceGrid = (props: ServiceGridProps) => {
  return (
    <Grid2 container justifyContent={"space-around"}>
      {props.services.map((s) => (
        <Grid2 size={3.5}>
          <Service {...s} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ServiceGrid;

interface ServiceGridProps {
    services: ServiceType[];
}
