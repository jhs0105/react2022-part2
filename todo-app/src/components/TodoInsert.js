import React, { useRef } from "react";

function TodoInsert({ insertTodoItem }) {
  // function insertTodo() {
  //   console.log("할일을 추가했습니다");
  // }
  //props.insertTodoItem();
  //ref 는 react에서 dom(document object)에 접근할때 쓴다.
  const inputTodo = useRef();

  function transInsertTodoItem() {
    // console.log(inputTodo.current.value);
    if (inputTodo.current.value === "") {
      console.log("err");
    } else {
      insertTodoItem(inputTodo.current.value);
      inputTodo.current.value = "";
      inputTodo.current.focus();
    }
  }
  function keyTransInertTodoItem(e) {
    if (e.keyCode === 13) {
      transInsertTodoItem();
    }
  }
  return (
    <div className="todo-insert">
      <input type="text" ref={inputTodo} onKeyDown={keyTransInertTodoItem} />
      <button onClick={transInsertTodoItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export default TodoInsert;

//Hooks
