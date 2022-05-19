import { Link } from "react-router-dom";
import styled from "styled-components";

const Footbttn = styled.div`
  width: 65vw;
  height: 20vh;
  /* border: 1px solid white; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Btn = styled.button`
  height: 50px;
  border-radius: 1rem;
  font-size: 2rem;
`;

const Footerbutton = () => {
  return (
    <Footbttn>
      <Link to="/mypage">
        <Btn>마이페이지</Btn>
      </Link>
      <Btn>로그아웃</Btn>
    </Footbttn>
  );
};

export default Footerbutton;
