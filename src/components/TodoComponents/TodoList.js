import React from 'react';
import './Todo.css';
import Todo from './Todo.js';

const TodoList = ({todos, toggleCompleted, filter}) => {
    const filteredTodos = todos.filter(todo => todo.task.toLowerCase().includes(filter.trim().toLowerCase()));
    return <div className="todo-list">
             {(filteredTodos && filteredTodos.length > 0)
               ? filteredTodos.map(todo => <Todo key={todo.id}
                                                 toggleCompleted={toggleCompleted}
                                                 {...todo} />)
               : <div className="todo-empty">
                   {filter.trim() !== "" ? "Try expanding your filter" : "Add a new todo" }
                 </div>}
           </div>;
};

export default TodoList;
