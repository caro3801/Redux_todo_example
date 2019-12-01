import React from "react";
import FILTER from "./VisibilityFilter";
const getVisibleTodo = (todos, filter) => {
  switch (filter) {
    case FILTER.ALL:
      return todos;
    case FILTER.COMPLETED:
      return todos.filter(elem => elem.completed);

    case FILTER.PENDING:
      return todos.filter(elem => !elem.completed);
    default:
      throw new Error("Invalid filter", filter);
  }
};
const VisibleTodoList = ({ todos, onClick, activeFilter }) => {
  const textdeco = completed => {
    return completed
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
  };

  const todoList = getVisibleTodo(todos, activeFilter);

  return (
    <ul>
      {todoList.map((item, index) => {
        return (
          <li
            style={textdeco(item.completed)}
            key={index}
            onClick={() => onClick(index)}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

export default VisibleTodoList;
