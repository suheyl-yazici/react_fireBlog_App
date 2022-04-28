import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BlogCard from "../components/BlogCard";
// import { AuthContext } from '../contexts/AuthContext';
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import { BlogContext } from "../contexts/BlogContext";
import loading from "../assets/loading.gif";

const Dashboard = () => {
  // const {currentUser} = useContext(AuthContext);
  const { useFetch } = useContext(BlogContext);
  const { isloading, contactBlog } = useFetch();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl">
        <Typography variant="h5" component="div">
          ──── DASHBOARD ────
        </Typography>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            margin: 10,
          }}
        >
          {isloading ? (
            <Box sx={{ marginX: "auto" }}>
              <img src={loading} alt="loading" />
            </Box>
          ) : contactBlog?.length === 0 ? (
            <h1>veri yok</h1>
          ) : (
            <>
              {contactBlog?.map((item, index) => (
                <BlogCard item={item} key={index} />
              ))}
            </>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
