import { Box, Button, Container, Flex, HStack, Stack ,} from "@chakra-ui/react";

import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [isLoading, Setloading] = useState(false);
  const Label=styled.div`
  margin-right: 10px;
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  `
 
  const navigate=useNavigate()
 const [formData,Setformdata]= useState({});
 


 const handleSubmit=(e)=>{
     e.preventDefault();
   console.log(formData);
   axios.post("https://gautambabu.herokuapp.com/user/register",formData).then((res)=>{
    console.log(res);
    if (res.data.error) {
     alert(res.data.message)
     return 
    }
   
    navigate("/login")
   


   })
     
 }
 const HandleChange=(e)=>{
let name=e.target.name;


 Setformdata({
     ...formData,
     [name]:e.target.value   })
}


  return (
    <>
     <Button size='lg' colorScheme='green' mt='24px'>
     Register yourself 
  </Button>
  
    

      <Container mt="10">
        <Box boxShadow="outline" p="6" rounded="sm" bg="white">
          <Stack spacing={3} gap={"1rem"}>
          <form onSubmit={handleSubmit}>
          <Flex m={2} >
            <Label >Email:</Label>
              <Input type="email" placeholder="email" name="email" size="md" onChange={HandleChange} />
              </Flex>
            <Flex m={2} >
            <Label >FirstName:</Label>
              <Input type="text" placeholder="enter your name"  name="firstName" size="md" onChange={HandleChange} />
            </Flex>
            <Flex m={2} >
            <Label >LastName:</Label>
              <Input type="text" placeholder="enter your username"  name="lastName" size="md" onChange={HandleChange} />
              </Flex>
            
            <Flex m={2} >
            <Label >Password:</Label>
              <Input type="password" placeholder="password" name="password" size="md" onChange={HandleChange} />
              </Flex>
            
            <Flex m={2} >
            <Label >Mobile:</Label>
              <Input type="text" placeholder="enter your Mobileno."  name="mobile" size="md"  onChange={HandleChange}/>
              </Flex>
            <Flex m={2} >
            <Label >Address:</Label>
              <Input type="text" placeholder="enter Address"  name="Address" size="md" onChange={HandleChange}  />
              </Flex>
          
              <Input type={"submit"} bg=""  />

              </form>
          </Stack>
        </Box>
      </Container>
    
    </>
  );
};

export default Register;

// /  email: 'rahulgour@gmail.com',
// firstName: 'rahul',
// lastName: 'gour',
// password: '$2b$10$jtBej0bqN6qX/2.xijvhfu7nZx2oOmXwebZJeet1cQsq0cGwt/lXW',
// mobile: '7898853907',
// Address: 'ews 357 indra',