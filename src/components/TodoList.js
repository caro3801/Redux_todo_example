/**
 * Todolist
 *
 * List all the todoitems
 * It is a pure component only dedicated to generate TodoItems for display
 * The map function return a new array reference of the resulting generation
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../actions";
import TodoItem from "./TodoItem";
import FILTER from "./VisibilityFilter";
// This function returns the array of todos filtered according to the active filter
// The activefilter comes from the redux state as the original todos array (see line 31)
const getVisibleTodos = (todos, activeFilter) => {
  switch (activeFilter) {
    case FILTER.ALL:
      return todos;
    case FILTER.COMPLETED:
      return todos.filter((elem) => elem.completed);
    case FILTER.PENDING:
      return todos.filter((elem) => !elem.completed);
    default:
      throw new Error("Unknown filter: " + activeFilter);
  }
};

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const activeFilter = useSelector((state) => state.visibilityFilter);
  const visibleTodos = getVisibleTodos(todos, activeFilter);

  const dispatch = useDispatch();
  return (
    <ul>
      {visibleTodos.map((item) => (
        <TodoItem
          key={item.id}
          completed={item.completed}
          text={item.text}
          toggleTodo={() => {
            dispatch(toggleTodo(item.id));
          }}
        />
      ))}
    </ul>
  );
};
export default TodoList;
