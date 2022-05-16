import styled from 'styled-components';
import React from "react";
import bkimg from "../assets/bkimg.jpg";
import logo from "../assets/logo.jpg";
import MypageCancelbtn from '../buttons/mypagecancelbtn'
import Mypage_myinfobtn from '../buttons/mypage_myinfobtn'
import Mypage_infoeditbtn from '../buttons/mypage_infoeditbtn'
import Mypage_goodsentencebtn from '../buttons/mypage_goodsentencebtn'


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
const MenuContainer = styled.div`
position: absolute;
width: 30%;
height: 68%;
top: 27%;
left: 3%;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 1rem;
`
const SummaryInfo = styled.div`
position: absolute;
width: 35%;
height: 17%;
top: 5%;
left: 5%;
background-color: rgba(127, 127, 127, 0.5);
border-radius: 1rem;
`
const DetailInfo = styled.div`
position: absolute;
width: 85%;
height: 55%;
top: 29%;
left: 5%;
background-color: rgba(127, 127, 127, 0.5);
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
const Editbtn = styled.button`
position: absolute;
width: 13%;
height: 8%;
bottom: 4%;
right: 10%;
background-color: rgba(127, 127, 127, 0.5);
border-radius: 1rem;
font-size: 2rem;
text-align: center;
`

const Signoutbtn = styled.button`
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
        <div className = 'menucontainer'><MenuContainer>
          <Mypage_myinfobtn/>
          <Mypage_infoeditbtn/>
          <Mypage_goodsentencebtn/>
          </MenuContainer></div>
        <div className = 'resultcontainer'><ResultContainer>
          <SummaryInfo/>
          <DetailInfo/>
          <Editbtn>수정하기</Editbtn>
          </ResultContainer>
          </div>
        <div className = 'signout'><Signoutbtn>회원탈퇴</Signoutbtn></div>
        <div className = 'mypagecancel'><MypageCancelbtn/></div>
      </Container>
    </div>
  )
  }


