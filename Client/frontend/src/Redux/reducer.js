import Logout from "../Pages/Logout";
import {

  LOGIN_REQUEST,
  LOGIN_SUCCESS ,
  LOGIN_FAILURE,
  LOGOUT,
  
  GETPROFILE,
  

} from "./actionTypes";

let token=localStorage.getItem("token")||"";
const initState = {

  token:token || "",
  isLoading: false,
  isError: false,
  userid:""
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST : 
    return {
...state,
isLoading:true,
isError:false 
    }
case LOGIN_SUCCESS :
    //saveData("token",payload) 
  // console.log(payload.token,payload.userid)
    return {
        ...state,
        isAuth:true,
        token:payload.token,
        userid:payload.userid
    }
    case LOGIN_FAILURE : 
    return {
        ...state,
isLoading:false,
isError: true,
    }
    case LOGOUT:return{
      ...state,
      isLoading:false,
      isError: true,
      token:""
    }
   
   

    default : 
    return state
}
}

export default reducer



