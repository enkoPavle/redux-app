import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync, toggleCompleteAsync, deleteTodoAsync } from "../../redux/todoSlice";
import TodoListItem from "../TodoListItem/TodoListItem";

import "./todoList.css";
const selectTodos = (state) => state.todos;

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleCheck = (id, completed) => {
    dispatch(
      toggleCompleteAsync({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(
      deleteTodoAsync({
        id: id,
      })
    );
  };

  const todoItems = todos.map((todo, key) => {
    return (
      <TodoListItem
        key={key}
        todo={todo}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    );
  });

  return <ul className="todo-list">{todoItems}</ul>;
};

export default TodoList;
