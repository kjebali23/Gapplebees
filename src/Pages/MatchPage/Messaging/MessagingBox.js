import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { messaging } from '../../../redux/counter';
import { useDispatch } from 'react-redux';
import { useMessages } from '../../../Hooks/useMessages';
import Message from './Message';



const MessagingBox = (props) => {
  const dispatch = useDispatch()


  const {error , loading , data} = useMessages("622e910c19ebfba7441f7310" , props.conversation);
    if(error){return <div>An Error occured</div>}
    if(loading){return <div>Loading</div>}
    // console.log(data.getMessages)

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
      <div className='message-container' style={{  width:'97%' , height:'90%' , overflow:'scroll'}}>
        <Message messages={data.getMessages} />
      </div>
    </div>
    </div>
  )
};

export default MessagingBox;
