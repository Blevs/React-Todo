import React from 'react';
import './Todo.css';
import Todo from './Todo.js';

const TodoList = ({todos}) => {
    return <div className="todo-list">
             {todos.map(todo => <Todo {...todo} />)}
           </div>;
};

export default TodoList;
