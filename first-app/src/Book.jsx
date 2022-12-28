import React from "react";

function Book(props) {
  return (
    <div>
      <h1>이 책의 제목은 {props.title}입니다.</h1>
      <h2>이 책은 총 {props.page}page 입니다.</h2>
      <hr />
    </div>
  );
}

export default Book;
