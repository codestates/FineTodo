import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signupbtn = () => {

const Signupbtn = styled.button`
 position: absolute;
 width: 18%;
 height: 13%;
 top: 63%;
 left: 41%;
 border-radius: 2rem;
 border-color: brown;
 font-size: 3rem;
 justify-content: center;
 text-align: center;
 background-color: rgba(255, 255, 255, 0.5);
`
  return (
    <section className="loginbtn">
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}

      <Link to="/signup">
      <Signupbtn>회원가입</Signupbtn>
      </Link>

    </section>
  );
};

export default Signupbtn;
