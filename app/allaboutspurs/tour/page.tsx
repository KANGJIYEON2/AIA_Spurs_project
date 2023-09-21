"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "@mui/material/Link";
import "../../globals.css";

export default function Tour() {
  return (
    <Container className="tab" sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ m: 10, height: "66.5vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0}>
          <Grid>
            <Image
              src="/tour.png"
              alt="tour"
              width={"0"}
              height={"0"}
              sizes="100vw,"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              COACHING CORNER
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6">
              Explore the Tottenham Hotspur Stadium in 360, and learn football
              tips from Tottenham Hotspur&apos;s coaches!
            </Typography>
          </Grid>
          <br />
          <Grid>
            <Link href="https://aiaspurs.com/coachingcorner">
              <Button
                variant="contained"
                color="error"
                sx={{
                  fontSize: 30,
                  fontWeight: "bold",
                  width: 225,
                  height: 55,
                }}>
                ENTER
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
