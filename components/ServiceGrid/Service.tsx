import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography as Font,
  Grid2,
} from "@mui/material";
import React from "react";
import { ServiceType } from "./Services";

const Service = (props: ServiceType) => {
  const { image, title, services } = props;

  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia
        image={image.src.src}
        component="img"
        alt={image.alt}
        height={350}
      />
      <CardContent>
        <Grid2 container spacing={3} justifyItems={"center"}>
          {services.map((s, i) => {
            if (i > 5) return;
            return (
              <Grid2 size={6}>
                <Font variant="body1">{s}</Font>
              </Grid2>
            );
          })}
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default Service;
