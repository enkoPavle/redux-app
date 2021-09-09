import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.css";

const Header = () => {
  const created = useSelector((state) => state.todos);
  const completed = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    <div className="header">
      <div className="logo">
        {created.length
          ? `${completed.length} todos completed from ${created.length}`
          : "Create your first todo"}
      </div>
      <ul className="navigation">
        <li>
          <Link to="/">list</Link>
        </li>
        <li>
          <Link to="/new">new</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
