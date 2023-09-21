import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const videopath = [
  "https://videos.ctfassets.net/49hp26a2avpu/1mKTCAGgQvBJd1l3bpIIvI/caead79c1ab50f8b3cc67b92c2e605b6/AIA_PA_VIP_________________0712________-__________.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/6sseVlBwiTZeqj9KZ9vQgd/3f9ccb86fe1bf395b9592bfdf094051c/Skywalk.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/7Ic3oNxZUnzndyrDL5E4WZ/1991e57a5cf8c1e2e9921b6051c44b45/Stadium_Tour.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/7cgdWNJ8cYKIwdTkwcqQ1w/bc2f2fe24d282e89d99cea5bd33b7f2c/Meet_and_Greet.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/7BFtNSVt1u5ul8ltYpCjXh/7e5b6b6789326d3fa330be307bc27246/Training_with_Cho__1_.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/7pizj1kpgquT2ys18fGIEt/da690b4df13e7f57107ba9f9e96c5fda/Ep._4_Teaser.mp4",
];

const VideoGrid = ({ path }: { path: string }) => {
  return (
    <Grid
      xs={4}
      container
      justifyContent="center"
      alignItems="center"
      sx={{ width: "250px", height: "250px" }}>
      <video style={{ width: "300px", height: "300px" }}>
        <source src={path} />
      </video>
    </Grid>
  );
};

export default function Special() {
  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "70vh" }}>
        {videopath.map((path, index) => (
          <VideoGrid key={index} path={path} />
        ))}
      </Grid>
    </Container>
  );
}
