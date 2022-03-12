import React from 'react';
import PostCard from './PostCard';
import { useQuery ,gql } from '@apollo/client';


const getBots = gql`
  query{
  getProfiles{
    UserName
    Images
  }
}
`

const Match = () => {

  const {error , data , loading} = useQuery(getBots);
  // console.log({error , loading , data});
  // console.log(data.getProfiles)

  // data.getProfiles.map((profiles)=>{
  //   console.log(profiles.UserName);
  // })

  // Create a standalone component for the error.
  
  if(error){return <div>Something went wrong</div>}
  return (
    <>
      <PostCard 
      // botData ={data.getProfiles}
      />
    </>
  )
};

export default Match;
