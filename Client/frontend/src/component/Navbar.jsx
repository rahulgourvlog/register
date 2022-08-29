import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from "styled-components";
const Navbar = () => {

const Nav=styled.div`

display: flex;
background-color: red;
width:100%;
height: 10vh;
color:white;
align-items: center;
justify-content: space-around;
margin: auto;


margin-bottom: 50px;
.link{
font-size: 20px;
font-weight: 700;
}
.link:hover{
    color:#0046be;
}

`

const token=useSelector((state)=>state.reducer.token);
console.log(token)
  return (
  <>
  <Nav>
  <Link to="/" className='link'>Home</Link>
  
 {token ?<Link to="/logout"  className='link'>Logout</Link>  :
 <Link to="/login"  className='link'>Login</Link>}
   <Link to="/register"  className='link'>Register</Link>
 
 
  </Nav>
 
  </>
  )
}

export default Navbar

