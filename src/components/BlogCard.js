import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box } from '@mui/system';
import { useNavigate } from "react-router";

const BlogCard = ({item,index}) => {

  const { DeleteBlog, useFetch } = useContext(BlogContext);
  const {isLoading,contactBlog} =  useFetch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details",{ state : { item }});
  }

  return (
          <Card sx={{ maxWidth: 345,width:445,height:370,display:"block",marginX:"auto",marginBottom:1 }} key={index}>
              
              <CardMedia
                component="img"
                alt="green iguana"
                height="40%"
                image={item.image}
                objectfit='contain'
                onClick={handleClick}
              />
              <CardContent onClick={handleClick} sx={{ color: "black",textAlign:"start",backgroundColor: "#EFEEFE",fontFamily: "Girassol",textTransform:"capitalize" }}>
                <Typography gutterBottom variant="h6" component="div" sx={{textTransform:"uppercase"}}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {/* {item.content} */}
                 23.02.02
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{paddingTop: ".2rem" ,textAlign:"start"}}>
                  {`${item.content}`.substring(0, 100) + '...'}
                  </Typography>
              </CardContent>
              
              <CardContent sx={{ color: "black",textAlign:"start", width:"100%" }}>
                <Typography sx={{marginTop:-2}}
                >
                  <IconButton >
                    <AccountCircleIcon fontSize="medium" />
                  </IconButton>
                  {item.author}
                </Typography>
              </CardContent>
              <CardActions sx={{marginTop:-2}}>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <span>1</span>
                    <IconButton aria-label="comment">
                      <ChatBubbleOutlineIcon />
                    </IconButton>
                    <span>1</span>
        </CardActions>
            </Card>
 
  )
}

export default BlogCard