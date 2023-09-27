"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Event from "./eventpage/page";
import Faqpage from "../faqlist/page";
import Notice from "../notice/page";
import Container from "@mui/material/Container";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";

export default function EventTabs() {
    const router = useRouter();
    const [value, setValue] = React.useState("1");
    const { data: session, status } = useSession();
    const [openAlert, setOpenAlert] = useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const handleAlertClose = () => {
        setOpenAlert(false);
        router.push("/api/auth/login");
    };

    useEffect(() => {
        if (status === "loading") {
            return;
        }

        if (!session) {
            setOpenAlert(true);
        }
    }, [session, router, status]);

    return (
        <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
            <Dialog
                open={openAlert}
                onClose={handleAlertClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Alert severity="error" onClose={handleAlertClose}>
                    <AlertTitle>경고!</AlertTitle>
                    이벤트 참여시 <strong>로그인필요</strong>
                </Alert>
            </Dialog>
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="EVENT PAGE"
                        >
                            <Tab
                                label="이벤트"
                                value="1"
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                }}
                            />
                            <Tab
                                label="공지사항"
                                value="2"
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                }}
                            />
                            <Tab
                                label="FAQ"
                                value="3"
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Event />{" "}
                    </TabPanel>
                    <TabPanel value="2">
                        <Notice />
                    </TabPanel>
                    <TabPanel value="3">
                        <Faqpage />
                    </TabPanel>
                </TabContext>
            </Box>
        </Container>
    );
}
