"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Healthtip from "./healthtip/page";
import Special from "./special/page";
import Tour from "./tour/page";
import "../globals.css";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="Tab" sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="SPURS 선수들의 특별 영상"
              value="1"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            />
            <Tab
              label="SPURS 선수들의 건강팁"
              value="2"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            />
            <Tab
              label="버추얼 스타디움 투어"
              value="3"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Special />
        </TabPanel>
        <TabPanel value="2">
          <Healthtip />
        </TabPanel>
        <TabPanel value="3">
          <Tour />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
