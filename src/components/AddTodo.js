import React from "react";
const AddTodo = ({ text, onChange, onSubmit }) => {
  return (
    <div className="addTodo">
      <form onSubmit={onSubmit}>
        <input name="todoName" value={text} onChange={onChange} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
