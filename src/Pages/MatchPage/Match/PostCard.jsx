import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BadgeAvatars from './Avatar';



import SwiperCore, {
	Keyboard,
	Scrollbar,
	Pagination,
	Navigation,
} from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'


// import Swiper from 'swiper/bundle';

const useStyles = makeStyles({
    media:{
        height:0,
        paddingTop:'100%'
    }
})

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation])

const Images=[ 'https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824893-53d847138f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' , 'https://images.unsplash.com/photo-1631819824945-11e7ed9cbfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'  ]
const AvatarImg="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"


const PostCard = () => {
    const {media} = useStyles(); 
    return (
        <Card>
    
            <Swiper 
                grabCursor
                keyboard={{enabled: true}}
                pagination={{clickable: true}}
                navigation loop
            >
                {Images.map((image , index)=>
                    <SwiperSlide key={index}>
                        <CardMedia className={media} xs={8} sm={6} md={3} lg={4} image={image} />

                    </SwiperSlide>
                )}
                
            </Swiper>


            <CardContent>
                <BadgeAvatars/>
                <Typography variant='body2' component='p' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
            </CardContent>   
             
            
        </Card>
  )
};

export default PostCard;
