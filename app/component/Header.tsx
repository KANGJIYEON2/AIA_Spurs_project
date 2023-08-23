"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { signIn, signOut, useSession } from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import "../globals.css";

const Item = styled(Box)(() => ({
  backgroundColor: "#001B3F",
  textAlign: "center",
}));

const Header = () => {
  const { data: session } = useSession();
  return (
    <Grid className="Header" sx={{ bgcolor: "#001B3F" }} paddingRight={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 1, md: 10 }}>
        <Item>
          <Link href="/">
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
              <Link color="#fafafa" href="/event" underline="none">
                EVENT
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="/allaboutspurs" underline="none">
                ALL ABOUT
                <br />
                SPURS
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="/aiaonebillion" underline="none">
                WITH AIA
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
              <Link color="#fafafa" href="/mypage" underline="none">
                MY PAGE
              </Link>
            </Typography>
          </Stack>
        </Item>
        <MenuItem onClick={() => (session ? signOut() : signIn())}>
          <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
            {session ? "LOGOUT" : "LOGIN"}
          </Typography>
        </MenuItem>
      </Stack>
    </Grid>
  );
};

export default Header;
