"use client";

import React from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { signIn, signOut, useSession } from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { routes } from "./routes";

const paths = routes;

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#001B3F",
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DisplayMenu = (menu: string, path: string) => {
  return (
    <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
      <Link color="#fafafa" href={path} underline="none">
        {menu}
      </Link>
    </Typography>
  );
};

const Header = () => {
  const { data: session } = useSession();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const DisplayLogo = (
    <Grid item xs={2} sx={{ flexGrow: 1 }}>
      <Item>
        <Link href="/">
          <Image src="/logo.png" alt="Partner Logo" width={80} height={64} />
        </Link>
      </Item>
    </Grid>
  );

  const DisplayItems = (
    <Grid item xs={8} sx={{ display: { xs: "none", md: "flex" } }}>
      <Item>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={{ xs: 3, md: 4, lg: 4, xl: 4 }}>
          {DisplayMenu("HOME", "/")}
          {DisplayMenu("EVENT", "/event")}
          {DisplayMenu("ALL ABOUT SPURS", "/allaboutspurs")}
          {DisplayMenu("WITH AIA", "/withaia")}
          {DisplayMenu("MY PAGE", "/mypage")}
        </Stack>
      </Item>
    </Grid>
  );

  const DisplayLogin = (
    <Grid item xs={2} sx={{ flexGrow: 1 }} justifyContent="flex-end">
      <Item>
        <MenuItem onClick={() => (session ? signOut() : signIn())}>
          <Typography sx={{ fontSize: 14 }} color="#fafafa">
            {session ? "LOGOUT" : "LOGIN"}
          </Typography>
        </MenuItem>
      </Item>
    </Grid>
  );

  return (
    <Grid
      sx={{ bgcolor: "#001B3F" }}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center">
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
          sx={{ color: "#fafafa" }}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}>
          {paths.map(({ name, link }) => (
            <MenuItem>
              <Link
                href={link}
                style={{ textDecoration: "none", color: "#001B3F" }}>
                <Typography textAlign="center">{name}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {DisplayLogo}
      {DisplayItems}
      {DisplayLogin}
    </Grid>
  );
};

export default Header;
