import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoInsert, { test, num } from "./TodoInsert";
import TodoList from "./TodoList";

function TodoMain(props) {
  test();
  console.log(num);
  //props drilling
  //count값이 고유한 값이 되어야 한다...
  //제일 큰값을 찾아서 그걸 초기 값으로 가지면 겹칠일이 없다...
  //console.log(Math.max(1, 3, 4, 62, 99, 2));

  const initList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];

  // const temp = initList.map((item, idx) => {
  //   return item.id;
  // });
  // console.log(...temp);
  // console.log(Math.max(...temp));

  const max = initList.length > 0 ? Math.max(...initList.map((item, idx) => item.id)) : 0;

  const [count, setCount] = useState(max + 1);

  const [todoList, setTodoList] = useState(initList);
  const insertTodoItem = function (todoTxt) {
    //setTodoList([...todoList, { id: count, done: false, title: todoTxt }]);
    const newTodoList = [...todoList, { id: count, done: false, title: todoTxt }];
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList)); //localStorage에 저장
    setCount(count + 1);
  };

  const deleteTodoItem = (id) => {
    const newTodoList = todoList.filter((item, idx) => {
      return item.id !== id; //id와 같지 않은 것만 남기겠다 (map, filter는 return을 꼭 써야 한다)
    });
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  const modifyTodoItem = (id) => {
    const newTodoList = todoList.map((item, idx) => {
      if (item.id === id) {
        item.done = !item.done; //item.done이 true false왔다갔다(부정한것을 할당한다)
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <>
      <Header />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem} modifyTodoItem={modifyTodoItem} />
      <Footer />
    </>
  );
}

export default TodoMain;
