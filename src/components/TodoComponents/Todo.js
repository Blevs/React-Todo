import React from 'react';
import './Todo.css';

const Todo = ({completed, task}) => {
    return <div className={`todo-item ${completed ? "todo-completed" : ""}`}>{task}</div>;
};

export default Todo;
