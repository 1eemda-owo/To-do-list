import React from "react";
import { MdNewLabel } from "react-icons/md";
import "../style/TodoInsert.scss";

const TodoInsert = () => {
  return (
    <form className="insert">
      <input placeholder="add your list" />
      <button type="submit">
        <MdNewLabel />
      </button>
    </form>
  );
};

export default TodoInsert;
