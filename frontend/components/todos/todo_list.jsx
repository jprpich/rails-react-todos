import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';


// module.exports = () => <h3>Todo List goes here!</h3>  

const TodoList = (props) => {
   const lis = props.todos.map((todo, idx) => {
     return <TodoListItem todo={todo} key={idx} />
  });
  
  return (
    <div>
      <ul>
        {lis}
        <TodoForm receiveTodo={props.receiveTodo}/>
      </ul>
    </div>
  )
}

export default TodoList;
