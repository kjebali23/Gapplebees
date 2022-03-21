import React from 'react'

const Message = (props) => {
  const messageLen = props.messages.length
  if(messageLen == 0){return <div>There is nothing to display</div>}

  let messages = []
  props.messages.map((message)=>{
      messages.push(message.content)
  })

  console.log(messages);

  if (messageLen !=0){
    return (
        <div style={{background:'pink'}}>
            {/* {messages.map((message)=>{ */}
                <p>{messages}</p>
            {/* })} */}
            {/* <p>test</p> */}
        </div>
  )
}}

export default Message