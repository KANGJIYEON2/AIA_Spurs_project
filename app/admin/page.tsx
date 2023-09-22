import { Box, Typography } from "@mui/material";
import React from "react";
import Userpage from "./users/page";
import Contents from "./contents/page";
import Events from "./events/page";
import Container from "@mui/material/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function adminpage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.name !== "관리자") {
    return (
      <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
        <Box sx={{ marginY: 5 }}>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ fontWeight: "Bold" }}>
            관리자 페이지 접근 권한이 없습니다.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ marginTop: 5, marginBottom: 30 }}>
        <Typography variant="h3" textAlign={"center"} mb={"20"}>
          관리자페이지
        </Typography>
        <Box sx={{ mb: "10" }} />
        <Box sx={{ mt: "50px" }}>
          <Userpage />
        </Box>
        <Box sx={{ mt: "50px" }}>
          <Events />
        </Box>
        <Box sx={{ mt: "50px" }}>
          <Contents />
        </Box>
      </Box>
    </Container>
  );
}
