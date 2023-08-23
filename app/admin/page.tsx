import { Box, Typography } from "@mui/material";
import React from "react";
import Userpage from "./users/page";
import Contents from "./contents/page";
import Events from "./events/page";

const adminpage = () => {
  return (
    <Box>
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
  );
};

export default adminpage;
