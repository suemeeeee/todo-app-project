import SingleTodo from './SingleTodo';
import { initialState } from '../redux/reducers/initialState';
import { styled } from 'styled-components';

const TodoSectionDiv = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff5f5;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export default function TodoSection() {
  return (
    <TodoSectionDiv>
      {initialState.TodoList &&
        initialState.TodoList.map((todo) => (
          <SingleTodo key={todo.id} todo={todo}></SingleTodo>
        ))}
    </TodoSectionDiv>
  );
}
