import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import Root from './components/root';
import selector from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore;
  window.store = store; 
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.fetchTodos = fetchTodos;
  window.selector = selector;

  const content = document.getElementById("content");
  ReactDOM.render(<Root store={store}/>, content);
});
