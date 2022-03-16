import React from 'react';
import { useInfo } from '../../../Hooks/useUserData';

const MatchedUser = (props) => {

    const changeMatch =(id)=>{
        props.messageBox(id - 1);
    }
    // const displayMessage=()=>{
    //     props.changeDisplayMessage(!props.messageState)
    // }

    const {error , loading , data} = useInfo(props.match);
    if(error){return <div>An Error occured</div>}
    if(loading){return <div>Loading</div>}


    const matchInfo = data.getUser;
    // console.log(matchInfo)

  return (
      <>
                <li className='list-item' onClick={()=> changeMatch(props.userId)} >
                    <img src={matchInfo.Images[0]} />
                
                <div className='match-info'>
                    <h3>{matchInfo.UserName}</h3>
                    {/* <p>Matched 20 Days ago</p> */}
                </div>
                </li>
      </>
  )
};

export default MatchedUser;
