import React from "react";

function TodoItem({ done, title, deleteTodoItem, id, modifyTodoItem }) {
  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            modifyTodoItem(id);
          }}
        />
        <p>{title}</p>
        <div className="btns">
          <button className="btn-edit">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            className="btn-del"
            onClick={function () {
              deleteTodoItem(id);
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
