import React from 'react';
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'


const BtnSlider = ( {direction , moveSlide} ) => {
  return (
      <>
        <button className={ direction === "next" ? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide} onTouchStart={moveSlide} >
            <img src={direction === 'next' ? rightArrow : leftArrow}/>
        </button>
      </>
  )
};

export default BtnSlider;
