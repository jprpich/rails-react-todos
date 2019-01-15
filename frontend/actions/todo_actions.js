export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as APIUtil from '../util/todo_api_util';

export const receiveTodos = (todos) => {
  return ({
    type: RECEIVE_TODOS,
    todos: todos,
    });
}; 

export const receiveTodo = (todo) => {
  return ({
    type: RECEIVE_TODO,
    todo: todo,
  });
}; 

export const fetchTodos = () => {
  return (dispatch) => {
    debugger
    return APIUtil.fetchTodos().then(todos => {
         return dispatch(receiveTodos(todos));
    });
  };
};



