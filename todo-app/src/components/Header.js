import React from "react";

function Header({ title }) {
  // const fruits = ["kiwi", "apple"];
  // const [fruit01, fruit02] = fruits;
  // console.log(fruit01);
  // console.log(fruit02);
  // //배열분열할때는 앞에 배열 표시...

  // const jjang051 = { name: "장성호", age: 20, weight: 80 };
  // const { name, age, weight } = jjang051;
  // console.log(name);
  // console.log(age);
  // console.log(weight);
  // //객체분열할때..

  // const { title } = props;
  // console.log(title); //구조분해할당

  // const jjang = { name: "장성호", age: 20, weight: 80 };
  // const { name: myName, age: myAge, weight: myWeight } = jjang;
  // console.log(myName);
  // //구조분해하면서 변수명 바꾸고 싶을때

  return (
    <header className="header" id="header">
      {/* 예약어 */}
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
