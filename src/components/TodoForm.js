import React from "react";

function TodoForm({ value, onValueChange, onValueSubmit }) {
  return (
    <form onSubmit={onValueSubmit}>
      <input
        type="text"
        placeholder="What is the task to be done?"
        value={value}
        onChange={onValueChange}
      />
      <button type="submit" className="addTask">
        Add task
      </button>
    </form>
  );
}

export default TodoForm;
