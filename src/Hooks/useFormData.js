import {gql , useMutation} from '@apollo/client'


const signUp = gql`
    mutation signUp($UserName : String , $Email: String , $Password : String) {
  createNewUser(UserName : $UserName , Email: $Email , Password: $Password ) {
    Email
    Password
    UserName
  }
}
`


export const useFormData = (UserName , Email , Password)=>{
    const {error , loading , data} = useMutation(signUp, {
        variables:{
            UserName,
            Email,
            Password
        }
    });
    return{
        data, 
        error,
        loading,
        
    };
}
