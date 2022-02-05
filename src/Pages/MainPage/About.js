import React from 'react';
import Divider from './Divider';
import './Main.css'


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
        src='https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/116942712_3337997096245962_1492447345146221446_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=15LAEd1Od6sAX95SUR_&_nc_ht=scontent.ftun14-1.fna&oh=00_AT99HQonmZqDNiZcPGftcK1qowARmMpi0VoZyOBDn58uJg&oe=620FD608' />
    </div>
    </>
  )
};

export default About;
