import React, { useState } from "react";

function TodoItem({ done, title, deleteTodoItem, id, modifyTodoItem, changeItem }) {
  const [isEdit, setIsEdit] = useState(false);
  const [localTitle, setLocalTitle] = useState(title);
  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            modifyTodoItem(id, done);
          }}
        />
        {isEdit ? (
          <input
            className="changeItem"
            type="text"
            value={localTitle}
            onChange={(e) => {
              setLocalTitle(e.target.value);
            }}
          />
        ) : (
          <p>{title}</p>
        )}

        <div className="btns">
          {isEdit ? (
            <button
              className="btn-edit"
              onClick={function () {
                setIsEdit(false);
                changeItem(id, localTitle);
              }}
            >
              <i className="fa-regular fa-floppy-disk"></i>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          )}

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
