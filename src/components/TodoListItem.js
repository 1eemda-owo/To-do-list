import React from "react";
import { MdTurnedInNot, MdTurnedIn, MdClear } from "react-icons/md";
import cn from "classnames";
import "../style/TodoListItem.scss";

const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const { id, list, checked } = todo;

  return (
    <div className="listitem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdTurnedIn /> : <MdTurnedInNot />}
        <div className="text">{list}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdClear />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
