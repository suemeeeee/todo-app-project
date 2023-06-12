import { ADD_TODO, DELETE_TODO } from '../actions/index';
import { initialState } from './initialState';

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        TodoList: [...state.TodoList, action.payload],
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        TodoList: state.TodoList.filter(
          (el) => el.id !== action.payload.itemId
        ),
      });

    default:
      return state;
  }
};

export default itemReducer;
