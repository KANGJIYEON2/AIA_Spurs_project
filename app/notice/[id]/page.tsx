"use client";

import React, { useEffect, useState } from "react";
import { Notices } from "@/interface/list";
import getNotice from "@/lib/getNotice";
import Card from "@mui/joy/Card";
import Link from "next/link";
import {
    Box,
    Container,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

type Params = {
    params: { id: string };
};

export default function NoticePage({ params: { id } }: Params) {
    const [notice, setnotice] = useState<Notices | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchNoticeData() {
            const fetchedNotice = await getNotice(id);
            setnotice(fetchedNotice);
        }

        fetchNoticeData();
    }, [id]);

    if (!notice) {
        return <div>데이터가 없습니다.</div>;
    }

    const handleGoBack = () => {
        router.push("/notice");
    };

    return (
        <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
            <Box
                sx={{
                    mt: 3,
                    mb: 3,
                    minHeight: "calc(100vh - 45px)",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <IconButton
                        color="primary"
                        aria-label="뒤로 가기"
                        onClick={handleGoBack}
                        sx={{ marginRight: 1 }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h5" textAlign={"center"}>
                        AIA-SPURS 공지사항
                    </Typography>
                </Box>
                <Stack spacing={2} sx={{ alignItems: "center" }}>
                    <Card size="sm" sx={{ width: "100%" }}>
                        <Typography variant="h6" textAlign="center">
                            {notice.title}
                        </Typography>
                    </Card>
                    <Paper sx={{ width: "90%", p: 2 }}>
                        <Typography variant="h6" textAlign="center">
                            {notice.explain}
                        </Typography>
                    </Paper>
                </Stack>
            </Box>
        </Container>
    );
}
