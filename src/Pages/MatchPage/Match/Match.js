import React from 'react';
import { Grid , Button} from '@mui/material';
import PostCard from './PostCard';
import { Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';



const Match = () => {
  return (
      <>
        <Grid container justifyContent='center'>
            
            <Grid  item container xs={12} marginTop='1rem' display='flex' justifyContent='center' alignItems='center' >
                <Grid item xs={11} sm={8} md={7} lg={5}> <PostCard/> </Grid>

            </Grid>
                <Stack spacing={2} direction="row" marginTop='0.5rem' >
                  <Button variant="contained" style={{width:'4rem' , height:'4rem', borderRadius:'4rem', background:'white', color:'grey', border:'solid 1px lightGrey'}} > <ClearIcon/> </Button>
                  <Button variant="contained" style={{width:'4rem' , height:'4rem', borderRadius:'4rem', background:'white', color:'rgb(69, 101, 226)', border:'solid 1px lightGrey'}} > <CheckIcon/> </Button>
                </Stack>
        </Grid>
      </>
  )
};

export default Match;
