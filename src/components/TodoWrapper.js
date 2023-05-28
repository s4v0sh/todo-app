import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState } from "react";

export default TodoWrapper = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      id: Date.now(),
      task: value,
      status: false
    };
    setTodos([...todos, todo]);

    setValue("");
  };

  const removeClick = (id) => {
    let valueToDelete = todos.find((todo) => todo.id === id);

    let index = todos.indexOf(valueToDelete);
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const doneClick = (id) => {
    let valueToMarkDone = todos.find((todo) => todo.id === id);

    let index = todos.indexOf(valueToMarkDone);
    let newTodos = [...todos];
    newTodos[index].status = true;
    setTodos(newTodos);
    console.log(todos);
  };

  return (
    <div>
      <h1>Make a To-Do List</h1>
      <TodoForm
        value={value}
        onValueChange={handleChange}
        onValueSubmit={handleSubmit}
      />
      <Todo todos={todos} removeClick={removeClick} doneClick={doneClick} />
    </div>
  );
};
