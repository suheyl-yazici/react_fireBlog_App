import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BlogCard from "../components/BlogCard";

const BlogForm = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xxl">
      <Box sx={{ height: '100%' }} >
        <BlogCard />
      </Box>
    </Container>
  </React.Fragment>
  )
}

export default BlogForm