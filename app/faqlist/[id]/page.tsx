"use client";

import React, { useEffect, useState } from "react";
import { Faqs } from "@/interface/list";
import getFaq from "@/lib/getFaq";
import Card from "@mui/joy/Card";
import Link from "next/link";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
type Params = {
    params: { id: string };
};

export default function FaqPage({ params: { id } }: Params) {
    const [faq, setFaq] = useState<Faqs | null>(null);

    useEffect(() => {
        async function fetchFaqData() {
            const fetchedFaq = await getFaq(id);
            setFaq(fetchedFaq);
        }

        fetchFaqData();
    }, [id]);

    if (!faq) {
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
                    href={"/faqlist"}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Typography variant="h3" textAlign={"center"} mb={"20"}>
                        AIA-SPURS FAQ
                    </Typography>
                </Link>
                <Stack spacing={1}>
                    <Card size="sm">
                        {" "}
                        <Typography variant="h5">{faq.title}</Typography>
                    </Card>
                    <Paper
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            justifyItems: "center",
                        }}
                    >
                        <Typography variant="h6">{faq.contents}</Typography>
                    </Paper>
                </Stack>
            </Box>
        </Container>
    );
}
