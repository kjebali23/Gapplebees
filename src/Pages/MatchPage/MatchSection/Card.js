import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 700  }} style={{height:'60vh'}}>
      <CardMedia
        component="img"
        height="340"
        image="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="green iguana"
      />
      <CardContent>
        <div className="user-info" style={{
            display:'flex',
            flexDirection:'row',
        }}>
            <Avatar src="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            <Typography style={{alignSelf:'center', marginTop:'0.3rem', marginBottom:'0.3rem' , marginLeft:'0.5rem'}} gutterBottom variant="h5" component="div">
            Jane
            </Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
