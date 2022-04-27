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

const Details = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xxl">
      <h2>──── DETAILS ────</h2>
      <Box sx={{ height: '92%' }}>
        <Card sx={{ width:"85%" , height:"88%",display:"block",margin:"auto"}}>
        <CardMedia
                component="img"
                alt="green iguana"
                height="60%"
                // image={item.image}
                image="https://cdn.pixabay.com/photo/2022/04/19/08/32/relax-7142183__480.jpg"
                objectfit='contain'
              />
              <CardContent sx={{
              display: "block",
              backgroundColor: "#EFEEFE",
              padding: "0.5rem",
              fontFamily: "Girassol",
            }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {/* {item.title} */}
                    merhaba
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {/* {item.content} */}
                  tarih
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{paddingTop: ".2rem" ,textAlign:"start"}}>
                  {/* {item.content} */}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nostrum maxime commodi error nam omnis quam dolores, natus veritatis praesentium libero voluptates officia amet corporis! Inventore, expedita, nisi optio, ipsam amet quisquam deleniti ipsa cum sunt ab qui eum quod voluptates! Facere quidem sed porro perspiciatis ipsum dolorum provident repellat eius enim adipisci, consectetur nemo, nobis harum ratione dignissimos unde, totam quibusdam! In, illo? Cumque hic eligendi, harum molestiae excepturi, itaque nobis asperiores nesciunt omnis repellendus soluta, veritatis laborum expedita explicabo cum quasi quia beatae. Vero expedita nisi quae hic placeat, maiores iusto quos consequatur eius qui dolore quas commodi similique velit architecto cupiditate enim omnis, debitis dolor? In id autem dignissimos, quos neque perspiciatis exercitationem. Autem mollitia, dignissimos temporibus error commodi sunt totam cum reiciendis aperiam enim perferendis, blanditiis, est adipisci delectus cupiditate alias? Consequatur quos et, recusandae, veniam tempore omnis incidunt eligendi fugit vitae illum corrupti doloremque explicabo commodi beatae atque laborum. Ducimus delectus quo illum perferendis quam autem sint ex debitis, sequi possimus minus saepe. Corporis, odio voluptatem nobis perferendis praesentium at quisquam modi perspiciatis molestias facilis repellendus, sapiente quae esse earum. Dignissimos, reprehenderit id ad unde sint perspiciatis corporis dolorum porro, deserunt magni molestias doloremque repellendus!
                  </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  sx={{ color: "black",textAlign:"start"  }}
                >
                  <IconButton sx={{ color: "black"}}>
                    <AccountCircleIcon fontSize="medium" />
                  </IconButton>
                  {/* {item.author} */}
                  sdasdasdasdasdasd
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
      </Box>
      <Stack direction="row" sx={{display:"flex", justifyContent:"space-around",marginY:3}}>
                <Button size="large" variant="contained" color="primary"/* onClick={() =>{EditHandler(item.id,item.title,item.image,item.content)}} */>Update</Button>
                <Button size="large" variant="contained" color="error" /* onClick={() => {DeleteBlog(item.id)}} */>Delete</Button>
                </Stack>
    </Container>
  </React.Fragment>
  )
}

export default Details