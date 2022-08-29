import { Box, Button, Container, Flex, HStack, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useState ,useEffect} from "react";
import { Input } from "@chakra-ui/react";
import styled from "styled-components";
import axios from "axios";
//import { useSelector } from "react-redux";

import { postData } from "../Redux/actions";
import { useLocation, useNavigate } from "react-router-dom";
const Label = styled.div`
  margin-right: 10px;
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Login = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const dispatch = useDispatch();
  const [formData, Setformdata] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(formData));
    
  };
  const HandleChange = (e) => {
    let name = e.target.name;

    Setformdata({
      ...formData,
      [name]: e.target.value,
    });
  };
  const token=useSelector((state)=>state.reducer.token);
  const from=location ?.state?.from?.pathname || "/"
  
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
    else{
      navigate("/login")
    }
  }, [token]);

  return (
    <>
      <Button size="lg" colorScheme="green" mt="24px">
        Login
      </Button>

      <Container mt="10">
        <Box boxShadow="outline" p="6" rounded="sm" bg="white">
          <Stack spacing={3} gap={"1rem"}>
            <form onSubmit={handleSubmit}>

            <Flex m={2}>
                <Label>Email:</Label>
                <Input
                  type="text"
                  placeholder="enter your email"
                  name="email"
                  size="md"
                  onChange={HandleChange}
                />
              </Flex>
              <Flex m={2} mb={3}>
                <Label>Password:</Label>
                <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  size="md"
                  onChange={HandleChange}
                />
              </Flex>
              

              <Input type={"submit"} bg="" />
            </form>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Login;
