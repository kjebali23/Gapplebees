import React from 'react';
import PostCard from './PostCard';
import { useQuery ,gql } from '@apollo/client';


const getBots = gql`
  query{
  getProfiles{
    UserName
    Images
    CarManufacturer
    CarModel
    CarProductionYear
  }
}
`

const Match = () => {

  const {error , data , loading} = useQuery(getBots);
  if (loading){return <div>Loading...</div> }
  if(error){return <div>Something went wrong</div>}

  return (
    <>
      <PostCard 
      botData ={data.getProfiles}
      />
    </>
  )
};

export default Match;
