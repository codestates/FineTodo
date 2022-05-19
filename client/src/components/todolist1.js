import styled from "styled-components";
import mock from "../mockdata";

const TodoLisstContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3rem;
  padding: 10px;
  margin: 0 30px;
  /* border: 1px solid gold; */
  box-sizing: border-box;
  width: 29vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// const Outbox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   width: 35vw;
//   height: 80vh;
//   border: 2px solid purple;
//   box-sizing: border-box;
//   padding: 5px;
// `;

const Todolistcontent = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  width: 100%;
  height: 5vh;
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 20px;
`;

const Todolist1 = () => {
  return (
    <TodoLisstContainer>
      {mock.map((el) => {
        return (
          <Todolistcontent className="list" key={el.id}>
            <div>
              <input type={"checkbox"} />
              {el.todo.detail}
            </div>
          </Todolistcontent>
        );
      })}
    </TodoLisstContainer>
  );
};

export default Todolist1;
