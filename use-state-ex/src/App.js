import "./App.css";
import React, { useState } from "react";

function App() {
  //let num = 1;
  let num02 = 10;

  const [num, setNum] = useState(10); //useState hook은 상태를 변화시키는 훅이다.
  // console.log(num); //첫번째 변수는 초기의 상태값
  // console.log(setNum); //두번째 변수는 상태를 변화시킨다.

  function increase() {
    // num++;
    // console.log(num);
    //리액트에선 화면을 랜더링(바꿀) 할려면 반드시 상태를 바꿔야 한다.
    setNum(num + 1);
  }

  //let myName = "";
  const [name, setName] = useState("");
  function changeName(e) {
    //console.log(e.target.value);

    setName(e.target.value);
  }

  return (
    <div className="App">
      <h1>{num}</h1>
      <h1>{num02}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button>-</button>
      </div>
      <div>
        <input type="text" onChange={changeName} />
        <div>이름:{name}</div>
      </div>
    </div>
  );
}

export default App;

