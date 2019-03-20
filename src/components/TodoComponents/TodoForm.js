import React from 'react';
import './Todo.css';

const TodoForm = ({handleInputChange, value, handleAdd, handleClear}) => {
    return <div className="todo-form">
             <input type="text"
                    placeholder="todo"
                    onChange={handleInputChange}
                    value={value} />
             <button className="todo-add" onClick={handleAdd}>Add Todo</button>
             <button className="todo-clear" onClick={handleClear}>Clear Completed</button>
           </div>;
};

export default TodoForm;
