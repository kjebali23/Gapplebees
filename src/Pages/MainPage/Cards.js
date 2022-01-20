import React from 'react'

const Cards = (props) => {
    const cardData = {
            1: { imgLink:'https://images.unsplash.com/photo-1641236559790-4deb2e78d695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' ,
                title:'Upload your Car pictures' ,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
               } ,
        
            2: { imgLink:'https://media.istockphoto.com/photos/countdown-picture-id170615238?b=1&k=20&m=170615238&s=170667a&w=0&h=ELnnKNM2JCCRKYzdVoXgMz4TERvWpOccgCeM8bQ03Ak=' ,
                 title:'Swipe and Match with others' ,
                 text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."  
                } ,
        
             3: { imgLink:'https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
                  title:'Create a Network' ,
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."   
                } ,
} 

    return (
        
        <div className='Card' >
            <div className='card--body' style={{
            // border: 'solid red',
            borderRadius:'3%',
            height: '25rem',
            width:'26.5rem',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            background:'linear-gradient(171deg, rgba(255,255,255,1) 24%, rgba(186,199,245,1) 100%)',
            marginTop:'2rem',
            textAlign:'center',
            boxShadow: '3px 7px 51px -6px rgba(0,0,0,0.69)',       
}} >
                <img style={{height:'50%', width:'50%' , objectFit:'cover', borderRadius:'50%' , marginTop:'1.5rem' }} src={cardData[props.id].imgLink} />
                <h2 style={{marginTop:'1rem'}}>{cardData[props.id].title}</h2>
                <p style={{margin:'1.5rem' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>

        </div>
    )
}

export default Cards
