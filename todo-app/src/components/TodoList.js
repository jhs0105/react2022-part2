import React from "react";
import TodoItem from "./TodoItem";

//구조 분해 할당
function TodoList({ todos, modifyTodoList, deleteTodoList }) {
  //console.log(props);
  //props는 객체이다
  // console.log(todos);
  // console.log(title);
  const todoList = todos;

  return (
    <ul className="todo-list">
      {/* 리액트에서 반복되는 걸 뿌릴때는 반드시 key가 필요하다. 안써도 되긴 하지만 성능에 문제가 생긴다. */}

      {todoList.map((item, idx) => {
        return <TodoItem title={item.title} done={item.done} key={item.id} id={item.id} modifyTodoList={modifyTodoList} deleteTodoList={deleteTodoList}></TodoItem>;
      })}
      {/* <TodoItem title="샤워하기"></TodoItem>
      <TodoItem title="공부하기"></TodoItem>
      <TodoItem title="영화보기"></TodoItem> */}
    </ul>
  );
}

export default TodoList;
