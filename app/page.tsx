"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "@mui/material/Link";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ m: 5, height: "100vh" }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">이벤트</Typography>
        </Box>
        <Box
          sx={{
            p: 0,
            width: "100%",
            height: "300px",
          }}>
          <Link href="/event">
            <Image
              src="/main_event.png"
              alt="Partner Logo"
              width={770}
              height={300}
            />
          </Link>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">공지사항</Typography>
        </Box>
        <Box
          sx={{
            border: "1px dashed grey",
            width: "100%",
            height: "200px",
          }}>
          <Typography variant="h4">공지사항 들어갈 공간</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">SPURS' PICK</Typography>
        </Box>
        <Box
          sx={{
            border: "1px dashed grey",
            width: "100%",
            height: "200px",
          }}>
          <Typography variant="h4">spurs's pick 들어갈 공간</Typography>
        </Box>
      </Box>
    </Container>
  );
}
