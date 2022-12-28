import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";
import TodoInsert from "./TodoInsert";

function TodoMain() {
  //리액트에서 제일 힘든거: 데이터 전달 그래서 나온게 redux이다
  //리액트는 변수를 바꾸는 것으로 화면을 랜더링 하지 않는다...
  //상태를 바꿔야 랜더링 된다!! 그러기 위해 useState써야 한다.

  //const initTodoList = JSON.parse(localStorage.getItem("todoList"));
  const initTodoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];

  //const[상태를 표시하는 변수, 상태를 변경하는 함수]=useState();
  const [todoList, setTodoList] = useState(initTodoList);
  //console.log(...todoList); //배열을 흩뿌리는 spread 연산자

  const [count, setCount] = useState(TodoList.length);

  const insertTodoItem = (_title) => {
    setTodoList([...todoList, { id: count, done: false, title: _title }]);
    setCount(count + 1);
    //localStorage에 값 넣을 때는 setItem을 사용 (key, value )로 들어간다.
    localStorage.setItem("todoList", JSON.stringify([...todoList, { id: count, done: false, title: _title }]));
  };

  // const testObj = { name: "장성호", age: 20, weight: 80 };
  // const newObj = { ...testObj };
  // newObj.age = 40;
  // console.log(testObj);
  // console.log(newObj);

  function modifyTodoList(id) {
    //todoList가 모든 값을 가지고 있는 배열...
    //setTodoList로 todoList를 바꾼다...
    //console.log(todoList);
    const newTodoList = todoList.map((item, idx) => {
      if (item.id === id) {
        item.done = !item.done; //true,false
      }
      return item;
      //map은 배열의 반복문(iteration)
      // return item.id === id ? { ...item, done: true } : item;
    });
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  }

  // const fruits = ["kiwi", "apple", "mango"];
  // const selectedFruits = fruits.filter((item, idx) => {
  //   return item !== "apple"; //apple이 아닌것만 리턴
  // });
  // console.log(selectedFruits);

  const deleteTodoList = (id) => {
    const newTodoList = todoList.filter((item, idx) => {
      return item.id !== id; //id가 아닌것만 리턴
    });
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  return (
    <>
      <Header title="TODO-APP" />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todos={todoList} modifyTodoList={modifyTodoList} deleteTodoList={deleteTodoList} />
      <Footer />
    </>
  );
}

export default TodoMain;
