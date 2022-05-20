import styled from "styled-components";
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import logo from "../assets/logo.jpg";
import CancleButton from "../buttons/cancelbtn";
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

const Inputid = styled.input`
  border-radius: 1rem;
  border-color: brown;
  font-size: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Inputpassword = styled.input`
  border-radius: 2rem;
  border-color: brown;
  font-size: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Loginbtn2 = styled.button`
  border-radius: 2rem;
  font-size: 2rem;
  text-align: center;
`;

const Bottomcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
`;

const Loginpage2 = () => {
  return (
    <div className="container">
      <Container>
        <img className="logo" src={logo} alt="" />
        <Inputid placeholder="아이디를 입력하세요" />
        <Inputpassword type="password" placeholder="비밀번호를 입력하세요" />
        <Bottomcontainer>
          <Loginbtn2>로그인</Loginbtn2>
          <CancleButton />
        </Bottomcontainer>
      </Container>
    </div>
  );
};

export default Loginpage2;
