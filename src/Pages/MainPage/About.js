import React from 'react';
import Divider from './Divider';
import './Main.css';

import meme from './img/meme.jpeg'


const About = () => {
  return (
    <>
    <Divider divTitle={'What is it?'}/>
    <div className='wraper'>
        <div className="about-holder">
          <h1 className='about-title'>The Story:</h1>
          <p className='about-text'>Saw this meme on a facebook group and a lot of people reacted to it. So it inspired me to build something similar. I hope you like it!</p>
        </div>
        <img className='meme-image' 
        src={meme} />
    </div>
    </>
  )
};

export default About;
