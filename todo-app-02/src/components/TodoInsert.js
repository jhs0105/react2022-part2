import React, { useRef } from "react";

function TodoInsert({ insertTodoItem }) {
  const todoInput = useRef();

  return (
    <div className="todo-insert">
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        ref={todoInput}
        onKeyDown={function (e) {
          if (e.keyCode === 13) {
            insertTodoItem(todoInput.current.value);
            todoInput.current.value = "";
          }
        }}
      />
      <button
        onClick={function () {
          insertTodoItem(todoInput.current.value);
          todoInput.current.value = "";
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export function test() {
  console.log("test");
}
export const num = 10;
export default TodoInsert;
