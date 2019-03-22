import React from 'react';
import './Todo.css';

const TodoForm = ({handleInputChange, value, handleAdd, handleClear}) => {
    return <form className="todo-form" onSubmit={handleAdd}>
             <input type="text"
                    placeholder="todo"
                    name="inputValue"
                    onChange={handleInputChange}
                    value={value} />
             <div className="todo-form-buttons">
               <button type="submit" className="todo-add">add</button>
               <button className="todo-clear" onClick={handleClear}>clean</button>
             </div>
           </form>;
};

export default TodoForm;
