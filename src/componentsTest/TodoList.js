import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    const close = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isClose = !todo.isClose;
      }
      return todo;
    });

    setTodos(close);
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTimeout(() => setTodos(removeArr), 300);
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [...todos, todo];
    setTodos(newTodo);
    console.log([todo, ...todos]);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((perv) =>
      perv.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  return (
    <div>
      <h1>what's the plan!?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
