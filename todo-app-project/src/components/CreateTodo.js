import { styled } from 'styled-components';

const CreateTodoInput = styled.input``;

const CreateTodoButton = styled.button`
  width: 3rem;
  height: 2rem;

  border: none;
  background-color: #ff0000;
`;

export default function CreateTodo() {
  return (
    <div>
      <div>
        <CreateTodoInput type="text"></CreateTodoInput>
        <CreateTodoButton></CreateTodoButton>
      </div>
    </div>
  );
}
