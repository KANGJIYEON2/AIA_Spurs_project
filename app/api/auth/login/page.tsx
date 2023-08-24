"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Login() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "80vh",
        width: "95vw",
      }}>
      <Grid>
        <Image
          src="/logo_color.jpg"
          alt="Logo color"
          width={150}
          height={120}
          // sizes="30vw,"
          // style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid
        sx={{
          marginBottom: 4,
        }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#001B3F" }}>
          AIA - SPURS에 오신 것을 환영합니다!
        </Typography>
      </Grid>
      <Grid
        border="1px solid"
        borderColor="#001B3F"
        borderRadius="16px"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "300px",
          width: "300px",
        }}>
        <Box>
          <Typography sx={{ fontWeight: "bold", color: "#001B3F" }}>
            SNS로그인 후 계속하기
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() =>
              signIn("kakao", { redirect: true, callbackUrl: "/" })
            }>
            <Image
              src="/login_google.png"
              alt="login_google"
              width={200}
              height={50}
            />
          </Button>
        </Box>
        <Box>
          <Button
            onClick={() =>
              signIn("kakao", { redirect: true, callbackUrl: "/" })
            }>
            <Image
              src="/login_naver.png"
              alt="login_naver"
              width={200}
              height={50}
            />
          </Button>
        </Box>
        <Box>
          <Button
            onClick={() =>
              signIn("kakao", { redirect: true, callbackUrl: "/" })
            }>
            <Image
              src="/login_kakao.png"
              alt="login_kakao"
              width={200}
              height={50}
            />
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
