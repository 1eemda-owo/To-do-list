import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onToggle }) => {
  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
