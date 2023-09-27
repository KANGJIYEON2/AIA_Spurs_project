"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
}));

const BodyVideoPath = [
    "https://videos.ctfassets.net/49hp26a2avpu/3qEKHussr3XHE9EOvzOoi8/04b3a1b84d6a17fd56d3c8bfa32ff118/PEH-OS-Eat-well-.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/6iUNdH4wZzEu0ik4upj7LT/13de802e12212afb590a15b46c218b98/UNI813_Health_Tips_Tip2_HL_MASTER.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/33YbYjuCY2yHKOoEqu87JG/4168436fc9a7ea4c86b66f3b5e7745c7/AIA_-_Cho_So-hyun_Workout_Master_Clean__1_.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/5OIDCv76zPjAZWIIfAye9A/1752e0617e5951c6f96335368b3ea2ad/Eric_Dier_-_Live_well.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/1BpC9T7Khio3xAVUYdDnQx/4ffc20a36791c42660a8fac29fb9a132/PEH-2min-wo-video.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/38WIFRzT50vgVPuy2RF4PJ/c3807aa25ee790a02f9ea2ab68ee470c/AIA_-_Lucas_Moura_-_Workout_Master_Clean_V2.mp4",
];

const MindVideoPath = [
    "https://videos.ctfassets.net/49hp26a2avpu/6gRFF9pUEuWZKlgRbBhhRk/f0c2a4caeac1a86e770d4aa64f166f8f/AIA_-_TOTTENHAM_HOTSPUR_MENTAL_HEALTH_1__1__1.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/y4sHiQDjoFflyIB5bdKFq/81300438bcd1a3731e5c50aa7e7ce577/UNI813_Health_Tips_Tip5_DS_MASTER.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/17lxXjMFdCR0yIi0CoVSwy/c5204ed451f86751deeec54bb39fdc42/CSM_ERICDIER_BACKGAMMON_CUT_FINAL_1.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/4SUN1g4W9bHm5eKElfhkxy/be3f25a75be1f33e86026097ad01dde3/UNI813_Health_Tips_Tip6_HL_MASTER.mp4",
    "https://videos.ctfassets.net/49hp26a2avpu/2O4EgKJPNYZfofSMTfCWJ6/406afe9b4dd760f26e420c84f33b9c0a/AIA_-_TOTTENHAM_HOTSPUR_MENTAL_HEALTH_2.mp4",
    "",
];

const TipVideo = ({ path }: { path: string }) => {
    return (
        <Grid item xs={12} sm={4} md={3} sx={{ m: 1 }}>
            <Item>
                <ReactPlayer
                    url={path}
                    width="250px"
                    height="150px"
                    controls={true}
                />
            </Item>
        </Grid>
    );
};

export default function HealthTip() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
            <Grid>
                <Grid>
                    <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
                        몸건강
                    </Typography>
                    <Typography variant="h6">
                        몸 건강은 식습관부터 신체 활동까지 모든 생활 습관의
                        영향을 받아요.
                        <br />
                        매일 활발한 신체 활동을 하는 토트넘 선수들은 어떤 팁을
                        가지고 있을까요?
                    </Typography>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginY: 3 }}
                >
                    {BodyVideoPath.map((path, index) => (
                        <TipVideo key={index} path={path} />
                    ))}
                </Grid>
                <Grid>
                    <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
                        마음건강
                    </Typography>
                    <Typography variant="h6">
                        마음 건강은 심리적으로 편안하고 안정된 상태를
                        의미합니다. <br />
                        긍정적인 생각을 하고, 충분한 휴식과 수면으로 하루를
                        마무리 하는 것은 우리의 삶을 더욱 건강하게 만들어요.
                    </Typography>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginY: 3 }}
                >
                    {MindVideoPath.map((path, index) => (
                        <TipVideo key={index} path={path} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}
