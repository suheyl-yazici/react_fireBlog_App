import * as React from "react";
import Card from "@mui/material/Card";
import BlokImg from "../assets/blok.png";
import CardContent from "@mui/material/CardContent";
import { Box, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../App.css";
import Container from "@mui/material/Container";
import googleImg from "../assets/google.png";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://picsum.photos/800/800")`,
        height: "90vh",
        marginTop: "-570px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            minWidth: 275,
            width: 500,
            height: 650,
            marginTop: 70,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "red",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="card-header">
              <Avatar
                alt="blog"
                src={BlokImg}
                sx={{ width: 200, height: 200 }}
              />
            </div>
            <div className="card-header-text">
              <Typography
                sx={{ fontSize: 30 }}
                color="text.secondary"
                gutterBottom
              >
                ── LOGIN ──
              </Typography>
            </div>
            <CardContent>
              <Box style={{ backgroundColor: "white", padding: "20px" }}>
                <form>
                  <Stack spacing={2} direction="column">
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      required
                      helperText="Email is required"
                    />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      helperText="Password is required"
                    />
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="column"
                    style={{ marginTop: "20px" }}
                  >
                    <Button variant="contained">LOGIN</Button>
                    <Button variant="outlined">
                      With
                      <img
                        src={googleImg}
                        alt="google"
                        height={25}
                        width={40}
                      />
                    </Button>
                  </Stack>
                </form>
              </Box>
            </CardContent>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
