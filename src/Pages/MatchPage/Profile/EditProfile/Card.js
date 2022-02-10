import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const Card = (props) => {
  return (
      <>
        <div className='card'>
            <ClearIcon className='card-delete-icon' style={{
                  // marginTop: '3px',
                  // marginRight: '5px', 
                  // border: 'solid 1px lightgrey',
                  background: 'white',
                  height: '1rem',
                  width: '1rem', 
                  borderRadius:'20%', 
                  alignSelf: 'flex-end',
                  position:'absolute',
          }}/>
            <img src={props.userImage} />
        </div>
      </>
  )
};

export default Card;
