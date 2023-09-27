"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const videopath = [
  "https://videos.ctfassets.net/49hp26a2avpu/4bmyvjgQcJgHq5XKjkIVD0/d18d4b323d09befe20dee983a07379b0/AIA_PA_VIP_________________0712________-__________.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/15oeva9OWPTaycPCDpE4zZ/13633d3d0e0516813c29280c31d2c6a5/Skywalk.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/2XFpcZ0kdd11v42Zi2LjAx/5af9ff42e28f568b353417f6d6b9e7d4/Stadium_Tour.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/1i79te2UJMl9poe01XtMaU/97dc6e4cc6db161f56364a93138432f6/Meet_and_Greet.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/7BFtNSVt1u5ul8ltYpCjXh/4241a81ac53581ce4bcaa552c1e8dee9/Training_with_Cho__1_.mp4",
  "",
];

const teaser = [
  "https://videos.ctfassets.net/49hp26a2avpu/5cLVpC3EbjalExBGB3kZeO/ae965c65f8dddf82ee6789854cdcde62/Ep._4_Teaser.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/7uyfU6eRUp4AmtHWBkhr51/bc3fa21e2aeb9ec926aea22a247a4375/Footgolf__________.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/2fqlOYp2TYedkvxnJ4gOra/44c00ed5f0fd9cba26a7f8c5bb36c8b6/Ep._2_Teaser.mp4",
];

const SpecialVideo = ({ path }: { path: string }) => {
  return (
    <Grid item xs={12} sm={4} md={3} sx={{ marginX: 1 }}>
      <Item>
        <ReactPlayer url={path} width="200px" height="150px" controls={true} />
      </Item>
    </Grid>
  );
};

export default function Special() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Grid>
        <Grid>
          <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
            스페셜영상
          </Typography>
        </Grid>
        <br />
        <Grid container sx={{ marginBottom: 10 }}>
          <Typography variant="h6">
            AIA 마스터 플래너님들의 특별한 토트넘 여행과 팬배서더들의 특별한
            이야기를 확인해보세요.
          </Typography>
          {videopath.map((path, index) => (
            <SpecialVideo key={index} path={path} />
          ))}
        </Grid>
        <Grid>
          <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
            티저영상
          </Typography>
        </Grid>
        <br />
        <Grid container sx={{ marginBottom: 10 }}>
          <Typography variant="h6">
            AIA 팬배서더들이 토트넘에서 겪은 특별한 다음이야기를 아래 티저
            영상을 통해 미리 확인해보세요.
          </Typography>
          {teaser.map((path, index) => (
            <SpecialVideo key={index} path={path} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
