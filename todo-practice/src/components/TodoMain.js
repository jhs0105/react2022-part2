import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

function TodoMain() {
  const initList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];

  const [List, setList] = useState(initList);

  const [count, setCount] = useState(initList.length);

  const addTodoList = (_title) => {
    setCount(count + 1);
    const NewList = [...List, { id: count, done: false, title: _title }];
    setList(NewList);
    localStorage.setItem("todoList", JSON.stringify(NewList));
  };

  function deleteItem(id) {
    const newList = List.filter((item, idx) => {
      return item.id !== id;
    });
    setList(newList);
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  function changeCheckbox(id) {
    const newList = List.map((item, idx) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setList(newList);
  }

  return (
    <>
      <Header />
      <TodoInsert addTodoList={addTodoList} />
      <TodoList todoList={List} deleteItem={deleteItem} changeCheckbox={changeCheckbox} />
    </>
  );
}

export default TodoMain;
