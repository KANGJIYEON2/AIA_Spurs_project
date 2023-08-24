"use client";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CardMedia, Grid, Typography } from "@mui/material";

export default function Special() {
  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ height: "100vh", bgcolor: "#daeba2" }}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyItems="center">
          <CardMedia
            component="video"
            controls
            title="AIAOneBillion"
            image="https://videos.ctfassets.net/49hp26a2avpu/cK6dhyaaGd0qaL4RxeZWL/920debf0c3aa953de737baf01a2a106f/AIA-One-Billion-short.mp4"
            width={100}
            style={{ width: "65%", height: "450px" }}
          />
        </Grid>
      </Box>
    </Container>
  );
}
