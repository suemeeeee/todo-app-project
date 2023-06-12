import CreateTodo from '../components/CreateTodo';
import TodoSection from '../components/TodoSection';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Main() {
  const todos = useSelector((state) => state.itemReducer.TodoList);
  return (
    <MainWrapper>
      <TodoSection todos={todos}></TodoSection>
      <CreateTodo></CreateTodo>
    </MainWrapper>
  );
}
