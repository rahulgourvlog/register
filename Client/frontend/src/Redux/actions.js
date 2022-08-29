// use axios for api call
import axios from "axios";

import {  LOGIN_FAILURE, LOGIN_REQUEST,   LOGIN_SUCCESS, LOGOUT} from "./actionTypes";
let token=localStorage.getItem("token")||"";



export const getRequest = ()=>({type:LOGIN_REQUEST})
export const getSuccess = (payload)=>({type:LOGIN_SUCCESS,payload})
export const getFailure = ()=>({type:LOGIN_FAILURE})
export const logout = ()=>({type:LOGOUT})













export const postData = (payload)=>async(dispatch)=>{
 
 dispatch(getRequest())
  try{
    let getData = await axios.post("https://gautambabu.herokuapp.com/user/login",payload)
    let data =  getData.data
    console.log(data);
      localStorage.setItem("token",data.token)
      dispatch(getSuccess({token:data.token,userid:data.userId}))

   
 
  }
  catch(err){
      console.log("Erro is There",err)
      dispatch(getFailure())
  }
   

}

 export const logoutuser=()=>(dispatch)=>{
localStorage.removeItem("token");
dispatch(logout())
}



  




