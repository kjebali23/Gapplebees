import React from 'react'
import Button from './Button'
import Footer from '../../component/Navbar/Footer'
import Divider from './Divider'
import AllCards from './AllCards'

const Main = () => {
    return (
        
        <body>
        <div className="container" style={{
            height: '90vh',
            display:'flex',
            justifyContent:'center',
        }}>
            <div className="main-background" style={{
                width:'95%',
                display:'flex',
                justifyContent:'center',
                background: 'rgb(58,97,234)',
                background: 'linear-gradient(348deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)',
            }}>
                <div className="slogan-holder" style={{
                    width:'60%',
                    alignSelf:'center',
                    textAlign:'center',
                    height:'35%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    paddingTop:'1.5rem',
                    color:'black',
                    boxShadow: '3px 7px 51px -6px rgba(0,0,0,0.69)',
                    background: 'rgb(255,255,255)',
                    background: 'linear-gradient(171deg, rgba(255,255,255,1) 24%, rgba(186,199,245,1) 100%)',
                }}>
                    <h1 style={{fontWeight:'bold'}}>It's never too late to take someone to Gapplebees.</h1>
                    <p>Let the world see your shitbox and see who thinks he can race you.</p>
                    <div className="mainBtns">
                        <Button btnText={'Join'}/>
                        <Button btnText={'Sign in'} />
                    </div>
                </div>
                
                
            </div>
        </div>
            <Divider divTitle={'What is it?'}/>
            <div className='wraper test-wraper' style={{display:'flex', justifyContent:'flex-start' , alignItems:'center' , flexDirection:'row', justifyContent:'space-between' , background: 'linear-gradient(60deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)' }}>
            <div className="slogan-holder" style={{
                    width:'70%',
                    // alignSelf:'center',
                    textAlign:'center',
                    height:'60%',
                    display:'flex',
                    // justifyContent:'center',
                    // alignItems:'center',
                    flexDirection:'column',
                    paddingTop:'1.5rem',
                    marginLeft:'5%',
                    color:'black',
                    boxShadow: '3px 7px 51px -6px rgba(0,0,0,0.69)',
                    background: 'rgb(255,255,255)',
                    background: 'linear-gradient(171deg, rgba(255,255,255,1) 24%, rgba(186,199,245,1) 100%)',
                }}>
                    <h1>The Story</h1>
                    <p style={{paddingTop:'4rem' , paddingLeft:'2rem' ,paddingRight:'2rem' }}>I'm a fan of Donut Media and member of the facebook group. I've seen this meme and the reactions it had from the group's users so i decided to build something like it. So here you go I hope you enjoy it.</p>
                </div>
                <img className='meme-image' src='https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/116942712_3337997096245962_1492447345146221446_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=15LAEd1Od6sAX95SUR_&_nc_ht=scontent.ftun14-1.fna&oh=00_AT99HQonmZqDNiZcPGftcK1qowARmMpi0VoZyOBDn58uJg&oe=620FD608' />
            </div>
            
            <Divider divTitle={'How does it work?'}/>
        
        <div className="wraper" style={{  background: 'linear-gradient(0deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)'}}>
            <AllCards/>
        </div>
            <Footer />
        </body>
        

    )
}

export default Main
