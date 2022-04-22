import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import BlokImg from "../assets/blok.png";
import CardContent from "@mui/material/CardContent";
import { Box, Stack, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Card sx={{ minWidth: 275 }} style={{ width: 600, height: 800 }}>
      <Grid
        textAlign="center"
        verticalAlign="middle"
        direction="column"
        style={{ width: "300" }}
      >
        <CardMedia
          component="img"
          height="140"
          image={BlokImg}
          alt="green iguana"
        />
        <CardContent>
          <Box style={{ backgroundColor: "white", padding: "20px" }}>
            <form>
              <Stack spacing={3} direction="column">
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Stack>
            </form>
          </Box>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default Login;
