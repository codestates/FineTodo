import styled from "styled-components";
import logo from "../assets/logo.jpg";

const HeaderComponent = styled.div`
  width: 35vw;
  height: 20vh;
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  .logo {
    border-radius: 1rem;
  }
`;

const MainHeader = () => {
  return (
    <HeaderComponent>
      <img className="logo" src={logo} alt="" />
    </HeaderComponent>
  );
};

export default MainHeader;
