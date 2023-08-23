"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const theme = createTheme({
  palette: {
    primary: {
      main: "#001B3F",
      contrastText: "#fafafa",
    },
  },
});

export default function Login2() {
  const [FormData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleFormChange = (event: any) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(FormData); // Submit form data to server here
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
        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
              required
              label="ID"
              name="id"
              variant="outlined"
              value={FormData.id}
              onChange={handleFormChange}
            />
          </Box>
          <Box sx={{ marginTop: 1, marginBottom: 1 }}>
            <TextField
              required
              type="password"
              label="PASSWORD"
              name="password"
              variant="outlined"
              value={FormData.password}
              onChange={handleFormChange}
            />
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
        </form>
      </Grid>
    </Container>
  );
}
