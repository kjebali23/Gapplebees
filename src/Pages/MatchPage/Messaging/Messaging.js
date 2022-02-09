import React,{useState} from 'react';
import BackBtn from '../Profile/Parameters/BackBtn';
import MatchedUser from './MatchedUser'
import MessagingBox from './MessagingBox';

import './Messaging.css';






const Messaging = () => {
    const [usermatchState , setUsermatchState] = useState(0);

    const users=[
        {
            id:'0',
            name:'khalil',
            Images:[ 'https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60']  ,  
            Messages:[`user 1's First Message` , 'Second Message', '3rd Message' ,'4th Message' ,'5th Message' ]
        },
            {
            id:'1',
            name:'Jebali',
            Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']   
            ,Messages:[`user 2's First Message` , 'Second Message', '3rd Message' ] }
            ,
            {
                id:'2',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    
                ,Messages:[`user 3's First Message` , 'Message' ]}
            ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']   
                ,Messages:[`user 4's First Message` ,'Message' ] }
            ]

  return (
      <>
       <div className='messaging-page-container' style={{}}>
        <div className='user-matchs-section'>
            <BackBtn />
            <ul className='matchs-list'>
            {users.map((user)=>
            <MatchedUser userName={user.name} userImage={user.Images} userId={user.id} messageBox={setUsermatchState}/>
            )}
            </ul>
        </div>
        <div className='message-box-section'>
            <MessagingBox usersMessages={users[usermatchState].Messages} />
        </div>
       </div>
      </>
  )
};

export default Messaging;
