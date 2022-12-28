import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/question";

export default function Question() {
  const navigate = useNavigate();

  const [questionNo, setQuestionNo] = useState(0);
  //console.log(QuestionData[questionNo].title);

  //1~3 EI판변 {id:"EI", score:0~3}
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  // const defaultData = [
  //   { id: "EI", score: 3 },
  //   { id: "SN", score: 1 },
  //   { id: "TF", score: 2 },
  //   { id: "JP", score: 1 },
  // ];

  const total = QuestionData.length - 1;
  const onClick = (point, type) => {
    const newScore = totalScore.map((item, idx) => {
      return item.id === type ? { id: item.id, score: item.score + point } : item;
    });
    setTotalScore(newScore);
    setQuestionNo(questionNo + 1);
    if (questionNo < total) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce((acc, current) => acc + (current.score >= 2 ? current.id.charAt(0) : current.id.charAt(1)), "");
      //console.log(mbti);
      navigate(`/result?mbti=${mbti}`);
    }
  };
  return (
    <Container>
      <Header className="header" color="#ffcc33">
        Question!
      </Header>
      <Progress>
        <div className="inner">
          <div className="bar" style={{ width: `${(questionNo / 12) * 100}%` }}></div>
        </div>
      </Progress>

      <Title>{QuestionData[questionNo].title} </Title>

      <Buttons>
        <Button
          onClick={() => {
            onClick(1, QuestionData[questionNo].type);
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => {
            onClick(0, QuestionData[questionNo].type);
          }}
        >
          {" "}
          {QuestionData[questionNo].answerb}
        </Button>
      </Buttons>
    </Container>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.color || "#000"};
  //props에 칼라 없음 000쓰겠다..
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(24px, 3vw, 30px);
  font-weight: 500;
  margin-top: 80px;
  color: #fff;
  word-break: keep-all;
  padding: 0 20px;
  line-height: 1.5;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  color: #000;
  width: calc(50% - 10px);
  padding: 20px;
  border-radius: 15px;
  font-size: 21px;
  margin: 0 5px;
  word-break: keep-all;
  flex-grow: 0;
  font-family: "Cute";
  line-height: 1.2;
`;

const Progress = styled.div`
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 30px;
  .inner {
    width: 100%;
    height: 15px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    .bar {
      background-color: #f00;
      height: 100%;
      transition: all 0.25s ease;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;
