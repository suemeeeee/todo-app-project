// action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';
export const EDIT_TODO = 'EDIT_TODO';

// actions creator functions
export const addTodo = (item) => {
  return {
    type: ADD_TODO,
    payload: {
      id: item.id,
      title: item.title,
      isClear: false,
    },
  };
};

export const deleteTodo = (itemId) => {
  return {
    type: DELETE_TODO,
    payload: {
      itemId,
    },
  };
};

export const clearTodo = (itemId) => {
  return {
    type: CLEAR_TODO,
    payload: {
      itemId,
      isClear: true,
    },
  };
};

export const editTodo = (item) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: item.id,
      title: item.title,
      isClear: false,
    },
  };
};
