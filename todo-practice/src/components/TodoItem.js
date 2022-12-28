import React from "react";

function TodoItem({ title, done, deleteItem, id, changeCheckbox }) {
  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        <input
          type="checkbox"
          checked={done}
          onChange={function () {
            changeCheckbox(id);
          }}
        />
        <p>{title}</p>
        <div className="btns">
          <button
            onClick={function () {
              deleteItem(id);
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
