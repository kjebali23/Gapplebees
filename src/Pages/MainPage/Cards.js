import React from 'react';
import miata from './img/miata.jpeg'
import race from './img/racer.jpeg'
import meet from './img/meet.jpeg'

const Cards = (props) => {
    const cardData = {
            1: { img: miata ,
                title:'Upload your Car pictures' ,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
               } ,
        
            2: { img: race ,
                 title:'Swipe and Match with others' ,
                 text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."  
                } ,
        
             3: { img: meet,
                  title:'Create a Network' ,
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."   
                } ,
} 

    return (
        
        // <div className='Card' >
            <div className='card-body'>
                <img className='card-img' 
                    src={cardData[props.id].img} />

                <h2 className='card-title'>
                    {cardData[props.id].title}</h2>

                <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>

        // </div>
    )
}

export default Cards
