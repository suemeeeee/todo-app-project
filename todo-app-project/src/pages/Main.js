import CreateTodo from '../components/CreateTodo';
import TodoSection from '../components/TodoSection';
import { styled } from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Main() {
  return (
    <MainWrapper>
      <TodoSection></TodoSection>
      <CreateTodo></CreateTodo>
    </MainWrapper>
  );
}
