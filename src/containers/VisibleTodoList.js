/**
 * VisibleTodoList
 * 
 * This container compute the visible todolist according to the active visibility filter
 * The display is made by the TodoList component connected at line 36
 * So the container is used as a wrapper to connect the redux store (state and dispatch)
 * to the Todolist component
 * 
 */

import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import FILTER from "../components/VisibilityFilter";
import TodoList from "../components/TodoList";

// This function returns the array of todos filtered according to the active filter
// The activefilter comes from the redux state as the original todos array (see line 31)
const getVisibleTodos = (todos, activeFilter) => {
  switch (activeFilter) {
    case FILTER.ALL:
      return todos;
    case FILTER.COMPLETED:
      return todos.filter(elem => elem.completed);
    case FILTER.PENDING:
      return todos.filter(elem => !elem.completed);
    default:
      throw new Error("Unknown filter: " + activeFilter);
  }
};


// Here we map the state with the props of the TodoList component by getting the filtered array of todos from the state
// The results will be accessible in the TodoList component under the "todos" props
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

// To toogle a todo, we use the toogleTodo action from the redux store
// it will be passed as a props as "toggleTodo" in the TodoList using the todo element id as argument
const mapDispatchToProps = dispatch => ({
  //toogleTodo is now part of props
  toggleTodo: id => dispatch(toggleTodo(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
