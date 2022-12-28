import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteItem, changeCheckbox }) {
  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => {
        return <TodoItem title={item.title} done={item.done} id={item.id} key={item.id} deleteItem={deleteItem} changeCheckbox={changeCheckbox}></TodoItem>;
      })}
    </ul>
  );
}

export default TodoList;
