import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
