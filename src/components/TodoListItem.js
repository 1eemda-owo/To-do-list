import React from "react";
import { MdTurnedInNot, MdTurnedIn, MdClear } from "react-icons/md";
import cn from "classnames";
import "../style/TodoListItem.scss";

const TodoListItem = ({ todo }) => {
  const { list, checked } = todo;

  return (
    <div className="listitem">
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdTurnedIn /> : <MdTurnedInNot />}
        <div className="text">{list}</div>
      </div>
      <div className="remove">
        <MdClear />
      </div>
    </div>
  );
};

export default TodoListItem;
