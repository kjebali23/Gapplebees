import React,{useState} from 'react';
import MatchedUser from './MatchedUser'
import MessagingBox from './MessagingBox';
import './Messaging.css';
import BackBtn from '../Profile/Parameters/BackBtn';


const Messaging = (props) => {

    const [usermatchState , setUsermatchState] = useState(false);
    const [conversation , setConversation] = useState("620fbdcbe76c5d446fa43907");

  let width = window.innerWidth;
  
  if(width > 550){
    return (
      <>

       <div className='messaging-page-container'>
        <div className='user-matchs-section'>
            <BackBtn/>
            {usermatchState === true &&
              <ul className='matchs-list'>
              {props.userMatchs.map((match)=>
              <MatchedUser match={match} MessageBox={setUsermatchState}  conversation={setConversation} />
              )}
              </ul>  
            }
            {usermatchState === false && 
                <div className='matchs-div'>
                    <div className='empty-matchs'><p>There is nothing to display</p></div>
                </div>  
            }
        </div>
        <div className='message-box-section'>
            { usermatchState === false &&
            <div className='empty-message-box'>
                <div className='empty-message-box-title'>
                <h1>This is your messaging Section:</h1>
                </div>
                <div className='instructions'>
                    <p>Click on a user from the massages list on the left to display your conversation. </p>
                </div>
            </div>}
           {usermatchState === true &&
            <MessagingBox />
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
        <MessagingBox onClick={()=> setUsermatchState(!usermatchState)}/>
    </div>}
   
   </div>

  )}
};

export default Messaging;
