import React from "react";
import styled from "styled-components";

export default function DiaryInfo({ total, good, bad, percent }) {
  return (
    <Info>
      <ul>
        <li>
          <dl>
            <dt>전체일기</dt>
            <dd>{total}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>기분이 좋았던 날 일기</dt>
            <dd>{good}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>기분이 나빴던 날 일기</dt>
            <dd>{bad}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>기분이 나빴던 날 비율</dt>
            <dd>{percent}%</dd>
          </dl>
        </li>
      </ul>
    </Info>
  );
}

const Info = styled.div`
  padding: 20px;
  color: #fff;
  ul {
    padding: 10px;
    background-color: #999;
    border-radius: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: center;
      &:before {
        content: "";
        display: inline-block;
        width: 3px;
        height: 3px;
        margin-right: 5px;
        background-color: #fff;
      }
      dl {
        display: flex;
        line-height: 1.5;
        dt {
          margin-right: 10px;
          &:after {
            content: ":";
          }
        }
      }
    }
  }
`;
