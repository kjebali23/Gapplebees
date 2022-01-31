import React, {useState} from 'react';
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider';
import TinderCard from 'react-tinder-card';


const Images=[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751094-39cc34097d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' , 'https://images.unsplash.com/photo-1637911641983-c9a729181d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' ]

const People=[
    {
        name:'khalil',
        Images:[ 'https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824893-53d847138f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824945-11e7ed9cbfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'  ]    },
    {
        name:'Jebali',
        Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ]    }
        ,
        {
            name:'Jebali',
            Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ]    }
        ,{
            name:'Jebali',
            Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1563197527-b5677321c356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1607603751053-d751072c2743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  ]    }
    
]

const Slider = () => {
    const [slideIndex, setSlideIndex]= useState(1)

    const nextSlide = ()=>{
        if(slideIndex !== dataSlider.length ){
            setSlideIndex(slideIndex + 1)
        }else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }

    }

    const prevSlide = ()=>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex -1)
        }else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index =>{
        setSlideIndex(index)
    }

    const imgDoubleclick = ()=>{
        console.log('double clicked ... show modal')
    }

  return (
      <>
       
            
        <div className='container-slider' style={{background:'rgb(69, 101, 226)'}}>
            {dataSlider.map((obj, index)=>{
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={Images[slideIndex - 1]} onDoubleClick={imgDoubleclick}/>
                    </div>
                )}
            )}
                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <div className='container-dots'>
                    {Array.from({length: 5}).map((item , index)=> (
                        <div onClick={()=> moveDot(index + 1)} onTouchStart={()=> moveDot(index + 1)} className={slideIndex=== index +1 ? "dot active" : "dot"}>

                        </div>
                    ))}
                </div>
                </div>
        
      </>
  )
};

export default Slider;
