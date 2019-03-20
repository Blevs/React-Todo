import React from 'react';
import './Todo.css';

const Todo = ({handleCompletion, completed, task, id}) => {
    return <div onClick={() => handleCompletion(id, !completed)}
                className={`todo-item ${completed ? "todo-completed" : ""}`}>
             {task}
           </div>;
};

export default Todo;
