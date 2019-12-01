/**
 * Todolist
 * 
 * List all the todoitems 
 * It is a pure component only dedicated to generate TodoItems for display
 * The map function return a new array reference of the resulting generation
 */
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(item => (
        <TodoItem
          key={item.id}
          completed={item.completed}
          text={item.text}
          toggleTodo={() => {
            toggleTodo(item.id);
          }}
        />
      ))}
    </ul>
  );
};
export default TodoList;
