import React from "react";
import "../style/TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="Template">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
