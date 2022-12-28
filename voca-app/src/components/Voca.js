import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export default function Voca({ kor, eng, done, id, day, onDelete, onUpdate }) {
  //react는 상태에 따라서 변화하는게 중요하다
  //상태관리에 따라 view가 바뀐다.
  const [isChecked, setIsChecked] = useState(done);
  const [isHint, setIsHint] = useState(false);

  return (
    <Item className={isChecked ? "done" : ""}>
      <div className="check">
        <input
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            onUpdate({ id, kor, eng, done: isChecked, day });
          }}
        />
      </div>
      <div className="word">
        <span className="kor">{kor}</span>
        {/* {isHint ? <span className="eng">{eng}</span> : <span></span>} */}
        {isHint && <span className="eng">{eng}</span>}
      </div>
      <div className="btns">
        <button
          className="del"
          onClick={() => {
            if (window.confirm("data를 삭제하시겠습니까?")) {
              onDelete(id);
            }
          }}
        >
          del
        </button>
        <button
          className="hint"
          onClick={() => {
            setIsHint(!isHint);
          }}
        >
          {isHint ? "hide" : "hint"}
        </button>
      </div>
    </Item>
  );
}

const Item = styled.li`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
  .check {
    margin-left: 20px;
  }
  .word {
    display: flex;
    span {
      margin-left: 20px;
      &.eng {
        font-weight: bold;
        color: #00f;
      }
    }
  }
  .btns {
    margin-left: auto;
    button {
      outline: none;
      border: none;
      padding: 15px 20px;
      border-radius: 5px;
      font-family: inherit;
      font-size: 16px;
      color: #fff;
      margin: 0 5px;
      text-transform: uppercase;
      &.del {
        background-color: #f00;
      }
      &.hint {
        background-color: #00f;
      }
    }
  }
  &.done {
    background-color: rgba(255, 255, 255, 0.5);
    .hint {
      pointer-events: none;
      opacity: 0.3;
    }
    .word {
      opacity: 0.5;
    }
  }
`;
