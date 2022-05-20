import styled from "styled-components";
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import { useState } from "react";
import Header from "../components/header";
import Signup from "../components/signupcomponent";

const Signupcontainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bkimg});
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .logo {
    border-radius: 1rem;
  }
`;

const Signuppage = () => {
  return (
    <Signupcontainer>
      <form>
        <Header />
        <Signup />
      </form>
    </Signupcontainer>
  );
};

export default Signuppage;
