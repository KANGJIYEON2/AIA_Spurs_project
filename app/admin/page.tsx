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
                <Typography variant="h3" textAlign={"center"} mb={"20"}>
                    관리자페이지
                </Typography>
                <Box sx={{ mb: "10" }} />
                <Box sx={{ mt: "50px" }}>
                    <Userpage />
                </Box>
                <Box sx={{ mt: "50px" }}>
                    <Events />
                </Box>
                <Box sx={{ mt: "50px" }}>
                    <Contents />
                </Box>
            </Box>
        </Container>
    );
};

export default adminpage;
