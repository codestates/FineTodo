import styled from 'styled-components';
import React from "react";
import backgroundimg from "../assets/login_background.jpg";
import logo from "../assets/logo.jpg";
import social from "../assets/social.png";

export default function login_2nd() {

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

const Social_login = styled.img.attrs({
  src: `${social}`,
})`
position: absolute;
width: 20%;
height: 9%;
top: 55%;
left: 39.5%;
`
const Input_id = styled.input`
  position: absolute;
 width: 25%;
 height: 8%;
 top: 26%;
 left: 36.5%;
 border-radius: 2rem;
 font-size: 3rem;
 justify-content: center;
 text-align: center;

`
const Input_password = styled.input`
  position: absolute;
 width: 25%;
 height: 8%;
 top: 37%;
 left: 36.5%;
 border-radius: 2rem;
 font-size: 3rem;
 justify-content: center;
 text-align: center;
`
const Loginbtn2 = styled.button`
position: absolute;
width: 8%;
height: 6%;
top: 47%;
left: 44.5%;
border-radius: 1rem;
font-size: 3rem;
text-align: center;
`

  return (

    <div className='container'>
      <Container>
        <div className = 'logo'><Logo/></div>
        <Input_id placeholder='아이디를 입력하세요'></Input_id>
        <Input_password placeholder='비밀번호를 입력하세요'></Input_password>
        <Loginbtn2>로그인</Loginbtn2>
        <Social_login/>
      </Container>
    </div>
  )
  }


