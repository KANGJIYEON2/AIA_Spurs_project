"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "@mui/material/Link";

export default function Home() {
  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ marginTop: 5, marginBottom: 30 }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            이벤트
          </Typography>
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
              width={"0"}
              height={"0"}
              sizes="100vw,"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            공지사항
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px dashed grey",
            width: "100%",
            height: "300px",
          }}>
          <Typography variant="h4">공지사항 들어갈 공간</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            SPURS' PICK
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px dashed grey",
            width: "100%",
            height: "300px",
          }}>
          <Typography variant="h4">spurs's pick 들어갈 공간</Typography>
        </Box>
      </Box>
    </Container>
  );
}
