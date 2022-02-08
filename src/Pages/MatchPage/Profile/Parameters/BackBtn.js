import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackBtn = (props) => {
  return (
    <div className='back-btn' onClick={props.displayProfile}>
        <ArrowBackIosIcon/>
    <h4>Go back to the Main Page</h4>
  </div>
  )
};

export default BackBtn;
