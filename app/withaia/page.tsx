"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "next/image";
import { CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Container from "@mui/material/Container";

export default function LabTabs(): React.JSX.Element {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="secondary"
              indicatorColor="secondary">
              <Tab
                label="AIA ONE BILLION"
                value="1"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              />
              <Tab
                label="SPURS & AIA 파트너십 스토리"
                value="2"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div style={{ position: "relative" }}>
              <Image
                src="/AIA1.jpg"
                width={"0"}
                height={"0"}
                sizes="100vw"
                alt={""}
                style={{ width: "100%", height: "450px", objectFit: "cover" }}
              />
            </div>
            <Box sx={{ textAlign: "center" }}>
              <h2>AIA One Billion</h2>
            </Box>
            <br />

            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justifyItems="center">
              <CardMedia
                component="video"
                controls
                title="AIAOneBillion"
                image="https://videos.ctfassets.net/49hp26a2avpu/cK6dhyaaGd0qaL4RxeZWL/920debf0c3aa953de737baf01a2a106f/AIA-One-Billion-short.mp4"
                width={100}
                style={{ width: "65%", height: "450px" }}
              />
            </Grid>
            <Box
              sx={{
                textAlign: "center",
                fontStyle: "oblique",
                typography: "body2",
              }}>
              <p>
                AIA생명, 아태지역 10억명 사람들의 ‘더 건강하게, 더 오랫동안, 더
                나은 삶’을 위한 첫 발을 딛다.
              </p>
              <p>
                AIA생명이 사회 모든 구성원들의 지속가능한 미래를 실현해 나가고자
                2030년까지 AIA One Billion 캠페인을 시작합니다.
              </p>
              <p>
                {" "}
                AIA One Billion은 파트너사, 이벤트, 캠페인 등을 통해 모든 사람이
                건강한 생활습관을 형성하도록 돕는다는 목표 하에 다각적인 소통
                방식으로 대중을 만날 것입니다.
              </p>
              <p>
                더 자세한 내용은 AIA One Billion 웹사이트에서 확인할 수 있습니다
                aia.com/aiaonebillion.
              </p>
              <Box sx={{ fontWeight: "bold" }}>
                <Link
                  href="https://www.aia.com/en/about-aia/aia-one-billion"
                  target="_blank"
                  rel="noopener">
                  {"더보기>"}
                </Link>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value="2">
            <div style={{ position: "relative" }}>
              <Image
                src="/sony2.jpg"
                width={"0"}
                height={"0"}
                sizes="100vw"
                alt={""}
                style={{ width: "100%", height: "450px", objectFit: "cover" }}
              />
            </div>
            <Box sx={{ textAlign: "center" }}>
              <h2>축구를 통하여 건강한 삶에 대한 관심을 높이고 알립니다.</h2>
            </Box>
            <br />

            <Box
              sx={{
                textAlign: "center",
                fontStyle: "oblique",
                typography: "body2",
              }}>
              <p>
                토트넘 홋스퍼 구단은 영국 프리미어 리그 상위구단으로 아시아
                지역에 두터운 팬층을 확보하고 있습니다. 그리고 AIA그룹은 지난
                2013년부터 토트넘 홋스퍼 구단과 공식 저지 스폰서십을 이어오고
                있어요.
              </p>
              <p>
                스포츠는 건강하게 사는데 매우 중요한 역할을 한다고 믿어요.
                그래서 우리는 사회에 건강한 영향을 주기 위하여 축구를 통해
                팀워크, 훈련, 스포츠맨십의 긍정적인 가치를 전파하고 있습니다.
              </p>
              <p>
                {" "}
                ‘더 건강하게, 더 오랫동안, 더 나은 삶’을 누릴 수 있도록,
                AIA생명이 항상 응원하며 함께 하겠습니다.
              </p>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <br />
              <br />
              <h2>2022 Spurs Korea Tour</h2>
            </Box>
            <br />

            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justifyItems="center">
              <CardMedia
                component="video"
                controls
                title="AIASpurs"
                image="https://videos.ctfassets.net/49hp26a2avpu/5u8ovzU9ItzmUgCLFM0OGd/b0e65ac62dde1c4ce5bb417ccd8206c4/PA_1__1_.mp4"
                width={100}
                style={{ width: "65%", height: "450px" }}
              />
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
