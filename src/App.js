import React from 'react';
import { TodoList, TodoForm } from './components/TodoComponents';

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
                       inputValue: "",
                       todoID: 0
                     };
    }
    newId = () => {
        this.setState({todoID: this.state.todoID + 1});
        return this.state.todoId;
    };
    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };
    handleAdd = () => {
        this.setState({ todos: this.state.todos.concat({ task: this.state.inputValue,
                                                        completed: false,
                                                        id: this.newId() }),
                       inputValue: "" });
    };
    handleClear = () => {
        this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
    };
    render() {
        return (
            <div>
              <h2>Todo List</h2>
              <TodoList todos={this.state.todos} />
              <TodoForm handleInputChange={this.handleInputChange}
                        value={this.state.inputValue}
                        handleAdd={this.handleAdd}
                        handleClear={this.handleClear}
              />
            </div>
        );
    }
}

export default App;
