import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      list: "Add my to do list",
      checked: true,
    },
  ]);

  const nextId = useRef(2);

  const onInsert = useCallback(
    (list) => {
      const todo = {
        id: nextId.current,
        list,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  });

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
