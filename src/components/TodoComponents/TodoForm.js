import React from 'react';
import './Todo.css';

const TodoForm = ({handleInputChange, value}) => {
    return <input type="text"
                  placeholder="todo"
                  onChange={handleInputChange}
                  value={value}
           />;
};

export default TodoForm;
