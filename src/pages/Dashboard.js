import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BlogCard from '../components/BlogCard';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { BlogContext } from "../contexts/BlogContext";
import loading from "../assets/loading.gif"


const Dashboard = () => {

  const {currentUser} = useContext(AuthContext);
  const { useFetch } = useContext(BlogContext);

  const {isLoading} =  useFetch();


  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xxl">
    <Typography variant="h2" component="div">
    ──── DASHBOARD ────
    </Typography>
      <Box sx={{  height: '100%' }} >
        <BlogCard />
      </Box>
    </Container>
  </React.Fragment>
  )
}

export default Dashboard