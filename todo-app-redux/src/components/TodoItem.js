import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTodo, deleteTodo, modifyTodo } from "../store/todo";

function TodoItem({ done, title, id }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [localTitle, setLocalTitle] = useState(title);
  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            dispatch(modifyTodo(id));
          }}
        />
        {isEdit ? (
          <input
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
              onClick={() => {
                setIsEdit(false);
                dispatch(changeTodo(id, localTitle));
              }}
            >
              <i class="fa-regular fa-floppy-disk"></i>
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
              dispatch(deleteTodo(id));
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
