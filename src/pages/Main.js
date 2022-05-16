import styled from 'styled-components';
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import logo from "../assets/logo.jpg";
import ToMypagebtn from '../buttons/tomypagebtn'
import mock from "../mockdata"


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
left: 3%;
border-radius: 1rem;
`
const Todolist_Container = styled.div`
position: absolute;
width: 30%;
height: 68%;
top: 27%;
left: 3%;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 1rem;
`
const ResultContainer = styled.div`
position: absolute;
width: 60%;
height: 77%;
top: 5%;
right: 3%;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 1rem;
`
const Logoutbtn = styled.button`
position: absolute;
width: 13%;
height: 8%;
bottom: 5%;
right: 3%;
border-radius: 1rem;
font-size: 2rem;
text-align: center;
`
const Todolist = styled.div`
text-align: center;
position: relative;
font-size: 20px;
background-color: cyan;
width: 90%;
height: auto;
left: 5%;
top: 3%;
z-index: 3;
`

  return (

    <div className='container'>
      <Container>
        <div className = 'logo'><Logo/></div>
        <div className = 'todolistcontainer'><Todolist_Container>
        {mock.map(el => {
      return (
        <Todolist className="list" key={el.id}>
          <div>{el.todo.summary}</div>
        </Todolist>
      )
    })}
          </Todolist_Container></div>
        <div className = 'resultcontainer'><ResultContainer>
        {mock.map(el => {
      return (
        <Todolist className="list" key={el.id}>
          <div>{el.todo.title}</div>
          <div>{el.todo.detail}</div>
          <div>{el.todo.supply}</div>
          <div>{el.todo.location}</div>
          <div>{el.todo.friend}</div>
        </Todolist>
      )
    })}
          </ResultContainer></div>
        <div className = 'tomypage'><ToMypagebtn/></div>
        <div className = 'logout'><Logoutbtn>로그아웃</Logoutbtn></div>
      </Container>
    </div>
  )
  }


