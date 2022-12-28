import React, { useEffect } from "react";
import styled from "styled-components";
const { Kakao } = window;

export default function KakaoSharedButton({ data }) {
  console.log(window);
  //console.log(data.name);
  const url = "https://cat-mbti-app.netlify.app/";
  const resultUrl = window.location.href;
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init("9f736608ad5140e2229853f3a32875f5");
    }
  }, []);
  function shareMessage() {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나만 없어 고양이",
        description: `당신에게 맞는 고양이는 ${data.name} 입니다.`,
        imageUrl: url + data.image,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },

      buttons: [
        {
          title: "나도 고양이 집사가 되고 싶다면",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }
  return <Button onClick={shareMessage}>카카오톡 공유하기</Button>;
}

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
  margin: 0 5px;
  word-break: keep-all;
  flex-grow: 0;
  margin: 5px 0 50px;
`;
