import Slider from '../Match/Slider/Slider'
import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import CloseIcon from '@mui/icons-material/Close';


function PostCard (props) {
  const [currentIndex, setCurrentIndex] = useState(props.botData.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(props.botData.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  // const canGoBack = currentIndex < props.botData.length - 1

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
    if (canSwipe && currentIndex < props.botData.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  

  return (
    <div className='match-container' >
      
      <div className='Cards-section-container'>
        {props.botData.map((profile, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={profile.name}
            onSwipe={(dir) => swiped(dir, profile.UserName, index)}
            onCardLeftScreen={() => outOfFrame(profile.UserName, index)}
          >
              <div className='card-container'>
            
                <Slider Images={profile.Images} />
                <div className='car-owner-info'>
                    <div className='user-avatar'>
                     <img src={profile.Images[0]} />   
                     <h3>{profile.UserName}</h3>
                    </div>
                     <div className='car-info'>
                     <p>{profile.CarManufacturer}</p>
                     <p>{profile.CarModel}</p>
                     <p>{profile.CarProductionYear}</p>
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
