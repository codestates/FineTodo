import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Mypage_myinfobtn = () => {

  const Mypage_myinfobtn = styled.button`
  position: absolute;
  width: 24%;
  height: 10%;
  top: 5%;
  right: 38%;
  border-radius: 1rem;
  font-size: 2rem;
  text-align: center;
  `
  return (
    <section className="main">
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}

      <Link to="/mypage_myinfo">
      <Mypage_myinfobtn>내 정보</Mypage_myinfobtn>
      </Link>

    </section>
  );
};

export default Mypage_myinfobtn;
