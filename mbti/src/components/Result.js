import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ResultData } from "../assets/data/result";
import KakaoSharedButton from "./KakaoSharedButton";

export default function Result() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [result, setResult] = useState({});
  useEffect(() => {
    const selectedCat = ResultData.find((item, idx) => {
      return item.best === mbti;
    });
    setResult(selectedCat);
  }, [mbti]);

  return (
    <Container>
      <Header className="header" color="#ffcc33">
        Result
      </Header>

      <Title> 당신을 선택한 고양이는?</Title>

      <LogoImage>
        <img src={result.image} alt="" />
      </LogoImage>
      <Desc>당신에게 맞는 고양이는 {result.name} 입니다.</Desc>
      <Desc className="desc">{result.desc}</Desc>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        처음으로 돌아가기
      </Button>
      <KakaoSharedButton data={result}></KakaoSharedButton>
    </Container>
  );
}

const Desc = styled.div`
  font-family: "Cute";
  font-size: 25px;
  line-height: 1.5;
  margin-top: 20px;
  padding: 0 20px;
  word-break: keep-all;
  color: #fff;
  &.desc {
    font-size: 18px;
  }
`;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(24px, 3vw, 30px);
  font-weight: 500;
  margin-top: 30px;
  color: #fff;
  word-break: keep-all;
  padding: 0 20px;
  line-height: 1.5;
`;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  img {
    width: 300px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 100%;
    border: 5px solid #333;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  color: #000;
  width: 80%;
  padding: 10px;
  border-radius: 15px;
  font-size: 20px;
  font-family: inherit;
  margin: 5px;
  word-break: keep-all;
  flex-grow: 0;
`;
