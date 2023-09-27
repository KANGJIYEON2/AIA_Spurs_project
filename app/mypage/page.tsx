"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Mypage = () => {
  const { data: session } = useSession();
  console.log("Session Data:", session);
  const userProfileImg = session?.user?.image as string;

  const [event, setEvent] = useState([]);
  const [userEventName, setUserEventName] = useState("");
  const [userEvent, setUserEvent] = useState({
    name: "",
    birth: "",
    phoneNum: "",
    gender: "",
    adress: "",
    reason1: "",
    reason2: "",
    reason3: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((response) => response.json())
      .then((data) => {
        console.log("Event Data:", data);
        setEvent(data);
        const userEventData = data.find(
          (event: any) => event.name === session?.user?.name
        );
        console.log("User Event:", userEventData);
        if (userEventData) {
          setUserEventName(userEventData.name);
          setUserEvent(userEventData);
        }
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [session]);

  return (
    <Container sx={{ minWidth: "sm", maxWidth: "lg", marginLeft: 15 }}>
      <Typography
        variant="h4"
        sx={{ marginLeft: 5, marginTop: 5, fontWeight: "Bold" }}>
        프로필
      </Typography>
      <Box display="flex" sx={{ marginLeft: 5, marginTop: 5, height: "30vh" }}>
        <Box justifyContent="flex-start" sx={{ marginLeft: 2, flexGrow: 1 }}>
          <Avatar
            alt={session?.user?.name as string}
            src={userProfileImg}
            sx={{ width: 200, height: 200 }}
          />
        </Box>
        <Box alignItems="center" sx={{ flexGrow: 15, paddingTop: 7 }}>
          <Typography variant="h6">Name : {session?.user?.name}</Typography>
          <br />
          <Typography variant="h6">Email : {session?.user?.email}</Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: 10 }}>
        <Grid>
          <Typography variant="h4" sx={{ marginLeft: 5, fontWeight: "Bold" }}>
            이벤트 신청 내역
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: 1, marginLeft: 7 }}>
          <Typography>이름: {userEventName}</Typography>
          {userEvent && userEvent.name && (
            <>
              <Typography>생년월일: {userEvent.birth}</Typography>
              <Typography>휴대폰번호: {userEvent.phoneNum}</Typography>
              <Typography>성별: {userEvent.gender}</Typography>
              <Typography>주소: {userEvent.adress}</Typography>
              <Typography>응답1: {userEvent.reason1}</Typography>
              <Typography>응답2: {userEvent.reason2}</Typography>
              <Typography>응답3: {userEvent.reason3}</Typography>
            </>
          )}
        </Grid>
      </Box>
      <Typography variant="h4" sx={{ marginLeft: 5, fontWeight: "Bold" }}>
        개인정보수집처리동의
      </Typography>
      <Box sx={{ marginLeft: 5, marginTop: 1 }}>
        <Grid container direction="row" alignItems="center">
          <List sx={style} component="nav" aria-label="mailbox folders">
            <Divider />
            <ListItemButton href="https://aiaspurs.com/kr/pic">
              <ListItemText primary="개인정보 수집∙이용동의 및 처리위탁(선택)" />
            </ListItemButton>
            <Divider />
            <ListItemButton href="https://aiaspurs.com/kr/marketing">
              <ListItemText primary="마케팅을 위한 광고성 정보 수신동의(선택)" />
            </ListItemButton>
          </List>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <Button onClick={() => (session ? signOut() : signIn())}>
          <Typography color="#0f0f0f" variant="h5" sx={{ marginBottom: 10 }}>
            탈퇴하기
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default Mypage;
