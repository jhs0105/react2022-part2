import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <h1>
        <Link to="/">말해뭐해 VOCA</Link>
      </h1>
      <nav>
        <ul>
          <li className="day btn">
            <Link to="/insert/day">add day</Link>
          </li>
          <li className="voca btn">
            <Link to="/insert/voca">add voca</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  nav {
    position: absolute;
    right: 10px;
    top: 0;
    ul {
      display: flex;
      gap: 10px;
      align-items: center;
      height: 60px;
      li {
        a {
          padding: 15px;
          color: #fff;
          text-transform: uppercase;
          border-radius: 5px;
        }
        &.voca {
          a {
            background-color: #f00;
          }
        }
        &.day {
          a {
            background-color: #00f;
          }
        }
      }
    }
  }
`;
