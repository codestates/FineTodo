import styled from "styled-components";
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import logo from "../assets/logo.jpg";
import SignupButton from "../buttons/signupbtn";
import LoginButton from "../buttons/loginbtn";
import { Link } from "react-router-dom";

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

  .logo {
    border-radius: 1rem;
  }
`;

const Login = () => {
  return (
    <Container>
      <img className="logo" src={logo} alt="" />
      <Link to="/login_2nd">
        <LoginButton />
      </Link>
      <Link to="/signup">
        <SignupButton />
      </Link>
    </Container>
  );
};

export default Login;
