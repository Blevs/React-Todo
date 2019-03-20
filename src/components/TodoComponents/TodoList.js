import React from 'react';
import './Todo.css';
import Todo from './Todo.js';

const TodoList = ({todos, toggleCompleted, filter}) => {
    return <div className="todo-list">
             {todos
              .filter(todo => todo.task.toLowerCase().includes(filter.trim().toLowerCase()))
              .map(todo => <Todo key={todo.id}
                                 toggleCompleted={toggleCompleted}
                                 {...todo} />)}
           </div>;
};

export default TodoList;
