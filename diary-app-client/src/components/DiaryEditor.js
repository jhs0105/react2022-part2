import React, { useState, useRef } from "react";
import styled from "styled-components";

export default function DiaryEditor({ insertDiary }) {
  // const [author, setAuthor] = useState("");
  // const [contents, setContents] = useState("");
  // const [emotion, setEmotion] = useState(0);

  const [state, setState] = useState({ author: "", contents: "", emotion: 3 });

  //ref 세팅
  const authorRef = useRef();
  const contentsRef = useRef();

  const onClick = () => {
    if (state.author.length < 1) {
      authorRef.current.focus();
      return;
    }
    if (state.contents.length < 10) {
      contentsRef.current.focus();
      return;
    }
    insertDiary(state.author, state.contents, state.emotion);
    alert("일기가 저장되었습니다");
    setState({ author: "", contents: "", emotion: 3 });
  };

  const handleStateChange = (e) => {
    console.log(e.target.name);
    //setState({ ...state, author: "장동건", contents: "일기를 씁니다", emotion: 5 });
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <Title>오늘의 일기</Title>
      {/* <div>{state.author}</div>
      <div>{state.contents}</div>
      <div>{state.emotion}</div> */}
      <InputBox value={state.author} name="author" placeholder="Please write your name" onChange={handleStateChange} ref={authorRef}></InputBox>
      <ContentsBox name="contents" placeholder="Please write your story" value={state.contents} onChange={handleStateChange} ref={contentsRef}></ContentsBox>
      <SelectBox>
        <label htmlFor="">오늘 나의 기분 점수는?</label>
        <select name="emotion" id="emotion" value={state.emotion} onChange={handleStateChange}>
          <option value="1">최악</option>
          <option value="2">별로</option>
          <option value="3">보통</option>
          <option value="4">좋아요</option>
          <option value="5">최고예요</option>
        </select>
      </SelectBox>
      <Button onClick={onClick}>일기 저장하기</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  padding: 15px 0;
`;

const InputBox = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 20px;
  :focus {
    border-color: #f00;
  }
`;
const ContentsBox = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  padding: 20px;
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 20px;
  margin-top: 20px;
  :focus {
    border-color: #f00;
  }
`;

const SelectBox = styled.div`
  outline: none;
  padding: 20px 0;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  select {
    flex-grow: 1; //나머지 여백 다 가져감
    margin-left: 15px;
    font-family: inherit;
    padding: 15px 0;
    font-size: 18px;
    line-height: 1.5;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #ccc;
  font-family: inherit;
  border-radius: 3px;
  font-size: 18px;
  margin-top: 20px;
  padding: 20px;
`;
