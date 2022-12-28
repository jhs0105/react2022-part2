import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodoItem, modifyTodoItem }) {
  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => {
        return <TodoItem title={item.title} key={item.id} done={item.done} deleteTodoItem={deleteTodoItem} id={item.id} modifyTodoItem={modifyTodoItem}></TodoItem>;
      })}
    </ul>
  );
}

export default TodoList;
