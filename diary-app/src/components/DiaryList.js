import React from "react";
import styled from "styled-components";
import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaryList, deleteDiary, modifyDiary }) {
  console.log(diaryList);
  const total = diaryList.length;
  return (
    <Wrapper>
      <Title>일기 리스트</Title>
      <p className="total">{total}개의 일기가 있습니다</p>
      <List>
        {diaryList.map((item, idx) => {
          // return <DiaryItem author={item.author} contents={item.contents} date={item.date} emotion={item.emotion} key={item.id}></DiaryItem>;
          return <DiaryItem {...item} key={item.id} deleteDiary={deleteDiary} modifyDiary={modifyDiary}></DiaryItem>;
        })}
      </List>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  padding: 10px 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
