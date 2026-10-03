import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todos: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  addTodo = () => {
    const newTodo = this.state.input.trim();

    if (newTodo === "") {
      return;
    }

    this.setState((previousState) => ({
      todos: [...previousState.todos, newTodo],
      input: "",
    }));
  };

  deleteTodo = (indexToDelete) => {
    this.setState((previousState) => ({
      todos: previousState.todos.filter(
        (_, index) => index !== indexToDelete
      ),
    }));
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>

        <input
          type="text"
          placeholder="Enter a task"
          value={this.state.input}
          onChange={this.handleInputChange}
        />

        <button onClick={this.addTodo}>Add Todo</button>

        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}

              <button onClick={() => this.deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;