import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      list: "add your list",
      checked: false,
    },
    {
      id: 2,
      list: "listslsslslsllslsl",
      checked: true,
    },
  ]);

  const nextId = useRef(4);

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

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
