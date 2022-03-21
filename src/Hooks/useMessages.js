import { gql , useQuery } from '@apollo/client';

const messages = gql`
    query message($from : String! , $to : String! ){
        getMessages(from: $from , to : $to) {
        from
        to
        content
        created_at
  }
  
}
`


export const useMessages = (from , to)=>{
          const {error , loading , data} = useQuery(messages, {
              variables:{
                  from,
                  to
              }
          });
          return{
              data, 
              error,
              loading
          };
      }
