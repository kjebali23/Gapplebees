import React from 'react';

const MatchedUser = (props) => {

    const changeMatch =(id)=>{
        props.messageBox(id - 1);
    }
    // const displayMessage=()=>{
    //     props.changeDisplayMessage(!props.messageState)
    // }

  return (
      <>
                <li className='list-item' onClick={()=> changeMatch(props.userId)} >
                    <img src={props.userImage} style={{width:'3.7rem' , height:'3.7rem' , borderRadius:'50%'}} />
                
                <div className='match-info'>
                    <h3>{props.userName}</h3>
                    <p>Matched 20 Days ago</p>
                </div>
                </li>
      </>
  )
};

export default MatchedUser;
