import styled from "styled-components";
import mock from "../mockdata";

const TodoLisstContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  box-sizing: border-box;
  padding: 20px;
  margin: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3rem;
  width: 63vw;
  height: 80vh;
  gap: 10px;
`;

const Todolistcontent = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  font-size: 40px;
`;

const Todolist2 = () => {
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

export default Todolist2;
