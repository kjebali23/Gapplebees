import React from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css'
import Slider from './Slider/Slider'



const People=[
    {
        id:'1',
        name:'khalil',
        Images:[ 'https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824893-53d847138f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824945-11e7ed9cbfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'  ]    },
    {
        id:'2',
        name:'Jebali',
        Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ]    }
        ,
        {
            id:'3',
            name:'Jebali',
            Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ]    }
        ,{
            id:'4',
            name:'Jebali',
            Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ]    }
    
]

const PostCard = () => {
    // const {media} = useStyles(); 
    return (
<>      <div className="cards" >
    <p>test</p>
            {People.map((person)=>
            <TinderCard 
                key={person.id}
                className='swipe'
                preventSwipe={['up', 'down']}
                
            >
                <div className='card-container' style={{ width:'100%',background:'red' ,display:'flex' , flexDirection:'column' , alignItems:'center'}}>

                    <h1 style={{background:'none', width:'100%'}}>{person.name}</h1> 
                    <Slider/>
                </div>
            </TinderCard>
            )}
        </div>
</>        
  )
};

export default PostCard;
