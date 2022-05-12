import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Trybtn = () => {

  const Trybtn = styled.button`
  position: absolute;
  width: 25%;
  height: 8%;
  top: 29%;
  left: 36.5%;
  border-radius: 2rem;
  font-size: 3rem;
  text-align: center;
  `
  return (
    <section className="main_try">
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}

      <Link to="/Main_try">
      <Trybtn>체험하기</Trybtn>
      </Link>

    </section>
  );
};

export default Trybtn;
