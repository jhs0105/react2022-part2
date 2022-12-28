import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <p>All copyrights reserved by JJ</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  p {
    padding: 10px 30px;
    background-color: #fff;
    border-radius: 100px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
