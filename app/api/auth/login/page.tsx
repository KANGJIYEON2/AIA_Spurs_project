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
        height: "80vh",
        width: "100%",
      }}>
      <Grid>
        <Image
          src="/logo_color.jpg"
          alt="Logo color"
          width={"0"}
          height={"0"}
          sizes="30vw,"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid
        sx={{
          marginBottom: 3,
        }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#001B3F" }}>
          AIA - SPURS에 오신 것을 환영합니다!
        </Typography>
      </Grid>
      <Grid
        border="1px solid"
        borderColor="#001B3F"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "20%",
          width: "20%",
        }}>
        <Typography sx={{ fontWeight: "bold", color: "#001B3F" }}>
          카카오톡으로 계속하기
        </Typography>
        <Button
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}>
          <Image src="/login.png" alt="login" width={200} height={50} />
        </Button>
      </Grid>
    </Grid>
  );
}
