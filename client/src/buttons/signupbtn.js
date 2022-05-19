import React from "react";
import styled from "styled-components";

const Signupbtn = styled.button`
  border-radius: 1rem;
  border-color: brown;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

const SignupButton = () => {
  return <Signupbtn>회원가입</Signupbtn>;
};

export default SignupButton;
