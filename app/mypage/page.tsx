"use client";

import React from "react";
import Mypage from "./Mypage";
import Login from "../api/auth/login/page";
import { useSession } from "next-auth/react";

const My_page = () => {
  const { data: session } = useSession();

  return (
    <main>
      {session && <Mypage />}
      {!session && <Login />}
    </main>
  );
};

export default My_page;
