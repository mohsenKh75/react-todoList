import React, { useState, useRef, useEffect } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type="text"
            name="text"
            placeholder="update todo"
            value={input}
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="text"
            placeholder="add todod"
            value={input}
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
