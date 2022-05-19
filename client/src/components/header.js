import styled from "styled-components";
import logo from "../assets/logo.jpg";

const HeaderComponent = styled.div`
  width: 100vw;
  height: 20vh;
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;

  .logo {
    border-radius: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderComponent>
      <img className="logo" src={logo} alt="" />
    </HeaderComponent>
  );
};

export default Header;
