import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodoItem, modifyTodoItem, changeItem }) {
  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => {
        return <TodoItem title={item.title} key={item._id} done={item.done} deleteTodoItem={deleteTodoItem} id={item._id} modifyTodoItem={modifyTodoItem} changeItem={changeItem}></TodoItem>;
      })}
    </ul>
  );
}

export default TodoList;
