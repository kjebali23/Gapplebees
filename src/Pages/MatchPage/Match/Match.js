import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import PostCard from './PostCard';


const Match = () => {
  return (
      <>
        <Grid container >
            
            <Grid item container xs={12} marginTop='2rem' display='flex' justifyContent='center' alignItems='center' >
                <Grid item xs={8} sm={6} md={4} lg={3} > <PostCard/> </Grid>
            </Grid>
        </Grid>
      </>
  )
};

export default Match;
