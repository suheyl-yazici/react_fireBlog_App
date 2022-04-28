import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { BlogContext } from "../contexts/BlogContext";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';


const Details = () => {

  const { DeleteBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const item = location.state.item;
  const navigate = useNavigate();


  const deleteHandler = (id) => {
    DeleteBlog(id);
    navigate("/");
  };

  
  const editHandler = ( id ) => {
    navigate("/updateblog", { state : {item} });
  };

  
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xxl">
    <Typography variant="h2" component="div">
    ──── DETAILS ────
    </Typography>
      <Box sx={{ height: '92%' }}>
        <Card sx={{ width:"85%" , height:"88%",display:"block",margin:"auto" ,marginBottom:4}}>
        <CardMedia
                component="img"
                alt="green iguana"
                height="60%"
                image={item.image}
                objectfit='contain'
              />
              <CardContent sx={{
              display: "block",
              backgroundColor: "#EFEEFE",
              padding: "0.5rem",
              fontFamily: "Girassol",
              textTransform:"uppercase"
            }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {item.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{paddingTop: ".2rem" ,textAlign:"start"}}>
                  {item.content}
                  </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  sx={{ color: "black",textAlign:"start"  }}
                >
                  <IconButton sx={{ color: "black"}}>
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
        {item.author === currentUser?.email ? (
          <Stack direction="row" sx={{display:"flex", justifyContent:"space-around",marginY:3}}>
            <Button size="large" variant="contained" color="primary" onClick={() =>{editHandler(item.id)}} >Update</Button>
            <Button size="large" variant="contained" color="error"  onClick={() => {deleteHandler(item.id)}}>Delete</Button>
          </Stack>
        ): null}
      </Box>
    </Container>
  </React.Fragment>
  )
}

export default Details