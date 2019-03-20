import React from 'react';
import './Todo.css';

const TodoForm = ({handleInputChange, value, handleAdd, handleClear}) => {
    return <form className="todo-form" onSubmit={handleAdd}>
             <input type="text"
                    placeholder="todo"
                    onChange={handleInputChange}
                    value={value} />
             <button type="submit" className="todo-add">Add Todo</button>
             <button className="todo-clear" onClick={handleClear}>Clear Completed</button>
           </form>;
};

export default TodoForm;
