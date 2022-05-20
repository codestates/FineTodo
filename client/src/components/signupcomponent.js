import styled from "styled-components";
import CancleButton from "../buttons/cancelbtn";
import SignupButton from "../buttons/signupbtn";
import { useState } from "react";

const SigninputContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blue; */
  box-sizing: border-box;
  gap: 10px;
`;

const Idcontainer = styled.div`
  width: 100vw;
  /* border: 1px solid green; */
  padding: 0 0 0 81px;
  display: flex;
  justify-content: center;
  gap: 10px;

  .idcheck {
    border-radius: 1rem;
    font-size: 1rem;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const SignInputBox = styled.input`
  width: 30vw;
  height: 5.5vh;
  border-radius: 1rem;
  border-color: brown;
  font-size: 1rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const onIDHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
    console.log(name, id, password);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }
  };
  return (
    <SigninputContainer>
      <Idcontainer>
        <SignInputBox
          name="id"
          valu={id}
          onChange={onIDHandler}
          placeholder="아이디"
        />
        <button className="idcheck">중복검사</button>
      </Idcontainer>
      <SignInputBox
        name="password"
        onChange={onPasswordHandler}
        type={"password"}
        placeholder="비밀번호"
      />
      <SignInputBox
        type="password"
        name="password2"
        value={confirmPassword}
        onChange={onConfirmPasswordHandler}
        placeholder="비밀번호를 다시 입력하세요"
      />
      {password !== confirmPassword ? (
        <p> 비밀번호가 일치하지 않습니다.</p>
      ) : null}
      <SignInputBox
        type="text"
        name="name"
        onChange={onNameHandler}
        placeholder="이름을 입력하세요"
      />
      <SignInputBox name="age" type="number" placeholder="나이를 입력하세요" />
      <div>
        <SignupButton />
        <CancleButton />
      </div>
    </SigninputContainer>
  );
};

export default Signup;
