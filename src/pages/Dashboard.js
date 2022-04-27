import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BlogForm from '../components/BlogForm';

const Dashboard = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xxl">
      <h2>──── Dashboard ────</h2>
      <Box sx={{ bgcolor: '#cfe1fc', height: '100vh' }} >
        <BlogForm />
      </Box>
    </Container>
  </React.Fragment>
  )
}

export default Dashboard