import React from "react";
import "../style/TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="Template">
      <div className="app-title">To do</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
