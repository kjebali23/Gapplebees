import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { messaging } from '../../../redux/counter';
import { useDispatch } from 'react-redux';


const MessagingBox = (props) => {
  const dispatch = useDispatch()
  return (
    <div className='message-box-container'>
      <div className='message-box-header'>
      <div className='back-icon' onClick={()=> dispatch(messaging())}>
      <ArrowBackIosIcon/>
      </div>
      <div className='match-name'>
        <h3>PlaceHolder</h3>
        </div>
      </div>
    <div className='message-box'>
      
      <ul>
        {props.usersMessages.map((message)=>
        <li>{message}</li>
        )}
      </ul>
    </div>
    </div>
  )
};

export default MessagingBox;
