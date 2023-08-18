"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Mypage = () => {
  const { data: session } = useSession();
  const userProfileImg = session?.user?.image as string;
  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ marginLeft: 5, marginTop: 5 }}>
        프로필
      </Typography>
      <Box display="flex" sx={{ m: 5, height: "30vh" }}>
        <Box justifyContent="flex-start" sx={{ marginLeft: 2, flexGrow: 1 }}>
          <Avatar
            alt={session?.user?.name as string}
            src={userProfileImg}
            sx={{ width: 200, height: 200 }}
          />
        </Box>
        <Box
          alignItems="center"
          sx={{ marginRight: 2, flexGrow: 5, paddingTop: 7 }}>
          <Typography>name : {session?.user?.name}</Typography>
          <br />
          <Typography>Email : {session?.user?.email}</Typography>
        </Box>
      </Box>
      <Typography variant="h4" sx={{ marginLeft: 5 }}>
        개인정보수집처리동의
      </Typography>
      <Box sx={{ m: 5 }}>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <Divider />
          <ListItem button>
            <ListItemText primary="개인정보 수집∙이용동의 및 처리위탁(선택)" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="마케팅을 위한 광고성 정보 수신동의(선택)" />
          </ListItem>
        </List>
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
