import styled from "styled-components";

const InputboxContainer = styled.span`
  width: 24vw;
  height: 5.5vh;
  border-radius: 1rem;
  border-color: brown;
  font-size: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Inputbox = () => {
  return <InputboxContainer />;
};

export default Inputbox;
