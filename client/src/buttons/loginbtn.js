import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Loginbtn = () => {

  const Loginbtn = styled.button`
  position: absolute;
  width: 18%;
  height: 1%;
  top: 45%;
  left: 41%;
  border-radius: 2rem;
  border-color: brown;
  font-size: 3rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  `
  return (
    <section className="main_try">
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}

      <Link to="/login_2nd">
      <Loginbtn>로그인</Loginbtn>
      </Link>

    </section>
  );
};

export default Loginbtn;
