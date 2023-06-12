import { styled } from 'styled-components';
import { BiPlus } from 'react-icons/bi';

import { addTodo } from '../redux/actions/index';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CreateTodoWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const CreateTodoInput = styled.input`
  width: 11rem;
  background-color: #ffe3e3;
  border: none;
  border-radius: 0.4rem;
  height: 2rem;
  margin-right: 1rem;
`;

const CreateTodoButton = styled.button`
  width: 3rem;
  height: 2rem;

  border: none;
  border-radius: 0.4rem;
  background-color: #ff0000;
`;

export default function CreateTodo() {
  const allTodos = useSelector((state) => state.itemReducer.TodoList);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setNewTodoTitle(e.target.value);
  };

  const onClickSubmit = () => {
    let todoListLength = allTodos.length;
    const newTodo = {
      id: todoListLength + 1,
      title: newTodoTitle,
      isClear: false,
    };
    dispatch(addTodo(newTodo));
    setNewTodoTitle('');
    console.log(newTodo);
  };

  return (
    <div>
      <CreateTodoWrapper>
        <CreateTodoInput
          type="text"
          onChange={onChangeInput}
          value={newTodoTitle}
        ></CreateTodoInput>
        <CreateTodoButton onClick={onClickSubmit}>
          <BiPlus size={30} color="white"></BiPlus>
        </CreateTodoButton>
      </CreateTodoWrapper>
    </div>
  );
}
