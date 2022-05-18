import styled from 'styled-components';
import React, {useState} from "react";
import bkimg from "../assets/bkimg.jpg";
import logo from "../assets/logo.jpg";
import Cancelbtn from '../buttons/cancelbtn';
import axios from 'axios';

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
const Input_id = styled.input`
position: absolute;
width: 18%;
height: 13%;
top: 45%;
left: 41%;
border-radius: 2rem;
border-color: brown;
font-size: 2rem;
text-align: center;
background-color: rgba(255, 255, 255, 0.5);
`
const Input_password = styled.input`
position: absolute;
width: 18%;
height: 13%;
top: 63%;
left: 41%;
border-radius: 2rem;
border-color: brown;
font-size: 2rem;
justify-content: center;
text-align: center;
background-color: rgba(255, 255, 255, 0.5);
`

const Loginbtn2 = styled.button`
position: absolute;
width: 13%;
height: 8%;
bottom: 5%;
right: 19%;
border-radius: 1rem;
font-size: 2rem;
text-align: center;
`


  
axios.defaults.withCredentials = true;

export default function Login() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState(""); 
  
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();
  }
    
  return (

    <div className='container'>
      <Container>
        <div className = 'logo'><Logo/></div>
        <div className='input_id'><Input_id placeholder='아이디를 입력하세요' value={id} onChange={onIdHandler}/></div>
        <div className='input_password'><Input_password placeholder='비밀번호를 입력하세요' value={password} onChange={onPasswordHandler}/></div>
        <div className='loginbtn2'><Loginbtn2 onClick={onSubmit}>로그인</Loginbtn2></div>
        <div className='loginbtn2'><Cancelbtn>취소</Cancelbtn></div>
      </Container>
    </div>
  )
}


