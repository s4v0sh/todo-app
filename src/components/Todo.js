import React from "react";

function Todo({ todos, removeClick, doneClick }) {
  const listItems = todos.map((todo) => (
    <div className="todo-item">
      {todo.status ? (
        <li key={todo.id}>
          <strike>{todo.task}</strike>
        </li>
      ) : (
        <li key={todo.id}>{todo.task}</li>
      )}
      <button onClick={() => removeClick(todo.id)}>Remove</button>
      <button onClick={() => doneClick(todo.id)}>Mark Done</button>
    </div>
  ));

  return <ul>{listItems}</ul>;
}

export default Todo;
