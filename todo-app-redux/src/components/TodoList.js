import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList }) {
  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => {
        return <TodoItem title={item.title} key={item.id} done={item.done} id={item.id}></TodoItem>;
      })}
    </ul>
  );
}

export default TodoList;
