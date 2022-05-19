import styled from "styled-components";
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import MainHeader from "../components/mainheader";
import Todolist2 from "../components/todolist2";
import Todolist1 from "../components/todolist1";
import Footerbutton from "../components/mainfooterbutton";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${bkimg});
  background-size: cover;
`;

const Mypage = () => {
  return (
    <Container>
      <div>
        <MainHeader />
        <Todolist1 />
      </div>
      <div>
        <Todolist2 />
        <Footerbutton />
      </div>
    </Container>
  );
};

export default Mypage;
