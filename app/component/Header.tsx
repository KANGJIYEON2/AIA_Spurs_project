"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Item = styled(Box)(() => ({
  backgroundColor: "#001B3F",
  textAlign: "center",
}));

const Header = () => {
  return (
    <Grid sx={{ bgcolor: "#001B3F" }} paddingRight={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 1, md: 10 }}>
        <Item>
          <Link color="#fafafa" href="/" underline="none">
            <Image src="/logo.png" alt="Partner Logo" width={80} height={64} />
          </Link>
        </Item>
        <Item>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={{ xs: 3, md: 5, lg: 10, xl: 15 }}
            sx={{ bgcolor: "#001B3F" }}>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="/" underline="none">
                HOME
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="#" underline="none">
                EVENT
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="#" underline="none">
                ALL ABOUT
                <br />
                SPURS
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="#" underline="none">
                WITH AIA
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="#" underline="none">
                MY PAGE
              </Link>
            </Typography>
          </Stack>
        </Item>
        <Item>
          <Typography sx={{ fontSize: 14 }} color="#fafafa" align="right">
            <Link color="#fafafa" href="#" underline="none">
              LOGIN
            </Link>
          </Typography>
        </Item>
      </Stack>
    </Grid>
  );
};

export default Header;
