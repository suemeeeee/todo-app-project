import { styled } from 'styled-components';
import { GrClose } from 'react-icons/gr';

const SingleTodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px #aaaaaa;
  margin-bottom: 0.5rem;
`;

export default function SingleTodo({ todo }) {
  return (
    <SingleTodoWrapper>
      <p>{todo.title}</p>
      <div>
        <input type="checkbox"></input>
        {/* <GrClose size={13}></GrClose> */}
      </div>
    </SingleTodoWrapper>
  );
}
