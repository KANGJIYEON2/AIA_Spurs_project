"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "@mui/material/Link";
import Notice from "./notice/page";
import Special from "./allaboutspurs/special/page";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ marginY: 5 }}>
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
            marginBottom: 10,
          }}>
          <Link href="/event">
            <Image
              src="/main_event.png"
              alt="Partner Logo"
              width={"0"}
              height={"0"}
              sizes="100vw,"
              style={{ width: "90%", height: "100%", paddingLeft: 20 }}
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
            display: "flex",
            width: "100%",
          }}>
          <Notice />
        </Box>
        <Box sx={{ p: 2, marginTop: 7 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            SPURS&apos; PICK
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Special />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
