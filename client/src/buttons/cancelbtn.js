import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cancelbtn = styled.button`
  border-radius: 1rem;
  font-size: 2rem;
  text-align: center;
`;

const CancleButton = () => {
  return (
    <Link to="/">
      <Cancelbtn>돌아가기</Cancelbtn>
    </Link>
  );
};

export default CancleButton;
