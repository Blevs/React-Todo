import React from 'react';
import './Todo.css';

const Todo = ({toggleCompleted, completed, task, id}) => {
    return <div onClick={() => toggleCompleted(id)}
                className={`todo-item ${completed ? "todo-completed" : ""}`}>
             {task}
           </div>;
};

export default Todo;
