import React from "react";
import styled from "styled-components";

const Loginbtn = styled.button`
  width: 126.73px;
  border-radius: 1rem;
  border-color: brown;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

const LoginButton = () => {
  return <Loginbtn>로그인</Loginbtn>;
};

export default LoginButton;
