import styled from 'styled-components';
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import logo from "../assets/logo.jpg";
import Signupbtn from '../buttons/signupbtn';
import Loginbtn from '../buttons/loginbtn'

export default function Login() {

  const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url(${bkimg});
  background-size: cover;
  text-align: center;
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
position: absolute;
width: 30%;
height: 17%;
top: 23%;
left: 35%;
border-radius: 1rem;
`

  return (

    <div className='container'>
      <Container>
        <div className = 'logo'><Logo/></div>
        <div className='loginbtn'><Loginbtn/></div>
        <div className='signupbtn'><Signupbtn/></div>

      </Container>
    </div>
  )
  }


