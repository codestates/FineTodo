import styled from 'styled-components';
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import logo from "../assets/logo.jpg";
import Cancelbtn from '../buttons/cancelbtn'


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
top: 5%;
right: 3%;
border-radius: 1rem;
`
const Input_info_id = styled.input`
  position: absolute;
  width: 20%;
  height: 14%;
  top: 6%;
  left: 3%;
  border-radius: 2rem;
  border-color: brown;
  font-size: 2rem;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`
const Id_check = styled.button`
  position: absolute;
  width: 9%;
  height: 7%;
  top: 13%;
  left: 27%;
  border-radius: 1rem;
  border-color: brown;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 2rem;
  text-align: center;
`

const Id_check_result = styled.text`
  position: absolute;
  width: 20%;
  height: 3%;
  top: 21%;
  left: 3%;
`

const Input_info_password = styled.input`
  position: absolute;
  width: 20%;
  height: 14%;
  top: 26%;
  left: 3%;
  border-radius: 2rem;
  border-color: brown;
  font-size: 2rem;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`
const Input_info_password_check = styled.input`
  position: absolute;
  width: 20%;
  height: 14%;
  top: 26%;
  left: 27%;
  border-radius: 2rem;
  border-color: brown;
  font-size: 2rem;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`
const Password_check_result = styled.text`
  position: absolute;
  width: 20%;
  height: 3%;
  top: 41%;
  left: 3%;
`

const Input_info_name = styled.input`
  position: absolute;
  width: 20%;
  height: 14%;
  top: 46%;
  left: 3%;
  border-radius: 2rem;
  border-color: brown;
  font-size: 2rem;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`

const Input_info_age = styled.input`
  position: absolute;
  width: 20%;
  height: 14%;
  top: 66%;
  left: 3%;
  border-radius: 2rem;
  border-color: brown;
  font-size: 2rem;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`

const Signupbtn2 = styled.button`
position: absolute;
width: 13%;
height: 8%;
bottom: 5%;
right: 19%;
border-radius: 1rem;
font-size: 2rem;
text-align: center;
`

  return (

    <div className='container'>
      <Container>
        <div className = 'logo'><Logo/></div>
        <div className = 'input_info_id'><Input_info_id placeholder='아이디를 입력하세요'/></div>
        <div className = 'id_check'><Id_check>중복검사</Id_check></div>
        <div className = 'id_check_result'><Id_check_result>이미 있는 아이디입니다</Id_check_result></div>
        <div className = 'input_info_password'><Input_info_password placeholder='비밀번호를 입력하세요'/></div>
        <div className = 'input_info_password_check'><Input_info_password_check placeholder='비밀번호를 다시 입력하세요'/></div>
        <div className = 'password_check_result'><Password_check_result>비밀번호가 일치하지 않습니다</Password_check_result></div>
        <div className = 'input_info_name'><Input_info_name placeholder='이름을 입력하세요'/></div>
        <div className = 'input_info_age'><Input_info_age placeholder='나이를 입력하세요'/></div>
        <div className = 'signupbtn2'><Signupbtn2>회원가입</Signupbtn2></div>
        <div className = 'cancel'><Cancelbtn>취소</Cancelbtn></div>
      </Container>
    </div>
  )
  }


