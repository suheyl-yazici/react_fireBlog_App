import * as React from "react";
import BlokImg from "../assets/blok.png";
import {  Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../App.css";
import googleImg from "../assets/google.png";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {createUser,signUpProvider} = useContext(AuthContext);


  const handleSubmit = (e) => {
    const displayName = email;
    e.preventDefault();
    createUser(email,password,navigate,displayName);
  }
  const handleGoogleProvider = () => {
    signUpProvider(navigate);
  }

  return (
  
    <Grid container component="main">
       <CssBaseline />
       <Grid container
      sx={{
        width:"100%",
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
                alt="Remy Sharp"
                src={BlokImg}
                sx={{ width: "60%", height: "50%" }}
              />
              <Typography
                sx={{ fontSize: 30 }}
                color="text.secondary"
              >
                ── REGISTER ──
              </Typography>
           
            
              <Grid item
                sx={{
                  bgcolor: "#f1f2f6",
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "100%",
                  borderRadius:5
                }}
              >
                 <form onSubmit={handleSubmit} >
                  <Stack spacing={2} direction="column" justifyContent="center"
                    alignItems="stretch">
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      helperText="Email is required"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                     <TextField
                      required
                      fullWidth
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      helperText="Password is required"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    /> 
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="column"
                    style={{ marginTop: "20px" }}
                  >
                    <Button variant="contained" type="submit">REGISTER</Button>
                    <Button variant="outlined" onClick={handleGoogleProvider}>With<img src={googleImg} alt="google" 
                    height={30} width={45} /></Button>
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

export default Register;
