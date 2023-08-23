"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Login() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "82vh",
        width: "100%",
      }}>
      <Grid
        sx={{
          m: 1,
        }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#001B3F" }}>
          카카오톡으로 로그인하기
        </Typography>
      </Grid>
      <Grid
        border="1px solid"
        borderColor="#001B3F"
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "15%",
          width: "20%",
        }}>
        <Button
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}>
          <Image src="/login.png" alt="login" width={200} height={50} />
        </Button>
      </Grid>
    </Grid>
  );
}
