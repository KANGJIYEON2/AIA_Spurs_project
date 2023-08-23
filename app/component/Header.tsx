"use client";

import React from "react";
import { Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { signIn, signOut, useSession } from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import "../globals.css";

// const Item = styled(Box)(() => ({
//   backgroundColor: "#001B3F",
//   textAlign: "center",
// }));

const Item = styled(Paper)(({ theme }) => ({
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

  const DisplayLogo = (
    <Grid item xs={2}>
      <Item>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Partner Logo"
            //   className={styles.vercelLogo}
            width={80}
            height={64}
            // priority
          />
        </Link>
      </Item>
    </Grid>
  );

  const DisplayItems = (
    <Grid item xs={8}>
      <Item>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={{ xs: 3, md: 4, lg: 4, xl: 4 }}
          // sx={{ bgcolor: "#001B3F" }}
        >
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
    <Grid item xs={2}>
      <Item>
        <MenuItem onClick={() => (session ? signOut() : signIn())}>
          <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
            {session ? "LOGOUT" : "LOGIN"}
          </Typography>
        </MenuItem>
      </Item>
    </Grid>
  );

  return (
    // <Grid className="Header" sx={{ bgcolor: "#001B3F" }} paddingRight={2}>
    //   <Stack
    //     direction="row"
    //     justifyContent="space-between"
    //     alignItems="center"
    //     spacing={{ xs: 1, md: 10 }}>
    //     <Item>
    //       <Link href="/">
    //         <Image src="/logo.png" alt="Partner Logo" width={80} height={64} />
    //       </Link>
    //     </Item>
    //     <Item>
    //       <Stack
    //         direction="row"
    //         justifyContent="space-between"
    //         alignItems="center"
    //         spacing={{ xs: 3, md: 5, lg: 10, xl: 15 }}
    //         sx={{ bgcolor: "#001B3F" }}>
    //         <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
    //           <Link color="#fafafa" href="/" underline="none">
    //             HOME
    //           </Link>
    //         </Typography>
    //         <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
    //           <Link color="#fafafa" href="/event" underline="none">
    //             EVENT
    //           </Link>
    //         </Typography>
    //         <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
    //           <Link color="#fafafa" href="/allaboutspurs" underline="none">
    //             ALL ABOUT
    //             <br />
    //             SPURS
    //           </Link>
    //         </Typography>
    //         <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
    //           <Link color="#fafafa" href="/aiaonebillion" underline="none">
    //             WITH AIA
    //           </Link>
    //         </Typography>
    //         <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
    //           <Link color="#fafafa" href="/mypage" underline="none">
    //             MY PAGE
    //           </Link>
    //         </Typography>
    //       </Stack>
    //     </Item>
    //     <MenuItem onClick={() => (session ? signOut() : signIn())}>
    //       <Typography sx={{ fontSize: 14 }} color="#fafafa" align="center">
    //         {session ? "LOGOUT" : "LOGIN"}
    //       </Typography>
    //     </MenuItem>
    //   </Stack>
    // </Grid>

    <Grid
      sx={{ bgcolor: "#001B3F" }}
      container
      spacing={{ xs: 2, md: 3 }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {DisplayLogo}
      {DisplayItems}
      {DisplayLogin}

      {/* {DisplayMenu}
      {DisplayLogin} */}
    </Grid>
  );
};

export default Header;
