import React from 'react';

const MatchedUser = () => {

    const users=[
        {
            id:'1',
            name:'khalil',
            Images:[ 'https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60']    },
        {
            id:'2',
            name:'Jebali',
            Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            ,
            {
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            ,{
                id:'4',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
            , ,{
                id:'3',
                name:'Jebali',
                Images:[ 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc3VwcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60']    }
               
    ]

  return (
      <>
            {users.map((user)=>
                <li style={{background:'white', display:'flex' , flexDirection:'row' , alignItems:'center' , 
                marginBottom:'1rem' ,
                width:'100%', height:'12%', paddingLeft:'1rem' , borderRadius:'1rem', 
                // boxShadow:' 3px 7px 51px -6px rgba(0,0,0,0.69)'
                boxShadow: '0px 0px 41px 0px rgba(173,176,245,1)',

                }}>
                    <img src={user.Images} style={{width:'3.7rem' , height:'3.7rem' , borderRadius:'50%'}} />
                
                <div style={{
                    
                    width:'50%' , height:'60%' , display:'flex' , flexDirection:'column', alignItems:'flex-start', marginLeft:'0.5rem', justifyContent:'center', justifyContent:'space-around'}}>
                    <h3 >{user.name}</h3>
                    <p>Matched 20 Days ago</p>
                </div>
                </li>
            )}
      </>
  )
};

export default MatchedUser;
