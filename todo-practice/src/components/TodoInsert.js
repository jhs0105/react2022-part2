import React, { useRef } from "react";

function TodoInsert({ addTodoList }) {
  const inputTxt = useRef();
  function transTxt() {
    addTodoList(inputTxt.current.value);
  }
  return (
    <div className="insert">
      <input type="text" placeholder="할일을 써주세요" ref={inputTxt} />
      <button onClick={transTxt}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInsert;
