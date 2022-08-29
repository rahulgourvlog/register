import React from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from '../component/Navbar'

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import Register from '../Pages/Register'

import { RequiredAuth } from './RequiredAuth'
const Mainroutes = () => {
  return (
    <>
    <Navbar/>
   <Routes>
<Route path="/" element= {<RequiredAuth><Home/></RequiredAuth>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/logout" element={<Logout/>}></Route>


   </Routes>
    
    
    
    </>
  )
}

export default Mainroutes


// / - Home ( display profile of user who has logged in )
// /register - Register
// /login - Login
// /employees - List all employees
// /employees/create - Create New Employee
// /employees/:id - Show Details of a single employee;