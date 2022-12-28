import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function InsertVoca() {
  const [kor, setKor] = useState("");
  const [eng, setEng] = useState("");
  const [days, setDays] = useState([]);
  const [selectDay, setSelectDay] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/days").then((response) => {
      setDays(response.data);
    });
  }, []);

  const insertVoca = () => {
    axios.post("http://localhost:5000/vocas", { day: selectDay, eng: eng, kor: kor, done: false }).then((response) => {
      //console.log(response)
    });
  };
  return (
    <Wrapper>
      <h2>학습할 단어를 추가해 주세요</h2>
      <div className="input-box">
        <input
          type="text"
          placeholder="한국어를 입력해 주세요"
          onChange={(e) => {
            setKor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="영어를 입력해 주세요"
          onChange={(e) => {
            setEng(e.target.value);
          }}
        />
      </div>
      <div className="select-box">
        <select
          name=""
          id=""
          onChange={(e) => {
            setSelectDay(Number(e.target.value));
          }}
        >
          {days.map((item, idx) => {
            return (
              <option value={item.day} key={item.id}>
                day-{item.day}
              </option>
            );
          })}
        </select>
      </div>

      <div className="btns">
        <button onClick={insertVoca}>단어 추가하기</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 0;
  h2 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 50px;
  }
  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
    input {
      width: clamp(300px, 100%, 640px);
    }
  }
  select {
    width: clamp(300px, 100%, 640px);
  }
  .current-day {
    display: flex;
    justify-content: center;
    p {
      color: #fff;
      border-bottom: 2px solid #fff;
      padding-bottom: 5px;
      font-size: 18px;
    }
  }
  .btns {
    margin-top: 50px;
    button {
      padding: 20px 30px;
      background-color: #f00;
      border-radius: 5px;
      color: #fff;
      font-size: 20px;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    gap: 10px;
  }
`;
