import React from 'react';
import './Todo.css';

const Todo = ({completed, task, id}) => {
    return <div key={id} className={`todo-item ${completed ? "todo-completed" : null}`}>{task}</div>;
};

export default Todo;
