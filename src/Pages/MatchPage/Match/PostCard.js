import Slider from '../Match/Slider/Slider'
import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import CloseIcon from '@mui/icons-material/Close';




const db=[
    {
        name:'khalil',
        url:  'https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
        ,car:'Toyota',
        model:'supra'
        },
    {
        name:'jebali',
        url: 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' 
        ,car:'Mazda',
        model:'miata'
    }
        ,
        {
            name:'hamza',
            url: 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' 
            ,car:'Opel',
            model:'astra'    
        }
        ,{
            name:'mourad',
            url:'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' 
            ,car:'peugeot',
            model:'208'
        },{
            name:'lynou',
            url:'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' 
            ,car:'Ferrari',
            model:'roma'
        }
    
]

function PostCard () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  

  return (
    <div className='match-container' >
      
      <div className='Cards-section-container'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
              <div className='card-container'>
            
                <Slider/>
                <div className='car-owner-info'>
                    <div className='user-avatar'>
                     <img src={character.url} />   
                     <h3>{character.name}</h3>
                    </div>
                     <div className='car-info'>
                     <p>{character.car}</p>
                     <p>{character.model}</p>
                     <p>2000</p>
                     </div>
                </div>
            </div>
          </TinderCard>
        ))}
            { canSwipe === false &&
            <div className='empty-card'>
            <div className='text-container'>
                 <h2>That is all for today !</h2>
               <p>You have hit the daily limit.<br/> Please comeback tomorrow to see more.</p>
                </div>
                <div className='upgrade-container'>
                <p>Would you be interested in upgrading to see more cars ?</p>
                <button className='upgrade-btn'>Send a request</button>
                </div>
             </div>  }

      {canSwipe === true &&         
      <div className='swipe-buttons-container'>
        <button className='swipe-btn' onClick={() => swipe('left')}><CloseIcon fontSize='large' /></button>
        <button className='swipe-btn' onClick={() => swipe('right')}><SportsScoreIcon fontSize='large' /></button>
      
      </div>} 
      

      </div>
    </div>
  )
}

export default PostCard
