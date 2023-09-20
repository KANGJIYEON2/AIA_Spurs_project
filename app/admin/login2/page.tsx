"use client";

import React, { useState, FormEvent } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { signIn } from "next-auth/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#001B3F",
      contrastText: "#fafafa",
    },
  },
});

const Login2: NextPage = (props): JSX.Element => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [blankPw, setBlankPw] = useState(false);
  const [blankId, setBlankId] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const onChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const onChangePw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id.length <= 0) setBlankId(true);
    if (password.length <= 0) setBlankPw(true);
    if (!blankId && !blankPw) {
      await signIn("credentials", {
        id: id,
        password: password,
        redirect: false,
      }).then((result) => {
        if (result?.ok) router.push("/");
        if (result?.error) setError(true);
      });
    }
  };

  return (
    <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ m: 5, height: "75vh" }}>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <Box>
            <TextField
              label="id"
              variant="outlined"
              value={id}
              onChange={onChangeId}
              onBlur={() => setBlankId(id.length <= 0)}
            />
            {blankId && <Alert severity="error">아이디를 입력해주세요</Alert>}
          </Box>
          <Box sx={{ marginTop: 1, marginBottom: 1 }}>
            <TextField
              type="password"
              label="password"
              variant="outlined"
              value={password}
              onChange={onChangePw}
              onBlur={() => setBlankPw(password.length <= 0)}
            />
            {blankPw && <Alert severity="error">비밀번호를 입력해주세요</Alert>}
          </Box>
          <ThemeProvider theme={theme}>
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: 225, height: 55 }}>
                LOGIN
              </Button>
            </Box>
          </ThemeProvider>
          {error && <Alert severity="error">비밀번호를 확인해주세요</Alert>}
        </Box>
      </Grid>
    </Container>
  );
};

export default Login2;
