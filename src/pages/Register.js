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
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";




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
  
    <div
      style={{
        // backgroundImage: `url("https://picsum.photos/800/800")`,
        // height: "90vh",
        // marginTop: "-570px",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // boxSizing: "border-box",
        width:"100%",
        height: "100vh",
        backgroundImage: `url(https://picsum.photos/1000/1000)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        paddingTop: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            minWidth: 275,
            width: 500,
            height: 650,
            marginTop: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="card-header">
              <Avatar
                alt="Remy Sharp"
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
                ── REGISTER ──
              </Typography>
            </div>
            <CardContent>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                 <form onSubmit={handleSubmit} >
                  <Stack spacing={2} direction="column">
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      required
                      helperText="Email is required"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                     <TextField
                      required
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
              </Box>
            </CardContent>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
