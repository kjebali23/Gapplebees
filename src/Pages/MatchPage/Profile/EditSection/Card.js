import React from 'react';
import CardImage from './CardImage'


const Images=[ 'https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824893-53d847138f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824945-11e7ed9cbfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'  ];


const Card = () => {
  return (
      <>
        <div className='user-card'>
            {Images.map((img)=>
            <CardImage userImage={img} />
            )}
        </div>
      </>
  )
};

export default Card;
