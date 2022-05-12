import styled from 'styled-components';
import React from "react";
import backgroundimg from "../assets/login_background.jpg";
import logo from "../assets/logo.jpg";
import social from "../assets/social.png";
import Loginbtn from '../loginbtn';
import Trybtn from '../trybtn'

export default function Login() {

  const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url(${backgroundimg});
  background-size: cover;
  text-align: center;
  .div.opacity {
    opacity: 0.5
  }
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
position: absolute;
width: 27%;
height: 14%;
top: 7%;
left: 35.5%;
border-radius: 1rem;
`


const Social_Login = styled.img.attrs({
  src: `${social}`,
})`
position: absolute;
width: 20%;
height: 9%;
top: 55%;
left: 39.5%;
`
const Signup_Comment = styled.text`
  color: black;
  position: absolute;
  top: 50.5%;
  left: 44.5%;

`
  return (

    <div className='container'>
      <Container>
        <div className = 'logo'><Logo/></div>
        <Loginbtn/>
        <Trybtn/>
        <Signup_Comment>
        아이디가 없다면? 회원가입하기
        </Signup_Comment>
        <Social_Login/>
      </Container>
    </div>
  )
  }


