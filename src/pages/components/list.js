import React, { useState } from "react";
import styled from "styled-components";
import guestimg from "../../assets/guest.png"
import logo from "../../assets/logo.jpg";
import mock from "../../Mock"
import { ModalBackdrop, ModalView } from "./Modal";

export default function List() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

const ListContainer = styled.div`
  background-color: white;
  width: 27%;
`

const ProfileContainer = styled.div`
  background-color: skyblue;
  height: 15%;
  width: 100%;
`
const Profileimg = styled.img.attrs({
  src: `${guestimg}`
})`
width: 35%;
height: 100%;
background-color: white;
`

const Profilename = styled.text`
  color: black;
  position: absolute;
  font-size: 26px;
  padding-top: 15px;
  padding-left: 30px;
`

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
position: absolute;
width: 10%;
height: 5%;
top: 0%;
right: 0%;
z-index: 1;
`
const Loginbtn = styled.button`
position: absolute;
width: 7%;
height: 5%;
top: 7.5%;
right: 1%;
border-radius: 1rem;
font-size: 27px;
justify-content: center;
text-align: center;
z-index: 2;
`

const Result_List = styled.div`
text-align: center;
position: relative;
font-size: 20px;
background-color: cyan;
width: 90%;
height: auto;
left: 5%;
top: 3%;
z-index: 3;
/* border-color: black;
border: 4px solid; */
`
const Blank = styled.div`
  background-color: white;
  height: 2rem;
`
const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 80%;
    height: 80%;
`;

const Closebtn = styled.button`
 position: relative;
 width: 3%;
 height: 5%;
 left: 97%;
`
  return (
    <ListContainer>

    <ProfileContainer>
      <Profileimg/>
      <Profilename>Guest님</Profilename>
      <Logo/>
      <Loginbtn>로그인</Loginbtn>
    </ProfileContainer>

    {mock.map(el => {
      return (
        <Result_List onClick={openModalHandler} className="list" key={el.aca_id}>
          <div>{el.aca_name}</div>
          <div>{el.aca_grade}</div>
          <div>{el.location}</div>
          <div>{el.review}</div>
          <div>{el.subject}</div>
          <div>{el.score}</div>
          <div className="blank"></div>
          <Blank/>
        </Result_List>
      )
    })}
    {isOpen === true ? <ModalBackdrop>
      <ModalView>
      <Closebtn onClick={openModalHandler}>X</Closebtn>
      </ModalView>
    </ModalBackdrop> : null}
 
    </ListContainer>
  );
}
