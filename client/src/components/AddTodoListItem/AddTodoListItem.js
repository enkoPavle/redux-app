import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../../redux/todoSlice";

import "./addTodoListItem.css";

const AddTodoListItem = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => setValue(e.target.value);

  const handleCreate = () => {
    if (value.trim().length) {
      dispatch(
        addTodoAsync({
          title: value,
        })
      );
      setValue("");
    } else {
        return
    }
  };

  return (
    <div className="add-list">
      <input
        className="add-list__input"
        type="text"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={value}
        onChange={handleChange}
      />
      <button className="add-list__button" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

export default AddTodoListItem;
