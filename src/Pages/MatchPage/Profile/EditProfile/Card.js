import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const Card = (props) => {
  return (
      <>
        <div className='card' style={{background:'white', width:'30%', height:'17rem' , marginTop:'2.1rem', display:'flex', flexDirection:'column', borderRadius:'0.5rem'}}>
            <ClearIcon className='delete-icon' style={{marginTop:'3px', marginRight:'5px', border:'solid 1px lightgrey' ,background:'white' , height:'1rem' , width:'1rem', borderRadius:'20%', alignSelf:'flex-end'}}/>
            <img style={{width:'95%' , height:'15rem' , objectFit:'cover', borderRadius:'0.5rem', alignSelf:'center', marginTop:'3px', border:'solid 1px lightgrey'}} src={props.userImage} />
        </div>
      </>
  )
};

export default Card;
