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
                       inputValue: "" };
    }
    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value });
    };
    render() {
        return (
            <div>
              <h2>Todo List</h2>
              <TodoList todos={this.state.todos} />
              <TodoForm handleInputChange={this.handleInputChange} value={this.state.inputValue}/>
            </div>
        );
    }
}

export default App;
