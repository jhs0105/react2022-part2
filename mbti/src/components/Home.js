import React from "react";
import styled from "styled-components";
import Logoimg from "../assets/images/eyes-ga2bbfb8a8_640.png";
import { useNavigate } from "react-router-dom";

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
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 500;
  margin-top: 80px;
  color: #fff;
  word-break: keep-all;
`;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-top: 80px;
  img {
    max-height: 400px;
    width: 100%;
    object-fit: contain;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  color: #000;
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  font-size: 24px;
  font-family: "Cute";
  margin-top: 10px;
  margin-top: 50px;
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header className="header" color="#ffcc33">
        나만 없어 고양이!!
      </Header>
      <Title>내가 과연 고양이 집사가 될 관상인가?</Title>
      <LogoImage>
        <img src={Logoimg} alt="main" style={{ width: "100%" }} />
      </LogoImage>

      <Button
        onClick={() => {
          navigate("/question");
        }}
      >
        나에게 와줄 고양이는?
      </Button>
    </Container>
  );
}
