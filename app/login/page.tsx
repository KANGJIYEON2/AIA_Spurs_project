"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Box from "@mui/material/Box";
import Image from "next/image";
import "../globals.css";
import Button from "@mui/material/Button";

function Login() {
  return (
    <Box sx={{ m: 5, height: "75vh" }}>
      <Button
        className="Login"
        onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}>
        <Image src="/login.png" alt="login" width={200} height={50} />
      </Button>
    </Box>
  );
}

export default Login;
