import React, { Component } from "react";
import FILTER from "./VisibilityFilter";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todoList: [],
      visibilityFilter: FILTER.ALL
    };
    this.onChange = event => {
      this.setState({ text: event.target.value });
    };

    this.onSubmit = event => {
      event.preventDefault();
      this.setState({
        text: "",
        todoList: [
          ...this.state.todoList,
          {
            id: this.state.todoList.length,
            text: this.state.text,
            completed: false
          }
        ]
      });
    };

    this.onClick = id => {
      this.setState(state => {
        const newTodoList = state.todoList.map(item => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        });
        return { ...state, todoList: newTodoList };
      });
    };

    this.onFilterChange = filter => {
      this.setState(state => {
        return { ...state, visibilityFilter: filter };
      });
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  render() {
    return (
      <div>
        <AddTodo
          text={this.state.text}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <VisibleTodoList
          activeFilter={this.state.visibilityFilter}
          todos={this.state.todoList}
          onClick={this.onClick}
        />
        <Footer
          activeFilter={this.state.visibilityFilter}
          onFilterChange={this.onFilterChange}
        />
      </div>
    );
  }
}
