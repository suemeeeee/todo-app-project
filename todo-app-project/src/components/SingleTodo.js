import { styled } from 'styled-components';

const SingleTodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 1px #aaaaaa;
  margin-bottom: 0.5rem;
`;

const SingleTodoP = styled.p``;

export default function SingleTodo({ todo }) {
  return (
    <SingleTodoWrapper>
      <p>{todo.title}</p>
      <input type="checkbox"></input>
    </SingleTodoWrapper>
  );
}
