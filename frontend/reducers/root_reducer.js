import todosReducer from './todos_reducer';
import { combineReducers } from 'redux';

// export default function (state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//   };
// }

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;