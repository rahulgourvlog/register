
import { useContext } from "react"
import { Link} from "react-router-dom"
import { useSelector } from 'react-redux';

export const RequiredAuth = ({children})=>{
    const token=useSelector((state)=>state.reducer.token);
console.log(token)
//   get the token from auth context and if token exists return the children otherwise return the follwoing
    return (token ? children :
<h3>Please <Link to = "/login">login</Link> to access this page</h3>
    
    )
}