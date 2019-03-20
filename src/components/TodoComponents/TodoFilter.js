import React from 'react';
import './Todo.css';

const TodoFilter = ({handleInputChange, value}) => {
    return <input type="text"
                  placeholder="filter"
                  className="todo-filter"
                  onChange={handleInputChange}
                  name="filterValue"
                  value={value} />;
};

export default TodoFilter;
