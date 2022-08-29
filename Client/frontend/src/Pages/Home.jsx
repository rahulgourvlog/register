
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { profileuser } from '../Redux/actions';
import { Box, Button, Container, Flex, HStack, Stack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import SocialProfileWithImage from './Profile';
const Home = () => {
  const [Data,Setdata]=useState([])
  const dispatch=useDispatch()
const {userid,token}=useSelector((state)=>state.reducer);


const getData=()=>{
   axios.get(`https://gautambabu.herokuapp.com/user/profile/${userid}`, {headers: 
  {authorization:token}})
  .then((res)=>{console.log(res.data)
    Setdata(res.data)
  
  })
    
    
}

console.log("data",Data)

useEffect(()=>{
  getData()
},[])
  return (
   <>
   <div>
    Home
   {Data.map((elem,index)=>{
    return (
      <SocialProfileWithImage key={index} {...elem}/>
    )
   })}
   </div>
   
   </>
  )
}

export default Home

