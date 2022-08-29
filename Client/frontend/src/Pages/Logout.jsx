import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { logoutuser } from '../Redux/actions';
const Logout = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(logoutuser())
    })
  return (
   <>
    <h3>
        User logged out succesfully click here to <Link to="/login">Login</Link>
      </h3>
   
   </>
  )
}

export default Logout