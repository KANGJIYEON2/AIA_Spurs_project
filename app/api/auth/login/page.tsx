"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import "../../../globals.css";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ m: 5, height: "75vh", width: "100%", bgcolor: "#6cd0d4" }}>
      <Button
        onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}>
        <Image src="/login.png" alt="login" width={200} height={50} />
      </Button>
    </Grid>
  );
}
