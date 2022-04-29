import * as React from "react";
import BlokImg from "../assets/blok.png";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../App.css";
import googleImg from "../assets/google.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUpProvider } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };
  const handleGoogleProvider = () => {
    signUpProvider(navigate);
  };

  return (
    <Grid item container component="main">
      <CssBaseline />
      <Grid item
        container
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(https://picsum.photos/1000/1000)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          paddingTop: 1,
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={10} md={9}>
          <Grid
            item
            xs={10}
            sm={9}
            md={7}
            sx={{ marginTop: 3, marginX: "auto" }}
          >
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                alt="blog"
                src={BlokImg}
                sx={{ width: "60%", height: "50%" }}
              />
              <Typography sx={{ fontSize: 30 }} color="text.secondary">
                ── LOGIN ──
              </Typography>
              <Grid
                item
                sx={{
                  bgcolor: "#f1f2f6",
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "100%",
                  borderRadius:5
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Stack
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                  >
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      required
                      helperText="Email is required"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                    <TextField
                      required
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      autoComplete="current-password"
                      helperText="Password is required"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                    />
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="column"
                    style={{ marginTop: "20px" }}
                  >
                    <Button variant="contained" type="submit">
                      LOGIN
                    </Button>
                    <Button variant="outlined" onClick={handleGoogleProvider}>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
