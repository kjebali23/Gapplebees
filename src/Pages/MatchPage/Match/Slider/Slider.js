import React, {useState} from 'react';
import BtnSlider from './BtnSlider'


const Slider = (props) => {
    const [slideIndex, setSlideIndex]= useState(1)

    const nextSlide = ()=>{
        if(slideIndex !== props.Images.length ){
            setSlideIndex(slideIndex + 1)
        }else if (slideIndex === props.Images.length){
            setSlideIndex(1)
        }

    }

    const prevSlide = ()=>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex -1)
        }else if(slideIndex === 1){
            setSlideIndex(props.Images.length)
        }
    }

    const moveDot = index =>{
        setSlideIndex(index)
    }

    // const imgDoubleclick = ()=>{
    //     console.log('double clicked ... show modal')
    // }



  return (
      <>
       
            
        <div className='slider-container'>
            {props.Images.map((obj, index)=>{
                return (
                    <div key={obj} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={props.Images[slideIndex - 1]} 
                    // onDoubleClick={imgDoubleclick}
                    />
                    </div>
                )}
            )}
                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <div className='container-dots'>
                    {Array.from({length: props.Images.length}).map((item , index)=> (
                        <div onClick={()=> moveDot(index + 1)} onTouchStart={()=> moveDot(index + 1)} className={slideIndex=== index +1 ? "dot active" : "dot"}>

                        </div>
                    ))}
                </div>
                </div>
        
      </>
  )
};

export default Slider;
