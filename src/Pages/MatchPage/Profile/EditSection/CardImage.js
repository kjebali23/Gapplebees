import React from 'react';



const CardImage = (props) => {
  return (
      <>
        <img style={{width:'35%' , height:'12rem'}} src={props.userImage} />
      </>
  )
};

export default CardImage;
