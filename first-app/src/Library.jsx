import React from "react";
import Book from "./Book";

const bookList = [
  { title: "어린왕자", page: 100 },
  { title: "라이온킹", page: 200 },
  { title: "인어공주", page: 300 },
  { title: "라푼젤", page: 100 },
  { title: "백설공주", page: 300 },
  // 보통 db에서 긁어온 내용들을 배열로 뿌린다.
];

//backend(db api)==> frontend(ajax통해 데이터 들고옴 data parsing ) ==> publisher
function Library() {
  return (
    <div>
      {/* <Book title="어린왕자" page="300"></Book>
      <Book title="해리포터" page="250"></Book>
      <Book title="반지의 제왕" page="500"></Book> */}
      {bookList.map((item, idx) => {
        return <Book title={item.title} page={item.page}></Book>;
      })}
    </div>
  );
}

export default Library;
