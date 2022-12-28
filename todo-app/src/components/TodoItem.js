import React from "react";

function TodoItem({ done, title, modifyTodoList, deleteTodoList, id }) {
  function changeDone() {
    //console.log("체인지");
    //부모의 todos의 done을 바꿔야 한다...
    modifyTodoList(id);
  }
  function deleteItem() {
    deleteTodoList(id);
  }
  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        <input type="checkbox" defaultChecked={done} onChange={changeDone} />
        <p>{title}</p>
        <div className="btns">
          <button className="btn-edit">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="btn-del" onClick={deleteItem}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
