import React,{useState} from 'react';
import MatchedUser from './MatchedUser'
import MessagingBox from './MessagingBox';
import './Messaging.css';
import BackBtn from '../Profile/Parameters/BackBtn';


const Messaging = (props) => {

    const [usermatchState , setUsermatchState] = useState(null);
    

  let width = window.innerWidth;
  
  if(width > 550){
    return (
      <>

       <div className='messaging-page-container'>
        <div className='user-matchs-section'>
            <BackBtn/>
            <ul className='matchs-list'>
            {props.userMatchs.map((match)=>
            <MatchedUser match={match}/>
            )}
            </ul>
        </div>
        <div className='message-box-section'>
            { usermatchState === null &&
            <div className='empty-message-box'>
                <div className='empty-message-box-title'>
                <h1>This is your messaging Section:</h1>
                </div>
                <div className='instructions'>
                    <p>Click on a user from the massages list on the left to display your conversation. </p>
                </div>
            </div>}
           {usermatchState !== null &&
            <MessagingBox 
            // usersMessages={users[usermatchState].Messages} 
            />
            }

        </div>
       </div>
      </>
  )
}
  else{
    
      return(
    <div className='messaging-page-container'>
    {usermatchState === null &&
    <div className='user-matchs-section'>
        <BackBtn/> 
        <ul className='matchs-list'>

        {props.userMatchs.map((match)=>
            <MatchedUser match={match}/>
            )}
        </ul>
    </div>}
    
    {usermatchState !== null &&
    <div className='message-box-section'>
        <MessagingBox 
        // usersMessages={users[usermatchState].Messages}
        />
    </div>}
   
   </div>

  )}
};

export default Messaging;
