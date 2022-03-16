import React from 'react';
import Card from './Card';


const Images = [ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ];


const CardSection = (props) => {
  return (
      <>
        <div className="cards-section-container">
        <div className='cards-container'>
        {props.userImages.map((img)=>
          <Card userImage={img}/>
          )}
        </div>
        <div className='btn-container'>
          <button>Upload Image</button>
        </div>
        </div>
      
      </>
  )
};

export default CardSection;
