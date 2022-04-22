import * as React from "react";
import Card from "@mui/material/Card";
import BlokImg from "../assets/blok.png";
import CardContent from "@mui/material/CardContent";
import { Box, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "../App.css";
import Container from '@mui/material/Container';
import googleImg from "../assets/google.png";

const Register = () => {
  return (
    <div style={{
      backgroundImage: `url("https://picsum.photos/800/800")`,
      height:'100vh',
      marginTop:'-70px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}
      >
    <Container maxWidth="sm" className="container">
    <Card sx={{ minWidth: 275 }} style={{ width: 500, height: 650 ,marginTop:70,display:"flex", justifyContent:"center"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
        <div className="card-header">
            <Avatar
              alt="Remy Sharp"
              src={BlokImg}
              sx={{ width: 200, height: 200 }}
            />
        </div>
        <div className="card-header-text">
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom >
            --Register--
          </Typography>
      </div>
        <CardContent>
          <Box style={{ backgroundColor: "white", padding: "20px",display:"flex", justifyContent:"center" }}>
            <form>
              <Stack spacing={3} direction="column">
              <TextField id="email" label="Email" variant="outlined" required
              helperText="Email is required"/>
              <TextField
              required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    helperText="Password is required"
        />
              </Stack>
              <Stack spacing={2} direction="column" style={{marginTop:"30px"}}>
                <Button variant="contained">REGISTER</Button>
                <Button variant="outlined">With <img src={googleImg} alt="google" height={30} width={45} /></Button>
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


export default Register