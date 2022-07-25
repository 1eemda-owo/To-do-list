import React, { useCallback, useState } from "react";
import { MdNewLabel } from "react-icons/md";
import "../style/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const addList = useCallback(
    (e) => {
      onInsert(value);
      setValue(" ");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="insert" onSubmit={addList}>
      <input placeholder="add your list" value={value} onChange={onChange} />
      <button type="submit">
        <MdNewLabel />
      </button>
    </form>
  );
};

export default TodoInsert;
