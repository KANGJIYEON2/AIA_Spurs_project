import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const videopath = [
  "https://videos.ctfassets.net/49hp26a2avpu/3qEKHussr3XHE9EOvzOoi8/727be4aafd2df2880495ff6518ebd4cf/PEH-OS-Eat-well-.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/18tzWHQStH5hMyBXvGYD2T/f4606f5bbda8d5b9fcf6ac9861401eb5/230609_AIA_HARRY_KANE_edit_v06_KOR_SUB.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/6gRFF9pUEuWZKlgRbBhhRk/925cc4ac26ab649f5a3896adbb3c6c46/AIA_-_TOTTENHAM_HOTSPUR_MENTAL_HEALTH_1__1__1.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/y4sHiQDjoFflyIB5bdKFq/889279e20ec633ea95741155bcf23622/UNI813_Health_Tips_Tip5_DS_MASTER.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/17lxXjMFdCR0yIi0CoVSwy/7033d930076d0b1ef85e3f80a2b9fb2b/CSM_ERICDIER_BACKGAMMON_CUT_FINAL_1.mp4",
  "https://videos.ctfassets.net/49hp26a2avpu/2O4EgKJPNYZfofSMTfCWJ6/e7fb5bb67512b45ed57ac12582ccf5ab/AIA_-_TOTTENHAM_HOTSPUR_MENTAL_HEALTH_2.mp4",
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

export default function Healthtip() {
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
