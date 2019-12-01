/**
 * AddTodo container
 * 
 * Component connected to the redux store in order 
 * to add a new todo value to the todo list via a form
 * with a text input value
 */
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

//If no mapDispatchToProps, dispatch is passed as a default props 
const AddTodo = ({ dispatch }) => {
  let input; // ref node 

  //Arrow function trigger on form submit
  const lOnSubmit = event => {
    event.preventDefault();

    //prevent UI from sending empty value 
    if (!input.value.trim()) {
      return
    }

    // dispatch the addTodo action with the input value
    dispatch(addTodo(input.value)); 

    //reset the input value
    input.value = '' 
  };

  return (
    <div className="addTodo">
      <form onSubmit={lOnSubmit}>
        <input name="todoName" ref={node => (input = node)} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};


//If no mapDispatchToProps, dispatch is passed as a default props 
export default connect()(AddTodo);
