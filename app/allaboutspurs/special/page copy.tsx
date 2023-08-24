import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const videopath = [
  "https://videos.ctfassets.net/49hp26a2avpu/1mKTCAGgQvBJd1l3bpIIvI/caead79c1ab50f8b3cc67b92c2e605b6/AIA_PA_VIP_________________0712________-__________.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/6sseVlBwiTZeqj9KZ9vQgd/3f9ccb86fe1bf395b9592bfdf094051c/Skywalk.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/7Ic3oNxZUnzndyrDL5E4WZ/1991e57a5cf8c1e2e9921b6051c44b45/Stadium_Tour.mp4",
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
    <Grid container direction="row" alignItems="center">
      {videopath.map((path, index) => (
        <VideoGrid key={index} path={path} />
      ))}
    </Grid>
  );
}
