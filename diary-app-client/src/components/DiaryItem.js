import React, { useState, useRef } from "react";
import styled from "styled-components";

export default function DiaryItem({ author, contents, date, emotion, deleteDiary, _id: id, modifyDiary }) {
  const newTxt = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(contents);

  return (
    <Item>
      <Info>
        <div className="author-box">
          <dl>
            <dt>작성자</dt>
            <dd>{author}</dd>
          </dl>
          <dl>
            <dt>기분점수</dt>
            <dd>{emotion}</dd>
          </dl>
        </div>
        <div className="date">{new Date(date).toLocaleString()}</div>
      </Info>
      {isEdit ? (
        <ContentsBox
          name="contents"
          value={localContents}
          onChange={(e) => {
            setLocalContents(e.target.value);
          }}
        ></ContentsBox>
      ) : (
        <Contents>{contents}</Contents>
      )}
      {isEdit ? (
        <Buttons>
          <Button
            onClick={() => {
              if (window.confirm("수정하시겠습니까?")) {
                modifyDiary(id, localContents);
              }
              setIsEdit(false);
            }}
          >
            <i className="fa-solid fa-check"></i>
          </Button>
          <Button
            onClick={() => {
              //수정하다가 취소했을 때..
              setIsEdit(false);
              setLocalContents(contents);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </Button>
        </Buttons>
      ) : (
        <Buttons>
          <Button
            onClick={() => {
              if (window.confirm(`${id}번째 일기를 정말로 삭제 하시겠습니까?`)) {
                deleteDiary(id);
              }
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
          <Button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
        </Buttons>
      )}
    </Item>
  );
}

const Item = styled.li`
  background-color: #ccc;
  padding: 15px;
  border-radius: 5px;
  list-style: none;
  margin-top: 15px;
`;

const Info = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #999;
  .author-box {
    display: flex;
  }
  dl {
    display: flex;
    :before {
      content: "/";
      display: inline-block;
      padding: 0 10px;
    }
    :nth-child(1):before {
      display: none;
    }
    dd {
      margin-left: 0;
      :before {
        content: ":";
        display: inline-block;
        padding: 0 10px;
      }
    }
  }
  .date {
    text-align: left;
  }
`;

const Contents = styled.div`
  margin-top: 15px;
  text-align: left;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: end;
  margin-top: 0;
`;
const Button = styled.div`
  background-color: #111;
  color: #fff;
  margin-left: 5px;
  border-radius: 5px;
  font-size: 14px;
  width: 30px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(1) {
    margin-left: 0;
  }
`;
const ContentsBox = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  padding: 10px;
  width: 100%;
  min-height: 120px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 20px;
  resize: none;
  :focus {
    border-color: #f00;
  }
`;
