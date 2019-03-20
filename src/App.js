import React from 'react';
import { TodoList, TodoForm } from './components/TodoComponents';
import './App.css';

const testTodos = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    },
    {
        task: 'Make Breakfast',
        id: 1528817084359,
        completed: true
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: testTodos,
                       inputValue: "" };
    }
    newId = () => {
        return Date.now();
    };
    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };
    handleAdd = (event) => {
        event.preventDefault();
        if (!this.state.inputValue.match(/^\s*$/)) {
            this.setState({ todos: this.state.todos.concat({ task: this.state.inputValue,
                                                             completed: false,
                                                             id: this.newId() }),
                            inputValue: "" });
        }
    };
    handleClear = () => {
        this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
    };
    toggleCompleted = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => (todo.id === id
                                                 ? {...todo, completed: !todo.completed}
                                                 : todo))
        });
    };
    render() {
        return (
            <div className="todo">
              <h2>todo</h2>
              <div className="todo-body">
                <TodoForm handleInputChange={this.handleInputChange}
                          value={this.state.inputValue}
                          handleAdd={this.handleAdd}
                          handleClear={this.handleClear} />
                <TodoList toggleCompleted={this.toggleCompleted}
                          todos={this.state.todos} />
              </div>
            </div>
        );
    }
}

export default App;
