import styled from "styled-components";
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import SignupButton from "../buttons/signupbtn";
import LoginButton from "../buttons/loginbtn";
import { Link } from "react-router-dom";
import Header from "../components/header";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bkimg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const LoginPage1 = () => {
  return (
    <Container>
      <Header />
      <Link to="/loginpage2">
        <LoginButton />
      </Link>
      <Link to="/signup">
        <SignupButton />
      </Link>
    </Container>
  );
};

export default LoginPage1;
