/**
 * Actions
 *
 * Each function returns a pure object called an action in Redux
 */

import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_VISIBILITY_FILTER,
} from "../actions/actionNames";

// this is a helper to Id the created todos
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const changeFilter = (filter) => ({
  type: CHANGE_VISIBILITY_FILTER,
  filter,
});
