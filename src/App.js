import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, settodos] = useState([
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
