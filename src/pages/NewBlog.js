import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import BlokImg from "../assets/blok.png";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { getAdditionalUserInfo } from "firebase/auth";
import { AddBlog } from "../helpers/function";

const initialValues={title:"", image:"",content:""}


const NewBlog = () => {



  const [info, setInfo] = useState(initialValues)

const handleChange = (e) => {
  e.preventDefault();
  const { name,value } = e.target
  // console.log(name,value);
  setInfo({...info, [name]:value})
}
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(info);
  AddBlog(info);
  setInfo(initialValues)
}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        fixed
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "85vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={2} sx={{ width: "45vh" }}>
              <Avatar
                alt="blog"
                src={BlokImg}
                sx={{ width: 200, height: 200, marginX: "auto" }}
              />
              <Typography sx={{ fontSize: 20 }} color="text.secondary">
                ── NEW BLOG ──{" "}
              </Typography>
              <TextField
                fullWidth
                id="title"
                label="Title*"
                variant="outlined"
                value={info.title}
                onChange={handleChange}
                name="title"
              />
              <TextField
                id="imgUrl"
                label="Image URL*"
                variant="outlined"
                value={info.image}
                onChange={handleChange}
                name="image"
              />
              <TextField
                id="content"
                label="Content*"
                variant="outlined"
                multiline
                minRows={10}
                value={info.content}
                onChange={handleChange}
                name="content"
              />
              <Button variant="contained" type="submit">SUBMIT</Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default NewBlog;
