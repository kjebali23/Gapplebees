import React from 'react';
import Card from './Card';


const Images = [ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ];


const CardSection = () => {
  return (
      <>
        <div className="cards-container" style={{width:'70%' , height:'24rem', background:'linear-gradient(348deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)', marginTop:'2rem' ,
        display:'flex',
        flexDirection:'column',
        borderRadius:'0.5rem'
        // justifyContent:'space-around',
        // borderRadius:'0.5rem'
      }}>
        <div style={{display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        borderRadius:'0.5rem'}}>
        {Images.map((img)=>
          <Card userImage={img}/>
          )}
        </div>
        <div className='btn-container' style={{ width:'30%', height:'3rem', marginTop:'1rem' ,alignSelf:'center', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <button style={{width:'65%', height:'2.3rem' , background:'white', border:'none', borderRadius:'0.3rem', fontWeight:'bold'}}>Upload Image</button>
        </div>
        </div>
      
      </>
  )
};

export default CardSection;
