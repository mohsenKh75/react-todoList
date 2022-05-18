import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inpuRef = useRef(null);

  useEffect(() => {
    inpuRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            ref={inpuRef}
            type="text"
            name="text"
            value={input}
            placeholder="update todo"
            onChange={handleChange}
            className="todo-input edit"
          />
          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          <input
            ref={inpuRef}
            type="text"
            name="text"
            value={input}
            placeholder="add Todo"
            onChange={handleChange}
            className="todo-input"
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
