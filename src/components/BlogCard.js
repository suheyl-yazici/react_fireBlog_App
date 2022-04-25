import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DeleteBlog, useFetch } from '../helpers/function';


const BlogCard = () => {

  const {isLoading,contactBlog} =  useFetch();


  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:40,margin:10}}>
      {isLoading ? (
        <h1>Loading</h1>
      ) : 
      contactBlog?.length === 0 ?
      (
        <h1>veri bulunamadı</h1>
      ) :  (
        contactBlog?.map((item,index) =>(
          <Card sx={{ maxWidth: 345,width:425,height:330,display:"block" }} key={index}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image={item.image}
                objectfit='contain'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {item.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small" onClick={() => {DeleteBlog(item.id)}}>Delete</Button>
              </CardActions>
            </Card>
        ))
      )}
  </div>
  )
}

export default BlogCard