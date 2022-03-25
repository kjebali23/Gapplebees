import { gql , useQuery } from '@apollo/client';




const UserInfo = gql`
    query user($userId : ID! ){
        getUser(id: $userId) {
        UserName
        Images
        Matchs
  }
  
}
`


export const useInfo = (userId , Token)=>{
          const {error , loading , data} = useQuery(UserInfo, {
              variables:{
                  userId,
                  Token
              }
          });
          return{
              data, 
              error,
              loading
          };
      }


