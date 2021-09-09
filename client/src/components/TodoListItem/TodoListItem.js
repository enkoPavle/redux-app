import React from "react";

import "./todoListItem.css";
const TodoListItem = ({ todo, handleCheck, handleDelete }) => {
  const { id, title, completed } = todo;
  return (
    <div className="todo-list__item">
      <div className="todo-list__item__text">{title}</div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCheck(id, completed)}
        className="todo-list__item__check-box"
      ></input>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoListItem;
