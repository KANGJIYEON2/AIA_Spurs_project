import { Box, Typography } from "@mui/material";
import React from "react";
import Userpage from "./users/page";
import Contents from "./contents/page";
import Events from "./events/page";
import Container from "@mui/material/Container";

const adminpage = () => {
  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Box sx={{ marginTop: 5, marginBottom: 30 }}>
        <h1>관리자페이지</h1>
        <div>
          <Userpage />
        </div>
        <div>
          <Events />
        </div>
        <div>
          <Contents />
        </div>
      </Box>
    </Container>
  );
};

export default adminpage;
