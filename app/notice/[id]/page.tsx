"use client";

import React, { useEffect, useState } from "react";
import { Notices } from "@/interface/list";
import getNotice from "@/lib/getNotice";
import Card from "@mui/joy/Card";
import Link from "next/link";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
type Params = {
    params: { id: string };
};

export default function NoticePage({ params: { id } }: Params) {
    const [notice, setnotice] = useState<Notices | null>(null);

    useEffect(() => {
        async function fetchNoticeData() {
            const fetchedNotice = await getNotice(id);
            setnotice(fetchedNotice);
        }

        fetchNoticeData();
    }, [id]);

    if (!notice) {
        return <div>데이터가없다</div>;
    }
    return (
        <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    flexDirection: "column",
                }}
            >
                <Link
                    href={"/notice"}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Typography variant="h3" textAlign={"center"} mb={"20"}>
                        AIA-SPURS 공지사항
                    </Typography>
                </Link>
                <Stack spacing={1}>
                    <Card size="sm">
                        {" "}
                        <Typography variant="h5">{notice.title}</Typography>
                    </Card>
                    <Paper
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            justifyItems: "center",
                        }}
                    >
                        <Typography variant="h6">{notice.explain}</Typography>
                    </Paper>
                </Stack>
            </Box>
        </Container>
    );
}
