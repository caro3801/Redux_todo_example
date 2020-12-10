import React, { Component } from "react";
import Footer from "../components/Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./TodoList";

export default class App extends Component {
  render() {
    return (
      <>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </>
    );
  }
}
