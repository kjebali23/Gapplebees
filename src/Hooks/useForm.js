import { useQuery , gql , useLazyQuery } from "@apollo/client";


    const login = gql`
    query Login($userName: String!, $password: String!) {
    login(UserName: $userName, Password: $password) {
    Uid
    UserName
    Email
    Token
    }
    }
    `


export const useForm = (userName , password)=>{
    const {error , loading , data} = useLazyQuery(login, {
        variables:{
            userName,
            password
        }
    });
    console.log(data , error , loading)
    return{
        data, 
        error,
        loading
    }
}